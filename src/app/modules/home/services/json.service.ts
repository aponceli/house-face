import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProvidedService } from '../interfaces/provided-service';

@Injectable({
  providedIn: 'root'
})

export class JsonService {
    constructor(private http: HttpClient) { }

    fetchOferedServices():Observable<ProvidedService[]>{
        return this.http.get<ProvidedService[]>('http://localhost:4200/jsons/services.json');
    }

}
