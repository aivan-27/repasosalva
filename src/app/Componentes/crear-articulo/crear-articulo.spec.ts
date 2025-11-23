import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearArticulo } from './crear-articulo';

describe('CrearArticulo', () => {
  let component: CrearArticulo;
  let fixture: ComponentFixture<CrearArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
