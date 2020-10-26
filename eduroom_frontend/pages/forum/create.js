import React, { Fragment, useEffect, useState } from "react";
import api from "../../api";
import ForumBlock from "../../components/forum/forumBlock";
import Head from "next/head";
import { Container, Button, TextField,Input } from "@material-ui/core";
import {useRouter} from 'next/router';

const create = () => {
  const router = useRouter()
  const [createForm, setForm] = useState({
    title: "",
    cat: "",
    subcat: "",
    content: "",
  });
  const [alert, setAlert] = useState({
    title: false,
    cat: false,
    subcat: false,
    content: false,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const Category = ["Math", "Science", "Language", "etc."];
  const subCategory = {
    Math: [
      "Real Number",
      "Statistic",
      "Possibility",
      "Polynomial",
      "Exponential",
      "Calculus",
    ],
    Science: ["Physic", "Bio", "Chemistry"],
    Language: ["English", "Chinese", "French", "German"],
    "etc.": ["Other category"],
  };
  const [subCat, setSubCat] = useState([]);
  const handleSelect = (e) => {
    if(e.target.name == 'cat'){
        setSubCat(subCategory[e.target.value] ?? []);
    }
    setForm({ ...createForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if (validator()) {
      console.log(createForm);
      api.post('/api/forum/create',createForm).then(res=>{
        console.log(res)
        router.push('/forum')
      })
    } else {
      console.log("This form is not valid");
    }
  };
  const validator = () => {
    let keys = Object.keys(createForm);
    let temp = { ...alert };
    let check = true;
    for (let key of keys) {
      if (createForm[key] == "") {
        temp[key] = true;
        check = false;
      } else {
        temp[key] = false;
      }
    }
    setAlert(temp);
    return check;
  };

  // const ForumCreate = () => {
  // const [create, setCreate] = useState([])
  // useEffect(()=> {
  //     queryCreate()
  // },[])

  // const queryCreate = ()=> {
  //     api.get('/api/forum/create').then((res)=>{
  //         setCreate(res.data.data);
  //     })
  // }

  return (
    <Fragment>
      <Head>
        <title>Create Forum Form</title>
      </Head>
      <main>
        <Container>
          <form>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            <div className="sub"><div className="inner">
              <label>Title</label>
              <TextField
                name="title"
                type={"text"}
                placeholder={"enter your topic"}
                value={createForm.title}
                onChange={handleChange}
                error={alert.name}
              />
              {alert.name ? (
                <span style={{ color: "red", fontSize: "0.8em" }}>
                  topic is required
                </span>
              ) : null}
            </div></div>
            <div className="sub"><div className="inner">
              <label>Content</label>
              <TextField
                name="content"
                type={"text"}
                placeholder={"enter your content"}
                value={createForm.content}
                onChange={handleChange}
                error={alert.content}
              />
              {alert.content ? (
                <span style={{ color: "red", fontSize: "0.8em" }}>
                  content is required
                </span>
              ) : null}
            </div></div>
            <div className="sub"><div className="inner">
              <label>Category</label>
              <select
                name={"cat"}
                onChange={handleSelect}
                defaultValue="default"
              >
                <option disabled value="default">
                  --None--
                </option>
                {Category.map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {alert.cat ? (
                <span style={{ color: "red", fontSize: "0.8em" }}>
                  category is required
                </span>
              ) : null}
            </div></div>
            <div className="sub"><div className="inner">
              <label>Sub Category</label>
              <select
                name={"subcat"}
                defaultValue="default"
                onChange={handleSelect}
              >
                <option disabled value="default">
                  --None--
                </option>
                {subCat.map((el) => {
                  return (
                    <option value={el} key={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {alert.subCat ? (
                <span style={{ color: "red", fontSize: "0.8em" }}>
                  sub category is required
                </span>
              ) : null}
            </div></div>
            <div className="sub"><div className="inner">
              <Button
                variant={"outlined"}
                color={"primary"}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
            </div></div>
            
          </form>
        </Container>
      </main>
      <style jsx>
          {
              `
              .form{
                  display: flex;
                  text-align: center;
              }
              .sub {
                  display: flex;
                  width: 100%;
                  justify-content:center;
              }
              .inner {
                  width: 25%;
              }
              `
          }
      </style>
    </Fragment>
  );
};
export default create;
