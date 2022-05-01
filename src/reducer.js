export const initialState = {
    term: null,
};

export const actionTypes = {
    set_search_term: "set_search_term",
};

export const reducer = (state,action) => {
    switch(action.type){ 
        case actionTypes.set_search_term:
            return{
                 ...state, term: action.term
            };
        default:
            return state;
    }

};

