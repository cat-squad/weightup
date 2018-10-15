// Global style variables
const $gp = 8;
const $colorGreenPrimary = "#407d28";
const $colorGreenSecondary = "#5eb376";
const $prettyGreen = "#1C9963";
const $primaryDarkGray = "#282c32";
const $secondaryDarkGray = "#2d3036";
const $navDarkGray = "#21242a";
const $lightGray = "#727F89";
const $primaryGold = "#E8CA4D";
const $primaryLightestGray = "#eeeeee";

// Styles
export default {
  colors: {
    lightGray: $lightGray,
    primaryGold: $primaryGold,
    primaryDarkGray: $primaryDarkGray,
    secondaryDarkGrey: $secondaryDarkGray,
    navDarkGray: $navDarkGray,
    white: $primaryLightestGray
  },

  textInput: {
    margin: 1,
    paddingLeft: 4,
    borderBottomWidth: 0,
    backgroundColor: $secondaryDarkGray,
    marginRight: 32,
    marginLeft: 32,
    borderRadius: 10,
    height: 48
  },

  textInputFlatTop: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },

  textInputFlatBottom: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },

  textInputColor: {
    color: $lightGray
  },

  navContainer: {
    backgroundColor: $navDarkGray,
    borderBottomColor: $navDarkGray,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 16
  },

  container: {
    flex: 1,
    alignItems: "center"
  },

  containerMargins: {
    marginTop: $gp * 3,
    marginLeft: $gp,
    marginRight: $gp
  },

  screenContainer: {
    height: "100%"
  },

  scrollViewContainer: {
    alignItems: "justifyContent"
  },

  primaryBackgroundColor: {
    backgroundColor: $primaryDarkGray
  }
};
