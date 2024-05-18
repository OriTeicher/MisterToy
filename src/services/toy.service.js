import { utilService } from "./util.service"

export const toyService = {
    query
}

const TOY_DB_KEY = 'toyDB'
const TOY_LIMIT = 3
const TOY_ID_LIMIT = 5
const TOY_NAME_LIMIT = 5

function query(amount = TOY_LIMIT) {
    let toys = JSON.parse(localStorage.getItem(TOY_DB_KEY))
    if (!toys || !toys.length) {
        toys = _createToys(amount)
        localStorage.setItem(TOY_DB_KEY, JSON.stringify(toys))
    }
    return toys
}

function _createToy() {
    return {
        _id: 'T-' + utilService.getRandomStr(TOY_ID_LIMIT),
        toyName: utilService.getRandomStr(TOY_NAME_LIMIT),
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

