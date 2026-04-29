import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerPlato } from './primer-plato';

describe('PrimerPlato', () => {
  let component: PrimerPlato;
  let fixture: ComponentFixture<PrimerPlato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerPlato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerPlato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
