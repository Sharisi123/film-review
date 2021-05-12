import axios from "axios"
import { useState } from "react"
import { connect } from "react-redux"
import "./AddPost.css"

const AddPost = ({ user }) => {
	let [input1, setInput1] = useState("")
	let [input2, setInput2] = useState("")
	let [input3, setInput3] = useState("")
	let [input4, setInput4] = useState("")

	let submitHandler = () => {
		axios.post(
			"https://stas-base-default-rtdb.europe-west1.firebasedatabase.app/-MZmCjb4QXkV2wpRu-MB.json",
			{
				title: input1,
				shortText: input2,
				mark: input3,
				img: input4,
				author: user.email,
			}
		)
	}

	return (
		<div className="add-post">
			<div className="add-post-title">
				<h2>Добавить пост</h2>
			</div>
			<div className="add-post-content">
				<div className="first-input">
					<label>Название фильма</label>
					<input
						type="text"
						onChange={(e) => setInput1(e.target.value)}
						value={input1}
					/>
				</div>
				<div className="second-input">
					<label>Описание</label>
					<input
						type="text"
						onChange={(e) => setInput2(e.target.value)}
						value={input2}
					/>
				</div>
				<div className="third-input">
					<label>Оценка</label>
					<input
						type="text"
						onChange={(e) => setInput3(e.target.value)}
						value={input3}
					/>
				</div>
				<div className="fourth-input">
					<label>Ссылка на фотографию</label>
					<input
						type="text"
						onChange={(e) => setInput4(e.target.value)}
						value={input4}
					/>
				</div>
				<div className="button-container">
					<button onClick={submitHandler}>Добавить пост</button>
				</div>
			</div>
		</div>
	)
}
let mapStateToProps = (state) => ({
	user: state.page.user,
})

export default connect(mapStateToProps)(AddPost)
