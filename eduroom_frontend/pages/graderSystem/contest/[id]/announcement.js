import React, { Fragment, useEffect, useState } from "react"
import { useRouter } from "next/router"
import Box from "../../../../components/graderSubmit/Box"
import Layout from "../../../../components/graderSubmit/Layout"
import style from "../../../../styles/graderSubmit/contests/contestPage/announcement/contestAnnouncementPage"
import ContestLayout from "../../../../components/graderSubmit/contests/ContestLayout"
import ContestAnnouncementList from "../../../../components/graderSubmit/contests/allList/ContestAnnouncementList"
import api from "../../../../api"

const contestAnnouncement = ({ id }) => {
  const [id, setId] = useState(null)
  const router = useRouter()
  useEffect(() => {
    const ID = router.query.id
    setId(ID)
  }, [])

  const [data, setData] = useState([])

  useEffect(() => {
    const GetData = async () => {
      console.log(id)
      const result = await api.get("api/grader/getContestAnnouncement", {
        params: { id },
      })
      setData(result.data)
      console.log(result.data)
    }
    GetData()
  }, [])

  return (
    <Fragment>
      <Layout page="contest">
        <div className="main">
          <div className="size">
            <Box>
              <ContestLayout page="announcement" id={id}>
                <center>
                  <h2>CONTEST ANNOUNCEMENTS</h2>
                </center>
                <div className="announcement-list">
                  <div className="flex-container">
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Admin
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Title
                    </div>
                    <div className="flex-item" style={{ flexBasis: "40%" }}>
                      Description
                    </div>
                    <div className="flex-item" style={{ flexBasis: "20%" }}>
                      Date
                    </div>
                  </div>
                  {data.map((element, key) => {
                    return (
                      <ContestAnnouncementList
                        title={element.title}
                        description={element.description}
                        name={element.displayname}
                        time={element.time}
                        key={key}
                      />
                    )
                  })}
                </div>
              </ContestLayout>
            </Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default contestAnnouncement
