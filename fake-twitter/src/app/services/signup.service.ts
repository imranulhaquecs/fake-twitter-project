import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base.service';
import { ConfigurationService } from './configuration.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { SignupReqModel } from '../models/signup.model';

@Injectable()
export class SignupService extends BaseService {

  private readonly _endpointUrl: string = "/signup";
  get EndpointUrl() { return this.configurations.baseUrl + this._endpointUrl; }


  constructor(configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
        super(configurations, http, authService);
    }

    create(data: SignupReqModel): Observable<SignupReqModel> {
      debugger
        return this.http.post<SignupReqModel>(this.EndpointUrl, JSON.stringify(data), this.getRequestHeaders()).pipe(
            tap(data => console.log('create: ' + JSON.stringify(data))),
            catchError(error => {
                debugger
                return this.handleError(error);
            }));
    }

}