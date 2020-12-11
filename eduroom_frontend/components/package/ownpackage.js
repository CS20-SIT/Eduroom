import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/ownpackage'
import Link from 'next/link'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const Ownpackage = (props) => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const [type] = useState('created')
    const handleOpenDialog = (e) => {
        e.preventDefault()
        setOpen(true)
        handleSubmit()
    }
    const handleCloseDialog = (e) => {
        e.preventDefault()
        setOpen(false)
    }
    const handleSubmit = () => {
        console.log(type)
    }
    useEffect(() => {
        const GetData = async () => {
          const result = await api.get('/api/package/getPackage',
          {params : { packageid: 'b7c2c25b-01e4-43e4-a72d-739d194a5bcd'}
        }
        )
          setData(result.data.data[0])
        }
        GetData()
        console.log(data)
    });
    
    return (
        <Fragment>
            <div className="center pdt-20">
                <div className="package">
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '15%' }}>
                            <div className="picture"  onClick={() => router.push(`/course/${props.id}/packagePage`)}>Picture</div>
                        </div>
                        <div className="block2">
                            <div className="block3">
                                <div className="block4" onClick={() => router.push(`/course/${props.id}/packagePage`)}>
                                    <div className="name">{data.packagename}</div>
                                    <div className="pri-cat"><span>{data.discount}</span></div>
                                    <div className="pri-cat">{data.category}</div>
                                </div>
                                <div>
                                    <button id="delete-btn" className="Xbutton" onClick={handleOpenDialog}>
                                        X
										</button>
                                    <Dialog open={open}>
                                        <div className="dialog">
                                            <div className="indialog">
                                                <div className="dialog-content">Do you want to remove this package?</div>
                                                <div>
                                                    <img src="/images/package/remove.svg" style={{ width: 200, height: 180 }} />
                                                </div>
                                                <div>
                                                    <button id="yes-btn" className="ycbutton" onClick={() => router.push('/user/instructor/course')}>
                                                        Yes
														</button>
                                                    <button
                                                        id="cancel-btn"
                                                        className="ycbutton"
                                                        style={{ backgroundColor: '#5b5b5b' }}
                                                        onClick={handleCloseDialog}
                                                    >
                                                        Cancel
														</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div className="right">
                                <button onClick={() => console.log('Clicked')} id="publish-btn" className="pebutton">
                                    <i className="fas fa-globe"></i>publish
									</button>
                                <Link href="/user/instructor/course/editpackage">
                                    <button onClick={() => console.log('Clicked')} id="edit-btn" className="pebutton">
                                        <i className="fas fa-pen"></i>edit
										</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{style}</style>
        </Fragment>
    )
}
export default Ownpackage

