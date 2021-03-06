import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(protected keycloakAngular: KeycloakService) { }

  ngOnInit() {
  }

  async logOut() {
    await this.keycloakAngular.logout("http://localhost:4200/");
  }
}
