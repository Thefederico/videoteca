import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../../context/App.context'
import { Props } from '../../layout'

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user } = useContext(AppContext)

  if (!user.id) {
    return <Navigate to='/login' />
  }

  return <>{children}</>
}

export { ProtectedRoute }
