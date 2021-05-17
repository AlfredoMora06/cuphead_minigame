const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let time = 0;
let star1touched = false;
let star2touched = false;
let star3touched = false;
let star4touched = false;


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

        // if (time >= 1000) {
        //     if (starsTouched === 4) {
        //         console.log("vibecheck")
        //         window.location.href = "special_ending.html"
        //     }
        //     else {
        //         console.log("naycheck")
        //         window.location.href = "good_ending.html"
        //     }
        // }
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

    ctx.drawImage(images.star1, 0, 0);
    ctx.drawImage(images.star2, 200, -300);
    ctx.drawImage(images.star3, 400, 0);
    ctx.drawImage(images.star4, 600, -300);

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


    //console.log(playerY) //400 //400
    if (playerX > 370 && playerX < 445 && playerY > 370 && playerY < 445) { // x > 370 x < 420
        if (star1touched === false) {
            console.log("Hello")
            images.star1.src = "";
            starsTouched += 1;
            //boolean to star
            star1touched = true;
        }
    }

    if (playerX > 570 && playerX < 640 && playerY > 70 && playerY < 150) {
        if (star2touched === false) {
            console.log("Hello")
            images.star2.src = "";
            starsTouched += 1;
            //boolean to star
            star2touched = true;
        }
    }

    if (playerX > 770 && playerX < 830 && playerY > 370 && playerY < 445) {
        if (star3touched === false) {
            console.log("Hello")
            images.star3.src = "";
            starsTouched += 1;
            //boolean to star
            star3touched = true;
        }
    }

    if (playerX > 955 && playerX < 1025 && playerY > 70 && playerY < 150) {
        if (star4touched === false) {
            console.log("Hello")
            images.star4.src = "";
            starsTouched += 1;
            //boolean to star
            star4touched = true;
            console.log(starsTouched)
        }
    }
    //console.log(playerX); // 770<x<830  655<y<150






}

window.onload = setInterval(animate, 1000 / 30);



window.addEventListener('resize', function () {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

window.addEventListener("keydown", keysDown, true);
//window.addEventListener("keyup", keysUp, true);

function keysDown(e) {
    playerAction = e.key;
}

/*function keysUp(e) {
    console.log(e.key);
}*/