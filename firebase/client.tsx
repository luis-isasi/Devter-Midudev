import firebase from 'firebase'
import { User, Tweet } from 'types'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCS1Q_QjYqS5BccTCllH8jdN8aD0Y-BmJ8',
  authDomain: 'devter-4f67d.firebaseapp.com',
  projectId: 'devter-4f67d',
  storageBucket: 'devter-4f67d.appspot.com',
  messagingSenderId: '367304741252',
  appId: '1:367304741252:web:9cfcc1bfc9261adedacdd1',
  measurementId: 'G-Y2HTHXXRQK',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user): User => {
  const { displayName, email, photoURL, uid } = user

  return {
    userName: displayName,
    email,
    avatar: photoURL,
    userId: uid,
  }
}

export const onAuthStatedChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    //there is not a user auth
    if (user === null) {
      onChange(user)
      return
    }

    const dataUser = mapUserFromFirebaseAuthToUser(user)
    onChange(dataUser)
  })
}

export const loginWidthGithub = () => {
  const GithubProvider = new firebase.auth.GithubAuthProvider()
  GithubProvider.addScope('repo')

  return firebase.auth().signInWithPopup(GithubProvider)
}

export const loginWithFb = () => {
  const FbProvider = new firebase.auth.FacebookAuthProvider()

  return firebase.auth().signInWithPopup(FbProvider)
}

export const addTweet = ({ avatar, content, userId, userName, img }) => {
  return db.collection('tweets').add({
    avatar,
    content,
    userId,
    userName,
    img,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const mapTweetFromFirebaseToTweetObject = (doc) => {
  //lo se que se podria pensar es que en doc ya tendriamos avatar, userName y asi pero no
  //tenemos que transformar esa data a un objeto plano de la siguiente manera
  const data = doc.data()

  //sacamos el id de doc, ¿por qué? primero no viene de data porque el id que genera firestore no esta dentro de la data
  // lo sacamos de doc porque el id esta fuera de la data que almacena firestore
  const id = doc.id

  const {
    avatar,
    content,
    createdAt,
    img,
    likesCount,
    sharedCount,
    userId,
    userName,
  } = data

  const dataTweet: Tweet = {
    id,
    avatar,
    content,
    img,
    likesCount,
    sharedCount,
    userId,
    userName,
    createdAt: +createdAt.toDate(),
  }

  //esto nos imprime una fecha en el siguiente formato 18/03/2021
  // const date = new Date(createdAt.seconds * 1000)
  // const normalizedCreatedAt = new Intl.DateTimeFormat('es-ES').format(
  //   date
  // )

  return dataTweet
}

export const listenTweetsFromFirebase = (callback) => {
  return (
    db
      .collection('tweets')
      .orderBy('createdAt', 'desc')
      // .limit(20)
      //onSnapshot nos permite escuchar un cambio en la base de datos y ejecutar una funcion
      .onSnapshot(({ docs }) => {
        const newTweets = docs.map(mapTweetFromFirebaseToTweetObject)
        callback(newTweets)
      })
  )
}

export const fetchTweets = () => {
  //podemos ordenar la data con orderBy(), este recibe 2 paranetros o quizas mas, el primero es el campo por el que ordenaremos
  //el segundo parametro es la forma de como lo queremos obtener, hay 2 => 'desc | asc'
  return db
    .collection('tweets')
    .orderBy('createdAt', 'desc')
    .get()
    .then((snapshot) => {
      return snapshot.docs.map(mapTweetFromFirebaseToTweetObject)
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)

  // ref.put(file) retorna la tarea que se esta haciendo, con esto podemos manejar errores, controlar eventos, etc.
  const task = ref.put(file)

  return task
}
