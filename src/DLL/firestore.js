import * as axios from "axios"

const instance = axios.create({
	baseURL: "https://stas-base-default-rtdb.europe-west1.firebasedatabase.app/",
})

export let pageAPI = {
	getPosts() {
		return instance.get("-MZmCjb4QXkV2wpRu-MB.json")
	},
	setPosts(data) {
		return instance.post("-MZmCjb4QXkV2wpRu-MB.json", data)
	},
}
