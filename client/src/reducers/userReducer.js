const SET_USER='SET_USER'
const LOGOUT='LOGOUT'
const defaultState = {
  currenrUser: {},
  isAuth: false
}


export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currenrUser: action.payload,
        isAuth: true
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        currenrUser: {},
        isAuth: false
      }

    default:
      return state
  }
}

export const setUser  = (user)=> ({type:SET_USER, payload: user})
export const logout  = (user)=> ({type:LOGOUT})