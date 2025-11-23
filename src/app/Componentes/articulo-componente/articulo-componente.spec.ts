import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloComponente } from './articulo-componente';

describe('ArticuloComponente', () => {
  let component: ArticuloComponente;
  let fixture: ComponentFixture<ArticuloComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
