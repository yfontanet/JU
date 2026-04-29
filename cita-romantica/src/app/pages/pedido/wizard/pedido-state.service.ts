import { Injectable, signal } from '@angular/core';

export interface Pedido {
  primerPlato: string | null;
  complementos: string[];
  postre: string | null;
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

  // 🧠 estado pedido
  pedido = signal<Pedido>({
    primerPlato: null,
    complementos: [],
    postre: null,
  });

  // 🧭 paso actual
  step = signal<WizardStep>(WizardStep.PRIMER_PLATO);

  // 👉 navegación
  nextStep() {
    this.step.update(s => Math.min(s + 1, WizardStep.RESUMEN));
  }

  prevStep() {
    this.step.update(s => Math.max(s - 1, WizardStep.PRIMER_PLATO));
  }

  goTo(step: WizardStep) {
    this.step.set(step);
  }

  // 🍽️ acciones
  setPrimerPlato(value: string) {
    this.pedido.update(p => ({ ...p, primerPlato: value }));
  }

  toggleComplemento(value: string) {
    this.pedido.update(p => {
      const exists = p.complementos.includes(value);

      return {
        ...p,
        complementos: exists
          ? p.complementos.filter(x => x !== value)
          : [...p.complementos, value],
      };
    });
  }

  setPostre(value: string) {
    this.pedido.update(p => ({ ...p, postre: value }));
  }

  // ✅ validación por paso
  canGoNext(): boolean {
    const p = this.pedido();
    const s = this.step();

    switch (s) {
      case WizardStep.PRIMER_PLATO:
        return !!p.primerPlato;

      case WizardStep.COMPLEMENTOS:
        return p.complementos.length > 0;

      case WizardStep.POSTRES:
        return !!p.postre;

      default:
        return true;
    }
  }
}