'use client'

import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  const currentPath = usePathname();
  return (
    
    <nav className='flex text-black space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href='/'><AiFillBug /></Link>
        <ul className="flex space-x-6">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-800  transition-colors": true
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
    </nav>
  )
}

export default NavBar 