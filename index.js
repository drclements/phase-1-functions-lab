// Code your solution in this file!
const hqBlock = 42
const nycBlock = 264



function distanceFromHqInBlocks(distanceInBlocks){
   if (distanceInBlocks >= hqBlock){
    return distanceInBlocks - hqBlock}
    else {
    return hqBlock - distanceInBlocks }
}

function distanceFromHqInFeet(blocksToFeet){
    return distanceFromHqInBlocks(blocksToFeet) * nycBlock
}

function distanceTravelledInFeet(start, destination){
    if (destination >= hqBlock){
    return (destination - start) * nycBlock}
    else {
        return (start - destination) * nycBlock
    }
}

function calculatesFarePrice(start, destination){ 
    const distance = distanceTravelledInFeet(start, destination)
   
      if (distance <= 400){
        return 0}
        else if (distance > 400 && distance <= 2000) {
            return (distance - 400) * .02
        }
        else if (distance > 2000 && distance <= 2500) {
            return 25
        }
        else if (distance > 2500) {
            return "cannot travel that far"
        }
    }

   
    