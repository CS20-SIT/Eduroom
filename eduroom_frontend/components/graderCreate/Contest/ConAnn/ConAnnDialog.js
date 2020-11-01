import React, {  useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


import axios from "axios";


import Chip from '@material-ui/core/Chip';

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

//on button , change that to chips 
// https://material-ui.com/components/chips/#chip
const AnnEdit = (props) => {
  
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
  };

  const handleClickOpen = () => {
    setOpen(true);
   
  };

  const handleClose = () => {
    setOpen(false);
  };
//// admind id here!!!!!!!
  const [ann, setAnn] = useState({
    title: "",
    description: "",
    adminid: "df3b7cb7-6a95-11e7-8846-b05adad3f0ae",
  });
  const setDesc = (event) => {
    setAnn({ ...ann, description: event.target.value });
  };
  const setTitle = (event) => {
    setAnn({ ...ann, title: event.target.value });
  };
  const [visible, setVisible] = React.useState(true);

  const handleChange = (event) => {
    setVisible(event.target.checked);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3000/api/grader/cann", {
        
        title: ann.title,
        description: ann.description,
        adminid: ann.adminid,
        isvisible : visible
      })
      .then(function (response) {
        console.log(response);
        setOpen(false);
        
        setTimeout(() => {
          console.log('this is when we call prop on sucess')
          props.onSuccess();
          setSubmitStatus({ ...submitStatus, success: true });
        }, 450);
      })
      .catch(function (error) {
        setOpen(false);
        setTimeout(() => {
          setSubmitStatus({ ...submitStatus, failed: true });
        }, 450);
      });

    setAnn({
      title: "",
      description: "",
      adminid: 'df3b7cb7-6a95-11e7-8846-b05adad3f0ae',
    });
    setVisible(true);
  };




const sTitle = {'font-family': 'Quicksand , sans-serif' ,  'font-size': '1.2em' ,  color: '#3d467f','font-weight': 'bold'}
const sText ={'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b'};
const sInputfield = {'font-family': 'Quicksand , sans-serif' ,color: '#5b5b5b'}
const sInput  ={'font-family': 'Quicksand , sans-serif' ,color: '#3d467f','font-weight': 'bold'}
const sButtionandVisbile =  { color: '#3d467f', 'font-family': 'Quicksand , sans-serif','font-weight': 'bold' }



  return (
    <div >
              <Chip
label=" Create"
onClick={handleClickOpen}
style={{backgroundColor:'#FC8FC3',marginBottom:10,color:'white',height:30,width:200,'font-family': 'Quicksand , sans-serif' ,  'font-size': '1.2em','font-weight': 'bold'}}

/>

    

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">  <span style={sTitle} >Make Contest Announcement</span></DialogTitle>
      
        <DialogContent>
          <DialogContentText>
          <span style={sText} >
          Anything to tell to our precious students?
          Maybe add some hints?, or tell them that this Contest is too hard.          
          Please enter your detail here.
            </span>
          
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
      
            value={ann.title}
            onChange={setTitle}
            required
           
            inputProps={{ maxLength: 50 ,style:sInputfield }}
            InputLabelProps={{style: sInput}}
          />

<div style={{ height:20}} ></div>
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={4}
            fullWidth

            value={ann.description}
            onChange={setDesc}
            required
            inputProps={{ maxLength: 50 ,style:sInputfield}}
            InputLabelProps={{style: sInput}}
          />
           <div style={{ height:30}} ></div>
           <FormControlLabel
      control={
        <Switch color='primary' checked={visible} onChange={handleChange} name="visible" />
      }
      label={<span style={sButtionandVisbile}>Visible</span>}
    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          <span style={sButtionandVisbile}>Cancel</span>
          </Button>
          <Button onClick={handleSubmit} color="primary">
          <span style={sButtionandVisbile}>Submit</span> 
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.success} onClose={statusClose}>
        <DialogTitle><span style={sTitle} >Success!</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
          <span style={sText} > Your announcement have been created.</span>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
          <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={submitStatus.failed} onClose={statusClose}>
        <DialogTitle><span style={sTitle} >Opps.... Something went wrong!</span></DialogTitle>
        <DialogContent>
          <DialogContentText>
          <span style={sText} >  Come back again later...</span></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={statusClose} color="primary" autoFocus>
          <span style={sButtionandVisbile}>Ok</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AnnEdit;


// import React, { Fragment, useEffect, useState } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import style from "../../../styles/graderCreate/CreateAnnouncement";
// import Divider from "@material-ui/core/Divider";
// import axios from "axios";

// import Chip from '@material-ui/core/Chip';

// //on button , change that to chips 
// // https://material-ui.com/components/chips/#chip
// const AnnDialog = (props) => {
//   const [open, setOpen] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({
//     success: false,
//     failed: false,
//   });

//   const statusClose = () => {
//     setSubmitStatus({
//       success: false,
//       failed: false,
//     });
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [ann, setAnn] = useState({
//     title: "",
//     description: "",
//     adminid: 'df3b7cb7-6a95-11e7-8846-b05adad3f0ae',
//     isvisible: 
//   });
//   const setDesc = (event) => {
//     setAnn({ ...ann, description: event.target.value });
//   };
//   const setTitle = (event) => {
//     setAnn({ ...ann, title: event.target.value });
//   };

//   const handleSubmit = () => {
//     axios
//       .post("http://localhost:3000/api/grader/cann", {
//         title: ann.title,
//         description: ann.description,
//         adminid: ann.adminid,
//       })
//       .then(function (response) {
//         console.log(response);
//         setOpen(false);
//         setTimeout(() => {
//           console.log(props);
//           props.onSuccess();
//           setSubmitStatus({ ...submitStatus, success: true });
//         }, 450);
//       })
//       .catch(function (error) {
//         setOpen(false);
//         setTimeout(() => {
//           setSubmitStatus({ ...submitStatus, failed: true });
//         }, 450);
//       });

//     setAnn({
//       title: "",
//       description: "",
//       adminid: 0,
//     });
//   };

//   return (
//     <div>
     
//       <Chip
// label=" Create"
// onClick={handleClickOpen}
// style={{backgroundColor:'#FC8FC3',color:'white',height:30,width:120,'font-family': 'Quicksand , sans-serif' ,  'font-size': '1.2em','font-weight': 'bold'}}

// />

//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Make Announcement</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To let our precious students know about the upcoming contest, your
//             brand-new questions, or even just to show off your new iphone,
//             please enter your information here.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="title"
//             label="Title"
//             type="text"
//             fullWidth
//             value={ann.title}
//             onChange={setTitle}
//           />

//           {/* <TextField
//             id="standard-multiline-flexible"
//             label="Description"
//             multiline
//             rowsMax={4}
//             fullWidth
//           /> */}
//           <TextField
//             id="standard-multiline-static"
//             label="Description"
//             multiline
//             rows={4}
//             fullWidth
//             value={ann.description}
//             onChange={setDesc}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmit} color="primary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog open={submitStatus.success} onClose={statusClose}>
//         <DialogTitle>{"Success!"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Your announcement have been published.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={statusClose} color="primary" autoFocus>
//             Ok
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Dialog open={submitStatus.failed} onClose={statusClose}>
//         <DialogTitle>{"Opps.... Something went wrong!"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Come back again later..</DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={statusClose} color="primary" autoFocus>
//             Ok
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };
// export default AnnDialog;
