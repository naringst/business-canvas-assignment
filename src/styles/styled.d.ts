import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorTextTertiary: string;
      colorBgMask: string;
      colorBgContainer: string;
      colorSplit: string;
      button: {
        colorPrimary: string;
      };
      dropdown: {
        colorError: string;
        colorSuccess: string;
        colorWarning: string;
        colorInfo: string;
      };
    };
    padding: {
      button: {
        sm: number;
        md: number;
        lg: number;
      };
    };
    borderRadius: {
      buttonBorderRadius: number;
    };
  }
}
