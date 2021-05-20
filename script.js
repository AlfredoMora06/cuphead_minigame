const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let time = 0;
let star1touched = false;
let star2touched = false;
let star3touched = false;
let star4touched = false;
let star5touched = false;
let star6touched = false;
let redtouched = false;


let randx = Math.floor(Math.random() * 800);
let randy = Math.floor(Math.random() * 450);



//load images
const images = {};

images.player = new Image();
images.player.src = 'character.png';
images.star1 = new Image();
images.star1.src = 'star.png'
images.star2 = new Image();
images.star2.src = 'star.png'
images.star3 = new Image();
images.star3.src = 'star.png'
images.star4 = new Image();
images.star4.src = 'star.png'
images.star5 = new Image();
images.star5.src = 'star.png'
images.star6 = new Image();
images.star6.src = 'star.png'
images.star7 = new Image();
images.star7.src = 'star.png'
images.star14 = new Image();
images.star14.src = 'star.png'
images.red = new Image();
images.red.src = './images/red.png';

playerWidth = 103.0625;
playerHeight = 113.125;
playerFrameX = 3;
playerFrameY = 3;
playerX = 0;
playerY = 0;
playerSpeed = 10;
playerAction = '';
let starsTouched = 0;
let lifebar = 3;

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setInterval(function () {
        time += 1;
        document.getElementById('countUP').innerHTML = time;

        if (time >= 4000) {
            if (starsTouched >= 3) {
                console.log("vibecheck")
                window.location.href = "good_ending.html"
            }
            else {
                console.log("naycheck")
                window.location.href = "bad_ending.html"
            }
        }

        if (starsTouched === 7) {
            window.location.href = "special_ending.html"
        }
    }, 1000);

    if (playerAction === 'ArrowUp') {
        images.player.src = 'character.png';
        playerFrameY = 0;
        playerMinFrame = 4;
        playerMaxFrame = 15;
    } else if (playerAction === 'ArrowRight') {
        images.player.src = 'character.png';
        playerFrameY = 3;
        playerMinFrame = 0;
        playerMaxFrame = 9;
    } else if (playerAction === 'ArrowLeft') {
        images.player.src = 'characterLeft.png';
        playerFrameY = 3;
        playerMinFrame = 11;
        playerMaxFrame = 2;
    } else if (playerAction === 'ArrowDown') {
        images.player.src = 'character.png';
        playerMinFrame = 0;
        playerFrameY = 6;
        playerMaxFrame = 12;
    }
    drawSprite(images.player, playerWidth * playerFrameX,
        playerHeight * playerFrameY, playerWidth,
        playerHeight, playerX, playerY, playerWidth, playerHeight);

    ctx.drawImage(images.star7, -300, -300);
    ctx.drawImage(images.star6, -200, -300);
    ctx.drawImage(images.star7, -100, -300);
    ctx.drawImage(images.star1, 0, 0);
    ctx.drawImage(images.star7, -300, -300);
    ctx.drawImage(images.star7, 100, -300);
    ctx.drawImage(images.star2, 200, -300);
    ctx.drawImage(images.star7, 300, -300);
    ctx.drawImage(images.star7, 500, -300);
    ctx.drawImage(images.star7, 700, -300);
    ctx.drawImage(images.star7, 900, -300);
    ctx.drawImage(images.star3, 400, 0);
    ctx.drawImage(images.star4, 600, -300);
    ctx.drawImage(images.star5, 800, 0);
    ctx.drawImage(images.star7, -300, -150);
    ctx.drawImage(images.star7, -200, -150);
    ctx.drawImage(images.star7, -100, -150);
    ctx.drawImage(images.star7, 0, -150);
    ctx.drawImage(images.star7, 100, -150);
    ctx.drawImage(images.star7, 200, -150);
    ctx.drawImage(images.star7, 300, -150);
    ctx.drawImage(images.star7, 400, -150);
    ctx.drawImage(images.star7, 500, -150);
    ctx.drawImage(images.star7, 600, -150);
    ctx.drawImage(images.star7, 700, -150);
    ctx.drawImage(images.star7, 800, -150);
    ctx.drawImage(images.star7, 900, -150);
    ctx.drawImage(images.star7, 900, -150);
    ctx.drawImage(images.star14, 0, -300);
    ctx.drawImage(images.star14, 400, -300);
    ctx.drawImage(images.star14, 800, -300);
    ctx.drawImage(images.star14, 100, 0);
    ctx.drawImage(images.star14, 200, 0);
    ctx.drawImage(images.star14, -100, 0);
    ctx.drawImage(images.star14, -200, 0);
    ctx.drawImage(images.star14, -300, 0);
    ctx.drawImage(images.star14, 300, 0);
    ctx.drawImage(images.star14, 600, 0);
    ctx.drawImage(images.star14, 500, 0);
    ctx.drawImage(images.star14, 700, 0);
    ctx.drawImage(images.star14, 900, 0);

    if (starsTouched === 3) {
        ctx.drawImage(images.red, 500, 400);
    }



    //animate sprites
    if (playerAction !== '') {
        if (playerFrameX < playerMaxFrame) playerFrameX++;
        else if (playerAction === 'ArrowLeft') {
            if (playerFrameX > playerMaxFrame) {
                playerFrameX--;
            } else (playerFrameX = playerMinFrame);
        }
        else (playerFrameX = playerMinFrame);
    }

    //move
    if (playerAction === 'ArrowRight') {
        if (playerX < canvas.width + playerWidth) {
            playerX += playerSpeed;
        }
        else {
            playerX = 0 - playerWidth;
        }
    }
    else if (playerAction === 'ArrowLeft') {
        if (playerX < -100) {
            playerX = canvas.width;
        }
        else {
            playerX -= playerSpeed
        }
    }
    else if (playerAction === 'ArrowUp') {
        if (playerY < (0 - playerHeight)) {
            playerY = canvas.height + playerHeight;
        }
        else {
            playerY -= playerSpeed;
        }
    } else if (playerAction === 'ArrowDown') {
        if (playerY > canvas.height + playerHeight) {
            playerY = 0 - playerHeight;
        } else {
            playerY += playerSpeed;
        }
    } else {
        playerFrameX = 3
        playerFrameY = 3
    }

    if (playerX > 165 && playerX < 235 && playerY > 70 && playerY < 150) {
        if (star6touched === false) {
            images.star6.src = "";
            starsTouched += 1;
            star6touched = true;
        }
    }
    if (playerX > 370 && playerX < 445 && playerY > 370 && playerY < 445) { // x > 370 x < 420
        if (star1touched === false) {
            images.star1.src = "";
            starsTouched += 1;
            star1touched = true;
        }
    }
    if (playerX > 570 && playerX < 640 && playerY > 70 && playerY < 150) {
        if (star2touched === false) {
            images.star2.src = "";
            starsTouched += 1;
            star2touched = true;
        }
    }
    if (playerX > 770 && playerX < 830 && playerY > 370 && playerY < 445) {
        if (star3touched === false) {
            images.star3.src = "";
            starsTouched += 1;
            star3touched = true;
        }
    }
    if (playerX > 955 && playerX < 1025 && playerY > 70 && playerY < 150) {
        if (star4touched === false) {
            images.star4.src = "";
            starsTouched += 1;
            star4touched = true;
        }
    }
    if (playerX > 1165 && playerX < 1245 && playerY > 370 && playerY < 445) {
        if (star5touched === false) {
            images.star5.src = "";
            starsTouched += 1;
            star5touched = true;
        }
    }

    if (playerX > 660 && playerX < 745 && playerY > 520 && playerY < 610) {
        if (redtouched === false) {
            images.red.src = "";
            starsTouched += 1;
            redtouched = true;
        }
    }



    //console.log(playerY); // 660 <x<745  520<y<610



}

window.onload = setInterval(animate, 1000 / 30);
window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

window.addEventListener("keydown", keysDown, true);

function keysDown(e) {
    playerAction = e.key;
}
