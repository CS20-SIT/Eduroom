import React, { Fragment } from 'react'

const SearchBar = () => {
	return (
		<Fragment>
			<div className="forumSearch">
				<i className="fas fa-search searchIcon" />
				<input className="searchBox" type="text" placeholder="Search" />
			</div>
			<style jsx>
				{`
					.forumSearch {
						background: white;
						padding: 0.75rem 1rem;
						border-radius: 10px;
						display: flex;
                        align-items: center;
                        flex: 1;
					}
					.searchIcon {
						color: rgba(17, 17, 17, 0.48);
						font-size: 0.85rem;
					}
					.searchBox {
						background: none;
						border: none;
						outlined: none;
						padding-left: 0.75rem;
                        flex: 1;
                        color: rgba(17,17,17,0.48);
                        font-weight:600;
                    }
                    .searchBox::placeholder {
                        color: rgba(17,17,17,0.48);
                    }
				`}
			</style>
		</Fragment>
	)
}
export default SearchBar
