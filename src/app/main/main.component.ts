import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private keycloakAngular: KeycloakService) { }

  ngOnInit() {
  }
  async logOut() {
    await this.keycloakAngular.logout("http://localhost:4200/");
  }
}
