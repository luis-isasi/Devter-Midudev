import { useState, useEffect, createContext, useContext } from 'react'

import { onAuthStatedChanged } from '../firebase/client'
import { User } from 'types'

interface TypeContextUser {
  user: User
}

console.log(process.env.VARIABLE)

const ContextUser = createContext<TypeContextUser | undefined>(undefined)

export const ContextUserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(undefined)

  useEffect(() => {
    onAuthStatedChanged(setUser)
  }, [])

  return (
    <ContextUser.Provider value={{ user }}>{children}</ContextUser.Provider>
  )
}

export const useUser = () => {
  const user = useContext(ContextUser)

  if (!user) {
    throw new Error('Must be within ContextUserProvider')
  }

  return user
}
