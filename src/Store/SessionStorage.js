import {useDispatch} from "react-redux";

const SessionStorage = () => {
    const dispatch = useDispatch();

    dispatch ({
        type: "SET_USER",
        payload: {
            token: window.sessionStorage.getItem('token'),
            firstname: window.sessionStorage.getItem('firstname'),
            lastname: window.sessionStorage.getItem('lastname'),
            phone: window.sessionStorage.getItem('phone'),
            email: window.sessionStorage.getItem('email'),
            allergens: window.sessionStorage.getItem('allergens'),
            diets: window.sessionStorage.getItem('diets')
        }
    })
}

export default SessionStorage;