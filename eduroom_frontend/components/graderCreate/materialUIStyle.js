import { makeStyles, withStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createMuiTheme } from "@material-ui/core/styles";
const shorten = (text, maxLength) => {
  if (text && text.length > maxLength) {
    return text.substr(0, maxLength) + "...";
  }

  return text;
};
const splitTest = function (str) {
  return str.split("\\").pop().split("/").pop();
};

// for Style Annoucement
const logTableStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableHID: {
    paddingLeft: 50,
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHEdit: {
    paddingLeft: 25,
    paddingRight: 50,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHeader: {
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableRow: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
  },
  tableCell: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "0.9em",
    color: "#5b5b5b",
    paddingRight: 45,
  },
  tableId: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",

    paddingLeft: 50,
    paddingRight: 25,
  },
  tableEdit: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",
    paddingRight: 50,
    paddingLeft: 25,
  },
  caption: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontFamily: "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "0.775rem",
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 30,
    },
  },
  select: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  menuItem: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
  },
  actions: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
});

const announcementTableStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableHID: {
    paddingLeft: 50,
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHEdit: {
    paddingLeft: 25,
    paddingRight: 50,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHeader: {
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableRow: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
  },
  tableCell: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "0.9em",
    color: "#5b5b5b",
    paddingRight: 45,
  },
  tableId: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",

    paddingLeft: 50,
    paddingRight: 25,
  },
  tableEdit: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",
    paddingRight: 50,
    paddingLeft: 25,
  },
  caption: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontFamily: "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "0.775rem",
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 30,
    },
  },
  select: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  menuItem: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
  },
  actions: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
});

const sBig = { marginLeft: "7.5%", marginRight: "7.5%", marginTop: "2.5%" };

const sBigTitle = {
  fontFamily: "Quicksand , sans-serif",
  fontSize: "2em",
  color: "#5b5b5b",
  fontWeight: "bold",
};

const sError = {
  fontFamily: "Quicksand , sans-serif",
  color: "white",
  fontSize: "1em",
};
const sTitle = {
  fontFamily: "Quicksand , sans-serif",
  fontSize: "1.2em",
  color: "#3d467f",
  fontWeight: "bold",
};
const sText = { fontFamily: "Quicksand , sans-serif", color: "#5b5b5b" };
const sInputfield = {
  fontFamily: "Quicksand , sans-serif",
  color: "#5b5b5b",
  fontSize: "1.2em",
};
const sInput = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontWeight: "bold",
  fontSize: "1.2em",
};
const sButtionandVisbile = {
  color: "#3d467f",
  fontFamily: "Quicksand , sans-serif",
  fontWeight: "bold",
};

const sInputfieldDesc = {
  fontFamily: "Quicksand , sans-serif",
  color: "#5b5b5b",
  fontSize: "1.0em",
  paddingTop: 12,
};
const sInputTime = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontSize: "1.5em",
  fontWeight: "bold",
};
const sInputSelect = {
  fontFamily: "Quicksand , sans-serif",
  color: "#5b5b5b",
  fontSize: "1.0em",
};

const sInputfieldSelect = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontSize: "1.1em",
  fontWeight: "bold",
};
const sInputfieldTime = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontSize: "1.2em",
};

const contestformTheme = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        },
      },
    },
  },
});

const contestformStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "52.5%",
    marginLeft: "22.5%",
    marginRight: "15%",
    marginTop: "2.5%",
    paddingBottom: "10%",
  },
  paper: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(3),
    // padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paper2: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    color: theme.palette.text.secondary,
  },
  menuitem: {
    "&.Mui-selected": {
      fontFamily: "Quicksand , sans-serif",
      color: "#3d467f",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
  },
  select: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      fontFamily: "Quicksand , sans-serif",
      color: "#3d467f",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    error1: {
      fontFamily: "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "1.2em",
    },
  },
}));
const sContests = {
  marginLeft: "15.5%",
  marginRight: "10.5%",
  marginTop: "2.5%",
};
const sContestsTitle = {
  fontFamily: "Quicksand , sans-serif",
  fontSize: "2.5em",
  color: "#5b5b5b",
  fontWeight: "bold",
};
const contestListStyles = makeStyles(() => ({
  paginator: {
    justifyContent: "center",
    padding: "10px",
    fontFamily: "Quicksand , sans-serif",
  },
}));

const contestEachStyles = makeStyles({
  root: {
    marginLeft: "2",
    marginBottom: "2.5%",
    maxWidth: "90%",
  },
  card: {
    borderRadius: "15px",
    marginLeft: "2",
    marginBottom: "2.5%",
    maxWidth: "90%",
    transition: "0.3s",
    // boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      // boxShadow: "0 16px 30px -12.125px rgba(0,0,0,0.3)",
      border: "2.5px solid #3d467f",
    },
  },
  title: {
    marginLeft: 20,
    fontFamily: "Quicksand , sans-serif",
    fontSize: "2.25em",
    color: "#3d467f",
    fontWeight: "bold",
  },
  body: {
    marginLeft: 20,
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.25em",
    color: "#3d467f",
    fontWeight: "600",
  },
  content: {
    textAlign: "left",
    // padding: theme.spacing(3),
  },

  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  action: {
    marginLeft: 20,
    marginBottom: 5,
  },
  Button: {
    "&:hover": {
      background: "rgba(243, 154, 196, 0.3)",
    },
    borderRadius: "5em",
  },
  buttonText: {
    fontFamily: "Quicksand , sans-serif",
    color: "#3d467f",
    fontWeight: "bold",
    fontSize: "1.2em",
    "&:hover": {
      color: "rgba(243, 154, 196)",
    },
    paddingLeft: 4,
    paddingRight: 4,
  },
});

const AddQuestionAutocomplete = withStyles({
  listbox: {},
  option: {
    color: "#3d467f",
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
    fontWeight: "600",
  },
  clearIndicator: {
    color: "#3d467f",
    height: 22.5,
    width: 22.5,
    opacity: 1,
  },
  input: {
    marginTop: 10,

    color: "#5b5b5b",
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
  },
  tag: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 7,
    backgroundColor: "white",
    height: 30,
    position: "relative",
    zIndex: 0,
    border: "2.5px solid #a880f7",
    "& .MuiChip-label": {
      color: "#3d467f",
      fontFamily: "Quicksand , sans-serif",
      width: 500,

      fontSize: "1.2em",
      fontWeight: "bold",
    },
    "& .MuiChip-deleteIcon": {
      color: "#FC8FC3",
      height: 22.5,
      width: 22.5,
      opacity: 0.8,
      marginRight: 20,
    },

    //
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 6,
      width: 6,
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      zIndex: -1,
    },
  },
})(Autocomplete);
const questionTableStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  tableHID: {
    paddingLeft: 50,
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHEdit: {
    paddingLeft: 25,
    paddingRight: 70,
    paddingTop: 50,
    textAlign: "center",
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableHeader: {
    paddingRight: 25,
    paddingTop: 50,
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#3d467f",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  tableRow: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
  },
  tableCell: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "0.9em",
    color: "#5b5b5b",
    paddingRight: 45,
  },
  tableId: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",

    paddingLeft: 50,
    paddingRight: 25,
  },
  tableEdit: {
    fontFamily: "Quicksand , sans-serif",
    borderBottom: "none",
    fontSize: "1em",
    color: "#5b5b5b",
    paddingRight: 50,
    paddingLeft: 25,
  },
  caption: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  toolbar: {
    "& > p:nth-of-type(2)": {
      fontFamily: "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "0.775rem",
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 30,
    },
  },
  select: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
  menuItem: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
  },
  actions: {
    fontFamily: "Quicksand , sans-serif",
    color: "#5b5b5b",
    fontSize: "0.775rem",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 30,
  },
});
const QuestionTagAutocomplete = withStyles({
  input: {
    marginTop: 7,
    color: "#5b5b5b",
    fontFamily: "Quicksand , sans-serif",
    fontSize: "1.2em",
  },
  tag: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "white",
    height: 25,
    position: "relative",
    zIndex: 0,
    border: "2px solid #a880f7",
    "& .MuiChip-label": {
      color: "#3d467f",
      fontFamily: "Quicksand , sans-serif",

      fontSize: "1.2em",
      fontWeight: "bold",
    },
    "& .MuiChip-deleteIcon": {
      color: "#FC8FC3",
      height: 12,
      width: 12,
      opacity: 0.8,
    },

    //
    "&:after": {
      content: '""',
      right: 10,
      top: 6,
      height: 6,
      width: 6,
      position: "absolute",
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      zIndex: -1,
    },
  },
})(Autocomplete);

const sSampleInput = {
  fontFamily: "Quicksand , sans-serif",
  color: "#3d467f",
  fontWeight: "bold",
  fontSize: "1em",
};
const sSampleInputeHeader = {
  fontFamily: "Quicksand , sans-serif",
  color: "#a880f7",
  fontWeight: "bold",
  fontSize: "1.2em",
  paddingLeft: 28,
};
const sSampleInputfieldDesc = {
  fontFamily: "Quicksand , sans-serif",
  color: "#5b5b5b",
  fontSize: "1em",
  // paddingTop: 12,
};
const sampleEachStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // width: "65%",
    // marginLeft: "17%",
    // marginRight: "15%",
    // marginTop: "2.5%",
    // marginBottom: "10%",
  },
  paper: {
    marginBottom: 25,

    height: "600",

    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    // paddingBottom: theme.spacing(1),
    // padding: theme.spacing(3),
    // textAlign: "center",
    color: theme.palette.text.secondary,
  },

  menuitem: {
    "&.Mui-selected": {
      fontFamily: "Quicksand , sans-serif",
      color: "#3d467f",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
  },
  select: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      fontFamily: "Quicksand , sans-serif",
      color: "#3d467f",
      fontSize: "1.2em",
      fontWeight: "bold",
    },
    error1: {
      fontFamily: "Quicksand , sans-serif",
      color: "#5b5b5b",
      fontSize: "1.2em",
    },
  },
}));
module.exports = {
  sBig,
  sBigTitle,
  shorten,
  splitTest,
  logTableStyles,
  announcementTableStyles,
  sError,
  sTitle,
  sText,
  sInputfield,
  sInput,
  sButtionandVisbile,
  contestformTheme,
  contestformStyles,
  sInputfieldDesc,
  sInputTime,
  sInputSelect,
  sInputfieldSelect,
  sInputfieldTime,
  sContests,
  sContestsTitle,
  contestListStyles,
  contestEachStyles,
  AddQuestionAutocomplete,
  questionTableStyles,
  QuestionTagAutocomplete,
  sSampleInput,
  sSampleInputeHeader,
  sSampleInputfieldDesc,
  sampleEachStyles,
};
