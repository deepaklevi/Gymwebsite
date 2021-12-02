function validationform(){
    let v1 = document.getElementById("username");
    let v2 = document.getElementById("email");
    let v3 = document.getElementById("phone-no").innerHTML = Number;
    let v3 = document.getElementById("message");
    if (v1.value == "" && v2.value == ""&& v3.value &&== "" v4.value == "" ) {
        alert("no blank vakues allowed");
        return false;
    }
    else{
        true;
    }

}