export const useStyles = theme => ({
  aboutContainer: {
    padding: "15px 0 100px",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.text.verticalTabLeftBorder,
    "& h3": {
      padding: "11px 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.text.gray1,
      margin: 0,
      color: theme.palette.text.darkShadedGray,
      fontSize: 20,
      fontWeight: 400,
    },
    "@media(max-width:768px)": {
      padding: " 20px 10px 0",
      flexDirection: "column",
    },
  },
  leftSideSection: {
    paddingRight: 25,
    "@media(max-width:768px)": {
      maxWidth: "100%",
      paddingRight: 0,
    },
  },
  rightSideSection: {
    "@media(max-width:768px)": {
      maxWidth: "100%",
      marginTop: 25,
    },
  },
  overViewContainer: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    backgroundColor: theme.palette.text.white,
    borderRadius: 4,
    paddingBottom: 20,
    "& p": {
      padding: "15px 22px 0",
      margin: 0,
      fontSize: 14,
      color: theme.palette.text.mediumShadeGray,
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    "& h4": {
      margin: "30px 0 0",
      color: theme.palette.text.mediumShadeGray,
      fontSize: 18,
    },
    "& ul": {
      margin: "20px 0 0",
      padding: "0 22px",
      display: "flex",
      "& div": {
        "&:last-of-type": { marginLeft: "26%" },
      },
      "& li": {
        display: "flex",
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        lineHeight: "24px",
        letterSpacing: "0.25px",
        listStyle: "none",
      },
    },
    "& h5": {
      margin: "40px 45px 0 0",
      display: "inline-block",
      color: theme.palette.text.lightShadedGray,
      fontSize: 16,
      "@media(max-width:800px)": { paddingLeft: 0 },
    },
  },
  tags: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.text.lightGray,
    borderRadius: 16,
    padding: "5px 15px",
    margin: "0 5px 10px 0",
    display: "inline-block",
    color: theme.palette.text.lightShadedGray,
    fontSize: 12,
    letterSpacing: "0.21px",
    lineHeight: "20px",
    "&:last-of-type": { marginRight: 0 },
  },
  demoContainer: {
    marginTop: 25,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    borderRadius: 4,
    backgroundColor: theme.palette.text.white,
    "& > div": {
      padding: "43px 0",
      textAlign: "center",
      "& button": {
        "&:first-of-type": { marginRight: 70 },
      },
    },
  },
  backToLink: {
    margin: "30px 0 0",
    display: "flex",
    alignItems: "center",
    "& span": { color: theme.palette.text.primary },
    "& a": {
      marginLeft: 11,
      color: theme.palette.text.primary,
      textDecoration: "none",
      fontSize: 16,
      "&:hover": { fontWeight: 600 },
    },
    "@media(max-width:768px)": {
      marginTop: 15,
      marginBottom: 15,
    },
  },
  creatorDetailsContainer: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    borderRadius: 4,
    backgroundColor: theme.palette.text.white,
  },
  companyInfo: {
    paddingLeft: 22,
    margin: "10px 0 20px",
    display: "flex",
    alignItems: "center",
  },
  companyName: {
    paddingLeft: 20,
    "& h4": {
      margin: 0,
      color: theme.palette.text.primary,
      fontWeight: 600,
      fontSize: 18,
      letterSpacing: "0.25px",
      lineHeight: "24px",
    },
    "& span": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 14,
    },
  },
  iconContainer: {
    padding: "17px 0",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: theme.palette.text.lightGray,
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: theme.palette.text.cardBackground,
    "& i": {
      color: theme.palette.text.iconColor,
      verticalAlign: "bottom",
    },
    "& span": {
      marginLeft: 8,
      color: theme.palette.text.mediumShadeGray,
      fontSize: 12,
    },
  },
  projectDetailsContainer: {
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    padding: "0 25px 30px 0",
    borderRadius: 4,
    marginTop: 30,
    backgroundColor: theme.palette.text.white,
    "& h3": { marginBottom: 15 },
    "& > div": {
      paddingLeft: 30,
      marginBottom: 30,
      display: "flex",
      "& h5": {
        width: 150,
        margin: 0,
        color: theme.palette.text.darkShadedGray,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "22px",
      },
      "& div": { marginLeft: 20 },
      "& a": {
        display: "block",
        color: theme.palette.text.primary,
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: "0.25px",
        textDecoration: "none",
      },
      "& p": {
        margin: 0,
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
      },
      "&:last-of-type": { marginBottom: 0 },
    },
  },
  contributors: {
    "& p": { marginLeft: "30px !important" },
  },
  demoToggler: {
    "& a": { 
      textDecoration: "none !important",
      '& button':{ 
        '@media(max-width:545px)':{ marginRight: '0 !important' }
      }
    },
    "@media(max-width: 545px)":{ 
      display: 'flex',
      flexDirection: 'column'
    }
  },
  tagsContainer: {
    padding: "0 22px",
    display: "flex",
    alignItems: "baseline",
  },
});
