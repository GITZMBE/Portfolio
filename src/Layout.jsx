import React from 'react'
import { Footer, Header } from './components';

export const Layout = ({ children }) => {
  return (
    <div className={`flex w-fit h-full`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;