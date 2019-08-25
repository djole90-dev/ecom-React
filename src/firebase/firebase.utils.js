import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA9M7zK9OepNSOuWVDQ6zM6AU7ER_142Wc",
    authDomain: "ecom-react-db-7e29f.firebaseapp.com",
    databaseURL: "https://ecom-react-db-7e29f.firebaseio.com",
    projectId: "ecom-react-db-7e29f",
    storageBucket: "",
    messagingSenderId: "777979127636",
    appId: "1:777979127636:web:cf8353115e540eef"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase