let step = 1;
function bindPrevious(){
    if(step <= 1){
        return;
    }
    document.getElementById("li" + step).classList.remove("li1");
    document.getElementById("div" + step).style.display ="none";
    step--;
    document.getElementById("div" + step).style.display ="block";
    document.getElementById("li" + step).classList.add("li1");
}
function bindNext(){
    if(step >= 4){
        return;
    }
    document.getElementById("li" + step).classList.remove("li1");
    document.getElementById("div" + step).style.display ="none";
    step++;
    document.getElementById("div" + step).style.display ="block";
    document.getElementById("li" + step).classList.add("li1");
    if(step == 4){
        document.getElementById("firstname").innerHTML = document.getElementById("txtfirstname").value;
        document.getElementById("lastname").innerHTML = document.getElementById("txtlastname").value;
        document.getElementById("phonenumber").innerHTML = document.getElementById("txtphonenumber").value;
        document.getElementsByName("gender").forEach(element => {
            if(element.checked){
                document.getElementById("gender").innerHTML = element.value;
            }
        })
        document.getElementById("peoplenumber").innerHTML = document.getElementById("txtpeoplenumber").value;
        document.getElementById("airplane").innerHTML = document.getElementById("select").value;
        document.getElementById("depart").innerHTML = document.getElementById("txtdepart").value;
        document.getElementById("return").innerHTML = document.getElementById("txtreturn").value;
        document.getElementById("rooms").innerHTML = document.getElementById("txtrooms").value;
        document.getElementById("meal").innerHTML = "";
        document.getElementsByName("meal").forEach(element =>{
            if(element.checked){
                document.getElementById("meal").innerHTML += element.value + " ";
            }
        })
        document.getElementById("souvenir").style.backgroundColor = document.getElementById("txtsouvenir").value;
        
    }
}