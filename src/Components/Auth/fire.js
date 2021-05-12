import firebase from "firebase"

var firebaseConfig = {
	apiKey: "AIzaSyC3CiIFO9Gp4Vkq85gFS7GUT22Lx4-HytA",
	authDomain: "stas-base.firebaseapp.com",
	databaseURL:
		"https://stas-base-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "stas-base",
	storageBucket: "stas-base.appspot.com",
	messagingSenderId: "481457771311",
	appId: "1:481457771311:web:1562fb32a3796f08c487da",
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire
