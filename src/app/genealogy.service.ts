import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenealogyService {

  constructor(private http: HttpClient) { }
  getGenealogyData() {
    return this.http.get('/assets/data.json');
  }
}
