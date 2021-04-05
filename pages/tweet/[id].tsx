import Tweet from '@components/Tweet'
import CommentTweet from '@components/CommentTweet'
import { useRouter } from 'next/router'

import { firestore } from 'firebase/admin'
import { fetchTweets } from 'firebase/client'

const TweetPage = (props) => {
  const router = useRouter()

  if (router.isFallback) {
    console.log('fallback is true')

    return <p>Cargando...</p>
  }

  const renderCommentsTweet = () => {
    return props?.comments.map(
      ({ avatar, content, createdAt, userId, userName }) => (
        <CommentTweet
          key={`${createdAt}${userId}`}
          avatar={avatar}
          content={content}
          createdAt={createdAt}
          userId={userId}
          userName={userName}
        />
      )
    )
  }

  return (
    <>
      <Tweet {...props} />
      <div>{renderCommentsTweet()}</div>
      <style jsx>{`
        div {
          margin-left: 38px;
        }
      `}</style>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const tweets = await fetchTweets()

//   const paths = tweets.map((tweet) => {
//     return { params: { id: tweet.id } }
//   })

//   return {
//     paths,
//     fallback: true,

//     // fallback: true,
//     // el proceso que hay por detras de fallback: true es muy interesante, basicamente cambiar este valor a true
//     // hace que genere las paginas estaticas en el servidor siempre y cuando no haga match con la data que hay en "getStaticPaths"
//     // cuando no la encuentra, lo que hace es lo siguiete:
//     /*
//     1 => Intenta hacer pre rendering del componente, en este caso TweetPage, con la data que tiene en ese momento,
//     2 => Ya en el cliente este ejecuta el "getStaticProps" y obtener la data de esa pagina
//     3 => finalmente guarda esa data y crea una nueva page
//     ¿por qué lo hace asi? pensandolo bien para que sea mas rapido, no ejecuta "getStaticProps" en el servidor, y asi enviar ya algo
//     para que el clinte ande viendo, ya cuando el cliente haga un reload de la page, esta no hara lo mismo, si no el servidor ya enviará
//     la page pre renderizada con la data guardada, esto solo se puede ver en modo produccion, en modo "dev" no lo guarda

//     */
//   }
// }

//en getStaticProps no tenemos req, res, porque se genera en build time
//un error que podemos cometer es que cuando hagamos build de nuestra app
//intentemos acceder a esta api local y est api local, no existe en build time
// export const getStaticProps = async (context) => {
//   const {
//     params: { id },
//   } = context

//   return firestore
//     .collection('tweets')
//     .doc(id)
//     .get()
//     .then((doc) => {
//       //como antes lo explicacamos, lo que nos devuelve firestore es un doc
//       //en el cual tenemos la function data para traernos toda la data de ese doc
//       const data = doc.data()
//       const id = doc.id
//       const { createdAt } = data

//       return {
//         props: {
//           ...data,
//           id,
//           createdAt: +createdAt.toDate(),
//         },
//       }
//     })
// }

//en getInitialProps recibimos context
/*
TweetPage.getInitialProps = async (context) => {
  const {
    query: { id },
  } = context

  return fetch(`http://localhost:3000/api/tweet/${id}`).then((response) => {
    if (response.ok) return response.json()
  })
}
*/

//en getServerSideProps no recibimos context, recibimos params, req, res, query

export const getServerSideProps = async (params) => {
  const {
    params: { id },
  } = params

  return firestore
    .collection('tweets')
    .doc(id)
    .then((doc) => {
      //como antes lo explicacamos, lo que nos devuelve firestore es un doc
      //en el cual tenemos la function data para traernos toda la data de ese doc
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      return {
        props: {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        },
      }
    })
}

export default TweetPage
