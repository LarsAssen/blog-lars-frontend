import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from '../theme/ThemeToggle';
import { NavLink, NavLinkContainer } from '@/styles/Nav/NavbarStyles';

const NavLinks:React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <NavLinkContainer>
      <Link href="/"><NavLink active={isActive('/')}>Home</NavLink></Link>
      <Link href="/posts"><NavLink active={isActive('/posts')}>Posts</NavLink></Link>
      <Link href="/about"><NavLink active={isActive('/about')}>About</NavLink></Link>
      {/* <Link href="/contact"><NavLink active={isActive('/')}>Contact</NavLink></Link>
      <Link href="/login"><NavLink active={isActive('/')}>Login</NavLink></Link> */}
      <ThemeToggle />
    </NavLinkContainer>
  );
};

export default NavLinks;
