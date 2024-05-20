import { useDispatch } from 'react-redux'
import { asyncLocalStorageService } from '../../services/asl.service'
import { TOY_DB_KEY } from '../../services/toy.service'

export const toyActions = {
   query,
}

const dispatch = useDispatch()

async function query() {
   try {
      const toys = await asyncLocalStorageService.load(TOY_DB_KEY)
      if (!toys || !toys.length) throw new Error('no toys to load')
      dispatch({ type: 'SET_TOYS', payload: toys })
   } catch (err) {
      console.log(err)
   }
}
