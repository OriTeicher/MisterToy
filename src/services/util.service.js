export const utilService = {
    getRandomInt,
    getRandomStr
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (min + max) - 1)
}

function getRandomStr(length) {
    let res = ''
    const letters = 'ABCDEFGhijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < length; i++) {
        res += letters.charAt(utilService.getRandomInt(0, letters.length - 1))
    }
    return res
}

