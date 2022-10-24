import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ville, villesTestData } from '../interfaces/ville';

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor() { }

  getVille(idVille : number) : Observable<Ville>{
    return of(villesTestData[0]);
  }
  getVilles(idVille : number) : Observable<Ville>{
    return of(villesTestData[0]);
  }
  createVille(ville : Ville) : Observable<Ville>{
    return of(ville);
  }
  updateVille(idVille : number, ville : Ville) {
    
  }
  deleteVille(idVille:number){

  }
}
