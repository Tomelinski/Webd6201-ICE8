"use strict";
//User class
((core)=>{


  class User {
    //getters and setters
    get DisplayName() {
      return this.m_displayName;
    }
    set DisplayName(value) {
      this.m_displayName = value;
    }
    get Username() {
      return this.m_username;
    }
    set Username(value) {
      this.m_username = value;
    }
    get EmailAddress() {
      return this.m_emailAddress;
    }
    set EmailAddress(value) {
      this.m_emailAddress = value;
    }
    get Password() {
      return this.m_password;
    }
    set Password(value) {
      this.m_password = value;
    }
    
    /**
     * 
     * @param {*} displayName 
     * @param {*} username 
     * @param {*} emailAddress 
     * @param {*} password 
     */
    constructor(displayName ="", username="", emailAddress="", password="") {
      this.m_displayName= displayName;
      this.m_username = username;
      this.m_emailAddress = emailAddress;
      this.m_password = password;
    }
  
    
    toString() {
      return `Display Name: ${this.m_displayName} 
  Username: ${this.m_username}
  Email Address: ${this.m_emailAddress}`;
    }

    /**
     *this method takes a json object and assigns them to User info
     *
     * @param {object} data
     * @memberof User
     */
    toJSON(){
        return{
            "DisplayName":this.displayName,
            "Username":this.username,
            "EmailAddress":this.emailAddress,
        }
    }

    fromJSON(data){
      this.DisplayName = data.DisplayName;
      this.Username = data.Username;
      this.EmailAddress = data.EmailAddress;
      this.Password = data.Password;
    }

    /**
     *this method converts the User into a comma-seperate string
     *
     * @return {string} 
     * @memberof User
     */
    serialize(){
        if(this.DisplayName !== "" && this.Username !== "" && this.emailAddress !== "" && this.Password !== ""){
            return `${this.m_displayName},${this.m_username},${this.m_emailAddress}`;
        } else {
            console.error("User is empty");
            return null;
        }
    }

    /**
     * this method takes a comma-seperate data string and assigns values to the User class
     *
     * @param {string} data
     * @return {void}
     */
    deserialize(data){
        let propertyArray = data.split(",");
        this.DisplayName = propertyArray[0];
        this.Username = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    }
  }

  core.User = User;
})(core || (core = {}));