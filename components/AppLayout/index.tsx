import Nav from './components/Nav'
import Header from './components/Header'
import styles, { globalStyle } from './styles'

import { useUser } from 'hooks/useUser'

const AppLayout: React.FC = ({ children }) => {
  const { user } = useUser()

  if (!user)
    return (
      <>
        <div>
          <section>{children}</section>
        </div>
        <style jsx>{styles}</style>
        <style jsx global>
          {globalStyle}
        </style>
      </>
    )
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

export default AppLayout
