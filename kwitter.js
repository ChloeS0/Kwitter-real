function login()
{
    user=document.getElementById("user_input").value;
    localStorage.setItem("username", user);
    window.location="kwitter_room.html";
}

