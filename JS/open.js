const newuser = document.querySelector("#new");
const olduser = document.querySelector("#old");
const form = document.querySelector(".form");
let inputname, inputpassword;


newuser.addEventListener("click", (e)=>{
   e.preventDefault()
   enter(1)
  
})

olduser.addEventListener("click", ()=>{
    enter(0)
})





const enter = (flag)=>{
    
  inputname = document.createElement("input");
     inputpassword = document.createElement("input");
    inputname.classList.add("button");
    inputname.placeholder = "הכנס שם משתמש";
    inputname.required = true
    form.appendChild(inputname);
    inputpassword.placeholder = "הכנס סיסמה";
    inputpassword.required = true
    inputpassword.type = "password"

    form.appendChild(inputpassword);
    newuser.style.display = "none";
    olduser.style.display = "none";

const bm = document.createElement("div")
    bm.style.display = "flex"
    bm.style.width = "80%"
bm.style.gap = "5%"
   form.appendChild(bm)


    const send = document.createElement("button")
    send.type = "button"
    send.textContent = "שלח"
    send.classList.add("button");

    const backhome = document.createElement("button")
    backhome.textContent = "חזור"
    send.classList.add("button");
    bm.appendChild(send)
    bm.appendChild(backhome)

  


    backhome.addEventListener("click", (e)=>{
        e.preventDefault()
        newuser.style.display = "block"
        olduser.style.display = "block"
        bm.style.display = "none"
        inputname.style.display ="none"
        inputpassword.style.display ="none"
        

    })


 send.addEventListener("click", (e)=>{
        e.preventDefault()
        const user = {
            name:inputname.value,
            password:inputpassword.value,
            win:0,
            lose:0
        }
        if(flag===1)//אם המשתמש חדש
        {
            if(localStorage.getItem(inputname.value)==null)
            {
             localStorage.setItem(inputname.value,JSON.stringify(user))
             localStorage.setItem("activeUser",inputname.value)
                window.location.href = "../HTML/loby.html"

            }
             else{
                 alert("משתמש קיים")
            }
        }
        else{//אם המשתמש קיים
             if(localStorage.getItem(inputname.value)==null)
            {
             alert("שם המשתמש אינו קיים במערכת")
            }
             else if(inputpassword.value!==JSON.parse(localStorage.getItem(inputname.value)).password){
                 alert("סיסמה שגויה")
            }
            else{
             localStorage.setItem("activeUser",inputname.value)
                window.location.href = "../HTML/loby.html"
            }
        }
    })
}



