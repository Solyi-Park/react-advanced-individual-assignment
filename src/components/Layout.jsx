import React from 'react';
import TopNavBar from './TopNavBar';

export default function Layout({ children }) {
  return (
    <>
      <TopNavBar />
      {children}
    </>
  );
}
