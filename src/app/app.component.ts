import { Component, OnInit } from '@angular/core';
import { LoggerX } from 'ngx-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected logger = new LoggerX(AppComponent.name);
  title = 'ngx-card-sdk';

  ngOnInit(): void {
    this.logger.info(this.title, 'is running at', new Date());
  }
}
