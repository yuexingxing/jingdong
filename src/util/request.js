import axios from "axios"

export const post = (url, data = {}) => {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
			baseURL: 'https://api.sancellvarymay.com/',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((respsonse) => {
			resolve(respsonse)
		}, err => {
			reject(err)
		})
	})
}