import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenealogyService {
  key = 'storageData';
  genealogyTimestamp: any;

  constructor(private http: HttpClient) { }

  public getGenealogyData(): Observable<any> {
    return this.http.get('/assets/data.json').pipe(
      map((data) => {
        const genealogyDataLocal = this.getGenealogyDataLocal();
        if (genealogyDataLocal != null) {
          this.genealogyTimestamp = genealogyDataLocal.updatedAt;
          return genealogyDataLocal.data;
        }
        return data;
      })
    );
  }

  private getGenealogyDataLocal(): any {
    return JSON.parse(localStorage.getItem(this.key));
  }

  public setGenealogyDataLocal(data: any): any {
    this.genealogyTimestamp = new Date();
    return localStorage.setItem(this.key, JSON.stringify({
      data,
      updatedAt: new Date(),
    }));
  }
}
