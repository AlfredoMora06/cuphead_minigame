const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load images
const images = {};
images.player = new Image();
images.player.src = 'character.png';
playerWidth = 103.0625;
playerHeight = 113.125;
playerFrameX = 3;
playerFrameY = 3;
playerX = 500;
playerY = 500;
playerSpeed = 10;
playerAction = '';


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}




function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
        if (playerX > (canvas.width + playerWidth)) {
            playerX = canvas.width + playerWidth
        }
        else {
            playerX -= playerSpeed;
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