import React, { Fragment, useState } from "react"
import Item from "./item"
import Link from "next/link"
import style from "../../../styles/layout/sidebar"
import Image from "next/image"
const SideNav = () => {
  const items = [
    {
      icon: "landing",
      text: "Landing",
      link: "/",
    },
    {
      icon: "private",
      text: "Private Tutor",
      link: "/tutor",
    },
    {
      icon: "learning",
      text: "Learning Path",
      link: "/learningpath",
    },
    {
      icon: "course",
      text: "Course",
      link: "/course",
    },
    {
      icon: "forum",
      text: "Forum",
      link: "/forum",
    },
    {
      icon: "support",
      text: "Support",
      link: "/supprt",
    },
    {
      icon: "message",
      text: "Message",
      link: "/chat",
    },
    {
      icon: "coin",
      text: "Coin & Sticker",
      link: "/coin-shop",
    },
    {
      icon: "coupon",
      text: "Coupon",
      link: "/user/coupon",
    },
    {
      icon: "edqiz",
      text: "Edqiz",
      link: "/edqiz",
    },
    {
      icon: "grader",
      text: "Grader",
      link: "/graderSystem",
    },
    {
      icon: "calendar",
      text: "Calendar",
      link: "/calendar",
    },
    {
      icon: "cert",
      text: "Certificate",
      link: "/user/certificates",
    },
    {
      icon: "setting",
      text: "Setting",
      link: "/user/edit",
    },
  ]
  const [expand, setExpand] = useState(false)
  const handleExpand = () => {
    document.getElementById("side-nav").style.width = "16%"
    setExpand(true)
  }
  const handleReduce = () => {
    document.getElementById("side-nav").style.width = "5%"
    setExpand(false)
  }
  return (
    <Fragment>
      <div id="side-nav">
        <Link href="/">
          <div className={expand ? "side-icon expand" : "side-icon"}>
            <Image
              src="/images/sidenav/eduroom_logo.svg"
              alt="eduroom_logo"
              width="41"
              height="46"
            />
          </div>
        </Link>
        <div className="side-nav-list" onMouseLeave={handleReduce}>
          {items.map((el) => {
            return (
              <Item
                key={el.text}
                data={el}
                isExpand={expand}
                expand={handleExpand}
                reduce={handleReduce}
              />
            )
          })}
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  )
}
export default SideNav
