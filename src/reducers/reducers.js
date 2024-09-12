export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_CHARS":
            return {
                ...state,
                chars: action.payload
            }
        case "ADD_FAVS":
            return {
                ...state,
                favs: [...state.favs, action.payload]
            }
        case "REMOVE_FAVS":
            return {
                ...state,
                favs: state.favs.filter((fav) => fav.id !== action.payload)
            }
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }

}