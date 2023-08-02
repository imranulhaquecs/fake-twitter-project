import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UsersResModel } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  private readonly _endpointUrl: string = "/users";
  get EndpointUrl() { return this.configurations.baseUrl + this._endpointUrl; }

  constructor(configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(configurations, http, authService);
  }

  getAll(page?: number, pageSize?: number): Observable<UsersResModel> {

    //return this.http.get<UsersResModel>(this.EndpointUrl, this.getRequestHeaders()).pipe(
    return this.http.get<UsersResModel>(this.EndpointUrl, this.getRequestHeadersWithAccessToken()).pipe(
        tap(data => console.log('getAll: ' + JSON.stringify(data))),
        catchError(error => {
            return this.handleError(error);
        }));

  }

}