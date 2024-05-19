"use client"

import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import { Fragment, useState } from 'react'

export default function Layout({ children }) {
    const [ isNavOpen, setIsNavOpen ] = useState(false)
  return (
    <Fragment>
        <NavBar navState={[ isNavOpen, setIsNavOpen ]} />
        <NavMenu navState={[ isNavOpen, setIsNavOpen ]} />
        { children }
    </Fragment>
  )
}
