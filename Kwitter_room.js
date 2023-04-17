// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBzTmxtib4fC9GXny849hHGLZD66btcwJs",
    authDomain: "letschat-7744c.firebaseapp.com",
    projectId: "letschat-7744c",
    storageBucket: "letschat-7744c.appspot.com",
    messagingSenderId: "804362815058",
    appId: "1:804362815058:web:9a54c83288435598bf018b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();