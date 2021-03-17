import styles, { globalStyle } from './styles'

const index: React.FC = ({ children }) => {
  return (
    <>
      <div>
        <header>Hoome</header>
        <section>{children}</section>
        <nav>NAV</nav>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyle}
      </style>
    </>
  )
}

export default index
