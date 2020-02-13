import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafiekVruchtgroeiComponent } from './grafiek-vruchtgroei.component';

describe('GrafiekVruchtgroeiComponent', () => {
  let component: GrafiekVruchtgroeiComponent;
  let fixture: ComponentFixture<GrafiekVruchtgroeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafiekVruchtgroeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafiekVruchtgroeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
