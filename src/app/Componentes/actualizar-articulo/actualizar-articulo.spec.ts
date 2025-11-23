import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArticulo } from './actualizar-articulo';

describe('ActualizarArticulo', () => {
  let component: ActualizarArticulo;
  let fixture: ComponentFixture<ActualizarArticulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarArticulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarArticulo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
