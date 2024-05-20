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
            let entityById = entities.find((item) => item._id === entityId)
            if (!entityById) throw new Error('no find entity with given id')
            resolve(entityById)
         } catch (error) {
            reject(error)
         }
      }, DELAY)
   })
}
