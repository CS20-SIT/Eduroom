import React, { Fragment, useState } from 'react'
import Icon from './icons/landing'
const Item = ({ data, expand, isExpand }) => {
  const [hover,setHover] = useState(false);
  return (
    <Fragment>
      <div className="side-item">
        <div className="side-item-expand"
            onMouseLeave={() => {
              setHover(false)
            }}
            onMouseEnter={() => {
              expand()
              setHover(true)
            }}>
          <div
            className={isExpand?"side-icon-expand expand":"side-icon-expand"}
          >
            <Icon isHover={hover} icon={data.icon}/>
          </div>
          {isExpand ? (
            <Fragment>
              <div className={hover?"side-text hover":"side-text"}>{data.text}</div>
            </Fragment>
          ) : null}
        </div>
      </div>
      <style jsx>
        {`
          .side-item {
            align-items: center;
            justify-content: center;
            display: flex;
            cursor: pointer;
          }
          .side-item-expand {
            display: flex;
            flex: 1 1 auto;
          }
          .side-icon-expand.expand {
            width: 72px;
          }
          .side-icon-expand {
            width: 72px;
            padding: 1% 0%;
            justify-content: center;
            display:flex;
          }
          .side-text {
            display:flex;
            justify-content: center;
            align-items: center;
            padding-left: 8px;
            color: #9593A0;
            font-weight: 500;
          }
          .side-text.hover {
            color: #A880F7;
            font-weight: bold;
          }
        `}
      </style>
    </Fragment>
  )
}
export default Item
