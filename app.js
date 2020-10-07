let addData = () =>{
    let email = document.getElementById("email")
    let password = document.getElementById("password")
   
        // console.log(email.value)
    // console.log(password.value)

firebase.auth().createUserWithEmailAndPassword(email.value, password.value)

.then((result) => {
  result = "Successfully Register!"
  document.getElementById("demo").innerHTML = 
  result;
  
   
})
.catch(function(error) {
    // Handle Errors here.
    
     var errorMessage = error.message;
    document.getElementById("demo").innerHTML = 
    errorMessage;
    
    // console.log(errorMessage)
    // ...
  })
  email.value = ""
password.value = ""
}

let addLogin = () => {
    let email = document.getElementById("login-email")
    let password = document.getElementById("login-password")

    // console.log(email.value)
    // console.log(password.value)


firebase.auth().signInWithEmailAndPassword(email.value, password.value)
.then((result)=>{
   result = "Successfully Login!"
   document.getElementById("foo").innerHTML = 
   result;
     
   })    

.catch(function(error) {
    // Handle Errors here.
    
    var errorMessage = error.message;
    document.getElementById("foo").innerHTML = 
    errorMessage;
    
    // console.log(errorMessage)
    // ...
  });
  email.value = ""
  password.value = ""
}