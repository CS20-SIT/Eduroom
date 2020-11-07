import React, { Fragment } from "react"
import Head from "next/head"
import Layout from "../../../components/graderSubmit/Layout"
import Box from "../../../components/graderSubmit/Box"
import style from "../../../styles/graderSubmit/problems/problems"
import Tag from "../../../components/graderSubmit/problems/ProblemTag"
import ProblemList from "../../../components/graderSubmit/problems/ProblemList"

const Problems = () => {
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
                  <ProblemList id={1} />
                  <ProblemList id={2} />
                  <ProblemList id={3} />
                  <ProblemList id={4} />
                  <ProblemList id={5} />
                  <ProblemList id={6} />
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
