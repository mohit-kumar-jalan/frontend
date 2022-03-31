function foc(id){
    document.getElementById(id).style.background = "yellow"
}


function resetFunction(){
    document.getElementsById("form-container").reset();
}

/*function validateValue(value){
    if(value.indexOf(' ') >= 0){
        return false
    }
    return true
}*/

function enableTextBox(value){
    if(value == "married"){
        document.getElementById("spouseBox").disabled=0
        return true
    }
    else{
        document.getElementById("spouseBox").disabled=1
        document.getElementById("spouseBox").value=""
        return false
    }
}

function validateForm(){
    var fname=document.getElementById("firstName")
    var mname=document.getElementById("middleName")
    var lname=document.getElementById("lastName")
    var gender=document.getElementsByName("gender")
    var status=document.getElementById("maritialStatus")
    var spouse=document.getElementById("spouseBox")
    var tnc=document.getElementById("4")
    var noError=true;
    
    if(fname.value===""){
        noError=false;
        alert("Enter first name")
        fname.focus()
        fname.style.borderColor="red "
        return false    
    }
    else if(mname.value===""){
        noError=false;
        alert("Enter middle name")
        mname.style.borderColor="red "
        return false    
    }
    else if(lname.value===""){
        noError=false;
        alert("Enter last name")
        lname.focus()
        lname.style.borderColor="red "
        return false    
    }else{
        noError=false
        var genderSelected = false;
        gender.forEach((val) =>
            val.checked == true ? (genderSelected = true) : null
        );
        
        if (!genderSelected){
            alert("Select gender");
            gender.focus();
        };
        noError=true
    }
    if(fname.value.indexOf(' ')>=0){
        noError=false
        alert("Enter first name without space")
        fname.style.borderColor="red "
        return false    
    }else if(mname.value.indexOf(' ')>=0){
        noError=false
        alert("Enter middle name without space")
        mname.style.borderColor="red "
        return false    
    }else if(lname.value.indexOf(' ')>=0){
        noError=false
        alert("Enter last name without space")
        lname.style.borderColor="red "
        return false    
    }else if(enableTextBox(status.value)){
        if(spouse.value===""){
            noError=false
            alert("Enter spouse name")
            spouse.style.borderColor="red "
            return false    
        }
        else if(spouse.value.indexOf(' ') >= 0){
            noError=false
            alert("Enter spouse name without space")
            spouse.style.borderColor="red "
            return false    
        }
    }
    if(!tnc.checked && noError){
        noError=false;
        alert("Accept the terms and conditions")
    }
    if(noError){
        alert("Thankyou")
    }
    //console.log(noError)
}



