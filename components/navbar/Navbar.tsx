import Link from 'next/link';
import { useEffect, useState } from 'react';
import { StyledNavbar } from '@/styles/Nav/NavbarStyles';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;

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