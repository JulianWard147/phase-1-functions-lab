// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return(Math.abs(42-someValue))
}

function distanceFromHqInFeet(someValue){
    return(distanceFromHqInBlocks(someValue)*264)
}

function distanceTravelledInFeet(start, destination){
    return(Math.abs((start-destination)*264))
}

function calculatesFarePrice(start, destination){
    let fareDollars
    let distFeet = distanceTravelledInFeet(start, destination)
    if (distFeet > 2500)
        fareDollars = 'cannot travel that far'    
    
    else if (distFeet <= 400){
        fareDollars = 0}
    
    else if (distFeet <= 2000){
        fareDollars = (distFeet-400)*.02}

    else if (distFeet <= 2500){
        fareDollars = 25} 

    return(fareDollars)
}

