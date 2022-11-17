import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `<app-service></app-service><app-service></app-service><app-service></app-service>`,
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
