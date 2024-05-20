import { toyService } from '../../services/toy.service'
import { store } from '../store'
export const toyActions = {
   loadToys,
   setToys,
}

function setToys(toys) {
   return {
      type: 'SET_TOYS',
      toys,
   }
}

async function loadToys(filterBy) {
   try {
      const toys = await toyService.query(filterBy)
      store.dispatch({ type: 'SET_TOYS', toys })
      return toys
   } catch (err) {
      console.log('from toy action -> load toys -> ', err)
      throw err
   }
}
