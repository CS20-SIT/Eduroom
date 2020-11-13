import React, { Fragment } from "react"
import style from "../../../styles/graderSubmit/problems/problemQuestion"

const ProblemQuestion = (props) => {
  return (
    <Fragment>
      <div className="box">
        <div className="title" style={{ flex: "1" }}>
          1. Question name
        </div>
        <div className="tag" style={{ flex: "0.5" }}>
          Easy
        </div>
      </div>
      <div className="description">
        <div className="text">
          Given an array of integer nums and integer target, return indices of
          <br />
          <br />
          the two numbers such that they add up to target. You may assume that
          <br />
          <br />
          each input would have exacly one solution, and you may not use the
          <br />
          <br />
          same element twice You can return the answer in any order.
          <br />
          <br />
          <b>Example 1</b>
          <br />
          Input : num = [ 2, 7, 11, 15 ] , target = 9<br />
          Output : [ 0, 1 ]<br />
          Output : bacause nums[0] + nums[1] == 9, we return [ 0, 1 ].
          <br />
          <br />
          <b>Example 2</b>
          <br />
          Input : num = [3, 2, 4], target = 6<br />
          Output : [1, 2]
          <br />
          <br />
          <b>Constrains</b>
          <br />
          Input : num = [ 2, 7, 11, 15 ] , target = 9<br />
          Output : [ 0, 1 ]<br />
          Output : bacause nums[0] + nums[1] == 9, we return [ 0, 1 ].
          <br />
          <br />
          <b>Test Cases</b>
          <br />
          1 2
          <br />
          3 4
          <br />
          5 6
          <br />
          7 8
          <br />
          9 10
          <br />
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ProblemQuestion
