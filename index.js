let fanImage = document.getElementById('fanImage');
// let fan1 = document.getElementById('fan1');

let increaseButton = document.getElementById('increaseSpeed');
let decreaseButton = document.getElementById('decreaseSpeed');
let rotationSpeed = 2; //  Initial speed in seconds 

fanImage.addEventListener('click', () => {
if(fanImage.style.animationPlayState === 'paused' || !fan.style.animationPlayState){
    fanImage.style.animationPlayState = 'running';
}else {
    fanImage.style.animationPlayState = 'paused';
}

});

increaseButton.addEventListener('click', () => {
rotationSpeed = Math.max(rotationSpeed / 2, 0.125);  // double the speed, with a minimum limit
fanImage.style.animationDuration = `${rotationSpeed}s`
});

decreaseButton.addEventListener('click', () => {

rotationSpeed = Math.min(rotationSpeed * 2, 8);   // halve the speed
fanImage.style.animationDuration = `${rotationSpeed}s`;
});