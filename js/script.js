{
function playGame(playerInput){

    clearMessages()
    
    function getMoveName(argMoveId) {
    
      if(argMoveId == 1){
        return 'kamień';
      } else if (argMoveId == 2){
        return 'papier'; 
      }
      else if (argMoveId == 3){
        return 'nożyce';
      }
      else {printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';       
      }
    } 
  
    const randomNumber = Math.floor(Math.random() * 3 + 1),
        computerMove = getMoveName(randomNumber), 
        playerMove = getMoveName(playerInput);
  
    console.log('Wylosowana liczba to: ' + randomNumber);
  
    printMessage('Mój ruch to: ' + computerMove);
  
    console.log('Gracz wpisał: ' + playerInput);
  
    printMessage('Twój ruch to: ' + playerMove);
  

    function displayResult(argComputerMove, argPlayerMove){
      if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz! Brawo!';
      }
      else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz! Brawo!';
      }
      else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz! Brawo!';
      }
      else if(argComputerMove == argPlayerMove){
        return 'Remis!';
      }
      else{    
        return('Tym razem przegrywasz! :(');
      }
    }
  
    const result = displayResult(computerMove, playerMove);
    printMessage(result);
  }
  
  function buttonClicked(){
  }
  document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
  });
  
  document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
  });
  
  document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
  });
}