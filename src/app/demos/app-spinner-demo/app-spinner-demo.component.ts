import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spinner-demo',
  templateUrl: './app-spinner-demo.component.html',
  styleUrls: ['./app-spinner-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppSpinnerDemoComponent {
  public color = 'primary';
  public mode = 'determinate';
  public value = 50;
}
