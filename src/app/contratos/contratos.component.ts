import { Component, OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ContratosService } from '../services/contratos.service';
import { Contrato } from '../interfaces/contrato';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnDestroy, OnInit {
    contratos: Contrato [] = [];
    date: Date = new Date();

    // datatable
    //dtOptions: DataTables.Settings = {};
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private contratosService: ContratosService){
        this.getContratos();
    }
    getContratos() {
      this.contratosService.get().subscribe((data: any) =>{
          console.log(data);
          //this.contratos = data; //Para Django
          this.contratos = data.data; //Para Laravel
          this.dtTrigger.next();
      }, (error) =>{
          console.log(error);
          alert('Ocurrio un error');
      });
    }
  ngOnInit() {
    this.dtOptions = {
      language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
            "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
            "infoFiltered": "(Filtrado de _MAX_ total entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ Entradas",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"}
            }

      };
    }
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
  
    delete(id: any) {
      if (confirm('Seguro que desea eliminar este contrato?')) {
          this.contratosService.delete(id).subscribe((data) => {
              alert('Eliminado con exito');
              location.reload(); //Buscar el error y arreglar esto
              console.log(data);
              this.getContratos();
          }, (error) => {
              console.log(error);
          });
      }
  }
  

}
