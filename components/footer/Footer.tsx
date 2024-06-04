import { CopyRight, FooterContainer, FooterContent, FooterLinks, SocialMedia } from '@/styles/Footer/FooterStyles';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../lib/logo.png'
import logoLight from '../../lib/logo-light.png';
import { Instagram, Youtube, Facebook  } from 'styled-icons/boxicons-logos';
import { Substack } from '@styled-icons/simple-icons/Substack';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';


const Footer = () => {
  const context = useContext(ThemeContext);
  const theme = context?.theme;


  const logosrc = theme == 'dark' ? logo.src : logoLight.src;

return (
  <FooterContainer>
    <FooterContent>
      <Image src={logosrc} alt="Company Logo" width={100} height={100} />
      <FooterLinks>
        <Link href="/about">About</Link>
        <Link href="/posts">Blog</Link>
        <Link href="/">Home</Link>
      </FooterLinks>
      <SocialMedia>
        <Link href="https://www.facebook.com/lars.assen.9/" target="_blank" rel="noopener noreferrer">
          <Facebook size={30} />
        </Link>
        <Link href="https://substack.com/@larsassen" target="_blank" rel="noopener noreferrer">
          <Substack size={20} />
        </Link>
        <Link href="https://www.instagram.com/larsassen/" target="_blank" rel="noopener noreferrer">
          <Instagram size={30} />
        </Link>
        <Link href="https://www.youtube.com/@juniorassen" target="_blank" rel="noopener noreferrer">
        <Youtube size={30} />
        </Link>
      </SocialMedia>
      <CopyRight>Made by Lars Assen</CopyRight>
    </FooterContent>
  </FooterContainer>
);
}
export default Footer;
