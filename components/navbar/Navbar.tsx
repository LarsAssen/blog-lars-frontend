import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { StyledNavbar } from '@/styles/Nav/NavbarStyles';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import styled, { ThemeContext } from 'styled-components';
import logo from '../../lib/logo.png';
import logoLight from '../../lib/logo-light.png';


const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const context = useContext(ThemeContext);
    const theme = context?.theme;


    const logosrc = theme == 'dark' ? logo.src : logoLight.src;
    
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

    const LogoImage = styled.img`
    width: 80px; // Adjust size as needed
    height: auto;
    `;


    return (
        <StyledNavbar scrolled={scrolled}>
            <div className="navbar-logo">
                <Link href="/">
                    <LogoImage src={logosrc} alt="Logo" />
                </Link>
            </div>
            <NavLinks/>
            <MobileMenu />
        </StyledNavbar>
       
    );
};

export default Navbar;