import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuhtLayoutComponent } from './auht-layout.component';

describe('AuhtLayoutComponent', () => {
  let component: AuhtLayoutComponent;
  let fixture: ComponentFixture<AuhtLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuhtLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuhtLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
