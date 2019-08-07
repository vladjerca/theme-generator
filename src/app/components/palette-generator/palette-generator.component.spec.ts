import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteGeneratorComponent } from './palette-generator.component';

describe('PaletteGeneratorComponent', () => {
  let component: PaletteGeneratorComponent;
  let fixture: ComponentFixture<PaletteGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletteGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
