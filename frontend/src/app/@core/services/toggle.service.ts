import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private _isHeaderVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _isCvVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _isPortfolioVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  public get isHeaderVisible$(): Observable<boolean> {
    return this._isHeaderVisible$.pipe(distinctUntilChanged())
  }
  public setHeaderVisible(active: boolean) {
    this._isHeaderVisible$.next(active)
  }
  public get isCvVisible$(): Observable<boolean> {
    return this._isCvVisible$.pipe(distinctUntilChanged())
  }
  public setCvVisible(active: boolean) {
    this._isCvVisible$.next(active)
  }
  public get isPortfolioVisible$(): Observable<boolean> {
    return this._isPortfolioVisible$.pipe(distinctUntilChanged())
  }
  public setPortfolioVisible(active: boolean) {
    this._isPortfolioVisible$.next(active)
  }
}
