import { useState, useEffect } from 'react'
import SearchIcon from './icons/SearchIcon'
import searchResult from './searchResult'

export default function seacrhChat(props) {
	return (
		<div>
			<div style={{ position: 'relative' }}>
				<SearchIcon
					style={{
						position: 'absolute',
						marginTop: 8,
						marginLeft: 8,
						opacity: 0.5,
						fontSize: 20,
					}}
				/>
				<input
					value={props.input}
					onChange={(e) => {
						props.setInput(e.target.value)
					}}
					className="search"
					style={{ paddingLeft: 35, width: '100%' }}
					placeholder="Search"
				/>
			</div>
			<style jsx>{`
				.search {
					color: #333;
					margin: 0 auto;
					padding: 0.5rem 1.5rem;
					border-radius: 0.2rem;
					background-color: rgb(255, 255, 255);
					border: none;
					display: block;
					border-bottom: 0.3rem solid transparent;
					transition: all 0.3s;
				}
				.search:focus {
					outline: none !important;
					box-shadow: 0 0 10px #719ece;
				}
			`}</style>
		</div>
	)
}
