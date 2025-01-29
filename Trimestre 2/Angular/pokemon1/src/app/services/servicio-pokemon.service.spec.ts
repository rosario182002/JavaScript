import { TestBed } from '@angular/core/testing';

import { ServicioPokemonService } from './servicio-pokemon.service';

describe('ServicioPokemonService', () => {
  let service: ServicioPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
