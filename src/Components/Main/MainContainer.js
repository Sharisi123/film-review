import Main from "./Main"
import React from "react"
import { connect } from "react-redux"
import { getPostsTC } from "../../Redux/pageReducer"
import Loader from "../../UI/Loader/Loader"
class MainContainer extends React.Component {
	async componentDidMount() {
		this.props.getPostsTC()
	}

	render() {
		return (
			<>
				{this.props.posts === null ? (
					<Loader />
				) : (
					<Main posts={this.props.posts} />
				)}
			</>
		)
	}
}
let mapStateToProps = (state) => ({
	posts: state.page.posts,
})

export default connect(mapStateToProps, { getPostsTC })(MainContainer)
