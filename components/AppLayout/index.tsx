import Nav from './Nav'
import Header from './Header'
import styles, { globalStyle } from './styles'

//dejando un commentario en AppLayout
const index: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <section>{children}</section>
        <Nav />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyle}
      </style>
    </>
  )
}

export default index
