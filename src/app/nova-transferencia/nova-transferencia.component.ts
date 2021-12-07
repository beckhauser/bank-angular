import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number
  destino: number

  transferir(){
    console.log('Solicitada nova transferencia')
    const novoEvento = {valor: this.valor, destino:this.destino}
    this.aoTransferir.emit(novoEvento)
    this.limpaCampos()
  }

  limpaCampos(){
   this.valor = null
   this.destino = null
  }
}
