import React, { Fragment, useState } from 'react'
import style from '../../styles/advertisement/ads';
import { InputBase, Paper, Grid, List } from '@material-ui/core'
import General from '../template/general'
import { useRouter } from 'next/router';


import api from "../../api";


const Content = () => {
  const router = useRouter();
  return (
    <Fragment>
      <General>
        <div style={{ backgroundImage: `url('/images/big-bg.svg')`, backgroundSize:'cover' , paddingTop: '13%' }} >
          <Paper style={{ margin: '0% 5% 5% 5%' }}>
            <div style={{ marginLeft: '50px' }}>
              <div className="ad-ad-header" style={{ paddingTop: '50px', paddingBottom: '50px'}}>
                Information
            </div>
              <div >
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad Name</a>
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            name="adname"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"name of your ads"}
                            inputProps={{ 'aria-label': 'naked' }}

                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div >
                      <a className='ad-topic'>Ad Start Date</a>
                      <Paper style={{ marginLeft: '5px', padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            name="startdate"
                            fullWidth
                            autoFocus
                            type={"datetime-local"}
                            placeholder={"start date"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad tag</a>
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            name="adTag"
                            fullWidth
                            autoFocus
                            type={"text"}
                            placeholder={"Ad Tag"}
                            inputProps={{ 'aria-label': 'naked' }}

                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Ad expire Date</a>
                      <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            name="expiredate"
                            fullWidth
                            autoFocus
                            type={"datetime-local"}
                            placeholder={"expire date"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>

                </Grid>
              </div>
              <div>
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <div>
                      <a className='ad-topic'>Contact Email</a>
                      <Paper style={{ marginTop: '5px', padding: 10, backgroundColor: '#EFF0F6' }}>
                        <form>
                          <InputBase
                            name="contactEmail"
                            fullWidth
                            autoFocus
                            type={"email"}
                            placeholder={"Your Contact email"}
                            inputProps={{ 'aria-label': 'naked' }}
                          />
                        </form>
                      </Paper>
                    </div>
                  </Grid>
                  <Grid item xs={4}>
                    <div className="img-spaceship">

                    </div>
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid item xs={4}>
                  <div style={{ marginTop: '100px' }}>
                    <a className='ad-topic'>Ad image</a>
                    <Paper style={{ padding: 10, backgroundColor: '#EFF0F6' }}>
                      <form>
                        <InputBase
                          name="imgLocation"
                          fullWidth
                          autoFocus
                          type={"file"}
                          placeholder={"attrach your ad img"}
                          inputProps={{ 'aria-label': 'naked' }}
                        />
                      </form>
                    </Paper>
                  </div>
                </Grid>

              </div>


              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '50px' }}>
                <button
                  className="next-button"
                  onClick={() => router.push('/login')}
                >
                  <a className="ad-button-text">Next</a>
                </button>
              </div>
            </div>
          </Paper>


        </div>
        <style jsx>
          {style}
        </style>
      </General>

    </Fragment>
  )
}
export default Content

