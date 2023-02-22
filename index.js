// Code your solution in this file!

const officeLoc = 42

function distanceFromHqInBlocks(someValue) {
    if(someValue < officeLoc){
        return (officeLoc - someValue)
    }
    else{
        return (someValue - officeLoc)
    }
  }

function distanceFromHqInFeet(someValue){
    let distanceInBlocks = distanceFromHqInBlocks(someValue);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return(destination - start) * 264
    }
    else{
        return(start - destination) * 264
    }
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    if(distanceTravelled > 2500){
        return ("cannot travel that far")
    }
    else if(distanceTravelled > 2000){
        return 25
    }
    else if(distanceTravelled > 400){
        return (distanceTravelled - 400) * 0.02
    }
    else if(distanceTravelled <= 400){
        return 0
    }
}