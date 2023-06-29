import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { ITokenUser, User } from "../api/models";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
  })
  export class TokenService {
  public currentUser: User | undefined
  private _user$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined)
public get user$(): Observable<User | undefined> {
  return this._user$
}

    constructor(
      private router: Router,
      private userService: UserService,
      private authService: AuthService
      ) { }

public userStorage: ITokenUser = {
    id: 0,
    username: '',
    admin: false,
    }
    public saveToken(token: string): void {
        localStorage.setItem('access_token', token);
        this.getPayload()
      }
      public isLogged(): boolean {
        const token = localStorage.getItem('access_token');
        console.log('token', token)
       return (!!token)
      }
      public clearToken(): void {
        localStorage.removeItem('access_token');
        this.reloadPage()
      }
      public reloadPage() {
        window.location.reload();
      }
      
  public getToken(): string | null {
    return localStorage.getItem('access_token');
}
  public getPayload() {
    let token = localStorage.getItem('access_token');
    if (token !== null) {
      const decode: ITokenUser = jwtDecode<ITokenUser>(token)
      this.userStorage = decode
      this.authService.getProfile().subscribe(
        data => {
          this.currentUser = data
          this._user$.next(data)
          console.log('dataprofile', data)
        }
      )
 
      }
    }

}