import axios from "axios"

export const get = (url) => {
	return new Promise((resolve, reject) => {
		let token = localStorage.getItem('token')
		axios.get(url, {
			baseURL: 'https://api.sancellvarymay.com/',
			// baseURL: 'http://t2wxapi.sancell.top/',
			headers: {
				'Content-Type': 'application/json',
				'wx-token': token
			}
		}).then((respsonse) => {
			resolve(respsonse.data)
		}, err => {
			reject(err)
		})
	})
}