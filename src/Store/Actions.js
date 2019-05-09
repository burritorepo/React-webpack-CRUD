import {
  SAVE_ALL_USER,
  SAVE_USER
} from './Const'

const saveUser = (response) => {
  return {
      type: SAVE_USER,
      payload: {
        response
    }
  }
}

const saveAllUser = (response) => {
  return {
      type: SAVE_ALL_USER,
      payload: {
        response
    }
  }
}
  
export {
  saveAllUser,
  saveUser
}
