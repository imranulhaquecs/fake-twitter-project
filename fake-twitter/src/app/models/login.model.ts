export class LoginReqModel {
    constructor(email?: string, password?: string) {
  
      this.email = email;
      this.password = password;
  
    }
  
    public email?: string;
    public password?: string;
  
  }
  
  export class LoginResModel {
    constructor(token?: string) {
  
      this.token = token;
  
    }
  
    public token?: string;
  
  }
  
  