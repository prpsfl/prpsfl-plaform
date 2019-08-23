// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"



    // TODO: Replace the following with your app's Firebase project configuration
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
    var currentUserEmail;
   

    // Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
 
    

     
    // Add Login event 
    btnLogin.addEventListener('click', e => {

   ;
        const auth = firebase.auth();
        const email = txtEmail.value;
        const pass = txtPassword.value;


        // Sign In
        const promise = auth.signInWithEmailAndPassword(email,pass);
        promise.catch(e => console.log(e.message));

         // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {

          if (firebaseUser) {
            window.location.href = 'home/index.html';
            
          } else {
            console.log("Wrong Email or Password")
          }
      });

    });


    //Sign Up new User

    function btnSignUp () {

        const auth = firebase.auth();
        const signUpEmail = document.getElementById('txtEmail').value;
        const signUpPassword = document.getElementById('txtPassword').value; 

        // Sign Up New User 
        firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword).catch(function(error) {
        //Sign New User


        // Sign In
        const promise = auth.signInWithEmailAndPassword(signUpEmail,signUpPassword);
        promise.catch(e => console.log(e.message));

         });


       // Add a realtime listener
      firebase.auth().onAuthStateChanged(firebaseUser => {
          if (firebaseUser) {
            window.location.href = 'home/index.html';
            
          } else {
            console.log("Wrong Email or Password")
          }
      });


   }
    // End of Sign Up







    //?????????????????UNCOMMENT VERY IMPORTANT?????????????????????

    //<------/Get data from Typeform API ------------------------------------------------------------------------------------------->

    // // Create a request variable and assign a new XMLHttpRequest object to it.
    // var request = new XMLHttpRequest()

    // var apiData;  //CREATE VARIABLE TO STORE TYPEFORM RESPONSE DATA

    // // Open a new connection, using the GET request on the URL endpoint
    // request.open('GET', 'https://api.typeform.com/forms/EkQ07n/responses', true)
    // request.setRequestHeader('Authorization', 'Bearer 3SPJfBxRE1dyqHSBF8nFYVNLu3RWzyTMDMj4jDQJ1AXS')

    // //Get response from HTTP request
    // request.onload = function () {

    //   // Begin accessing JSON data here
      

    //   if (request.status >= 200 && request.status < 400) {

    //       apiData = JSON.parse(this.response)
    //       console.log(apiData)

    //   } else {
    //     console.log('error')
    //   }


    // }

    // //Send request
    // request.send()

    //<------End of getting data from typeform ----------------------------------------------------------------------------------->




//<-----Write data to firebase database ------------------------------------------------------------------------------------------>

    //?????????REQUIRES BUTTON TO TRIGGER ACTION????????????????

    function updateDatabase() {
   
      var typeformRef = firebase.database().ref().child('Typeform/Survey');
      typeformRef.set(apiData)

    }

 //<----------------------------------End of writing data to firebase ----------------------------------------------------------->







    








