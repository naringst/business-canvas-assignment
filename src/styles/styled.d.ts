import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorTextTertiary: string;
      colorBgMask: string;
      colorBgContainer: string;
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
  }
}
