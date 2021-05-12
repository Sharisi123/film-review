import { useState, useEffect } from "react"
import { connect } from "react-redux"
import "./Auth.css"
import fire from "./fire"
import Login from "./Login"
import { changeHasAccount, setUserInState } from "../../Redux/pageReducer"
import { Redirect } from "react-router"

const Auth = ({
	hasAccount,
	changeHasAccount,
	userInRedux,
	setUserInState,
}) => {
	const [user, setUser] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [emailError, setEmailError] = useState("")
	const [passwordError, setPasswordError] = useState("")

	const clearInputs = () => {
		setEmail("")
		setPassword("")
	}
	const clearErrors = () => {
		setEmailError("")
		setPasswordError("")
	}

	const handleLogin = () => {
		clearErrors()
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(err.message)
						break
					case "auth/wrong-password":
						setPasswordError(err.message)
						break
				}
			})
			.then((res) => {
				if (res) {
					setUserInState(res.user)
				}
			})
	}
	const handleSingUp = () => {
		clearErrors()
		fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((err) => {
				switch (err.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(err.message)
						break
					case "auth/weak-password":
						setPasswordError(err.message)
						break
				}
			})
			.then((res) => {
				if (res) {
					setUserInState(res.user)
				}
			})
	}

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs()
				setUser(user)
			} else {
				setUser("")
			}
		})
	}
	useEffect(() => {
		authListener()
	}, [])

	return (
		<div>
			{userInRedux ? (
				<Redirect to="/" />
			) : (
				<Login
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					handleLogin={handleLogin}
					handleSingUp={handleSingUp}
					hasAccount={hasAccount}
					changeHasAccount={changeHasAccount}
					emailError={emailError}
					passwordError={passwordError}
				/>
			)}
		</div>
	)
}

let mapStateToProps = (state) => ({
	hasAccount: state.page.hasAccount,
	userInRedux: state.page.user,
})

export default connect(mapStateToProps, { changeHasAccount, setUserInState })(
	Auth
)
