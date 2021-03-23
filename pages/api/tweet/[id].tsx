import { NextApiRequest, NextApiResponse } from 'next'

import { firestore } from 'firebase/admin'

const getTweetById = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req
  const { id } = query

  firestore
    .collection('tweets')
    .doc(id)
    .get()
    .then((doc) => {
      //como antes lo explicacamos, lo que nos devuelve firestore es un doc
      //en el cual tenemos la function data para traernos toda la data de ese doc
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      res.json({
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      })
    })
    .catch(() => {
      res.status(404).end()
    })
}

export default getTweetById
