import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalRankingComponent } from './hospital-ranking.component';

describe('HospitalRankingComponent', () => {
  let component: HospitalRankingComponent;
  let fixture: ComponentFixture<HospitalRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospitalRankingComponent]
    });
    fixture = TestBed.createComponent(HospitalRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
