
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBDSyJo8ieXbnX3L35JnO-7fzjLByfpbzs",
      authDomain: "kwitter-977a2.firebaseapp.com",
      databaseURL: "https://kwitter-977a2-default-rtdb.firebaseio.com",
      projectId: "kwitter-977a2",
      storageBucket: "kwitter-977a2.appspot.com",
      messagingSenderId: "171314680586",
      appId: "1:171314680586:web:736e97f12a8284a83860f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });
localStorage.setItem("room_name", room_name);
window.location="kwitterpage.html";
}
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot)
             {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_names-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitterpage.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
