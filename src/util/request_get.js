import axios from "axios"

export const get = (url) => {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			baseURL: 'https://api.sancellvarymay.com/',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((respsonse) => {
			resolve(respsonse.data)
		}, err => {
			reject(err)
		})
	})
}