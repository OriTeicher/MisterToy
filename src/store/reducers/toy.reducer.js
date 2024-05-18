import { toyService } from "../../services/toy.service"

const initialState = {
    toys: toyService.query(),
    selectedToyId: '',
}


export default function toyReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'LOAD_TOYS': return {
            ...state,
        }
        case 'ADD_TOY':
            return {
                ...state,
                toys: [...state.toys, action.payload]
            }
        case 'REMOVE_TOY':
            return {
                ...state,
                toys: state.toys.filter(toy => toy.id !== action.payload.id)
            }
        case 'UPDATE_TOY':
            const idx = state.toys.findIndex(toy => toy.id === action.payload.id)
            if (idx === -1) return state
            const updatedToys = [...state.toys]
            updatedToys[idx] = action.payload
            return {
                ...state,
                toys: updatedToys
            }
        default:
            return state
    }
}
