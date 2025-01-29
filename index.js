

const returnFirstTwoDrivers = function(array){
    const newarray = [...array]
    newarray.splice(2, (newarray.length-2))
    return newarray
}

const returnLastTwoDrivers = function(array){
    const newarray = array.slice(array.length-2, array.length)
    return newarray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(number){
    function innerfunction(value){return number*value}
    return innerfunction
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, functions){
    return functions(drivers)
}



