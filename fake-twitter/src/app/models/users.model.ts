export class UsersResModel {
    constructor(count?: string, users?: UsersUserResModel[]) {
  
      this.count = count;
      this.users = users;
  
    }
  
    public count?: string;
    public users?: UsersUserResModel[];
  
  }

  export class UsersUserResModel {
    constructor(id?: string, username?: string, email?: string, active?: boolean, join_date?: string) {
  
      this.id = id;
      this.username = username;
      this.email = email;
      this.active = active;
      this.join_date = join_date;
  
    }
  
    public id?: string;
    public username?: string;
    public email?: string;
    public active?: boolean;
    public join_date?: string;
  
  }