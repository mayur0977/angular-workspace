import { Component } from '@angular/core';
import { HelloWorldService } from 'common-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  constructor(private helloService: HelloWorldService) {
    console.log("COMMON s", this.helloService.message);
    
    
  }
}
