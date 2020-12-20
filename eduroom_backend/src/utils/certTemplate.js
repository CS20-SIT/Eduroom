exports.certificateTemplate = ()=>`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet">
  </head>
  <body>
    <div class="certificate">
      <div class="head">
        <div class="date">{{finishdate}}</div>
      </div>
      <div class="info">
        <div class="title">CERTIFICATE</div>
        <div class="subTitle">this certificate is present to</div>
        <div class="name">{{firstname}} {{lastname}}</div>
        <div class="text">
          has successfully complete from <b>"{{coursename}}"</b> course
        </div>
      </div>
    </div>
    <style>
      .certificate {
        background-image: url('https://eduroom.cscms.me/images/certificate_background.png');
        width: 707px;
        height: 500px;
        background-size: auto;
        background-repeat: no-repeat;
        font-family: 'Quicksand';
        background-position-y: bottom;
        display: flex;
        flex-flow: column;
        cursor: default;
        border: 1px solid black;
        background: #F4F5F7;
      }
      .head {
        padding-top: 24px;
        padding-right: 24px;
        height: fit-content;
        text-align: right;
      }
      .info {
        width: 100%;
        text-align: center;
        flex: 1;
        display: flex;
        flex-flow: column;
        justify-content: center;
        padding-bottom: 96px;
      }
      .date {
        font-size: 0.9em;
        font-weight: 500;
        color: #3d467f;
      }
      .title {
        color: #3d467f;
        font-size: 2em;
        font-weight: bold;
        letter-spacing: 7px;
        padding: 20px 0;
      }
      .subTitle {
        font-size: 1.2em;
        color: #3d467f;
        padding: 12px 0;
      }
      .text {
        font-size: 1em;
        color: #3d467f;
        padding-top: 24px;
        font-weight: 400;
      }
      .name {
        padding: 12px 0;
        background: white;
        font-size: 1.8em;
        color: #fb9ccb;
        text-transform: uppercase;
        font-weight: bold;
      }
    </style>
  </body>
</html>
`

exports.certificateStyle = `.certificate {
  background-image: url('https://eduroom.cscms.me/images/certificate_background.png');
  width: 707px;
  height: 500px;
  background-size: auto;
  background-repeat: no-repeat;
  font-family: 'Quicksand';
  background-position-y: bottom;
  display: flex;
  flex-flow: column;
  cursor: default;
  border: 1px solid black;
  background: #F4F5F7;
  }
  .head {
  padding-top: 24px;
  padding-right: 24px;
  height: fit-content;
  text-align: right;
  }
  .info {
  width: 100%;
  text-align: center;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding-bottom: 96px;
  }
  .date {
  font-size: 0.9em;
  font-weight: 500;
  color: #3d467f;
  }
  .title {
  color: #3d467f;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 7px;
  padding: 20px 0;
  }
  .subTitle {
  font-size: 1.2em;
  color: #3d467f;
  padding: 12px 0;
  }
  .text {
  font-size: 1em;
  color: #3d467f;
  padding-top: 24px;
  font-weight: 400;
  }
  .name {
  padding: 12px 0;
  background: white;
  font-size: 1.8em;
  color: #fb9ccb;
  text-transform: uppercase;
  font-weight: bold;
  }`