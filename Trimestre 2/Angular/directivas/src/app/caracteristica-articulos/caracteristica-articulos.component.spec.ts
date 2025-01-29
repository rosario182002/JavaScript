import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaArticulosComponent } from './caracteristica-articulos.component';

describe('CaracteristicaArticulosComponent', () => {
  let component: CaracteristicaArticulosComponent;
  let fixture: ComponentFixture<CaracteristicaArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaracteristicaArticulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaracteristicaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
