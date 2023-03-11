interface ITheme {
  color: any;
  fontSize: any;
  fontWeight: any;
  iconSize: any;
}

const theme: ITheme = {
  color: {
    white: '#FFFFFF',

    // Grey colors
    grey900: '#000716',
    grey600: '#414d5c',
    grey500: '#333333',
    grey400: '#4F4F4F',
    grey300: '#828282',
    grey200: '#BDBDBD',
    grey100: '#E0E0E0',
    grey50: '#F6F6F6',
    black: '#000000',

    // Green colors
    green: '#27AE60',

    // Orange
    orange300: '#F2994A',

    // Yello
    yellow300: '#FFE70B',

    // Red
    red300: '#EB5757',
    red200: '#FF9898',
    red100: '#FDCDCD',

    // Rudder primary Colors (Blue)
    primary600: '#0972d3',
    primary400: '#4C0A75',
    primary300: '#b5d6f4',
    primary: '#6D0FA7',
    primary200: '#d3e7f9',
    primary150: '#880ED3',
    primary100: '#f2f8fd',
    primary100_transparent: 'rgba(182, 71, 250, 0.5)',
    primary50: '#D185FF',
    primary10: '#EED4FE',
  },
  fontSize: {
    // font sizes
    small: '12px',
    normal: '14px',
    md: '16px',
    h1: '24px',
    xl: '36px',
  },
  fontWeight: {
    // font weights
    bold: 600,
    semiBold: 500,
    extraBold: 700,
    normal: 400,
  },
  iconSize: {
    small: 20,
    medium: 28,
    large: 40,
    xl: 50,
  },
};

export default theme;
