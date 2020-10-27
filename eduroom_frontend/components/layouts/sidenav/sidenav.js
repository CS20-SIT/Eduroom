import React, { Fragment, useState } from 'react'
import Item from './item'
const SideNav = () => {
  const items = [
    {
      icon: 'landing',
      text: 'Landing',
    },
    {
      icon: 'private',
      text: 'Private Tutor',
    },
    {
      icon: 'learning',
      text: 'Learning Path',
    },
    {
      icon: 'course',
      text: 'Course',
    },
    {
      icon: 'forum',
      text: 'Forum',
    },
    {
      icon: 'support',
      text: 'Support',
    },
    {
      icon: 'message',
      text: 'Message',
    },
    {
      icon: 'coin',
      text: 'Coin & Sticker',
    },
    {
      icon: 'coupon',
      text: 'Coupon',
    },
    {
      icon: 'edqiz',
      text: 'Edqiz',
    },
    {
      icon: 'grader',
      text: 'Grader',
    },
    {
      icon: 'calendar',
      text: 'Calendar',
    },
    {
      icon: 'cert',
      text: 'Certificate',
    },
    {
      icon: 'setting',
      text: 'Setting',
    },
  ]
  const [expand, setExpand] = useState(false)
  const handleExpand = () => {
    setExpand(true)
  }
  const handleReduce = () => {
    setExpand(false)
  }
  return (
    <Fragment>
      <div id="side-nav">
        <div className="side-icon">
          <img src="/images/sidenav/eduroom_logo.svg" />
        </div>
        <div className="side-nav-list" onMouseLeave={handleReduce}>
          {items.map((el) => {
            return (
              <Item
                data={el}
                isExpand={expand}
                expand={handleExpand}
                reduce={handleReduce}
              />
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          #side-nav {
            width: 16%;
            background: white;
            transition: 0.5s;
            padding: 1% 0% 0% 1%;
          }
          .side-icon {
            justify-content: center;
            width: 30%;
            display: flex;
            padding: 2%;
            cursor: pointer;
          }
          .side-nav-list {
            display: flex;
            flex-flow: column;
            height: 100%;
            justify-content: space-evenly;
          }
        `}
      </style>
    </Fragment>
  )
}
export default SideNav
