import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoStateService } from './wizard/pedido-state.service';
import { WizardStep } from './wizard/wizard-step.enum';

import { PrimerPlato } from './steps/primer-plato/primer-plato';
import { Complementos } from './steps/complementos/complementos';
import { Postres } from './steps/postres/postres';
import { Resumen } from './steps/resumen/resumen';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    CommonModule,
    PrimerPlato,
    Complementos,
    Postres,
    Resumen,
  ],
  templateUrl: './pedido.html',
  styleUrl: './pedido.scss',
})
export class Pedido {

  constructor(public state: PedidoStateService) {}

  // ✔ getter correcto (evita error de inicialización)
  get step() {
    return this.state.step;
  }

  WizardStep = WizardStep;

  next() {
    this.state.nextStep();
  }

  back() {
    this.state.prevStep();
  }
}