import Link from 'next/Link'

import HomeIcon from '@components/Icons/Home'
import SearchIcon from '@components/Icons/Search'
import CreateIcon from '@components/Icons/Create'

import { colors } from '@styles/theme'

const Nav: React.FC = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>
            <HomeIcon width={32} height={32} stroke={colors.primary} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <SearchIcon width={32} height={32} stroke={colors.primary} />
          </a>
        </Link>
        <Link href="/compose/tweet">
          <a>
            <CreateIcon width={32} height={32} stroke={colors.primary} />
          </a>
        </Link>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Nav
