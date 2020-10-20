import React, { Fragment } from 'react'
import ProductSticker_Render from './ProductSticker_Render'
import style from '../../styles/CoinStyles/list_of_sticker'

const ListSticker = (props) => {
  const renderList = () => {
    const stickers = props.item.map((item, index) => {
      return (
        <ProductSticker_Render
          title={item.title}
          price={item.price}
          index={index}
          id={item.id}
          key={item.id}
        ></ProductSticker_Render>
      )
    })
    return stickers
  }
  return (
    <Fragment>
      <div className="sticker_list">{renderList()}</div>
      <style jsx>
          {
              style
          }
      </style>
    </Fragment>
  )
}
export default ListSticker
