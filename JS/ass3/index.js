
window.onload=function(){
    document.getElementById("first name").focus()
}

function resetFunction(){
    document.getElementsById("form-container").reset();
}

function enableTextBox(value){
    if(value === "married"){
        document.getElementById("spouse name").disabled=0
        return true
    }
    else{
        document.getElementById("spouse name").disabled=1
        document.getElementById("spouse name").value=""
        return false
    }
}

var errorCount=0;

function check(name){
    if(name.value===""){
            alert("Enter "+name.getAttribute("id"))
        }
        else{
            checkSpace(name)
        }
    }

function checkSpace(name){
    if(name.value.indexOf(' ')>0){
        alert("Enter "+name.getAttribute("id")+ " without space")
    }
}

function showDiaglog(){
    document.getElementById('success').innerHTML = 
    `<dialog open>
    <h1>Thankyou, form has been submitted</h1>
    </dialog>`
}

function validateForm(){
    let errEle=[];
    var fname=document.getElementById("first name")
    var mname=document.getElementById("middle name")
    var lname=document.getElementById("last name")
    var gender=document.getElementsByName("gender")
    var status=document.getElementById("maritialStatus")
    var spouse=document.getElementById("spouse name")
    var tnc=document.getElementById("tncs")
    //console.log(fname.getAttribute("id"))
    //console.log(status)
    errorCount=0;
    if(fname.value==="" || fname.value.indexOf(' ')>0){
        errorCount+=1
        errEle.push(fname)
    }
    if(mname.value==="" || mname.value.indexOf(' ')>0){
        errorCount+=1
        errEle.push(mname)
    }
    if(lname.value==="" || lname.value.indexOf(' ')>0){
        errorCount+=1
        errEle.push(lname)
    }
    if(status.value==="select"){
        errorCount+=1
        errEle.push(status)
    }
    if((status.value==="married" && spouse.value==="") || (status.value==="married" && spouse.value.indexOf(' ')>0))
    {
        errorCount+=1
        errEle.push(spouse)
    }
    if(!tnc.checked){
        errorCount+=1
        errEle.push(tnc)
    }
    var genderSelected = false;
    gender.forEach((val) =>
    val.checked == true ? (genderSelected = true) : null
);
    if (!genderSelected){
        errorCount+=1
        errEle.push(gender)
    }
    //console.log(errEle.includes(fname))
    console.log(errorCount)
    if(errorCount>1){
        document.getElementById('error-span').style.display="flex"
        errEle[0].focus();
        return false
    }
    else if(errorCount===1){
        if(errEle.includes(fname) || errEle.includes(mname) || errEle.includes(lname)){
            if(check(errEle[0])){}
            errEle[0].focus()
        }
        else if(errEle[0]===status){
            alert("Select maritial status")
            errEle[0].focus()
        }
        else if(errEle[0]===tnc){
            alert("Please accept the terms and conditions")
            errEle[0].focus()
        }
        else if(errEle[0]===spouse){
            check(spouse)
            errEle[0].focus()
        }
        else{
            alert("Select Gender")
        }
        return false
    }
    else{
        return showDiaglog()
    }
    /*if(check(fname)){
        if(check(mname)){
            if(check(lname)){

            }
        }
    }*/

    /*var genderSelected = false;
    gender.forEach((val) =>
        val.checked == true ? (genderSelected = true) : null
    );
    if (!genderSelected){
        alert("Select gender");
    }*/

    /*if(checkSpace(fname)){
        if(checkSpace(mname)){
            if(checkSpace(lname)){

            }
        }
    }
    if(status.value!=="married"){
        if(errorCount===0){
            errorCount+=1
            alert("Select the maritial status")
        }
    }
    else{
        check(spouse)
        checkSpace(spouse)
    }
    if (!tnc.checked) {
        if (errorCount === 0) {
            errorCount+=1
            alert("Please accept the Terms and Conditions");
        }
    }  


    if(errorCount===0){
        alert("Thankyou")
    }
    */


    /*var noError=true;
    var errorCount=0;
    
    if(fname.value===""){
        noError=false;
        errorCount+=1
        //alert("Enter first name")
        fname.style.borderColor="red "
        //return false    
    }
    
    if(mname.value===""){
        errorCount+=1
        noError=false;
        //alert("Enter middle name")
        mname.style.borderColor="red "
        //return false    
    }
    if(lname.value===""){
        errorCount+=1
        noError=false;
        //alert("Enter last name")
        lname.focus()
        lname.style.borderColor="red "
        //return false    
    }else{
        errorCount+=1
        noError=false
        var genderSelected = false;
        gender.forEach((val) =>
            val.checked == true ? (genderSelected = true) : null
        );
        
        if (!genderSelected){
            //alert("Select gender");
            gender.focus();
        };
        noError=true
    }
    if(fname.value.indexOf(' ')>=0){
        errorCount+=1
        noError=false
        //alert("Enter first name without space")
        fname.style.borderColor="red "
        //return false    
    }if(mname.value.indexOf(' ')>=0){
        errorCount+=1
        noError=false
        //alert("Enter middle name without space")
        mname.style.borderColor="red "
        //return false    
    }if(lname.value.indexOf(' ')>=0){
        errorCount+=1
        noError=false
        //alert("Enter last name without space")
        lname.style.borderColor="red "
        //return false    
    }
    if(enableTextBox(status.value)){
        errorCount+=1
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
    else if((status.value)==="select"){
        errorCount+=1
        noError=false;
        //alert("Select the Maritial status")
        //return false
    }
    if(!tnc.checked && noError){
        errorCount+=1
        noError=false;
        //alert("Accept the terms and conditions")
    }
    if(errorCount===0){
        alert("Thankyou")
    }
    else{
        alert("Some errors on page")
    }
    //console.log(noError)
    */
}



