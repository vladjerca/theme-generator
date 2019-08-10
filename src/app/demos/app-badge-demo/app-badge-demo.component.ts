import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-badge-demo',
  templateUrl: './app-badge-demo.component.html',
  styleUrls: ['./app-badge-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBadgeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
