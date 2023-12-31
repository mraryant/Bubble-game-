var Hitvalue = 0;
var score = 0;
var timer = 30;

document.querySelector("#Shuffle").addEventListener("click", () => {
    makeBubble();
})
document.querySelector("#Replay").addEventListener("click", () => {
    Play();
    makeBubble();
    rendomHitVal();
    timer = 30;
    score = 0;
    document.querySelector("#score").textContent = score;
})
const makeBubble = () => {
    let clutter = "";
    for (let i = 1; i < 78; i++) {
        clutter += ` <div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
 
}
const rendomHitVal = () => {
    Hitvalue = Math.floor(Math.random() * 10)
    document.querySelector("#Hitval").textContent = Hitvalue;
}
const scoreIncrement = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}
const runTimer = () => {
    // timer = document.querySelector("#timer").innerHTML;
    let timerInterval= setInterval(function () {
        if (timer > 0)
        {
            timer --;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerInterval)
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h> <br> <h2> Your Score:- ${score}</h2> `
        }
    } , 1000)
}

const Play = () => {
    document.querySelector("#pbtm").addEventListener('click', function (dets) {
        let clickedBubble = Number(dets.target.textContent);
        if (clickedBubble == Hitvalue)
        {
            scoreIncrement();
            rendomHitVal();
            makeBubble();
        }
        else {
            if (dets.target.classList.contains("bubble")) 
            {
                dets.target.style.backgroundColor ="red";
                }
        }
    })
}



Play();


makeBubble();
rendomHitVal();
runTimer();