import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationService } from '../services/configuration.service';


@Injectable()
export class BaseService {

    constructor(
        protected configurations: ConfigurationsService,
        protected http: HttpClient,
        private authService: AuthService) {
    }

    protected getRequestHeaders(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        let headers = new HttpHeaders({
            Authorization: 'Bearer ' + this.authService.accessToken,
            'Content-Type': 'application/json',
        });
        console.log('-------------->: {headers} ------------> ',headers);
        return { headers: headers };
    }

    protected getRequestHeadersWithoutAccessToken(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return { headers: headers };
    }

    protected getRequestHeadersWithAccessToken(): { headers: HttpHeaders | { [header: string]: string | string[]; } } {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Jwt-Token': 'Bearer ' + this.authService.accessToken,
        });
        return { headers: headers };
    }

    protected handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

    protected getRequestHeadersAndParams(HttpParams: HttpParams): { headers: HttpHeaders | { [header: string]: string | string[]; }, params: HttpParams } {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.accessToken,
        'Content-Type': 'application/json',
        'App-Version': ConfigurationService.appVersion
      });
      console.log('-----getRequestHeadersAndParams--------->: {headers} ------------> ', headers);

      return { headers: headers, params: HttpParams };
    }

}
