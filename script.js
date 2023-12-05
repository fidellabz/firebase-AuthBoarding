(function () {
    
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey:"AIzaSyCbJMomNgEOCoVZ00XZJuHPusyntIS4piI"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    //Get Elements
    const txtName = document.getElementById("txtName");
    const txtEmail = document.getElementById("txtEmail");
    const txtPhone = document.getElementById("txtPhone");
    const txtPassword = document.getElementById("txtPassword");
    const btnLogin = document.getElementById("btnLogin");
    const btnSignup = document.getElementById("btnSignup");
    const loadingSpinner = document.getElementById('loadingSpinner');

       // Assuming btnSignup, txtName, txtEmail, txtPhone, txtPassword, loadingSpinner, signupButton, firebase, and $ are defined elsewhere in your code

// Add Signup Event
btnSignup.addEventListener('click', e => {
    // Get name, email, phone, password, and date
    const name = txtName.value;
    const email = txtEmail.value;
    const phone = txtPhone.value;
    const password = txtPassword.value;
    const date = Date.now();

    // Basic form validation
    if (name && email && phone && password) {
        // Show loading spinner
        loadingSpinner.classList.remove('d-none');
        btnSignup.setAttribute('disabled', 'true');

        const auth = firebase.auth();

        // Sign up with Firebase auth
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Hide loading spinner
                loadingSpinner.classList.add('d-none');
                btnSignup.removeAttribute('disabled');

                // Show signup successful modal
                $('#signupModal').modal('show');

                // alert("Signup Successful :)");
            })
            .catch(error => {
                // Hide loading spinner
                loadingSpinner.classList.add('d-none');
                btnSignup.removeAttribute('disabled');

                 // Show signup Error modal
                 $('#errorModal').modal('show');

                // alert(error.message);
            });
    } else {
        // Handle form validation error
        alert("Please fill in all fields.");
    }
});



 //Add Login Event
 btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const password = txtPassword.value;

    const auth = firebase.auth();

    //sign in with firebase auth
    auth.signInWithEmailAndPassword(email, password).then(user =>{

         // Show signup successful modal
         $('#loginModal').modal('show');

        // alert("Login Successful :)");
    }).catch(err => {

           // Show signup Error modal
           $('#errorModal').modal('show');

        // alert(err.message);
    });
    
});

}());
