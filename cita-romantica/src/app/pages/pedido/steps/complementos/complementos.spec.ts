import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complementos } from './complementos';

describe('Complementos', () => {
  let component: Complementos;
  let fixture: ComponentFixture<Complementos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Complementos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complementos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
