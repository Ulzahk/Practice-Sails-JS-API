import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing = false;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private rideService: RideService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editing = (this.id !== 'new');
    if(this.editing) {
      this.rideService.getById(this.id).subscribe((data: Ride) => {
        this.ride = data;
        console.log(data);
      }, (err) => {
        alert('No se pudo obtener la rodada')
        console.log(err);
      })
    }
  }

  save(){
    if (this.editing) {
      this.rideService.update(this.ride).subscribe((data) => {
        alert('Se actualizo tu rodada');
        this.navCtrl.pop();
        console.log(data);
      }, (err) =>{
        alert('No se pudo actualizar la rodada...');
        console.log(err);
      });
    } else {
      this.rideService.create(this.ride).subscribe((data) => {
        alert('Se creo tu rodada');
        this.navCtrl.pop();
        console.log(data);
      }, (err) =>{
        alert('No se pudo crear la rodada...');
        console.log(err);
      });
    }
  }
}
