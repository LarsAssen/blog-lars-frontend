import React from "react";
import { HeroBackground, HeroText, HeroContainer, HeroTitle, ButtonContainer } from "@/styles/Hero/HeroStyles";
import Button from "@/components/UI/Button";

interface HeroProps {
    title: string;
    text: string;
    imageUrl: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    primaryButtonOnClick: () => void;
    secondaryButtonOnClick: () => void;
    }

const Hero: React.FC<HeroProps> = ({ title, text, imageUrl, primaryButtonText, secondaryButtonText, primaryButtonOnClick, secondaryButtonOnClick }) => {
    return (
        <HeroContainer>
            <HeroBackground imageUrl={imageUrl} />
                <HeroTitle>{title}</HeroTitle>
                <HeroText>{text}</HeroText>
                <ButtonContainer>
                    <Button onClick={primaryButtonOnClick}>{primaryButtonText}</Button>
                    <Button onClick={secondaryButtonOnClick} variant="secondary">{secondaryButtonText}</Button>
                </ButtonContainer>
        </HeroContainer>
    );
}

export default Hero;