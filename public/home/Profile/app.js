


    // Set up firebase config
          var firebaseConfig = {
            apiKey: "AIzaSyAoEXT9N0YAV1co9AR1L_lFKNvAahgbArk",
            authDomain: "prpsfl-mvp-6d305.firebaseapp.com",
            databaseURL: "https://prpsfl-mvp-6d305.firebaseio.com",
            projectId: "prpsfl-mvp-6d305",
            storageBucket: "prpsfl-mvp-6d305.appspot.com",
            messagingSenderId: "148906742789",
            appId: "1:148906742789:web:2644eb1e5ce1f800"
          };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

     var fullName = document.getElementById('fullName')
     var email= document.getElementById('email')
     var comPref = document.getElementById('comPref')
     var phone = document.getElementById('phone')
     
   
     var currentUserId;


      //Check if user is signed out
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
          currentUserId = user.uid; 
          console.log(currentUserId)

            }
          });


      //Get firebase reference to root folder
      var root = firebase.database().ref('/Users/' + currentUserId);


// Sign Out
     //Log Out Button
        function btnLogOut () {
             firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });


          //Check if user is signed out
          firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
            } else {
              console.log("Sign out successful")
              window.location.href = '../../index.html';
            }
          });
        }



     // Change Text of users on the Profie Page
     function changeText() {
        

        
         //Get current user's username
        var userCurrent = firebase.auth().currentUser;

        if (userCurrent != null) {
          
          currentUserId = userCurrent.uid; 
          console.log(currentUserId)
        }


        
          //Get firebase reference to root folder
        var root = firebase.database().ref('/Users/' + currentUserId);

        //Get data
          return root.once('value').then(function(snapshot) {
          fullName.textContent = (snapshot.val() && snapshot.val().Name) || 'Anonymous';
          phone.textContent = (snapshot.val() && snapshot.val().Phone_Number) || 'Anonymous';
          email.textContent = (snapshot.val() && snapshot.val().Email_Address) || 'Anonymous';
         comPref.textContent = (snapshot.val() && snapshot.val().Communication_Preference) || 'Anonymous';

          

          console.log(fullName.textContent);

          

        });

        }








 