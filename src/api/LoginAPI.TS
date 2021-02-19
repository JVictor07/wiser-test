export default class LoginAPI {
  constructor(instance) {
    this.instance = instance;
  }

  login(user) {
    const data = this.instance.post('/login/', user);
    return data;
  }
}
