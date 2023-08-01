export class TweetReqModel {
    constructor(content?: string, password?: string) {
  
      this.content = content;
      this.password = password;
  
    }
  
    public content?: string;
    public password?: string;
  
  }

  export class TweetResModel {
    constructor(message?: string, tweet?: TweetTweetResModel) {
  
      this.message = message;
      this.tweet = tweet;
  
    }
  
    public message?: string;
    public tweet?: TweetTweetResModel;
  
  }

  export class TweetTweetResModel {
    constructor(id?: string, content?: string, published?: string, user?: TweetUserResModel) {
  
      this.id = id;
      this.content = content;
      this.published = published;
      this.user = user;
  
    }
  
    public id?: string;
    public content?: string;
    public published?: string;
    public user?: TweetUserResModel;

  
  }

  export class TweetUserResModel {
    constructor(id?: string, username?: string, email?: string, active?: boolean) {
  
      this.id = id;
      this.username = username;
      this.email = email;
      this.active = active;
  
    }
  
    public id?: string;
    public username?: string;
    public email?: string;
    public active?: boolean;
  
  }