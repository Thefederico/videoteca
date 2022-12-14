import React from 'react'
import { Header } from '../components/Header'

export interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export { Layout }
