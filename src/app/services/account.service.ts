import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false
  login(user:User):boolean{
    if(user.userName== "esma" && user.password == "12345"){
      return true
      this.loggedIn = true
      localStorage.setItem("isLogged",user.userName)
    }
    return false
  }

  isLoggedIn(){
    return this.isLoggedIn
  }

  logOut(){
    localStorage.removeItem("isLogged")
    this.isLoggedIn = false
  }

}
