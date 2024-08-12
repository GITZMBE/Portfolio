import React from 'react'
import { Footer, Header } from './components';
import { useRecoilValue } from 'recoil';
import { showRelativeNavbarState } from './recoil';
import ResponsiveNav from './components/ResponsiveNavbar';

export const Layout = ({ children }) => {
  const showRelativeNavbar = useRecoilValue(showRelativeNavbarState);

  return (
    <div className={`w-full h-full max-h-full ${ showRelativeNavbar ? 'overflow-hidden' : 'overflow-auto' }`}>
      <Header />
      { showRelativeNavbar && (
        <ResponsiveNav />
      )}
      {children}
      <Footer />
    </div>
  )
}

export default Layout;