const getSubmissionStatus = (id) => {
	switch (id) {
		case 1:
			return 'Pending'
		case 2:
			return 'Pending'
		case 3:
			return 'Accepted'
		case 4:
			return 'Wrong Answer'
		case 5:
			return 'Time Limit Exceeded'
		case 6:
			return 'Compilation Error'
		case 13:
			return 'Internal Error'
		case 99:
			return 'Memory Limit Exceeded'
		default:
			return 'Runtime Error'
	}
}

const getLanguageId = (lang) => {
	switch (lang) {
		case 'Java':
			return 62
		case 'C':
			return 50
		case 'C++':
			return 54
		case 'Python 3':
			return 71
		case 'Python 2':
			return 70
		default:
			return 62
	}
}

module.exports = {
    getLanguageId,
    getSubmissionStatus
}