import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaxeComponent } from './nhaxe.component';

describe('NhaxeComponent', () => {
  let component: NhaxeComponent;
  let fixture: ComponentFixture<NhaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
