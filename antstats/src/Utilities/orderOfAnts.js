function orderOfAnts(antArr) {
// sorting ants in array by likelyhood of them winning. returning new array with sorted ants
    var newArr = antArr.sort((a,b) => {
        return b.chanceOfWinning - a.chanceOfWinning
    })

    return newArr
}

export default orderOfAnts;