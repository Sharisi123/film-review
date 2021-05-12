import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"
import AddPost from "./Components/AddPost/AddPost"
import Auth from "./Components/Auth/Auth"
import Header from "./Components/Header/Header"
import MainContainer from "./Components/Main/MainContainer"

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/add-post" component={AddPost} />
					<Route path="/auth" component={Auth} />
					<Route path="/" component={MainContainer} />
				</Switch>
			</div>
		</Router>
	)
}

export default App
