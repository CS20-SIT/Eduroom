import React, { Fragment, useState, useEffect } from "react"
import Head from "next/head"
import style from "../../../styles/graderSubmit/contests/contestPage"
import Box from "../../../components/graderSubmit/Box"
import Layout from "../../../components/graderSubmit/Layout"
import ContestHeader from "../../../components/graderSubmit/contests/ContestPageHeader"
import ContestList from "../../../components/graderSubmit/contests/ContestPageList"
import api from "../../../api"

const Contests = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const GetData = async () => {
      const result = await api.get("api/grader/getPreviewContest")
      setData(result.data)
    }
    GetData()
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Contests</title>
        <meta property="og:title" content="Contests" key="Contests" />
      </Head>
      <Layout page="contest">
        <div className="main">
          <div className="size">
            <Box>
              <ContestHeader>
                {data.map((element, key) => {
                  return (
                    <ContestList
                      id={element.conno}
                      title={element.title}
                      conruletype={element.conruletype}
                      starttime={element.starttime}
                      endtime={element.endtime}
                      status={element.status}
                      key={key}
                    />
                  )
                })}
              </ContestHeader>
            </Box>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Contests
