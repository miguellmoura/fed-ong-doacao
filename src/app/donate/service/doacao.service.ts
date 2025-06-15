import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoacaoDTO } from '../model/doacao.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  constructor(private httpClient: HttpClient) { }

  createDonation(donation: DoacaoDTO): Observable<DoacaoDTO> {
    return this.httpClient.post<DoacaoDTO>('http://localhost:8080/api/doacoes', donation)
  }

}
