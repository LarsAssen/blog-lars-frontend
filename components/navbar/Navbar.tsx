import Link from 'next/link';
import styled from 'styled-components';
import ThemeToggle from '../theme/ThemeToggle';


const Nav = styled.nav`
width: 100%;
height: 60px;
background-color: #333;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Logo = styled.div`
margin-left: 20px;
  font-size: 1.5em;
  font-weight: bold;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    color: #ccc;
  }
`;

const NavbarList = styled.ul`
margin-right: 20px;

    li {
        display: inline-block;
        margin-right: 20px;
    }

  div {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    font-size: 1em;
  }

  div:hover {
    text-decoration: underline;
  }
`;



const Navbar: React.FC = () => {
    return (
        <Nav>
            <Logo>
                <Link href="/">
                    Blog
                </Link>
            </Logo>
            <NavbarList>
                <li>
                    <Link href="/posts">
                        <div>Posts</div>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <div>About</div>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <div>Contact</div>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <div>Login</div>
                    </Link>
                </li>
                <ThemeToggle />
            </NavbarList>
        </Nav>
    );
};

export default Navbar;