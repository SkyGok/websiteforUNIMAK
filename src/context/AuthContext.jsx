import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Use import.meta.env for Vite (not process.env)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(() => {
    return localStorage.getItem('admin_token')
  })

  useEffect(() => {
    // Verify token on mount
    if (token) {
      verifyToken()
    } else {
      setIsLoading(false)
    }
  }, [])

  const verifyToken = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        // Don't wait too long - fail fast if backend unavailable
        signal: AbortSignal.timeout(3000)
      })
      
      if (response.ok) {
        const data = await response.json()
        setIsAuthenticated(data.valid)
      } else {
        setIsAuthenticated(false)
        localStorage.removeItem('admin_token')
        setToken(null)
      }
    } catch (error) {
      // Backend not available - that's OK for public pages
      // Only log if it's not a network error (which is expected when backend is separate)
      if (error.name !== 'AbortError' && error.name !== 'TypeError') {
        console.warn('Backend verification failed:', error.message)
      }
      setIsAuthenticated(false)
      // Don't remove token - might be valid, just backend offline
      localStorage.removeItem('admin_token')
      setToken(null)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (password) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
      })

      const data = await response.json()

      if (response.ok) {
        setToken(data.token)
        localStorage.setItem('admin_token', data.token)
        setIsAuthenticated(true)
        return { success: true }
      } else {
        return { success: false, error: data.error || 'Login failed' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Network error. Please try again.' }
    }
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem('admin_token')
    setIsAuthenticated(false)
  }

  const getAuthHeaders = () => {
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      isLoading,
      login,
      logout,
      token,
      getAuthHeaders,
      API_URL
    }}>
      {children}
    </AuthContext.Provider>
  )
}

