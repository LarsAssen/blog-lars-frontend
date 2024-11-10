import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import { StyledButton } from "@/styles/UI/ButtonStyles";

type Props = {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className,
}) => {
  const context = useContext(ThemeContext);
  const theme = context?.theme;

  return (
    <StyledButton
      className={className}
      theme={theme}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
