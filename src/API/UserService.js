import { Service } from './Service'

class UserService extends Service {
  
  getAllUser() {
    return this.request({
      url: `users`
    })
  }

  createUser(body) {
    return this.request({
      url: `users`,
      method: 'POST',
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
}

export default new UserService()
