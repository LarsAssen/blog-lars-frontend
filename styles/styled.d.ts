import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    theme: string;
    textSecondary: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundCard: string;
    backgroundNavbar: string;
    linkColor: string;
    titleColor: string;
    buttonBackground: string;
    buttonTextColor: string;
    buttonSecondaryBackground: string;
    buttonSecondaryTextColor: string;
    fontFamily: string;
  }
}
