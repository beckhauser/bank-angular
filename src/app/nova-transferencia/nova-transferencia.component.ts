import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService) {}

  transferir() {
    console.log('Solicitada nova transferencia');
    const novoEvento: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(novoEvento).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpaCampos();
      },
      (error) => console.log(error)
    );
  }

  limpaCampos() {
    this.valor = null;
    this.destino = null;
  }
}
