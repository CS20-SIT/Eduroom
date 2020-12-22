import React, { Fragment, useState, useEffect } from 'react'
import style from '../../styles/package/createpackage'
import SelectedCourses from './selectedCourses'
import Dialog from '@material-ui/core/Dialog'
import { useRouter } from 'next/router'
import api from '../../api'

const ConfirmEdit = ({ packages, courseList, changePage }) => {
    console.log(packages)
    const [loading, setLoading] = useState(false)
    const [courses, setCourses] = useState([])
    const [totalPrice, setTotalPrice] = useState(null)
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const param = router.query.id || ''
    
    const getTotalPrice = (total) => {
        let price = parseFloat(total * ((100 - packages.discount) / 100)).toFixed(2)
        return price
    }
    // const saveEdit = () => {
    //  api
    //      .put(`/api/package/${data.forumid}`, { old: { content: data.content }, new: { ...editData } })
    //      .then((res) => {
    //          setData({ ...editData })
    //          setEdit(false)
    //          setEditData({ titlethread: '', content: '' })
    //      })
    //      .catch((err) => {
    //      })
    // }
    
    const handleSubmit = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append('course-picture-1', packages.image)
        const image = await api.post('/api/package/uploadPackagePic', formData)
        const body = {
            name: packages.name,
            discount: packages.discount,
            category: packages.category,
            detail: packages.detail,
            courses: packages.selectedCourses,
            ispublic: false,
            image: image.data.linkUrl,
        }
        const res = await api.put(`/api/package/${props.packageid}`)
        setLoading(false)
    }

    const handleOpenDialog = async (e) => {
        await handleSubmit()
        setOpen(true)
    }
    
    const fetchCourses = async () => { 
        console.log(courseList)
        const res = await api.get('/api/package/getCoursesOfCreatingPackage', {
            params: { courseIds: courseList },
        })
        console.log(res.data)
        setCourses(res.data.courses)
        setTotalPrice(res.data.totalPrice)
    }
    useEffect(() => {
        fetchCourses()
    }, [])
    
    
    // useEffect(() => {
    //  if (packages.image) {
    //      var reader = new FileReader()
    //      reader.onload = function (e) {
    //          document.getElementById('show-package-image-2').src = e.target.result
    //      }
    //         reader.readAsDataURL(packages.image)
    //         console.log(packages.image)
    //         console.log('here')
    //  }
    // }, [packages.image])

    
   

    

    return (
        <Fragment>
            <div>
                <div className="package-header">CONFIRM EDIT</div>
                <div className="container pd-4-15">
                    <div className="center">
                        <img src="" id="show-package-image-2" style={{ maxWidth: '100%', maxHeight: '235px' }} />
                    </div>
                    <div className="subtitle uppercase">{packages.packagename}</div>
                    <div className="price">
                        <div>
                            $<span>{getTotalPrice(totalPrice)}</span>
                        </div>
                        <div style={{ marginLeft: '20px' }}>
                            (<span style={{ textDecoration: 'line-through' }}>${totalPrice}</span>)
                        </div>
                    </div>
                    <div className="category">{packages.category}</div>
                    <div className="subtitle">Package Detail</div>
                    <div className="detail">{packages.detail}</div>
                    <div className="subtitle">Selected Course</div>
                    <div className="coursebox box-cf">
                        <SelectedCourses courses={courses}></SelectedCourses>
                    </div>
                </div>
                <div className="cfbutton">
                    <div>
                        <button id="back-btn" className="backbutton" onClick={() => changePage(1)}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button
                            id="confirm-edit-btn"
                            disabled={loading}
                            className={`createbutton mgb-10 ${loading ? 'disabled' : ''}`}
                            onClick={handleOpenDialog}
                        >
                            Confirm and Update
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            <Dialog open={open}>
                         <div className="dialog">
                            <div className="indialog">
                                 <div className="right">
                                     <button id="close-btn" className="buttonX" onClick={() => router.push("/user/instructor/course")}>X</button>
                                 </div>
                                <div><img
                                    src="/images/package/edited.svg"
                                    style={{ width: 200, height: 200 }}
                                />
                                </div>

                                <div className="text-dialog">Your package is already updated !</div>
                            </div>
                        </div>
                    </Dialog>
            <style jsx>{style}</style>
        </Fragment>
    )
}
export default ConfirmEdit
