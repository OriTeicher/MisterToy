import { utilService } from "./util.service"


export const TOY_LABELS =
    [
        'Fun', 'Educational', 'Interactive', 'Creative', 'Adventurous',
        'Cuddly', 'Exciting', 'Classic', 'High-Tech', 'Eco-Friendly',
        'Durable', 'Portable', 'Collectible', 'Imaginative', 'Safe'
    ]
export const TOY_DB_KEY = 'toyDB'
export const TOY_LIMIT = 10
export const TOY_ID_LIMIT = 5
export const TOY_MAX_LABELS_COUNT = 5
export const MAIN_HEADER = 'Welcome to Mr.T🪀y! '

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
        _id: utilService.getRandomStr(TOY_ID_LIMIT, 'T'),
        createdAt: Date.now(),
        toyName: _getRandomToyName(),
        price: utilService.getRandomInt(10, 100),
        labels: _getRandomToyLabels(utilService.getRandomInt(0, TOY_MAX_LABELS_COUNT)),
        imgUrl: generateToyImg()
    }
}

function _createToys(amount) {
    let toys = []
    for (let i = 0; i < amount; i++) {
        toys.push(_createToy())
    }
    return toys
}

function generateToyImg() {
    return `https://robohash.org/77.125.252.${utilService.getRandomInt(1, 100)}.png`
}

function _getRandomToyName() {
    const adjectives = [
        'Amazing', 'Fun', 'Colorful', 'Exciting', 'Fantastic',
        'Cool', 'Super', 'Happy', 'Magic', 'Brilliant'
    ]
    const nouns = [
        'Robot', 'Dinosaur', 'Car', 'Doll', 'Puzzle',
        'Train', 'Ball', 'Blocks', 'Game', 'Bear'
    ]
    const types = [
        'Deluxe', 'Pro', 'Mega', 'Ultra', 'Mini',
        'Jumbo', 'Speedy', 'Glowing', 'Interactive', 'Classic'
    ]

    const randomAdjective = adjectives[utilService.getRandomInt(0, adjectives.length)]
    const randomNoun = nouns[utilService.getRandomInt(0, nouns.length - 1)]
    const randomType = types[utilService.getRandomInt(0, types.length - 1)]

    return `${randomAdjective} ${randomNoun} ${randomType}`
}

function _getRandomToyLabels(amount = 3) {
    let res = []
    for (let i = 0; i < amount; i++) {
        res.push(TOY_LABELS[utilService.getRandomInt(0, TOY_LABELS.length)])
    }
    return res
}

export const toyService = {

    // FUNCTIONS
    query,

    // CONSTS
    TOY_DB_KEY,
    TOY_LIMIT,
    TOY_ID_LIMIT,
    TOY_MAX_LABELS_COUNT,

}
