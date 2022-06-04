// =======================================   main   ===================================================
function computerPlay( ){
let randop = ["rock" ,"paper","scissors"];
let player =  Math.floor(Math.random()*3);
let compran = randop[player];
return compran;
// console.log("this is computer random choice :",compran);
}
// computerPlay();
let win = 0 ;
let los = 0;
let same = 0;

function playRound(ply ,computerSelection ){  
    
      let res = " ";

     let playerSelection = ply.toLowerCase();

                if(playerSelection === computerSelection){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("this is the same choice LETs do other try" );
                    same++;
                    console.log("==================================");
                    }

               else if(playerSelection === "rock" && computerSelection==="scissores"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");

               }
               else if(playerSelection === "scissores" && computerSelection===" rock"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u lost" );
                    los++;
                    console.log("==================================");
               }

               else if(playerSelection === "rock" && computerSelection === " paper "){
                    res= console.log("u lost"  );
                    los++;
               }
               else if(playerSelection === "paper" && computerSelection === " rock "){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");
               }

               else if(playerSelection ==="scissores" && computerSelection==="paper"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");
               }
               else if(playerSelection ==="paper" && computerSelection==="scissores"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u lost" );
                    los++;
                    console.log("==================================");
               }

               else if(playerSelection ==="scissores" && computerSelection==="rock"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u lost" );
                    los++;
                    console.log("==================================");  
               }
               else if(playerSelection ==="rock" && computerSelection==="scissores"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");   
               }

               else if(playerSelection ==="paper" && computerSelection==="scissores"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u lost" );
                    los++;
                    console.log("==================================");
               }
               else if(playerSelection ==="scissores" && computerSelection==="paper"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");
               }
               else if(playerSelection ==="paper" && computerSelection==="rock"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u win" );
                    win++;
                    console.log("==================================");
               }
               else if(playerSelection ==="rock" && computerSelection==="paper"){
                    console.log("computerSelection:" ,computerSelection);   
                    console.log("ply:" , ply);
                    console.log("u lost" );
                    los++;
                    console.log("==================================");
               }

}

function game(){
     
     for(let j = 0 ; j < 5 ; j++){  
          const playerSelection = prompt("enter your choice rock , paper or scissores:");
          const computerSelection = computerPlay();            
          console.log(playRound(playerSelection,computerSelection)) ;
          // const resul = playRound(playerSelection,computerSelection);
     }
     // console.log(resul);
     console.log("THE END And your Results are : " , " you win : "  , win , " and you lost : " , los , " and you get the same thing: " , same , "    THNKS");
}
game();

// let apperr = document.querySelector("section h2");
// apperr.innerHTML = ` ${ game() } `;
 
 