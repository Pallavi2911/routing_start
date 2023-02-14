export class AuthService {
  //check authentication state
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    console.log('returning promise now');
    return promise;
  }

  login() {
    console.log('is logged in now');
    this.loggedIn = true;
  }

  logout() {
    console.log('is logged out now');
    this.loggedIn = false;
  }
}
