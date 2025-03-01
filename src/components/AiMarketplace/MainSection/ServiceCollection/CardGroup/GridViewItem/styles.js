import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    width: 302,
    padding: "13px 0",
    margin: "0 25px 25px 0",
    display: "inline-block",
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    "&:hover": {
      backgroundColor: theme.palette.text.offWhiteColor,
      "& h4": { color: theme.palette.text.primary },
    },
  },
  cardHeader: {
    padding: "0 18px",
    alignItems: "flex-start",
    "& .MuiCardHeader-avatar": { marginRight: 0 },
    "& .MuiCardHeader-content": {
      textAlign: "left",
      marginLeft: 10,
    },
  },
  cardTitle: {
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.darkShadedGray,
    letterSpacing: 0.23,
  },
  cardSubheader: {
    margin: 0,
    fontFamily: theme.typography.primary.main,
    fontSize: 10,
    color: theme.palette.text.lightShadedGray,
    fontWeight: 600,
    letterSpacing: 1.67,
    lineHeight: "16px",
    textTransform: "uppercase",
  },
  CardMedia: {
    height: 175,
    margin: "12px 0 13px",
  },
  fontSize: 18,
  cardContent: {
    padding: "0 13px",
    fontFamily: theme.typography.primary.main,
    fontSize: 18,
    textAlign: "left",
  },
  cardTypograpy: {
    color: theme.palette.text.mediumShadeGray,
    fontFamily: theme.typography.primary.main,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "21px",
  },
  cardActions: {
    padding: "16px 13px 0",
    justifyContent: "space-between",
    "& button": { padding: 0 },
  },
  showMore: {
    padding: 0,
    margin: 0,
    color: theme.palette.text.lightShadedGray,
  },
}));
