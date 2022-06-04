// =======================================   main   ===================================================
let compran ;
function computerPlay( ){
let randop = ["rock" ,"paper","scissors"];
let player =  Math.floor(Math.random()*3);
// let compran = randop[player];
 compran = randop[player];
// console.log("this is computer random choice :",compran);
windh4.innerHTML = compran;
// return compran;
}
// computerPlay();
let win = 0 ;
let los = 0;
let same = 0;
let res ;

let appertitl = document.querySelector("section h2");
// let windh3 = document.querySelector("section h3");
let resultss = document.getElementById("resultss");
let windh4 = document.querySelector("section h4");
let windh5 = document.querySelector("section h5");

//h6 user
let usercho =document.getElementById("usercho");
let btn = document.querySelectorAll("section h5 button");
let userchois ;

btn.forEach((btn)=>{
     btn.addEventListener("click" , (e)=>{
          userchois = e.target.dataset.att;
          usercho.innerHTML = userchois ;

          console.log(compran);
          console.log(userchois);

          // btn.classList.add("activ");
          //  e.target.querySelectorAll("section h5 button").forEach( (btn)=>{
          //      e.target.classList.remove(".activ");
          // }); 
          // e.classList.add(".activ");
         // h4 computer
          // windh4.innerHTML = computerPlay() ;
          //h3 res
          // windh3.innerHTML=playRound() ;
          // resultss.innerHTML=playRound() ;
          
          // windh3.innerHTML = res ;
          computerPlay();
          playRound();
     });
          // btn.classList.remove("activ");
 });

// function playRound(ply ,computerSelection ){  
     function playRound(){  
          //  let res = " ";
     // let playerSelection = ply.toLowerCase();
      if(userchois === compran){     
          res = "this is the same choice LETs do other try" ;
       }else if(userchois === "rock" && compran ==="paper"){
          res = "u win" ;
       }
       else if(userchois === "paper" && compran ==="rock"){
          res = "u lost" ;
       }
       else if(userchois === "rock" && compran ==="scissores"){
          res = "u lost" ;
       } else if(userchois === "scissores" && compran ==="rock"){
          res = "u win" ;
     }

          else if(userchois === "paper" && compran ===" scissores"){
               res = "u lost" ;
            }else if(userchois === "scissores" && compran ==="paper"){
               res = "u win" ;
            }
       
       else if(userchois === "paper" && compran === "rock"){
          res = "u win" ;
       } else if(userchois === "rock" && compran === "paper"){
          res = "u lost" ;
       }
       
       else if(userchois === "scissores" && compran === "rock"){
          res = "u win" ;
       }else if(userchois === "rock" && compran === "scissores"){
          res = "u lost" ;
       }

       else if(userchois === "scissores" && compran === "paper"){
          res = "u lost" ;
       }else if(userchois === "paper" && compran === "scissores"){
          res = "u win" ;
       }
       
       else if(userchois === "scissores" && compran === "paper"){
          res = "u lost" ;
       } else if(userchois === "paper" && compran === "scissores"){
          res = "u win" ;
       }

       resultss.innerHTML = res;



               //  if(playerSelection === computerSelection){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("this is the same choice LETs do other try" );
               //      same++;
               //      console.log("==================================");
               //      res = "this is the same choice LETs do other try" ;
               //      }
               // else if(playerSelection === "rock" && computerSelection==="scissores"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");
               //      res = "u win" ;
               // }
               // else if(playerSelection === "scissores" && computerSelection===" rock"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u lost" );
               //      los++;
               //      console.log("==================================");
               //      res = "u lost" ;
               // }
               // else if(playerSelection === "rock" && computerSelection === " paper "){
               //      res= console.log("u lost"  );
               //      los++;
               //      res = "u lost" ;
               // }
               // else if(playerSelection === "paper" && computerSelection === " rock "){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");
               //      res = "u win" ;
               // }
               // else if(playerSelection ==="scissores" && computerSelection==="paper"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");
               //      res = "u win" ;
               // }
               // else if(playerSelection ==="paper" && computerSelection==="scissores"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u lost" );
               //      los++;
               //      console.log("==================================");
               //      res = "u lost" ;
               // }
               // else if(playerSelection ==="scissores" && computerSelection==="rock"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u lost" );
               //      los++;
               //      console.log("==================================");  
               //      res = "u lost" ;
               // }
               // else if(playerSelection ==="rock" && computerSelection==="scissores"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");   
               //      res = "u win" ;
               // }
               // else if(playerSelection ==="paper" && computerSelection==="scissores"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u lost" );
               //      los++;
               //      console.log("==================================");
               //      res = "u lost" ;
               // }
               // else if(playerSelection ==="scissores" && computerSelection==="paper"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");
               //      res = "u win" ;
               // }
               // else if(playerSelection ==="paper" && computerSelection==="rock"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u win" );
               //      win++;
               //      console.log("==================================");
               //      res = "u win" ;
               // }
               // else if(playerSelection ==="rock" && computerSelection==="paper"){
               //      console.log("computerSelection:" ,computerSelection);   
               //      console.log("ply:" , ply);
               //      console.log("u lost" );
               //      los++;
               //      console.log("==================================");
               //      res = "u lost" ;
               // }

               // windh3.innerHTML =  playRound(playerSelection,computerSelection) ;
               // windh3.innerHTML = res ;
}

function game(){
     for(let j = 0 ; j < 5 ; j++){  
          const playerSelection = prompt("enter your choice rock , paper or scissores:");
          const computerSelection = computerPlay();            
          console.log(playRound(playerSelection,computerSelection)) ;
          // const resul = playRound(playerSelection,computerSelection);
     }
     // console.log(resul);
     let mess = console.log("THE END And your Results are : " , " you win : "  , win , " and you lost : " , los , " and you get the same thing: " , same , "    THNKS");
}
// game();

