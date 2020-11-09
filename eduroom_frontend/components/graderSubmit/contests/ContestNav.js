import { Fragment } from "react"
import style from "../../../styles/graderSubmit/contestNav"
import Link from "next/link"

const ContestNav = (props) => {
  const menus = [
    {
      text: "Overview",
      link: `/graderSystem/contest/${props.id}`,
      page: "overview",
    },
    {
      text: "Announcements",
      link: `/graderSystem/contest/${props.id}/announcement`,
      page: "announcement",
    },
    {
      text: "Problems",
      link: `/graderSystem/contest/${props.id}/problem`,
      page: "problem",
    },
    {
      text: "Submission",
      link: `/graderSystem/contest/${props.id}/submission`,
      page: "submission",
    },
    {
      text: "Ranking",
      link: `/graderSystem/contest/${props.id}/rank`,
      page: "rank",
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

export default ContestNav
