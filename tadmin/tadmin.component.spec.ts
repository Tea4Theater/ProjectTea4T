import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TadminComponent } from './tadmin.component';

describe('TadminComponent', () => {
  let component: TadminComponent;
  let fixture: ComponentFixture<TadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
