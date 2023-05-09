// Your code here



// const dodger = document.getElementById('dodger');
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.bottom = "100px"
// dodger.style.bottom = "0px";
// dodger.style.left = "0px"

// document.addEventListener("keydown", function (event) {
//     console.log(event);
//   });

// document.addEventListener("keydown", e => console.log(e))

/*
Let's take a look at what that event object looks like. Enter the code above into the console then click in the browser window (where the game field and dodger are rendered). Now, if you press the left arrow key, you should see a KeyboardEvent logged in the console. Expand the event and you'll see its properties listed; the one we're interested in is the key property. Try pressing some other keys as well and check out their key properties
*/


// document.addEventListener("keydown", event => {
//     if(event.key === "ArrowLeft"){
//         const leftNumbers = dodger.style.left.replace("px", "");
//         const left = parseInt(leftNumbers, 10)

//         dodger.style.left = `${left - 1}px`
//     }
// })

const dodger = document.getElementById("dodger");

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
})




//------------------------Move Dodger to the Right

const moveDodgerRight = () => {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left < 360){
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", e => {
    if(e.key === "ArrowRight"){
        moveDodgerRight();
    }
})