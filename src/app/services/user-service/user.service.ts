import { Injectable } from '@angular/core';
import {HttpService} from '../http/http.service';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  createUser(data): Observable<any> {
    const dataEnviar = {
      username: 'emantilla',
      password: 'prueba',
      name: 'elkin',
      email: 'e.mantilla@uniandes.edu.co',
      birthdate: '2020-05-20T05:00:00.000+0000',
      identification: {
        id: 1,
        number: '124242434',
        type: 'CEDULA'
      }
    };
    return this.httpService.postJsonWhithoutCredentials('person', dataEnviar).map(
      response => {
        return response;
      }, error => {
        return error;
      }
    );
  }
}

