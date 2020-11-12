import { Fragment, useState } from 'react';
import InputText from '../../utils/InputText';
import Image from 'next/image';
import api from '../../../api';

const Register = () => {
  const [data, setData] = useState({
    degree: {
      label: 'Degree',
      name: 'degree',
      type: 'text',
      errorText: 'Degree is required',
      placeholder: '',
      error: false,
      value: '',
    },

    expert: {
      label: 'Expert',
      name: 'expert',
      type: 'text',
      errorText: 'Expert is required',
      placeholder: '',
      error: false,
      value: '',
    },

    bio: {
      label: 'Bio',
      name: 'bio',
      type: 'text',
      errorText: 'Bio is required',
      placeholder: '',
      error: false,
      value: '',
    },
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (body) => {
    setLoading(true);
    const res = await api.post('/api/instructor/register', body);
    console.log(res.data);
    setLoading(false);
  };
  
  const handleChange = (e) => {
    let temp = { ...data };
    temp[e.target.name].value = e.target.value;
    setData(temp);
  };

  const handleClick = (e) => {
    let temp = { ...data };
    let i = -1;
    Object.keys(temp).map((el) => {
      if (temp[el].value == '') {
        temp[el].error = true;
        if (i == -1) {
          i = el;
        }
      } else {
        temp[el].error = false;
      }
    });
    if (i != -1) {
      document.getElementsByName(data[i].name)[0].focus();
    } else {
      const formData = {};
      Object.keys(temp).map((el) => {
        formData[el] = temp[el].value;
      });
      handleSubmit(formData);
    }
    setData(temp);
  };

  return (
    <Fragment>
      <div style={{ padding: '0 50px' }}>
        <h1 style={{ color: '#3D467F' }}>INSTRUCTOR REGISTER</h1>
        <div className="container">
          <Image
            className="login-page-img"
            alt="login-page-img"
            src="/images/instructor/register.svg"
            width="544"
            height="450"
          />
          <div className="box">
            <form onSubmit={(e) => e.preventDefault()}>
              {Object.keys(data).map((el) => {
                return (
                  <InputText
                    key={data[el].name}
                    label={data[el].label}
                    name={data[el].name}
                    placeholder={data[el].placeholder}
                    error={data[el].error}
                    type={data[el].type}
                    value={data[el].value}
                    errorText={data[el].errorText}
                    handleChange={handleChange}
                    style={{ padding: '3.5%', margin: '6px 0' }}
                  />
                );
              })}
            </form>
            <div style={{ textAlign: 'center', paddingTop: '20px' }}>
              <button
                className={`submit ${loading ? 'disable' : ''}`}
                onClick={handleClick}
                disabled={loading}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: space-evenly;
          }
          .box {
            width: 50%;
            background: #ffffff;

            box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.25);
            border-radius: 25px;
            padding: 60px;
          }
          .submit {
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
          .submit:hover {
            cursor: pointer;
          }
          .disable {
            opacity: 0.9;
          }
          .disable:hover {
            cursor: default;
          }
        `}
      </style>
    </Fragment>
  );
};

export default Register;
