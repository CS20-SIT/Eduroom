import React, { Fragment, useState, useEffect } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"
import Box from "../../../components/graderSubmit/Box"
import style from "../../../styles/graderSubmit/problems/problems"
import Tag from "../../../components/graderSubmit/problems/ProblemTag"
import ProblemList from "../../../components/graderSubmit/problems/ProblemList"
import axios from "axios"

const Problems = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const GetData = async () => {
      const result = await axios(
        "http://localhost:5000/api/grader/getPreviewQuestion"
      )
      setData(result.data)
      console.log(data)
    }
    GetData()
  }, [])
  return (
    <Fragment>
      <Head>
        <title>Problems</title>
        <meta property="og:title" content="Problems" key="Problems" />
      </Head>
      <Layout page="problem">
        <div className="container">
          <div className="main">
            <div className="size">
              <Box>
                <h2>Problem List</h2>
                <div className="problem-list">
                  {data.map((element) => {
                    return (
                      <ProblemList
                        id={element.id}
                        title={element.title}
                        description={element.description}
                        difficulty={element.difficulty}
                      />
                    )
                  })}
                </div>
              </Box>
            </div>
          </div>
          <div className="tag">
            <div className="size">
              <Box>
                <h2>Tags</h2>
                <div className="tag-list">
                  <Tag>Hard</Tag>
                  <Tag>Easy</Tag>
                  <Tag>Very Hard</Tag>
                  <Tag>Impossible</Tag>
                  <Tag>Challenging</Tag>
                  <Tag>God</Tag>
                  <Tag>Unsolvable</Tag>
                  <Tag>Test</Tag>
                  <Tag>Apple</Tag>
                  <Tag>Interview</Tag>
                  <Tag>Google</Tag>
                  <Tag>Doom</Tag>
                  <Tag>Exam</Tag>
                  <Tag>AI</Tag>
                  <Tag>OI</Tag>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default Problems
