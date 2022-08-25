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
            <>
              <Layout>
                <Home />
              </Layout>
            </>
          }
        />
        <Route
          path='/account'
          element={
            <>
              <Layout>
                <Account />
              </Layout>
            </>
          }
        />
        <Route
          path='/detail'
          element={
            <>
              <ContentDetail />
            </>
          }
        />
        <Route
          path='/login'
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path='/signup'
          element={
            <>
              <Register />
            </>
          }
        />
      </Routes>
    </AppProvider>
  )
}

export default App
