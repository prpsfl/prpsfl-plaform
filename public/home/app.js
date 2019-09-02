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
        var currentUserId;
        var report;
        var survey;

        
        // Change Text of users on the Profie Page

        // function changeText() {
        // 	 var currentUserId;
        // 	getCurrentUser();
        // 	var phone = document.getElementById('phone');

        // 	 //Get firebase reference to root folder
        // var root = firebase.database().ref('/Users/' + currentUserId);

        // //Get data
        //   return root.once('value').then(function(snapshot) {
        //   phone.textContent = (snapshot.val() && snapshot.val().Phone_Number) || 'Anonymous';
          

        //   console.log(phone.textContent);

          

        // });

        // }



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
              window.location.href = '../index.html';
            }
          });
        }


        

       //Download report from firebase

       
       //Get url from database
       function getReport () {


        getCurrentUser ();

        //Get firebase reference to root folder
        var root = firebase.database().ref('/Users/' + currentUserId);
       


        //Get data
          return root.once('value').then(function(snapshot) {
          report = (snapshot.val() && snapshot.val().url) || 'Anonymous';
          

          console.log(report);
          window.location.href = report;

        });
      }



      //Get Link to Commit survey from database

      //Get survey from database
       function getSurvey() {

        getCurrentUser ();

         //Get firebase reference to root folder
        var root = firebase.database().ref('/Users/' + currentUserId);

        //Get data
          return root.once('value').then(function(snapshot) {
          survey = (snapshot.val() && snapshot.val().Commit.Link_to_commit_survey) || 'Anonymous';
          

          console.log(survey);

          

          window.location.href = survey;

        });
      }



      //Function to get current User's data

      function getCurrentUser () {

        //Get current user's username
        var userCurrent = firebase.auth().currentUser;

        if (userCurrent != null) {
          
          currentUserId = userCurrent.uid; 
          console.log(currentUserId)
        }


      }



      // End of downlaoding report from database




//Make this work
      //Function to add new user data to database
      function toDatabase() {

        
        var currentUserEmail;

       // current user ID
      var user = firebase.auth().currentUser;
            //Get current users use id
              if (user) {
                // User is signed in.
                currentUserId = user.uid;
                currentUserEmail = user.email;
                

              } else {
                // No user is signed in.
              }

         
                  
            //declare variables
             var latest = {
            "Name": "",
            "Phone_Number": "",
            "Email_Address": user.email,
            "url": "https://firebasestorage.googleapis.com/v0/b/prpsfl-mvp-6d305.appspot.com/o/Reports%2F010-Alpha-reports.pdf?alt=media&token=b97c962c-6077-4d22-8935-41ef37abe4f3",
            "Commit" :
                {
                  "Celebration_commit":"",
                  "Improvement_commit":"",
                  "Link_to_commit_survey":""
                },
            "Communication_preference" : "Email"
          }

            console.log(currentUserId);
            var rootRef = firebase.database().ref();
            var storesRef = rootRef.child('Users/' + currentUserId);
            
            storesRef.set(latest);

            window.location.href = "profile/index.html";

            

          }
        

        function goToProfilePage () {

          window.location.href = "Profile/index.html"

        }
        


      


    





