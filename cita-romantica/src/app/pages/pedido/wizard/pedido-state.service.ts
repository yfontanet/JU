import { Injectable, signal } from '@angular/core';

export interface Pedido {
  primerPlato: string | null;
  complementos: string[];
  postres: string[];
}

export enum WizardStep {
  PRIMER_PLATO = 1,
  COMPLEMENTOS = 2,
  POSTRES = 3,
  RESUMEN = 4,
}

@Injectable({
  providedIn: 'root'
})
export class PedidoStateService {

  // 🧠 estado general
  pedido = signal<Pedido>({
    primerPlato: null,
    complementos: [],
    postres: [],
  });

  // 🧭 paso actual
  step = signal<WizardStep>(WizardStep.PRIMER_PLATO);

  // navegación
  nextStep() {
    this.step.update(s => Math.min(s + 1, WizardStep.RESUMEN));
  }

  prevStep() {
    this.step.update(s => Math.max(s - 1, WizardStep.PRIMER_PLATO));
  }

  goTo(step: WizardStep) {
    this.step.set(step);
  }

  // =========================
  // PRIMER PLATO
  // =========================
  setPrimerPlato(value: string) {
    this.pedido.update(p => ({
      ...p,
      primerPlato: value
    }));
  }

  // =========================
  // COMPLEMENTOS
  // =========================
  toggleComplemento(value: string) {
    this.pedido.update(p => {

      let nuevos = [...p.complementos];

      if (value === 'sense-complements') {
        nuevos = ['sense-complements'];
      } else {
        nuevos = nuevos.filter(x => x !== 'sense-complements');

        if (nuevos.includes(value)) {
          nuevos = nuevos.filter(x => x !== value);
        } else {
          nuevos.push(value);
        }
      }

      return {
        ...p,
        complementos: nuevos
      };
    });
  }

  // =========================
  // POSTRES
  // =========================
  togglePostre(value: string) {
    this.pedido.update(p => {

      let nuevos = [...p.postres];

      if (value === 'sense-postre') {
        nuevos = ['sense-postre'];
      } else {
        nuevos = nuevos.filter(x => x !== 'sense-postre');

        if (nuevos.includes(value)) {
          nuevos = nuevos.filter(x => x !== value);
        } else {
          nuevos.push(value);
        }
      }

      return {
        ...p,
        postres: nuevos
      };
    });
  }

  // =========================
  // VALIDACIONES
  // =========================
  canGoNext(): boolean {
    const p = this.pedido();
    const s = this.step();

    switch (s) {
      case WizardStep.PRIMER_PLATO:
        return !!p.primerPlato;

      case WizardStep.COMPLEMENTOS:
        return p.complementos.length > 0;

      case WizardStep.POSTRES:
        return p.postres.length > 0;

      default:
        return true;
    }
  }

  confirmed = signal(false);

  confirmarPedido() {
    this.confirmed.set(true);
  }
}