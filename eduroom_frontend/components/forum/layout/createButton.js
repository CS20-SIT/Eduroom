import React, { Fragment } from 'react'
const CreateButton = () => {
	return (
		<Fragment>
			<button className="createButton">
				<span className="createButtonText">
                    <i className="fas fa-plus" />
                    <span className="createText">ADD FORUM</span>
                </span>
			</button>
            <style jsx>
                {
                    `
                    .createButton {
                        background: #fe75b7;
                        border-radius: 25px;
                        padding: 0.5rem 1.5rem;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        transition: 0.25s;
                        margin-left: 1.5rem;
                    }
                    .createButtonText{
                        color:white;
                        font-weight: 600;
                        font-size: 1rem;
                    }
                    .createText {
                        margin-left: .5rem;
                    }
                    `
                }
            </style>
		</Fragment>
	)
}
export default CreateButton
