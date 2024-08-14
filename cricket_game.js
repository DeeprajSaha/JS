let computerChoice;
function ganerateComputerChoice(){
    
    // This will genarate random number between 0 and 3
    let randomNumber = Math.random()*3;
    
    if(randomNumber > 0 && randomNumber <=1){
         computerChoice = 'Bat';
        // console.log('computer Choice is Bat');
    }else if (randomNumber > 1 && randomNumber <= 2){
         computerChoice = 'Ball';
        // console.log('computer Choice is Ball');
    }
    else {
         computerChoice = 'Stump'
        // console.log('computer Choice is Stump');
    }

}