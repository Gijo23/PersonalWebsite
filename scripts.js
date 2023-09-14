
/*---------------about tablink----------------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link")
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


/*---------nav---------*/



var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}


/*----------form validation-----------------*/

var myform = document.getElementById("gform");
function validate() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  /* error_message.style.padding = "10px";*/

  var text;
  error_message.innerHTML = null;
  if (name.length < 4) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 6) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(mobile) || mobile.length != 10) {
    text = "Please Enter valid mobile Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Please Enter More Than 10 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}



