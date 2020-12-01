import Edqiz from '../../../components/edqiz/edqizLunching';
import React, { Fragment, useState } from 'react';
import GeneralNoSide from '../../../components/template/generalnoside';

const Content = ({ id }) => {
  return (
    <Fragment>
      <GeneralNoSide>
        <Edqiz id={id} />
      </GeneralNoSide>
    </Fragment>
  );
};

export async function getServerSideProps(ctx) {
  try {
    const id = ctx.query.id;
    return { props: { id } };
  } catch (err) {
    return { props: { id: '' } };
  }
}

export default Content;
