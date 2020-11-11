import { Fragment } from "react"
import style from "../../../styles/graderSubmit/problems/problemNav"
import Link from "next/link"

const ProblemNav = (props) => {
  const menus = [
    {
      text: "Description",
      link: `/graderSystem/problem/${props.id}`,
      page: "description",
    },
    {
      text: "Solution",
      link: `/graderSystem/problem/${props.id}/solution`,
      page: "solution",
    },
    {
      text: "Discuss",
      link: `/graderSystem/problem/${props.id}/discussion`,
      page: "discussion",
    },
    {
      text: "Submission",
      link: `/graderSystem/problem/${props.id}/submission`,
      page: "submission",
    },
    {
      text: "",
      link: "",
      page: "empty",
    },
  ]

  const getClass = (text) => {
    if (text.toLowerCase() === props.page.toLowerCase()) {
      return "link active box-active"
    } else if (text.toLowerCase() === "empty") {
      return "link box empty"
    } else {
      return "link box"
    }
  }

  return (
    <Fragment>
      <div className="nav">
        {menus.map((menu, idx) => {
          return (
            <div className={getClass(menu.page)} key={idx}>
              <Link href={menu.link}>{menu.text}</Link>
            </div>
          )
        })}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}

export default ProblemNav
