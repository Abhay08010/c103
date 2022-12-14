//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB83sVIXQ0H8_ySzdki30wol-kJDlhHKus",
    authDomain: "kwitter-a0aa8.firebaseapp.com",
    databaseURL: "https://kwitter-a0aa8-default-rtdb.firebaseio.com",
    projectId: "kwitter-a0aa8",
    storageBucket: "kwitter-a0aa8.appspot.com",
    messagingSenderId: "824624537421",
    appId: "1:824624537421:web:0b7c565ceeef0f83332104"
  };

  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    document.getElementById("msg").value;
    firebase.database().ref(room_name).puse({
          name:user_name,
          message:msg,
    });
    document.getElementById("msg").value = "";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}