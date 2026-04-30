import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Pedido } from '../pages/pedido/wizard/pedido-state.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  sendPedido(pedido: Pedido) {

    const templateParams = {
      primerPlato: pedido.primerPlato,
      complementos: pedido.complementos.join(', '),
      postres: pedido.postres.join(', ')
    };

    return emailjs.send(
      'service_cm51cla',
      'template_4ltwdgd',
      templateParams,
      'bCayIUESKeXOy2gRF'
    );
  }
}