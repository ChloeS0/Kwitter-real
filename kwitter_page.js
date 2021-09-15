//YOUR FIREBASE LINKS

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
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("AddRoomName");

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("message").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>" + name + "<img  class='user_tick'src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>" +message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+ "'onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("message").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout()
{
      window.location="index.html";
}


function send() {
      msg = document.getElementById("input").value;
      console.log(message);
      firebase.database().ref(roomname).push(
            {
                  name: username, message: msg, like: 0
            }
      ); document.getElementById("input").value = " ";
}



function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      console.log("likes=" + likes);
      updated_likes = Number(likes) + 1;
      console.log("Like count=" + updated_likes);
      firebase.database().ref(roomname).child(message_id).update({
            like: updated_likes
      });
}

