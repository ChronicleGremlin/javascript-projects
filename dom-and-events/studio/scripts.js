// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const paragraph = document.getElementById("flightStatus");
    const rocketInformation = document.getElementById("flightDisplay");
    const rocketBackground = document.getElementById("shuttleBackground");
    const rocketHeight = document.getElementById("spaceShuttleHeight");
    const rocketship = document.getElementById("rocket")
    //buttons//
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");

    takeOffButton.addEventListener('click', () => {
        window.confirm("Confirm that the shuttle is ready for takeoff")
        if(true){
            paragraph.innerHTML = "Shuttle in flight."
            rocketBackground.style.backgroundColor = "blue"
            rocketHeight.innerHTML += 10000
        };

    })

    landingButton.addEventListener('click', () => {
        window.alert("The shuttle is landing. Landing gear engaged.")
        paragraph.innerHTML = "The shuttle has landed."
        rocketBackground.style.backgroundColor = "green"
        rocketHeight.innerHTML = 0
    })

    abortMission.addEventListener('click', () => {
        window.confirm("Confirm that you want to abort the mission.")
        if(true){
            paragraph.innerHTML = "Mission aborted."
            rocketBackground.style.backgroundColor = "green"
            rocketHeight.innerHTML = 0
        }
    })

    moveUp.addEventListener('click', () => {
        rocketship.style.top
    })


}

window.addEventListener('load', init);