import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiekVruchtgrootteComponent } from './grafiek-vruchtgrootte.component';

describe('GrafiekVruchtgrootteComponent', () => {
  let component: GrafiekVruchtgrootteComponent;
  let fixture: ComponentFixture<GrafiekVruchtgrootteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafiekVruchtgrootteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafiekVruchtgrootteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
