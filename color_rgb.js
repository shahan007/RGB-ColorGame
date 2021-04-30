let tiles = document.getElementsByClassName('square');
let num = 6;
let colorList = generateColours(num);
let msgDisplay =  document.getElementById('msgDisplay');
let h1 = document.getElementsByTagName('h1')[0];
let answer = correctColour();
let rgbDisplay = document.getElementById('rgbDisplay');
rgbDisplay.textContent = answer.toLocaleUpperCase();
let newBtn  = document.querySelector('#newColour');
let difficultyBtn = document.getElementsByClassName('eHbtns');


for (let i =0 ; i<tiles.length;i++){
    tiles[i].style.backgroundColor = colorList[i];
    tiles[i].addEventListener('click',function(){
        if (this.style.backgroundColor === answer){
            msgDisplay.textContent = 'Correct!';
            corectDisplay();
            newBtn.textContent = 'Play Again ?';
        }
        else{
            this.style.backgroundColor = document.body.style.backgroundColor;
            this.classList.add('inactive')
            msgDisplay.textContent = 'Try Again';
        }
    });
};

function corectDisplay(){
    for (let i = 0 ; i < num;i++){
        tiles[i].style.backgroundColor = answer;
    }
    h1.style.backgroundColor = answer;
};

function correctColour(){
    return colorList[Math.floor(Math.random() * colorList.length)];
};

function generateColours(num){
    let arr = [];
    for(let i =0 ; i<num ; i++){
        arr.push(randomColour());
    }
    return arr;
};

function randomColour(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};

//adding event listener to the new button
newBtn.addEventListener('click',function(){
    msgDisplay.textContent = '';
    colorList =  generateColours(num);
    answer = correctColour();
    rgbDisplay.textContent = answer.toLocaleUpperCase();
    for (let i = 0; i < num; i++) {
        tiles[i].style.backgroundColor = colorList[i];
        tiles[i].classList.remove('inactive')
    };
    h1.style.backgroundColor = document.body.style.backgroundColor;
    this.textContent = 'New Colours';
});

// adding event listener to difficulty button
for (let i = 0; i < difficultyBtn.length; i++) {
    let checker = difficultyBtn[i].getAttribute('data-info');
    difficultyBtn[i].addEventListener('click', function () {
        if (checker === 'easy') {
            num = 3;
            difficultyBtn[i + 1].classList.remove('selected');
            this.classList.add('selected');
        }
        else {
            num = 6;
            difficultyBtn[i - 1].classList.remove('selected');
            this.classList.add('selected');
        }
        msgDisplay.textContent = '';
        colorList = generateColours(num);
        answer = correctColour();
        rgbDisplay.textContent = answer.toLocaleUpperCase();
        for (let i = 0; i < tiles.length; i++) {
            if (i < num) {
                tiles[i].style.backgroundColor = colorList[i];
                tiles[i].classList.remove('inactive');
            }
            else {
                tiles[i].style.backgroundColor = document.body.style.backgroundColor;
                tiles[i].classList.add('inactive')
            };
        };
        h1.style.backgroundColor = document.body.style.backgroundColor;
        newBtn.textContent = 'New Colours';
    })
}
