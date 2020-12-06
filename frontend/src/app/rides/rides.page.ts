import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { Observable } from 'rxjs';
import { Ride } from 'src/models/ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.page.html',
  styleUrls: ['./rides.page.scss'],
})
export class RidesPage implements OnInit {
  rides: Observable<[Ride]>;
  constructor(
    private rideService: RideService
  ) { }

  ngOnInit() {
    this.getRides();
  }

  getRides() {
    this.rides = this.rideService.getAll();
  }

  delete(id) {
    this.rideService.delete(id).subscribe(() => {
      alert('Rodada eliminada con éxito')
      this.getRides();
    }, (err) => {
      alert('No se pudo eliminar la rodada')
      console.log(err);
    })
  }

}
