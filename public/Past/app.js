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

    //referece to firebase root
    var ref = firebase.database().ref('Users');

    // Get Elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    

    // Add Login event 
    btnLogin.addEventListener('click', e => {
      // Get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      // Sign In
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));

    });


    // Add signup event
     btnSignUp.addEventListener('click', e => {
      // Get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      // Sign In
      const promise = auth.createUserWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));

    });

     // Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        window.location.href = 'home.html';
      } else {
        console.log("not logged it")
      }
    });


function btnLogOut () {
  
   firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});

}



    












//   //Add Login Event
//   function myFunction() { 

//   // Auth
//   const auth = firebase.auth();

//   // Sign In 
//   firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
//     var email = document.getElementById('txtEmail').value
//     var pass = document.getElementById('txtPassword').value

// });


// };


// // Add realtime listener

// firebase.auth().onAuthStateChanged(firebaseUser => {
// if (firebaseUser) {
//   console.log(firebaseUser);
// } else {
//   console.log("not logged it")
// }


// });



//Storage set up

  //   //Create a referece to the root folder
  //  var storage = firebase.storage().ref();

  //  //Points to report
  //   var report = storage.child('Reports/010-Alpha-reports.pdf');


  //   //Download file

  //   function download() {
  //         report.getDownloadURL().then(function(url) {
          
  //              var xhr = new XMLHttpRequest();
  //              xhr.responseType = 'blob';
  //              xhr.onload = function(event) {
  //             var blob = xhr.response;
  //         };
  //       xhr.open('GET', url);
  //       xhr.send();
  //     });
  // }
  





