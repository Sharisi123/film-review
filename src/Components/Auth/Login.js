import React from "react"

const Login = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSingUp,
		hasAccount,
		changeHasAccount,
		emailError,
		passwordError,
	} = props
	return (
		<section className="login">
			<div className="loginContainer">
				<label>Username</label>
				<input
					type="text"
					autoFocus
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p className="errorMsg">{emailError}</p>
				<label>Password</label>
				<input
					type="password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<p className="errorMsg">{passwordError}</p>
				<div className="btnContainer">
					{hasAccount ? (
						<>
							<button onClick={handleLogin}>Sign In</button>
							<p>
								Dont have an account?
								<span onClick={() => changeHasAccount(!hasAccount)}>
									Sign up
								</span>
							</p>
						</>
					) : (
						<>
							<button onClick={handleSingUp}>Sing up</button>
							<p>
								Have an account?
								<span onClick={() => changeHasAccount(!hasAccount)}>
									Sing in
								</span>
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	)
}

export default Login
