// Code your solution in this file!

// Checks distance from 42 (street)
// Use ternary to avoid negative number outcomes
function distanceFromHqInBlocks(distance){
    return distance > 42 ? distance - 42 : 42 - distance
}

// Takes number of blocks from previous function and determines distance in feet. each block is 264ft
function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264
}

// Uses ternary to check whether start or destination is higher, then performs according equation
// so that negative numbers are avoided
function distanceTravelledInFeet(start, destination){
    return start > destination ? (start - destination) * 264 : (destination - start) * 264
}

// create feetTraveled inside function to improve readability. use else ifs and logic to check
// distance traveled, returning appropriate responses
function calculatesFarePrice(start, destination){
    let feetTraveled = distanceTravelledInFeet(start, destination);
    if (feetTraveled <= 400){
        return 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000){
        return (feetTraveled - 400) * .02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500){
        return 25;
    } else if (feetTraveled > 2500){
        return 'cannot travel that far';
    }
}