 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiMWoQOkpLGyDZWT3TqZ_KKStbDowK2yM",
    authDomain: "ori-17205.firebaseapp.com",
    databaseURL: "https://ori-17205-default-rtdb.firebaseio.com",
    projectId: "ori-17205",
    storageBucket: "ori-17205.appspot.com",
    messagingSenderId: "652443814473",
    appId: "1:652443814473:web:669100b0e3aaf739fd8d98",
    measurementId: "G-BQ66QHJVWF"
  };
firebase.initializeApp(firebaseConfig);

  //recaptcha callback function
  function onSubmit(token) {
    document.getElementById("contactForm").submit();
  }

  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var company = getInputVal('company');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(firstname, lastname, email, company, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(firstname, lastname, email, company, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        company: company,
        message: message
    });
  }
  