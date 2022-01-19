import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvengersService, Superheroe } from 'src/app/services/avengers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  avengers:Superheroe []=[];


  constructor(private _avengersService:AvengersService, private router:Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.avengers=this._avengersService.getAvengers();

  }

  public setLike(i:number){
    this._avengersService.like(i);

  }
  public setDisLike(i:number){
    this._avengersService.disLike(i);
  }
}
