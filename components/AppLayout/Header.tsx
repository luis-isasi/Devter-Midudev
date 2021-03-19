const Header = () => {
  return (
    <>
      <header>
        <span>INICIO</span>
      </header>
      <style jsx>{`
        header {
          padding: 0px 12px;
          font-weight: 600;
          
          display: flex;
          justify-content: flex-start;
          align-items: center;}
        
        }

        header > :global(span) {
          font-size: 1.5rem;
        }
      `}</style>
    </>
  )
}

export default Header
