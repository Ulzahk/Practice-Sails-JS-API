import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Credential, DEFAULT_CREDENTIAL_OBJECT } from 'src/models/credentials';
import { AuthenticationService } from 'src/services/authentication';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  isLoggingIn = true;
  credential: Credential = DEFAULT_CREDENTIAL_OBJECT;
  constructor(
    private authenticationService: AuthenticationService,
    private navCtrl: NavController,
  ) { }

  public toggleLogin = () => {
    this.isLoggingIn = !this.isLoggingIn;
  }

  login() {
    if(this.isLoggingIn){
      this.doLogin();
    } else {
      if(this.credential.password !== this.credential.passwordConfirm){
        alert('Tus contraseñas no coincidieron');
        return;
      }
      this.authenticationService.signup({
        email: this.credential.email, 
        password: this.credential.password,
        fullName: this.credential.fullName
      }).subscribe((data: any) => {
        console.log(data)
        this.doLogin();
      }, (err) => {
        alert('No pudimos autenticarte')
        console.log(err)
      })
    }
  }

  doLogin(){
    this.authenticationService.login({
      email: this.credential.email, password: this.credential.password
    }).subscribe((data: any) => {
      console.log(data)
      localStorage.setItem('jwt', data.token);
      this.navCtrl.navigateRoot('/rides');
    }, (err) => {
      alert('No pudimos autenticarte')
      console.log(err)
    })
  }

}
