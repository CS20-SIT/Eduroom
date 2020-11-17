 import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MenuItem from "@material-ui/core/MenuItem";
import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "../../../../api";

const CustomAutocomplete = withStyles({
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
    // .MuiAutocomplete-inputFocused
  },
})(Autocomplete);
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];
const AnnEdit = (props) => {
  const [data,setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
       /// execpet the quesiton that alread;y on thr contest table
        const result = await axios.get("/api/grader/allquestion");
        setData(result.data);
      };
    
    GetData();
    console.log(data);
    // console.log(props.onSuccess);
  }, [
    // props.update
  ]);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    failed: false,
  });

  const statusClose = () => {
    setSubmitStatus({
      success: false,
      failed: false,
    });

    // props.onSuccess();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // props.onSuccess();
  };

  const handleSubmit = () => {
    axios
      .delete("/api/grader/dquestion", {
        params: {
          id: props.id,
        },
      })
      .then(function (response) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, success: true });
        }, 450);
      })
      .catch(function (error) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, failed: true });
        }, 450);
      });
  };

  const sTitle = {
    "font-family": "Quicksand , sans-serif",
    "font-size": "1.2em",
    color: "#3d467f",
    "font-weight": "bold",
  };
  const sText = { "font-family": "Quicksand , sans-serif", color: "#5b5b5b" };
  const sInputfield = {
    "font-family": "Quicksand , sans-serif",
    color: "#5b5b5b",
  };
  const sInput = {
    "font-family": "Quicksand , sans-serif",
    color: "#3d467f",
    "font-weight": "bold",
  };
  const sButtionandVisbile = {
    color: "#3d467f",
    "font-family": "Quicksand , sans-serif",
    "font-weight": "bold",
  };

  return (
    <span>
      <button
        style={{
          padding: 0,
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={handleClickOpen}
      >
        {" "}
        Add Existing
     
      </button>
      {/* <button
          style={{
            padding: 0,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push(`/admin/grader/question/edit/${props.id}`);
          }}
        >
          {" "}
          <Image src="/images/graderCreate/edit.svg" width="20" height="20" />
        </button> */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {" "}
          <span style={sTitle}>Select your questions</span>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <span style={sText}>
              Select what question you want from the question libary here
            </span>
            <CustomAutocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={data}
        getOptionLabel={(option) => option.id+'. '+option.title}
        // defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="limitTags" placeholder="Favorites" />
        )}
      />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <span style={sButtionandVisbile}>Cancel</span>
          </Button>
          <Button onClick={handleSubmit} color="primary">
            <span style={sButtionandVisbile}>Confrim</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Success!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}> The Question have been deleted.</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.failed} onClose={statusClose}>
        <DialogTitle>
          <span style={sTitle}>Opps.... Something went wrong!</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span style={sText}> Come back again later...</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
            <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
};
export default AnnEdit;
