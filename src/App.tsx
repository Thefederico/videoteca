import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { AppProvider } from './context/App.context'
import { Register } from './pages/Register'
import { Account } from './pages/Account'
import { ContentDetail } from './components/ContentDetails'
import { ProtectedRoute } from './components/ProtectedRoute/index.route'

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/account'
          element={
            <ProtectedRoute>
              <Layout>
                <Account />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path='/detail'
          element={
            <ProtectedRoute>
              <ContentDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <ProtectedRoute>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <ProtectedRoute>
              <Register />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AppProvider>
  )
}

export default App
