import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAgencyComponent } from './detail-agency.component';

describe('DetailAgencyComponent', () => {
  let component: DetailAgencyComponent;
  let fixture: ComponentFixture<DetailAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
