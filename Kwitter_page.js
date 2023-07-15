var firebaseConfig = {
    apiKey: "AIzaSyCF7pFvuPjfo8y4q1UQP-DCqOv44HsMbkk",
    authDomain: "kwitter-project-4aac2.firebaseapp.com",
    databaseURL: "https://kwitter-project-4aac2-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-4aac2",
    storageBucket: "kwitter-project-4aac2.appspot.com",
    messagingSenderId: "119748951382",
    appId: "1:119748951382:web:f6fce4148ca83052562af7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name , 
            message : message,
            like: 0
      });
      document.getElementById("msg").value = "";

}