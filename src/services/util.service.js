export const utilService = {
   getRandomInt,
   makeId,
   formatTimestampToDate,
   EMPTY: '',
}

function getRandomInt(min, max) {
   const minCeiled = Math.ceil(min)
   const maxFloored = Math.floor(max)
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1))
}

function makeId(length, initials = '') {
   let res = initials
   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
   for (let i = 0; i < length; i++) {
      res += letters.charAt(utilService.getRandomInt(0, letters.length))
   }
   return res
}

function formatTimestampToDate(timestamp) {
   const date = new Date(timestamp)
   const day = String(date.getDate()).padStart(2, '0')
   const month = String(date.getMonth() + 1).padStart(2, '0')
   const year = String(date.getFullYear()).slice(-2)
   const formattedDate = `${day}/${month}/${year}`
   return formattedDate
}
