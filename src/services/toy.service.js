import { utilService } from "./util.service"

export const toyService = {

}


const TOY_DB = 'toyDB'

function query(amount) {
    let toys = JSON.parse(localStorage.getItem(TOY_DB))
    if (toys) {

    }


}

function _createToy() {
    return {
        _id: 't-' + getRandomStr(5),
        toyName: getRandomStr(5),
        createdAt: Date.now(),
    }
}

function _createToys(amount) {
    let toys = []
    for (let i = 0; i < amount; i++) {
        toys.push(_createToy())
    }
    return toys
}

function getRandomStr(length) {
    let res = ''
    const letters = 'ABCDEFGhijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < letters.length; i++) {
        res += letters.charAt(utilService.getRandomInt(0, letters.length - 1))
    }
    return res
}

