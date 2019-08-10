import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-demo',
  templateUrl: './app-button-demo.component.html',
  styleUrls: ['./app-button-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppButtonDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
