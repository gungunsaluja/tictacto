let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; //plyerx payer y
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
      
       if(turnO){
        //playero ki turn 
        box.innerText = "O";
        turnO = false;
       }
       else{
        // player X ki turn
        box.innerText ="X";
        turnO = true;
        
       }
       box.disabled = true;
        checkWinner();
    }); 
});
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;

    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText = "";


    }
};
const showwinner = (winner) =>{
    msg.innerText = `Congrats,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () =>{
    for(let pattern of winPattern){
      let post1val = boxes[pattern[0]].innerText;
      let post2val = boxes[pattern[1]].innerText;
      let post3val = boxes[pattern[2]].innerText;
      if(post1val != "" && post2val!="" && post3val!=""){
        if(post1val=== post2val && post2val === post3val){
        console.log("winner",post1val);
    
        showwinner(post1val);
        return true;

      }
    }
}
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
