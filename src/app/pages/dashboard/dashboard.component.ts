import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private keycloakAngular: KeycloakService) { }

  ngOnInit() {
  }

  logOut() {
    console.log("logOut called!");
    this.keycloakAngular.logout()
      .then(() => {
        this.router.navigateByUrl("/");
      })
      .catch(console.log)
  }
}
