var nameText = $("#txt1");
var lnameText = $("#txt2");
var submitBtn = $("#formbutton");
var email = $("#email");
var msg = $("#txt3");

const firebaseRef = firebase.database().ref();

function submitDetail(){
    var letters = /^[a-zA-Z\s]+$/;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var  bool = true;

    var fnText = nameText.val();
    var lnText = lnameText.val();
    var sms = msg.val();
    var eText = email.val();

	//-------------------------------
    for(i=1;i<=3;i++){
        var x = $('#txt'+i)
        if(x.val().match(letters)){
            if(x.hasClass('red')){
                x.removeClass('red')
            }
            x.addClass('green');
            bool = bool && true;
        }
        else{
            if(x.hasClass('green')){
                x.removeClass('green')
            }
            x.addClass('red');
            bool = bool && false;
        }
    }
    if(eText.match(re)){
        if(email.hasClass('red')){
            email.removeClass('red')
        }
        email.addClass('green');
        bool = bool && true;
    }
    else{
        if(email.hasClass('green')){
            email.removeClass('green')
        }
        email.addClass('red');
        bool = bool && false;
    }
    if(bool===true){
        $('.response').fadeIn(500);

        firebaseRef.push().set({
            f_name : fnText,
            email : eText,
            l_name : lnText,
            message : sms
        });

    }
    else{
        $('.response').fadeOut(500);
    }
    bool = bool && false;

}