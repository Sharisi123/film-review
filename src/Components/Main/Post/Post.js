import "./Post.css"

const Post = ({ item }) => {
	return (
		<li className="post-item">
			<div className="post-info">
				<h2 className="post-title">{item.title}</h2>
				<h2 className="post-desctiption">Описание:</h2>
				<p className="post-text"> {item.shortText}</p>
				<p className="post-mark">Оценка: {item.mark}</p>
				<p className="post-author">
					Автор: {item.author ? item.author : "admin"}
				</p>
			</div>
			<div className="post-img">
				<img src={item.img} alt="Картинка поста" />
			</div>
		</li>
	)
}

export default Post
