console.log("Welcome to CrissCross");
let music = new Audio("./Assets/Epic.mp3");
let audioTurn = new Audio("./Assets/ting.mp3");
let gameover = new Audio("./Assets/gameover.mp3");
let turn = "X";
let isgameover = false;


//Function to Change the Turn:
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}



//Function to Check the Win:

const checkWin = () => {
    //Win Logics:
    let boxtext=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) && (boxtext[e[2]].
        innerText=== boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText!=="")){

                e.forEach(index=>{
                    document.getElementsByClassName('box')[index].style.
                    backgroundColor='lightgreen'
                })



            document.querySelector('.info').innerText=boxtext[e[0]].innerText + "Won";

            isgameover=true;

            // document.getElementsByTagName('img')
            // document.querySelector('.imgbox').
            document.getElementsByTagName('img')
            [0].style.width="200px";
            




        }

    })



}



//Game Logics:
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName('info')[0].
                    innerText = "Turn for:" + turn;
            }
        }
    });

});


//Reset Button Logic:
document.getElementById('reset').addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll('.boxtext');

    Array.from(boxtexts).forEach(element=>{
        element.innerText=""


    });
    // console.log(boxtexts);

    let boxes=document.querySelectorAll('.box');
    for(let i=0;i<boxes.length;i++){
        boxes[i].style.backgroundColor="";
    }

    turn="X";  
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText = "Turn for:" + turn;
    // document.querySelector('.imgbox')
    document.getElementsByTagName('img')[0].
    style.width="0px";


});



