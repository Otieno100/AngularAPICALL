import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiReqComponent } from './api-req.component';

describe('ApiReqComponent', () => {
  let component: ApiReqComponent;
  let fixture: ComponentFixture<ApiReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
