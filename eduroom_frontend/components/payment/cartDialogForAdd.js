import React, { Fragment, useState, useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AuthDialog from '../landing/authDialog'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'

const cartDialogForAdd = () => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("credit");
    const handleOpenDialog = (e) => {
    e.preventDefault();
    setOpen(true);
    handleSubmit();
  };
  const handleSubmit = () => {
    console.log(type);
  };
  const handleCloseDialog = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  useEffect(() => {
    console.log(type);
  }, [type]);




	return (
		<Fragment>
            <div className="AddCart">
			<Button
				variant="contained"
				style={{
					backgroundColor: '#3D467F',
					color: 'white',
					borderRadius: 10,
					width: 165,
					height: 42,
				}}
				onClick={handleOpenDialog}
			>
				Add to cart 
                <img
            src="/images/mdi_add_shopping_cart.svg"
            className="add-cart-logo"
            style={{ width: 18, height: 18,marginLeft:5}}
          />
			</Button>
            {/* <Dialog open={open} onClose={handleCloseDialog}>
                <div>
                  <div
                    style={{
                      backgroundColor: "white",
                      width :"670px",
                      height: "170px"
                      border: "1.5px solid #E1EEFB",
                    }}
                  >
                    <DialogTitle style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontSize: "2em",
                          color: "#A880F7",
                          fontWeight: 700,
                          marginTop: 20,
                        }}
                      >
                        PURECHASED!
                      </div>
                    </DialogTitle>

                    <DialogContent
                      style={{
                        width: "450px",
                        height: "400px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src="/images/package/purchesed.svg"
                        className="google-logo"
                        style={{ width: 350, height: 350 }}
                      />
                    </DialogContent>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        paddingBottom: 30,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          paddingBottom: 30,
                        }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#FB9CCB",
                            color: "white",
                            borderRadius: 24,
                            width: 200,
                            height: 40,
                          }}
                          onClick={() => router.push("/course")}
                        >
                          Go to course
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog> */}
			</div>
			<style jsx>{``}</style>
		</Fragment>
	)
}
export default cartDialogForAdd
