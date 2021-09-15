
//ADD YOUR FIREBASE LINKS HERE// Your web app's Firebase configuration
  // Your web app's Firebase configuration
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDR9toih2Fyahn-9-I2E9MB6VbF8aEmGRA",
      authDomain: "rondofaq-lqk9.firebaseapp.com",
      databaseURL: "https://rondofaq-lqk9-default-rtdb.firebaseio.com",
      projectId: "rondofaq-lqk9",
      storageBucket: "rondofaq-lqk9.appspot.com",
      messagingSenderId: "727264526654",
      appId: "1:727264526654:web:72100869f9a5b51d02ec6f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    getItem=localStorage.getItem("username");
document.getElementById("display_name").innerHTML="Welcome " + getItem + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("display_room").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room names-" + Room_names);
     //Start code
      console.log("Roomname-" + Room_names);
      console.log("Get data is working");
      row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      console.log("Row" + row);
      document.getElementById("display_room").innerHTML+=row;
     //End code
     });});}

 getData();
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("AddRoomName");
      window.location="index.html";
}




function addRoom()
{
      room=document.getElementById("get_room").value;
      firebase.database().ref("/").child(room).update({
      purpose:"adding room name"
      });
localStorage.setItem("AddRoomName", room);
window.location="kwitter_page.html";
}


function redirectToRoomName(name)
{
      localStorage.setItem("AddRoomName", name);
      window.location="kwitter_page.html";
}

