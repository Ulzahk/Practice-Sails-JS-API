import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.page.html',
  styleUrls: ['./ride.page.scss'],
})
export class RidePage implements OnInit {
  id: string;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  constructor(
    private rideService: RideService,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.rideService.getById(this.id).subscribe((data: Ride) => {
      this.ride = data;
      console.log(data);
    }, (err) => {
      alert('No se pudo obtener la rodada')
      console.log(err);
    })
  }

  delete(id) {
    this.rideService.delete(this.ride.id).subscribe(() => {
      alert('Rodada eliminada con éxito')
      this.navCtrl.pop();
    }, (err) => {
      alert('No se pudo eliminar la rodada')
      console.log(err);
    })
  }
}
