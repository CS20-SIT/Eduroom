import React, { Fragment } from 'react';
import Head from 'next/head';
import Box from '../../../components/graderSubmit/Box';
import Layout from '../../../components/graderSubmit/Layout';

const Announcement = () => {
  return (
    <Fragment>
      <Head>
        <title>Announcements</title>
        <meta property="og:title" content="Announcements" key="Announcements" />
      </Head>
      <Layout page={'0'}>
        <Box>This is an announcement Page</Box>
      </Layout>
    </Fragment>
  );
};
export default Announcement;
