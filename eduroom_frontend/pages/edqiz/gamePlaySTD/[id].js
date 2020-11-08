import React, { Fragment } from 'react'
import GamePage from '../../../components/edqiz/STDGame'
import GeneralNoSide from "../../../components/template/generalnoside";
const Content = (id) => {
  return (
    <Fragment>
      <GeneralNoSide>
      <GamePage id={id}/>
      </GeneralNoSide>
    </Fragment>
  )
}
export default Content
export async function getServerSideProps(ctx) {
  try {
    const id = ctx.query.id;
    return { props: { id } };
  } catch (err) {
    return { props: { id: "" } };
  }
}