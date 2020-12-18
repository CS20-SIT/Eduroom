// import React, { Fragment, useEffect, useState} from 'react'
// import utils from '../../styles/course/utils'
// import { useRouter } from 'next/router'
// const SearchBar = () => {
// 	const router = useRouter()
// 	const [search, setSearch] = useState('')
// 	const searchVal = router.query.q;
// 	useEffect(()=>{
// 		if(searchVal){
// 			setSearch(searchVal)
// 		}
// 	},[searchVal])
// 	const handleChangeSearch = (e)=>{
// 		setSearch(e.target.value)
// 	}
// 	const handleEnter = (e)=>{
// 		if(e.key == 'Enter'){
// 			router.push(`/package/search?q=${search}`);
// 		}
// 	}
// 	return (
// 		<Fragment>
// 			<input className='font-quicksand input-tab mx-4 rounded-sss' type="text" placeholder="What do you want to learn?"  value={search} onChange={handleChangeSearch} onKeyUp={handleEnter}></input>
// 			<style jsx>{utils}</style>
// 		</Fragment>
// 	)
// }
// export default SearchBar
