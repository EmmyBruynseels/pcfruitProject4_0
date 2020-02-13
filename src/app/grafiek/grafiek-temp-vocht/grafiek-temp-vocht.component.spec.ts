import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiekTempVochtComponent } from './grafiek-temp-vocht.component';

describe('GrafiekTempVochtComponent', () => {
  let component: GrafiekTempVochtComponent;
  let fixture: ComponentFixture<GrafiekTempVochtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafiekTempVochtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafiekTempVochtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
