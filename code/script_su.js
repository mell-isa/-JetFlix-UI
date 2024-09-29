console.log("hello")

function isalphanumeric(pw){
    var num=false
    var alpha=false
    for(let i=0; i<pw.length; i++){
        if(!isNaN(pw[i])){
            num=true
        }
        else{
            alpha=true
        }
        if(num && alpha){
            return true
        }
    }
}

function validateform(event){
    event.preventDefault();

    regisform=document.getElementById("regisform")
    nama=document.getElementById("name")
    username=document.getElementById("username")
    password=document.getElementById("password")
    confirmpassword=document.getElementById("confirm")
    male=document.getElementById("male")
    female=document.getElementById("female")
    agree=document.getElementById("agree")
    date=document.getElementById("date")
    error=document.getElementById("error")    

    if(nama.value.length < 7){
        // alert("Nama harus setidaknya 7 karakter!")
        error.innerHTML="Nama harus berisikan setidaknya 7 karakter!"
    }
    
    else if(username.value.length < 7){
        error.innerHTML="Username harus berisikan setidaknya 7 karakter!"
    }

    else if(!isalphanumeric(password.value)){
        error.innerHTML="Password harus berisikan angka dan alfabet!"
    }
    else if(password.value!=confirmpassword.value){
        error.innerHTML="Pastikan konfirmasi sama dengan password!"
    }

    else if(!(male.checked || female.checked) ){
        error.innerHTML="Mohon pilih gender anda!"
    }

    else if(!(date.value)){
        error.innerHTML="Mohon masukkan tanggal lahir anda!"
    }
    else if(!(agree.checked)){
        error.innerHTML="Anda harus menyetujui ketentuan layanan kami untuk melanjutkan"
    }
    else{
        error.innerHTML=""
        window.location.href = "/code/news.html";
    }
}