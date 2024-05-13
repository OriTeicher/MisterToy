import { toyService } from "../../services/toy.service"

const initialState = {
    toys: [toyService.query(3)],
    selectedToyId: '',
}

export default function toyReducer(state = initialState, action) {
    switch (action.type) {
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
            if (idx === -1) return state // No update if toy not found
            return {
                ...state,
                toys: [...state.slice(0, idx), action.payload, ...state.slice(idx + 1)],
            }
        default:
            return state
    }
}