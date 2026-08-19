    let Overview = document.getElementById("Overview");
    Overview.addEventListener('click', ()=>{ window.location.href="Overview.html"; });

    let Help = document.getElementById("Help");
    Help.addEventListener('click', ()=>{ window.location.href="Help&Support.html"; });

    let Notification = document.getElementById("Notification");
    Notification.addEventListener('click', ()=>{ window.location.href="Notification.html"; });

    let Profile = document.getElementById("Profile");
    Profile.addEventListener('click', ()=>{ window.location.href="ProfileSetting.html"; });

    let Security = document.getElementById("Security");
    Security.addEventListener('click', ()=>{ window.location.href="Security.html"; });

    let Signout = document.getElementById("SignOut");
    Signout.addEventListener('click', ()=>{ window.location.href="Login.html"; });


    let form = document.getElementById("myform");
    let cancel = document.getElementById("Cancel");
    let message = document.getElementById("message");
    let save = document.getElementById("Save");

    cancel.addEventListener('click',()=>{ form.reset(); });

    save.addEventListener('click',()=>{
        message.textContent = "saved changes successfully";
        message.style.display = "inline";
        message.style.color = "green";
        setTimeout(()=>{ message.style.display = "none"; }, 2000);
    });

    

   



   