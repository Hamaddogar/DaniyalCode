function func(event){
    event.preventDefault()
    var uname= document.getElementById("uname").value;
    var useremail = document.getElementById("useremail").value;
    
    var upassword= document.getElementById("uPassword").value;
    var city= document.getElementById("city").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
  
    // console.log("output" , uname, useremail , upassword,city, gender);
    var output = {uname, useremail , upassword,city, gender };
    var arr=[];
    arr.push(output);
    localStorage.setItem("userdata",JSON.stringify(output));
    console.log(arr);
}