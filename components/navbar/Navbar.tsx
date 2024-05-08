import Link from 'next/link';
import { useEffect, useState } from 'react';
import { StyledNavbar } from '@/styles/Nav/NavbarStyles';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const testScroll = () => {
          console.log('Scrolling detected:', window.scrollY);
        };
    
        window.addEventListener('scroll', testScroll);
    
        return () => {
          window.removeEventListener('scroll', testScroll);
        };
      }, []);

    useEffect(() => {
        const handleScroll = () => {
            console.log("Scrolling...");
            const isScrolled = window.scrollY > 50;
            console.log(`Scroll Y: ${window.scrollY}, Scrolled: ${isScrolled}`);
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <StyledNavbar scrolled={scrolled}>
            <div className="navbar-logo">
                <Link href="/">
                    <div><h1>Logo</h1></div>
                </Link>
            </div>
            <NavLinks/>
            <MobileMenu />
        </StyledNavbar>
       
    );
};

export default Navbar;