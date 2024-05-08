import { StyledTitle } from "@/styles/UI/TitleStyles";

interface TitleProps {
    children: React.ReactNode;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    }

const Title: React.FC<TitleProps> = ({ children, level }) => {
    return <StyledTitle level={level} as={`h${level}`}>{children}</StyledTitle>;
}

export default Title;