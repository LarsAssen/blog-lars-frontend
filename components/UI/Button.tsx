import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import { StyledButton } from "@/styles/UI/ButtonStyles";

type Props = {
    children: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    };

const Button:React.FC<Props> = ({ children, onClick, variant='primary', size ='medium' }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <StyledButton theme={theme} onClick={onClick} variant={variant} size={size}>
            {children}
        </StyledButton>
    );
}

export default Button;