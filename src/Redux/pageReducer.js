import { pageAPI } from "../DLL/firestore"

const SET_POSTS = "SET_POSTS"
const CHANGE_HAS_ACCOUNT = "CHANGE_HAS_ACCOUNT"
const SET_USER = "SET_USER"

let initialState = {
	posts: null,
	hasAccount: false,
	user: null,
}

let pageReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.posts,
			}
		case CHANGE_HAS_ACCOUNT:
			return {
				...state,
				hasAccount: action.hasAccount,
			}
		case SET_USER:
			return {
				...state,
				user: action.user,
			}
		default:
			return state
	}
}
export const changeHasAccount = (hasAccount) => ({
	type: CHANGE_HAS_ACCOUNT,
	hasAccount,
})
export const setPosts = (posts) => ({ type: SET_POSTS, posts })
export const getPostsTC = () => (dispatch) => {
	pageAPI.getPosts().then((res) => dispatch(setPosts(Object.values(res.data))))
}
export const setUserInState = (user) => ({ type: SET_USER, user })

export default pageReducer
