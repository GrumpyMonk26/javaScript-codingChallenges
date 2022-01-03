'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let backgroundColor = document.querySelector('body').style.backgroundColor = '#222'

console.log(secretNumber);

document.querySelector('.check').addEventListener
    ('click', function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // when there is no input
        if(!guess){
            document.querySelector('.message').textContent = 'No Number Selected'
        // when guess is equal to the secret number
        } else if( guess === secretNumber ){
            document.querySelector('.message').textContent = 'You guessed correct'
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem'
            if( score > highscore ){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        // when guess is greater than the secret number
        } else if( guess > secretNumber) {
            if( score > 1 ) {
                document.querySelector('.message').textContent = 'You guess was to high';
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#DE1E1E'
                setTimeout(function(){
                    document.querySelector('body').style.backgroundColor = backgroundColor;  // Change the color back to the original
                  }, 500);

            } else {
                document.querySelector('.message').textContent = 'Game Over!!';
            }
        // when guess is lower than the secret number   
        } else if (guess < secretNumber) {
            if( score > 1 ) {
                document.querySelector('.message').textContent = 'You guess was to low'
                score--;
                document.querySelector('.score').textContent = score;
                document.querySelector('body').style.backgroundColor = '#DE1E1E'
                setTimeout(function(){
                    document.querySelector('body').style.backgroundColor = backgroundColor;  // Change the color back to the original
                  }, 500);
            } else {
                document.querySelector('.message').textContent = 'Game Over!!';
            }
        }
    })

    document.querySelector('.again').addEventListener('click',function(){
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = ''
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem'
        document.querySelector('.number').textContent = '?';
    })