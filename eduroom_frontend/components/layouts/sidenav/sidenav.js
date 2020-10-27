import React, { Fragment, useState } from 'react'
import Item from './item'
import Link from 'next/link'
import style from '../../../styles/layout/sidebar'
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
    document.getElementById('side-nav').style.width = '16%'
    setExpand(true)
  }
  const handleReduce = () => {
    document.getElementById('side-nav').style.width = '5%'
    setExpand(false)
  }
  return (
    <Fragment>
      <div id="side-nav">
        <Link href="/">
          <div className={expand ? 'side-icon expand' : 'side-icon'}>
            <img src="/images/sidenav/eduroom_logo.svg" />
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
