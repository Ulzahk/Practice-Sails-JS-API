import { Component, OnInit } from '@angular/core';
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
    this.rides = this.rideService.getAll();
  }

}
