import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../domain/cliente';

@Injectable()
export class ClienteService {

  constructor(public http:HttpClient) { }

  insert(obj : Cliente){
    return this.http.post(
      `https://tcc-lojavirtual.herokuapp.com/clientes`,
      obj,
      {
        observe: 'response',
        responseType: 'text'
      }
    );
  }
}
