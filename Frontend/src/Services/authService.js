// AuthService.js

class AuthService {
  static setTokens(accessToken) {
    localStorage.setItem("accessToken", accessToken);
  }

  static getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  static clearTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem('userId')
  }

  static setName(userId){
    localStorage.setItem("userId", userId)
  }

  static getUserId(){
   return  localStorage.getItem('userId')
  }
}

export default AuthService;
