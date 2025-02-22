import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonasComponent } from './listado-personas.component';

describe('ListadoPersonasComponent', () => {
  let component: ListadoPersonasComponent;
  let fixture: ComponentFixture<ListadoPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoPersonasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
