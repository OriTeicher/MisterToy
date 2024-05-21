import { TOY_DB_KEY } from './toy.service'
import { utilService } from './util.service'

export const asyncLocalStorageService = {
   load,
   loadById,
   save,
   remove,
}

const DELAY = 1000

async function load(dbKey) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            const entities = JSON.parse(localStorage.getItem(dbKey))
            resolve(entities)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}

async function loadById(dbKey, entityId) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            const entities = JSON.parse(localStorage.getItem(dbKey))
            let entityById = entities.find((item) => item._id === entityId)
            if (!entityById) throw new Error('no find entity with given id')
            resolve(entityById)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}

async function save(entity, dbKey) {
   try {
      if (entity._id) return await put(entity, dbKey)
      return await post(entity, dbKey)
   } catch (err) {
      console.log(err)
   }
}

function put(entityToUpdate, dbKey) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            const entities = JSON.parse(localStorage.getItem(dbKey))
            let entityIdx = entities.findIndex(
               (item) => item._id === entityToUpdate._id
            )
            if (entityIdx === -1) throw new Error('no entity with given id')
            entities.splice(entityIdx, 1, entityToUpdate)
            localStorage.setItem(TOY_DB_KEY, JSON.stringify(entities))
            resolve(entityToUpdate)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}

function post(entityToSave, dbKey) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            entityToSave._id = utilService.makeId(5)
            const entities = JSON.parse(localStorage.getItem(dbKey))
            entities.push(entityToSave)
            localStorage.setItem(TOY_DB_KEY, JSON.stringify(entities))
            resolve(entityToSave)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}

function remove(entityId, dbKey) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         try {
            const entities = JSON.parse(localStorage.getItem(dbKey))
            let entityToRemoveIdx = entities.findIndex(
               (item) => item._id === entityId
            )
            if (entityToRemoveIdx === -1)
               throw new Error('no entity with given id')
            entities.splice(entityToRemoveIdx, 1)
            localStorage.setItem(TOY_DB_KEY, JSON.stringify(entities))
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}
