import React from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { Xead } from './Xead'

export const Header = () => {
  return (
    <div>
      <Xead/>
      <Search/>
      <Navbar/>
    </div>
  )
}
