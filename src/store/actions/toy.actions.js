import { asyncLocalStorageService } from "../../services/asl.service"
import { TOY_DB_KEY, toyService } from "../../services/toy.service"
import { store } from "../store"

export const toyActions = {
  loadToys,
  setToys,
  saveToy,
  removeToy,
  setFilterBy,
  resetFilters,
}

function setToys(toys) {
  return {
    type: "SET_TOYS",
    toys,
  }
}

function setFilterBy(filterBy = toyService.getDefaultFilter()) {
  store.dispatch({ type: "SET_FILTER_BY", filterBy })
}

async function saveToy(toy) {
  try {
    const toyToSave = await asyncLocalStorageService.save(toy, TOY_DB_KEY)
    store.dispatch({ type: "UPDATE_TOYS", toyToSave })
  } catch (err) {
    throw new Error("Error catched in toy actions\n" + err)
  }
}

async function loadToys() {
  try {
    let filterBy = store.getState().toyModule.filterBy
    const toys = await toyService.query(filterBy)
    store.dispatch({ type: "SET_TOYS", toys })
    return toys
  } catch (err) {
    throw new Error("Error catched in toy actions\n" + err)
  }
}

async function removeToy(toyId) {
  try {
    await toyService.removeToy(toyId)
    store.dispatch({ type: "REMOVE_TOY", toyId })
  } catch (err) {
    throw new Error("Error catched in toy actions\n" + err)
  }
}

function resetFilters() {
  store.dispatch({
    type: "SET_FILTER_BY",
    action: toyService.getDefaultFilter(),
  })
}
