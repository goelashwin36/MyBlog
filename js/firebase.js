var nameText = document.getElementById("txt1");
var lnameText = document.getElementById("txt2");
var submitBtn = document.getElementById("formbutton");
var email = document.getElementById("email");
var msg = document.getElementById("txt3");

const firebaseRef = firebase.database().ref();




function submitDetail(){

	var fnText = nameText.value;
	var lnText = lnameText.value;
	var sms = msg.value;
	var eText = email.value;
		
	firebaseRef.push().set({
		f_name : fnText,
		email : eText,
		l_name : lnText,
		message : sms
	});

	window.alert("Subscribed Successfully")

}