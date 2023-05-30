import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPreparationComponent } from './hospital-preparation.component';

describe('HospitalPreparationComponent', () => {
  let component: HospitalPreparationComponent;
  let fixture: ComponentFixture<HospitalPreparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalPreparationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
