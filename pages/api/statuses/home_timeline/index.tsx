import { IncomingMessage, ServerResponse } from 'http'

const timeline = [
  {
    id: '0',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    userName: 'wongmjane',
    content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '1',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    userName: 'midudev',
    content: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '2',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    content: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '3',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    userName: 'wongmjane',
    content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '4',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    userName: 'midudev',
    content: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '5',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    content: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '6',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    userName: 'wongmjane',
    content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '7',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    userName: 'midudev',
    content: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '8',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    content: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
  {
    id: '9',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    userName: 'wongmjane',
    content: `Twitter Web App now runs ES6+ for modern browsers*, reducing the polyfill bundle size by 83%
  
  (gzipped size went from 16.6 KB down to 2.7 KB!!)
  
  * Chrome 79+, Safari 14+, Firefox 68+`,
  },
  {
    id: '10',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    userName: 'midudev',
    content: 'Wow, devter está funcionando y vivo 🦉',
    name: 'Miguel Ángel Durán',
  },
  {
    id: '11',
    userName: 'd4nidev',
    name: 'Daniel de la Cruz',
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    content: `Abro paraguas Paraguas
  
  Clean Code es un libro obsoleto que en 2020, con los paradigmas de desarrollo de software que manejamos, puede hacerte más daño que beneficio.`,
  },
]

const allData = (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(timeline))
}

export default allData
