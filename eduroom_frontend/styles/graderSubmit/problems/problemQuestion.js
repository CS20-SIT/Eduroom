import css from 'styled-jsx/css'
export default css`
	.box {
		display: flex;
		font-weight: bold;
		margin-right: 1.5%;
		padding-right: 1rem;
		padding-top: 10px;
		border-right: 2px solid rgba(91, 91, 91, 0.1);
	}
	.title,
	.tag {
		padding-left: 15px;
		padding-bottom: 15px;
		margin-bottom: 15px;
		border-bottom: 2px solid rgba(91, 91, 91, 0.1);
	}
	.title {
		color: #5b5b5b;
		width: fit-content;
	}
	.tag {
		color: #a27cef;
		display: inherit;
		width: fit-content;
		justify-content: flex-end;
	}
	.description-box {
		height: 90%;
		color: #828282;
		overflow: auto;
		padding: 0 20px 20px 20px;
		margin-right: 1.5%;
		padding-right: 1rem;
		border-right: 2px solid rgba(91, 91, 91, 0.1);
	}
	b {
		color: #5b5b5b;
	}
	.title {
		display: flex;
	}
	.admin-name {
		font-weight: 200;
		color: #828282;
		margin-left: 0.5rem;
	}
	.question-description {
		padding-bottom: 1rem;
	}
	.constraints-title,
	.constraints-limit {
		display: flex;
	}
	.constraints-title {
		margin-bottom: 0.5rem;
	}
	.constraints-limit {
		margin-bottom: 1rem;
	}

	.c1,
	.c2,
	.c3 {
		font-weight: bold;
		padding-bottom: 0.25rem;
		border-bottom: solid 2px rgba(130, 130, 130, 0.2);
	}
	.des-title {
		color: #5b5b5b;
		font-weight: bold;
		margin-bottom: 0.25rem;
	}
	.des-data {
		padding-left: 1rem;
	}
	.sub-box {
		margin-bottom: 1rem;
	}
	. ::-webkit-scrollbar {
		width: 8px; /* width of the entire scrollbar */
	}
	::-webkit-scrollbar-track {
		background: transparent; /* color of the tracking area */
	}
	::-webkit-scrollbar-thumb {
		background: rgba(189, 189, 189, 0.7); /* color of the scroll thumb */
		border-radius: 50px; /* roundness of the scroll thumb */
	}
`
