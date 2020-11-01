import React, { Fragment, useState, useEffect } from 'react'
import Link from 'next/link'
import axios from 'axios'
const User = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    }
    fetchData()
  }, [])
  const [user, setUser] = useState({
    firstname: 'First',
    lastname: 'Last',
    initial: '',
    birthDate: '01/01/43',
    phoneNo: '0900000000',
    countryCode: '001',
    displayName: 'SomeName',
    bio: '',
    avatar: '',
    updateAt: '',
  })
  return (
    <Fragment>
      Name: {user.firstname} {user.lastname}
      <br></br>
      Display Name: {user.displayName}
      <br></br>
      Birthdate: {user.birthDate}
      <br></br>
      PhoneNo: {user.phoneNo}
      <br></br>
      <button>
        <Link href="/user/edit">Edit</Link>
      </button>
    </Fragment>
  )
}
export default User
