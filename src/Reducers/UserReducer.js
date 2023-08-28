const INITIAL_STATE = {
    token: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    diets: "",
    allergens:"",
}

function UserReducer(state = INITIAL_STATE, action){

    switch(action.type){
        case 'SET_USER': {
            return {
                ...state,
                token: action.payload.token,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                email: action.payload.email,
                phone: action.payload.phone,
                diets: action.payload.diets,
                allergens: action.payload.allergens
            }
        }
        case 'REMOVE_USER': {
            return {
                ...state,
                token: "",
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                diets: "",
                allergens: ""
            }
        }
    }

    return state;
}

export default UserReducer;
