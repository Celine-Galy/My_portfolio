import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";
import { ITokenUser, User } from "../api/models";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
  export class TokenService {
  public currentUser: User | undefined;
  private _user$: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined)
public get user$(): Observable<User | undefined> {
  return this._user$
}
    constructor(
      private router: Router,
      private userService: UserService) { }

public userStorage: ITokenUser = {
    id: 0,
    username: '',
    }
    public saveToken(token: string): void {
     
        localStorage.setItem('access_token', token);
        this.getPayload()
        this.router.navigate(['/admin']);
      }
      public isLogged(): boolean {
        const token = localStorage.getItem('access_token');
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
      console.log('decode',decode);
        const id = decode.id
        this.userService.getUser(id).subscribe({
          next: (data) => (
            this.currentUser = data,
            this._user$.next(this.currentUser),
            console.log('current user', this.currentUser)
          ),
          error: (err) => console.log(err),
        });
      }
    }
}