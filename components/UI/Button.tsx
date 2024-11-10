import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import { StyledButton } from "@/styles/UI/ButtonStyles";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
}) => {
  const context = useContext(ThemeContext);
  const theme = context?.theme;

  return (
    <StyledButton theme={theme} onClick={onClick} variant={variant} size={size}>
      {children}
    </StyledButton>
  );
};

export default Button;
