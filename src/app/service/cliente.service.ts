import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  constructor(public http:HttpClient) { }

  insert(obj : Cliente){
    return this.http.post(
      `https://4636d9e9-7bac-42a5-b180-6c9d676f6ccc.mock.pstmn.io/clientes/erro`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
