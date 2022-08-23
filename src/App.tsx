import React from 'react'
import { Layout } from './layout'
import { Home } from './pages/Home'
// import { Login } from './pages/Login'

const App: React.FC = () => {
  return (
    <div>
      {/* <Login /> */}
      <Layout>
        <Home />
      </Layout>
    </div>
  )
}

export default App
