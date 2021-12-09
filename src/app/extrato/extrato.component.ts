import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[]

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.listaTransferencias
  }

}
