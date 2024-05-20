import { asyncLocalStorageService } from './asl.service'
import { utilService } from './util.service'

export const toyService = {
   query,
   getToyById,
}

export const TOY_LABELS = [
   'Fun',
   'Educational',
   'Interactive',
   'Creative',
   'Adventurous',
   'Cuddly',
   'Exciting',
   'Classic',
   'High-Tech',
   'Eco-Friendly',
   'Durable',
   'Portable',
   'Collectible',
   'Imaginative',
   'Safe',
]
export const TOY_DB_KEY = 'toyDB'
export const TOY_AMOUNT_LIMIT = 20
export const TOY_ID_LIMIT = 5
export const TOY_MAX_LABELS_COUNT = 5
export const MAIN_HEADER = "Welcome to Mr.Toy's toys! "

async function query(filterBy = {}) {
   let toys = await asyncLocalStorageService.load(TOY_DB_KEY)
   if (!toys || !toys.length) {
      toys = _createToys(TOY_AMOUNT_LIMIT)
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
      labels: _getRandomToyLabels(
         utilService.getRandomInt(0, TOY_MAX_LABELS_COUNT)
      ),
      imgUrl: generateToyImg(),
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
   return `https://robohash.org/77.125.252.${utilService.getRandomInt(
      1,
      100
   )}.png`
}

function _getRandomToyName() {
   const nouns = [
      'Robot',
      'Transformer',
      'Robocop',
      'E-bot',
      'R2',
      'D9',
      'R2D2',
   ]
   const types = [
      'Deluxe',
      'Pro',
      'Mega',
      'Ultra',
      'Mini',
      'Jumbo',
      'Speedy',
      'Glowing',
      'Interactive',
      'Classic',
   ]

   const randomNoun = nouns[utilService.getRandomInt(0, nouns.length - 1)]
   const randomType = types[utilService.getRandomInt(0, types.length - 1)]

   return `${randomNoun} ${randomType}`
}

function _getRandomToyLabels(amount = 3) {
   let res = []
   for (let i = 0; i < amount; i++) {
      res.push(TOY_LABELS[utilService.getRandomInt(0, TOY_LABELS.length)])
   }
   return res
}

async function getToyById(toyId) {
   try {
      let toy = await asyncLocalStorageService.loadById(TOY_DB_KEY, toyId)
      return toy
   } catch (err) {
      console.log('could not get toy by id, error:\n' + err)
   }
}
