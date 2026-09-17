const instructoins = document.querySelector(".instructions")
const start = document.querySelector(".start")
const goback = document.querySelector(".goback")
const lose = document.querySelector(".lose")
const win = document.querySelector(".win")
const board = document.querySelector(".board")
const game = document.querySelector(".game")
const timer = document.querySelector(".timerezer")
const boxes = [...document.querySelectorAll(".box")]
const flags = [] 
const choosen= []
const clickSound = new Audio("../audio/button-6.mp3");
const clickWorngSound = new Audio("../audio/wrong.mp3");
const succes = new Audio("../audio/win.mp3");
const currentUserName = localStorage.getItem("activeUser");
const userObject = JSON.parse(localStorage.getItem(currentUserName));
win.textContent = `win : ${userObject.win}`
lose.textContent = `lose : ${userObject.lose}`
let currentheight = 100
let id


 const gameover = document.createElement("img")
    gameover.src="../IMG/uu.png"
    gameover.style.width="30vw"
    gameover.style.height="auto"
    game.appendChild(gameover)
    gameover.style.display="none"
    gameover.style.position="absolute"
    gameover.style.bottom = "12vh"


    const winner = document.createElement("img")
    winner.src="../IMG/mario1.gif"
    winner.style.width="25vw"
    winner.style.height="auto"
    game.appendChild(winner)
    winner.style.display="none"
    winner.style.position="absolute"
    winner.style.bottom = "12vh"


       

const goingBack = ()=>{
    window.location.href = "../HTML/loby.html"
}

const finish = ()=>{
   
    instructoins.style.display = "none"
    start.style.display = "none"
    setTimeout(()=>{
            gameover.style.display="none"
            winner.style.display = "none"
          succes.pause();
            succes.currentTime = 0;
            currentheight = 100;
          timer.style.height = currentheight+"%"
          instructoins.style.display = "flex"
          start.style.display = "flex"
          board.style.display = "flex"
          instructoins.addEventListener("click", readInstructions)
          start.addEventListener("click", randBoxes)
    },2000)
}


const successss = ()=>{
    
    succes.play()
    board.style.display="none"
            winner.style.display="block"
            flags.length=0
            choosen.length=0
            boxes.forEach(element => {
            element.style.backgroundColor= "black";
            removeAllListeners()
              });

        if (userObject)
        {
            userObject.win += 1;
            localStorage.setItem(currentUserName, JSON.stringify(userObject));
            win.textContent = `win : ${userObject.win}`
        }

                clearInterval(id)
                finish()
            
}

const fail =()=>{
            
            clickWorngSound.play();
            board.style.display="none"
            gameover.style.display="block"
            flags.length=0
            choosen.length=0
            boxes.forEach(element => {
            element.style.backgroundColor= "black";
            removeAllListeners()
              });
        if (userObject)
        {
            userObject.lose += 1;
            localStorage.setItem(currentUserName, JSON.stringify(userObject));
            lose.textContent = `lose : ${userObject.lose}`
        }
            clearInterval(id)
            finish()
}

const removeAllListeners = () => {
    for (let i = 0; i < boxes.length; i++) {
        const newBox = boxes[i].cloneNode(true);
        boxes[i].parentNode.replaceChild(newBox, boxes[i]);
        boxes[i] = newBox; 
    }
};


const UserChoose = (i)=>{
    if(choosen.includes(i)==true)
    {
       
        boxes[i].style.backgroundColor= "#f953c6";
        clickSound.play();
        flags.push(true)
        const newBox = boxes[i].cloneNode(true);
        boxes[i].parentNode.replaceChild(newBox, boxes[i]);
        boxes[i] = newBox;

        if(flags.length===5)
        {
            successss()
        }
    }
    else
    {
            fail()
    }
}


const randBoxes = ()=>{
  
    instructoins.removeEventListener("click", readInstructions)
    let counter = 0
    do
    {
        let num = Math.floor(Math.random()*16)
        if(choosen.includes(num)==false)
        {
            choosen.push(num)
            counter+=1
        }
        
    }
    while(counter<5)

    for(let i=0;i<choosen.length;i++)
        {
            boxes[choosen[i]].style.backgroundColor= "#f953c6";
        } 
    start.removeEventListener("click", randBoxes)


    setTimeout(()=>{
          for(let i=0;i<choosen.length;i++)
        {
            boxes[choosen[i]].style.backgroundColor= "black";
        } 
        for(let i=0;i<boxes.length;i++)
        {
            boxes[i].addEventListener("click",()=>{
                UserChoose(i)
            } )
        }
        id = setInterval(()=>{

            currentheight = currentheight-1;
            if(currentheight<=0)
            {
                fail()
                currentheight = 0;
                clearInterval(id)
            }
            timer.style.height = currentheight+"%"

        },50)
    }, 2000)

  
}

const readInstructions = ()=>{
 board.style.display = "none"
    instructoins.style.display = "none"
    start.style.display = "none"
     const ins = document.createElement("div")
        ins.style.width = "30vw"
        ins.style.height = "20vw"
        ins.style.border = "solid 5px rgba(0, 94, 255, 0.5)"
        ins.style. borderRadius= "10px";
        ins.style.display = "flex"
        ins.textContent = "לחץ על התחל כדי להתחיל את המשחק.כמה כפתורים יצבעו לרגע – \nזכור את המיקום שלהם.לאחר שהצבעים נעלמים, \nלחץ על אותם כפתורים.אם תלחץ על כפתור לא נכון, תופיע הודעת שגיאה.אם תלחץ על כל הכפתורים הנכונים, תנצח! \n🎉👏👏👏👏👏👏👏😂😂😂🤩🤩🤩\nטיפ: שים לב – הזמן מוגבל!"
       ins.style.justifyContent = "center"
        ins.style.fontFamily = " Segoe UI, Tahoma, sans-serif"
        ins.style.fontSize = "1.3vw"
        ins.style.fontWeight ="bold";
        ins.style.padding = "8px"
        ins.style.textShadow= "0 0 5px rgba(255, 0, 255, 0.5)";
        game.appendChild(ins)

        const back = document.createElement("button")
        back.textContent = "הבנתי"
        back.style.width = "30vw"
        back.style.border = "solid 5px rgba(0, 94, 255, 0.5)"
        back.style.display = "flex"
        game.appendChild(back)
    
   
    back.addEventListener("click", ()=>{
        
    back.style.display = "none"
    ins.style.display = "none"
    instructoins.style.display = "flex"
          start.style.display = "flex"
          board.style.display = "flex"
          instructoins.addEventListener("click", readInstructions)
          start.addEventListener("click", randBoxes)
    })

}

goback.addEventListener("click",goingBack)

instructoins.addEventListener("click", readInstructions)



start.addEventListener("click", randBoxes)



