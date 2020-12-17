import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import utils from '../../styles/course/utils';
import api from '../../api'
import GeneralNonav from '../../components/template/generalnonav'
import ForumBox from '../../components/forum/layout/forumBox'
import Link from 'next/link';
import SearchBar from '../../components/course/searchBar'

const Search = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const search = router.query.q
  useEffect(() => {
    getData(search)
  }, [search])
  const getData = (search) => {
    api
      .post('/api/course/search', { search })
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => { })
  }

  return (
    <Fragment>
      <GeneralNonav>

        <div className='bg-little-grey'>
          <div className='container'>

            {/* Categories Name */}
            <div className='text-center my-4'>
              <Link href={`/course`}><span className='text-lg text-secondary mx-4 font-quicksand pointer'>General</span></Link>
              <span className='text-lg text-secondary mx-4 font-quicksand pointer'>IT & Software</span>
              <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Design</span>
              <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Marketing</span>
              <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Business</span>
              <span className='text-lg text-secondary mx-4 font-quicksand pointer'>Other</span>
            </div>

            {/* Search bar and Categories select */}
            <div className='text-center my-6'>
              <SearchBar />
              <select className='font-quicksand cate-tab mx-4 pointer rounded-sss' placeholder="Categories">
                <option>Development</option>
                <option>Finance</option>
                <option>Music</option>
              </select>
            </div>
            {/* Box of each course */}
            <div className='text-center my-10'>
              {data.map((e, index) => (
                <Link href={`/course/${e.courseid}`}>
                  <div className='mx-6 my-6 box-1 bg-white inline-block shadow rounded-lg pointer'>
                    <div className="w-full h-60"><img className="pic-1" alt="python" src={`${e.coursepicture}`} width="100%" height="100%"></img></div>
                    <div className="w-full h-40 font-quicksand">
                      <div className="text-navy text-lg box-left my-4 mx-4 h-20">{e.coursename}</div>
                      <div className="text-secondary text-md box-left mx-4">{`${e.firstname}` + " " + `${e.lastname}`}</div>
                      <div className="text-navy text-lg box-left my-1 mx-4">$ {e.price}</div>
                    </div>
                  </div>
                </Link>
              ))}


            </div>
            <div style={{ background: '#F4F5F7' }}>
              <div>
                {data.map((el, index) => {
                  return (
                    <Fragment key={index}>
                      <ForumBox data={el} />
                    </Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </GeneralNonav>
      <style jsx>{utils}</style>
    </Fragment>
  )
}

export default Search
