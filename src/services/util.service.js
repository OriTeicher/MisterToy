export const utilService = {
   getRandomInt,
   getRandomStr,

   EMPTY: '',
}

function getRandomInt(min, max) {
   const minCeiled = Math.ceil(min)
   const maxFloored = Math.floor(max)
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1))
}

function getRandomStr(length, initials = '') {
   let res = initials
   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
   for (let i = 0; i < length; i++) {
      res += letters.charAt(utilService.getRandomInt(0, letters.length))
   }
   return res
}
