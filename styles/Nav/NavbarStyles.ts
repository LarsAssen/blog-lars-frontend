import styled from "styled-components";

export const StyledNavbar = styled.nav<{ scrolled: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-out;
  background-color: ${({ scrolled, theme }) =>
    scrolled ? theme.backgroundCard : "transparent"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 5px rgba(0, 0, 0, 0.2)" : "none"};
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

StyledNavbar.defaultProps = {
  as: "nav",
  scrolled: false,
};

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const MobileNavLink = styled.div`
  padding: 10px;
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

export const NavLink = styled.div<{ active: boolean }>`
  color: ${({ active, theme }) => (active ? theme.primaryColor : theme.text)};
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 4px;

  &:hover {
    text-decoration: ${({ active }) => (active ? "underline" : "none")};
  }
`;
