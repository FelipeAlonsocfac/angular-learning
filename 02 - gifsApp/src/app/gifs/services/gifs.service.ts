import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private apiKey : string = "n4WmWRvkE4cogtDiplxUrWeBUCr3BJQv";
  private serviceUrl : string = "https://api.giphy.com/v1/gifs";
  private _historial : string[] = [];
  
  public resultados : Gif [] = [];


  get historial(){
    return [...this._historial]; //para devolver por copia y no por referencia
  }

  constructor(private http : HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    
  }
  buscarGifs(query : string = ""){
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);// corta los 10 primeros

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
                      .set('api_key', this.apiKey)
                      .set('limit', 10)
                      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe( response  => {
        this.resultados = response.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      })
  }

}
