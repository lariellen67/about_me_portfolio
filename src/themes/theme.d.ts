import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      GENERAL: {
        PRIMARY: string;
        SECONDARY: string;
        TERTIARY: string;
      };
      LAYOUT: {
        BUTTON: string;
      };
      BACKGROUND: {
        DEFAULT: string;
        LIGHT: string;
        WHITE: string;
        HINT: string;
        SHADOW: string;
      };
      TEXT: {
        PRIMARY: string;
        SECONDARY: string;
        CONTRAST_ONE: string;
        CONTRAST_TWO: string;
      };
      SHADES_OF_GREY: {
        DEFAULT: string;
        CLEAR: string;
        HOVER: string;
        DARK: string;
        MEDIUM: string;
        POLISHED: string;
        IRON: string;
        PLATINUM: string;
        CEMENT: string;
        SHADOW: string;
      };
      CHARTS: {
        PINK: string;
        BLUE: string;
        YELLOW: string;
        GREEN: string;
        PURPLE: string;
        ORANGE: string;
      };
      OTHERS: {
        LIGHT_BLUE: string;
        SAPPHIRE: string;
        AZURE: string;
        HEAVENLY: string;
        TOPAZ: string;
        YELLOW: string;
        SAND: string;
      };
    };
  }
}
