import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginReqModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService extends BaseService {

  private readonly _endpointUrl: string = "/login";
  get EndpointUrl() { return this.configurations.baseUrl + this._endpointUrl; }

  constructor(configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
    super(configurations, http, authService);
  }

  login(data: LoginReqModel): Observable<LoginReqModel> {
    return this.http.post<LoginReqModel>(this.EndpointUrl, JSON.stringify(data), this.getRequestHeaders()).pipe(
        tap(data => console.log('create: ' + JSON.stringify(data))),
        catchError(error => {
            return this.handleError(error);
        }));
  }

}
