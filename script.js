let startbutton = document.querySelector('.startbutton');
let startgame = document.querySelector('.startgame');
let choose = document.querySelector('.choose');
let cX = document.querySelector('.cX');
let c0 = document.querySelector('.c0')
let cell = document.querySelectorAll('.cell');
let turnX = document.querySelector('.turnX')
let turn0 = document.querySelector('.turn0')
let win_game = document.querySelector('.win'); 
let tell = document.querySelector('.tell');
let restart = document.querySelector('.restart');
let symbol = '';

startbutton.addEventListener('click',start_fun);
cX.addEventListener('click',choose_X);
c0.addEventListener('click',choose_0);
restart.addEventListener("click",restart_fun);

Array.from(cell).forEach(element => {
    element.addEventListener('click',() =>{
        if (element.textContent == ''){
            element.textContent = symbol;
            turnX.classList.toggle('toggle')
            turn0.classList.toggle('toggle')
            symbol = change_symbol();
            if (element.textContent === 'X'){
                element.style.color = 'red';
            }
            else{
             element.style.color = 'blue';
            }
            take = win();
            if (take){
                win_game.classList.remove('hide');
                symbol = change_symbol();
                tell.textContent = symbol + ' win the game';

            }
            if (cell[0].textContent !== '' && cell[1].textContent !== '' && cell[2].textContent !== '' && cell[3].textContent !== '' && cell[4].textContent !== '' &&cell[5].textContent !== '' && cell[6].textContent !== '' 
            && cell[7].textContent !== '' && cell[8].textContent !== ''&& take == false){
                win_game.classList.remove('hide');
                tell.textContent = ' Match Draw'; 
            }

        }
    });
});



function start_fun(){
    startgame.classList.add('hide');
    choose.classList.remove('hide');

}

function choose_X(){
    symbol = 'X';
    choose.classList.add('hide');
    turnX.classList.add('toggle')

}
function choose_0(){
    symbol = '0';
    choose.classList.add('hide');
    turn0.classList.add('toggle')

}

function change_symbol(){
    data = symbol === 'X'?'0':'X';
    return data;
}

function win(){
    if (checkCondition(cell[0],cell[1],cell[2]) || checkCondition(cell[3],cell[4],cell[5]) || checkCondition(cell[6],cell[7],cell[8]) 
    || checkCondition(cell[0],cell[3],cell[6]) || checkCondition(cell[1],cell[4],cell[7]) || checkCondition(cell[2],cell[5],cell[8])
    || checkCondition(cell[0],cell[4],cell[8]) || checkCondition(cell[2],cell[4],cell[6])){
        return true;
    }
    else{
        return false;
    }
}

function checkCondition(div1,div2,div3){
    if(    div1.textContent !== '' && div2.textContent !== '' && div3.textContent !== '' && div1.textContent === div2.textContent && div2.textContent ===
    div3.textContent){
        return true
    }
}

function restart_fun(){
    for (let i = 0;i<9;i++){
        cell[i].textContent = '';
    }
    symbol = '';
    win_game.classList.add('hide');
    choose.classList.remove('hide');
    turnX.classList.remove('toggle');
    turn0.classList.remove('toggle');


}