export default {
  ios: {
    regular: {
      fontFamily: 'PingFangHK-Regular, sans-sarif',
    },
    medium: {
      fontFamily: 'PingFangHK-Medium',
    },
    extraBoldRegular: {
      fontFamily: 'Abadi MT Condensed Extra Bold Regular'
    },
    /* We are only allowed to use these in iOS */
    SFMedium: {
      fontFamily: 'SFUIText-Medium'
    },
    SFRegular: {
      fontFamily: 'SFUIText-Regular'
    },
    SFSemibold: {
      fontFamily: 'SFUIText-Semibold'
    },
    Ayuthaya: {
      fontFamily: 'Ayuthaya'
    }
  },
  android: {
    regular: {
      fontFamily: 'PingFangHK-Regular, sans-sarif',
    },
    medium: {
      fontFamily: 'PingFangHK-Medium, sans-serif-medium',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      // note(brentvatne): sans-serif-black is only supported on Android 5+,
      // we can detect that here and use it in that case at some point.
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
};
