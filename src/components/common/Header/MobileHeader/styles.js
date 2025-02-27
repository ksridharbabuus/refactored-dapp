export const useStyles = theme => ({
  hamburger: {
    padding: 10,
    margin: "0 39px 0 23px",
    display: "none",
    cursor: "pointer",
    "& span": {
      width: 18,
      height: 2,
      display: "block",
      backgroundColor: theme.palette.text.white,
      marginBottom: 3,
    },
    "@media (max-width:1024px)": { display: "block" },
    "@media (max-width:768px)": { margin: "0 25px 0 0" },
  },
  mobileNavContainer: {
    display: "flex",
    alignItems: "center",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: theme.palette.text.purple,
    "@media (min-width:1024px)": { display: "none" },
  },
  closeMenuIcon: {
    color: theme.palette.text.white,
    position: "absolute",
    top: 30,
    left: 40,
    cursor: "pointer",
  },
  mobileNavigation: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    padding: "90px 0 50px",
    overflow: "auto",
    textAlign: "left",
    "& ul": {
      padding: 0,
      margin: 0,
      "& li": {
        paddingLeft: "29%",
        borderBottom: 2,
        borderBottomStyle: "solid",
        borderBottomColor: "rgba(151, 151, 151, 0.1)",
        margin: "0 0 23px 0",
      },
      "& a": {
        paddingBottom: 25,
        borderBottom: "none",
        display: "inline-block",
        color: theme.palette.text.white,
        fontSize: 24,
        lineHeight: "33px",
      },
    },
    "@media(min-width: 1024px)": { display: "none" },
  },
  mobileActionBtns: {
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.text.white,
    paddingTop: 30,
    "& ul": {
      marginLeft: "29%",
      justifyContent: "flex-start",
      '& > div':{
        "@media (max-width:550px)": { display: "none" },
      },
      "@media(max-width: 480px)":{ margin: 0 },
      "& li": {
        margin: 0,
        padding: 0,
        border: "none",
        "&:first-of-type": { marginRight: 15 },
        "&:last-of-type span": {
          padding: "10px 28px",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: theme.palette.text.white,
          borderRadius: 4,
        },
        "@media (max-width:550px)": { display: "block" },
      },
      "& span": {
        fontSize: 24,
        textTransform: "capitalize",
      },
      "& a": { paddingBottom: 0 },
    },
    "@media(max-width: 480px)":{
      display: 'flex',
      justifyContent: 'center'
    }
  },
  subMenues: {
    "& li": {
      paddingLeft: "0 !important",
      margin: "0 0 0 29% !important",
      "&:first-of-type": { border: "none" },
      "&:last-of-type": {
        paddingBottom: 9,
      },
      "& a": {
        padding: "13px 0 13px 33px",
        fontSize: 22,
      },
      "&:first-of-type a": {
        paddingLeft: 0,
        color: theme.palette.text.lightShadedGray,
      },
      "&:nth-child(2) a": { paddingTop: 0 },
    },
  },
});
