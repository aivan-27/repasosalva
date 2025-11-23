import { TestBed } from '@angular/core/testing';

import { HttpArticulos } from './http-articulos';

describe('HttpArticulos', () => {
  let service: HttpArticulos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpArticulos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
