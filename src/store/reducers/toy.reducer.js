import { toyService } from "../../services/toy.service"

const initialState = {
  toys: [],
  selectedToyId: "",
  filterBy: {},
  sortBy: {},
}

export default function toyReducer(action = {}, state = initialState) {
  switch (action.type) {
    case "SET_TOYS":
      return {
        ...state,
        ...action.payload,
      }
    case "ADD_TOY":
      return {
        ...state,
        toys: [...state.toys, action.payload],
      }
    case "REMOVE_TOY":
      return {
        ...state,
        toys: state.toys.filter((toy) => toy.id !== action.payload.id),
      }
    case "UPDATE_TOY":
      const idx = state.toys.findIndex((toy) => toy.id === action.payload.id)
      if (idx === -1) return state
      const updatedToys = [...state.toys]
      updatedToys[idx] = action.payload
      return {
        ...state,
        toys: updatedToys,
      }
    case "SET_FILTER_BY":
      console.log("action", action)
      return {
        ...state,
        filterBy: { ...state.filterBy, ...action.filterBy },
      }
    default:
      return state
  }
}
