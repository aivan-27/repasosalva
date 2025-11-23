import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosComponente } from './articulos-componente';

describe('ArticulosComponente', () => {
  let component: ArticulosComponente;
  let fixture: ComponentFixture<ArticulosComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticulosComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticulosComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
