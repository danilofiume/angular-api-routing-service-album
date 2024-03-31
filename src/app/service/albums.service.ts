import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbumDetails } from '../model/interface';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbumId(albumId: number): Observable<IAlbumDetails[]> {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`;
    return this.http.get<IAlbumDetails[]>(url);
  }
}
