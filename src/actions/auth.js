import {userLoginApi} from "../api/auth";
import {LOGIN_SUCESS_ACTION} from './ActionTypes'
const loginSuccessAction = (result) =>{
    const action = {
        type: LOGIN_SUCESS_ACTION,
        payload:result
    }
    return action
}

export const loginAction =(data)=>(dispatch)=>{

    userLoginApi({
        user:data.userName,
        password:data.password
    },
        (result)=>{

            dispatch(loginSuccessAction(result.data))
        } )

}