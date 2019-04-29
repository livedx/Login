import  {LOGIN_SUCESS_ACTION} from '../actions/ActionTypes'

const initialState = [];

function users(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCESS_ACTION:
           console.log(action);

            return {...state,auth:action.payload};

        default:
            return state;
    }
}

export default users;
