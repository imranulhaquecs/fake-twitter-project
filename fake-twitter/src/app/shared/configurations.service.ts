import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {

  public baseUrl = environment.baseUrl;
  public loginUrl = environment.loginUrl;

  constructor() { }
}
