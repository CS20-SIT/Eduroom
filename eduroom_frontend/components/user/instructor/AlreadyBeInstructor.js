import { Fragment } from 'react';
import Link from 'next/link';

const AlreadyBeInstructor = () => {
  return (
    <Fragment>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h1>You already be a instructor</h1>
          <Link href="/user/instructor">
            <button className="back">Back</button>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 90vh;
            position: fixed;
          }
          .back {
            padding: 10px 25px;
            background-color: #3d467f;
            border-radius: 30px;
            border: none;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px;
            outline: none;
          }
          .back:hover {
            cursor: pointer;
          }
        `}
      </style>
    </Fragment>
  );
};

export default AlreadyBeInstructor;
