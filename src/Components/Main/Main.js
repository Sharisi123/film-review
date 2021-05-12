import "./Main.css"
import Post from "./Post/Post"

const Main = (props) => {
	return (
		<div className="main">
			<ul className="posts">
				{props.posts.map((item) => {
					return <Post item={item} key={item.img} />
				})}
			</ul>
		</div>
	)
}

export default Main
