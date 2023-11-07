import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCRMFormationJonathan';
  cars = ['mazda', 'Renault', 'Tesla'];

  onClick($event:MouseEvent):void{
    console.log('clicked')
  }
}

