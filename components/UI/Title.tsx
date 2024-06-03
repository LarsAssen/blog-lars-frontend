import { StyledTitle } from "@/styles/UI/TitleStyles";

interface TitleProps {
    children: React.ReactNode;
    level: number | undefined;
    }

const Title: React.FC<TitleProps> = ({ children, level }) => {
    return <StyledTitle level={level} as={`h${level}`}>{children}</StyledTitle>;
}

export default Title;