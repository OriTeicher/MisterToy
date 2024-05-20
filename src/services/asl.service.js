export const asyncLocalStorageService = {
   load,
   loadById,
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
            console.log('entities', entities)
            let entityById = entities.find((item) => item._id === entityId)
            console.log('entityById', entityById)
            if (!entityById) reject('could not find entity by id')
            resolve(entityById)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}
