import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    theme: string;
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    primaryColor: string;
    secondaryColor: string;
    fontFamily: string;
  }
}
