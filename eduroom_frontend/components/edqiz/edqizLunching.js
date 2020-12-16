import React, { Fragment, useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import EdqizText from './edqizText';
import style from '../../styles/edqiz/landing';
import api from '../../api';

const Page3 = (props) => {
  const router = useRouter();
  const [room, setRoom] = useState(null);
  
  const fetchData = async () => {
    const res = await api.get('/api/kahoot/rooms');
    setRoom(res.data[router.query.id-1])
    console.log('resdata',room)
  };
  useEffect(() => {
    fetchData();
  },[]);
  useEffect(() => {
    console.log('resdata',room)
    
  },[room]);
  const renderQuizName=()=>{
    if(room!=null)
  return <div>{room.name}</div>
  }
  return (
    <Fragment>
      <div className="landing">
        <div className="landing-content">
          <div className="col-12">
            <div className="landing-title">
              <EdqizText type="edqiz" />
            </div>
            <div className="landing-title">
              <div
                style={{ fontWeight: 600, fontSize: '2rem', color: '#3D467F' }}
              >
                {' '}
                Quiz name
              </div>
            </div>
            <div className="row">
              <div
                style={{
                  backgroundColor: '#EFF0F6',
                  height: '8vh',
                  width: '25vw',
                  borderRadius: '1rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 600,
                  fontSize: '1.5rem',
                  color: '#5B5B5B',
                }}
              >
                {renderQuizName()}
                {/* query database by using id */}
              </div>
            </div>
            <div className="row">
              <button
                className="landing-button"
                onClick={() =>
                  router.push(`/edqiz/waitingRoom/${room.id}`)
                }
              >
                <span className="landing-button-text">Launch {'>'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default Page3;
