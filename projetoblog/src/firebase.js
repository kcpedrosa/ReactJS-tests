import app from 'firebase/app'
import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



let firebaseConfig = {
    apiKey: "AIzaSyDIoP05K91Kz6UQd9ExD0mTfUsjpV09sTs",
    authDomain: "reactapp-89dcc.firebaseapp.com",
    databaseURL: "https://reactapp-89dcc.firebaseio.com",
    projectId: "reactapp-89dcc",
    storageBucket: "reactapp-89dcc.appspot.com",
    messagingSenderId: "574994651213",
    appId: "1:574994651213:web:6c2b2db6ca19d81faa2404",
    measurementId: "G-N01YJ8584D"
  };
 

  class Firebase{
      constructor(){
          app.initializeApp(firebaseConfig)
          //this bellow relates to anything calling app, app contains database access
          //see home for an example
          //this bellow references database to allow access in other places of the app
          this.app = app.database()

          this.storage = app.storage()
      }
      login(email, password){
          return app.auth().signInWithEmailAndPassword(email, password)
      }

      logout(){
        return app.auth().signOut()
      }

      async register(nome, email, password){
          await app.auth().createUserWithEmailAndPassword(email, password)
          const uid = app.auth().currentUser.uid

          return app.database().ref('usuarios').child(uid).set({
              nome:nome
          })

      }
      isInitialized(){
          return new Promise(resolve=>{
              app.auth().onAuthStateChanged(resolve)
          })
      }

      getCurrent(){
          return app.auth().currentUser && app.auth().currentUser.email
          //what is the sense in && app etc and onwards?
          //verifies if there is a user logged in and retrieves his email
      }

      getCurrentUid(){
          return app.auth().currentUser && app.auth().currentUser.uid
      }

      async getUserName(callback){
          if(  !app.auth().currentUser){
            return null
          }
          const uid = app.auth().currentUser.uid
          await app.database().ref('usuarios').child(uid)
          .once('value')//once catches the value one time, in data load
          .then(callback)//done that way to access the callback in other files
          //if the proc was a success we can access this callback feature in other files
      }

  }

  export default new Firebase()