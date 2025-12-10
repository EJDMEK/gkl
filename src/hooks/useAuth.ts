import { useState, useEffect } from 'react'
import { verifyMember, isMemberEmail } from '../data/members'

export interface AuthUser {
  email: string
  name?: string
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    // Zkontrolovat localStorage pro přihlášení
    const authStatus = localStorage.getItem('isMemberLoggedIn')
    const userEmail = localStorage.getItem('memberEmail')
    const userName = localStorage.getItem('memberName')
    
    if (authStatus === 'true' && userEmail) {
      setIsAuthenticated(true)
      setUser({
        email: userEmail,
        name: userName || undefined
      })
    }
  }, [])

  const login = (email: string, password: string): { success: boolean; error?: string } => {
    const member = verifyMember(email, password)
    if (member) {
      localStorage.setItem('isMemberLoggedIn', 'true')
      localStorage.setItem('memberEmail', member.email)
      if (member.name) {
        localStorage.setItem('memberName', member.name)
      }
      setIsAuthenticated(true)
      setUser({
        email: member.email,
        name: member.name
      })
      return { success: true }
    }
    return { success: false, error: 'Neplatné přihlašovací údaje' }
  }

  const logout = () => {
    localStorage.removeItem('isMemberLoggedIn')
    localStorage.removeItem('memberEmail')
    localStorage.removeItem('memberName')
    setIsAuthenticated(false)
    setUser(null)
  }

  const checkEmailExists = (email: string): boolean => {
    return isMemberEmail(email)
  }

  return { isAuthenticated, user, login, logout, checkEmailExists }
}

