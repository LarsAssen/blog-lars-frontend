import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../UI/Button';
import { MenuButton, MobileMenuContainer } from '@/styles/Nav/NavbarStyles';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>Menu</MenuButton>
      {isOpen && (
        <MobileMenuContainer>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </MobileMenuContainer>
      )}
    </div>
  );
};

export default MobileMenu;
