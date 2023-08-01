export class SignupReqModel {
    constructor(username?: string, email?: string, password?: string) {
  
      this.username = username;
      this.email = email;
      this.password = password;
  
    }
  
    public username?: string;
    public email?: string;
    public password?: string;
  
  }
  
  export class SignupResModel {
    constructor(message?: string, error?: string) {
  
      this.message = message;
      this.error = error;
  
    }
  
    public message?: string;
    public error?: string;
  
  }
  
  
  
