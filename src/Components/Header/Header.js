import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import fire from "../Auth/fire"
import "./Header.css"
import { setUserInState } from "../../Redux/pageReducer"

const Header = ({ user, setUserInState }) => {
	const handleLogout = () => {
		fire.auth().signOut()
		setUserInState(null)
	}
	return (
		<header>
			<ul className="nav">
				<li>
					<NavLink to="/">Обзоры на фильмы</NavLink>
					{user ? <NavLink to="/add-post">Добавить обзор</NavLink> : null}
				</li>
			</ul>
			<div className="auth">
				{user ? (
					<span style={{ color: "#fff", marginRight: "20px" }}>
						{user.email}
					</span>
				) : null}
				{user ? (
					<a className="link" onClick={handleLogout}>
						Выход
					</a>
				) : (
					<NavLink to="/auth">Вход</NavLink>
				)}
			</div>
		</header>
	)
}
let mapStateToProps = (state) => ({
	user: state.page.user,
})

export default connect(mapStateToProps, { setUserInState })(Header)
