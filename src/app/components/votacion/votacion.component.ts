import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvengersService, Superheroe } from 'src/app/services/avengers.service';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {


  avengers:Superheroe []=[];
  avengersOrganizado:Superheroe []=[];

  constructor(private _avengersService:AvengersService) {}

  ngOnInit(): void {

    this.avengers=this._avengersService.getAvengers();
    this.organizarAvengersGustados();
  }

  /** Update
   * Falta aún lo de la votación
  */
  

  private organizarAvengersGustados(){
    let mayorMeGusta:number=this.avengers[0].me_gusta;
    let mayorNoMeGusta:number=this.avengers[0].no_me_gusta;

    let posi_mayor_megusta:number=0;
    let posi_mayor_no_megusta:number=0;

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].me_gusta>mayorMeGusta){
          mayorMeGusta=this.avengers[i].me_gusta;
      }
    }

    for(let i=0; i<this.avengers.length;i++){
      if (this.avengers[i].no_me_gusta>mayorNoMeGusta){
        mayorNoMeGusta=this.avengers[i].no_me_gusta;
      }
    }

    for (let index = 0; index < this.avengers.length; index++) {
      if (this.avengers[index].me_gusta==mayorMeGusta) {
        posi_mayor_megusta= index;
      }
      if (this.avengers[index].no_me_gusta==mayorNoMeGusta) {
        posi_mayor_no_megusta= index;
      }
    }



    /** 
     * En la posición cero del arreglo avengersOrganizado va a ir ubicado el mayor de los megusta y en la posicion 1 el mayor de los no me gusta
    */
    this.avengersOrganizado.push(this.avengers[posi_mayor_megusta]);
    this.avengersOrganizado.push(this.avengers[posi_mayor_no_megusta]);

  }



}
