// Global style variables
const $gp = 8;
const $colorGreenPrimary = "#407d28";
const $colorGreenSecondary = "#5eb376";
const $prettyGreen = "#1C9963";

// Styles
export default {
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    margin: 4,
    paddingLeft: 4
  },
  container: {
    flex: 1,
    height: "80%",
    backgroundColor: "#FFF",
    alignItems: "center",
    marginTop: $gp * 3,
    marginLeft: $gp,
    marginRight: $gp
  },
  navContainer: {
    backgroundColor: "#FFC602",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44 + 4 + 4
  },
  screenContainer: {
    height: "100%"
  },
  scrollViewContainer: {
    alignItems: "justifyContent"
  }
};
