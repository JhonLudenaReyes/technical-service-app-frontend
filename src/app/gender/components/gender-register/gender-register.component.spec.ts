import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderRegisterComponent } from './gender-register.component';

describe('GenderRegisterComponent', () => {
  let component: GenderRegisterComponent;
  let fixture: ComponentFixture<GenderRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenderRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GenderRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
