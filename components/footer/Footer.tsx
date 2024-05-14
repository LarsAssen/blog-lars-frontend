import { CopyRight, FooterContainer, FooterContent, FooterLinks, SocialMedia } from '@/styles/Footer/FooterStyles';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../lib/logo.png'

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <Image src={logo.src} alt="Company Logo" width={100} height={50} />
      <FooterLinks>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/">Home</Link>
      </FooterLinks>
      <SocialMedia>
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </Link>
      </SocialMedia>
      <CopyRight>© 2023 Your Company Name. All rights reserved.</CopyRight>
    </FooterContent>
  </FooterContainer>
);

export default Footer;
