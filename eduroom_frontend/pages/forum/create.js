import React, { Fragment, useEffect, useState } from 'react'
import { Paper } from '@material-ui/core'
import api from '../../api'
import ForumBlock from '../../components/forum/forumBlock'
import Head from 'next/head'
import searchForum from '../../components/forum/searchForum'
import SideNav from '../../components/layouts/sidenav/sidenav'
import NavForum from '../../components/forum/searchForum'
import style from '../../styles/forum/showForum'
import CreateBlock from '../../components/forum/CreateBlock'
import GeneralNoNav from '../../components/template/generalnonav'
import {
  Container,
  Button,
  TextField,
  Input,
  TextareaAutosize,
} from '@material-ui/core'
import { useRouter } from 'next/router'

const create = () => {
  const router = useRouter()

  return (
    <Fragment>
      <GeneralNoNav>
        <div
          style={{
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'space-between',
            background: '#EFF0F6',
          }}
        >
          <div id="nav">
            <NavForum />
            <div className="content">
              <strong className="topic">CREATE FORUM</strong>
            </div>
            <CreateBlock />
          </div>

          <style jsx>{style}</style>
          <style jsx>
            {`
              #nav {
                width: 100%;
              }
              .form {
                display: flex;
                text-align: center;
              }
              .sub {
                display: flex;
                width: 100%;
                justify-content: center;
              }
              .inner {
                width: 25%;
              }
              .paper {
                margin: 5%;
              }
            `}
          </style>
        </div>
      </GeneralNoNav>
    </Fragment>
  )
}
export default create
