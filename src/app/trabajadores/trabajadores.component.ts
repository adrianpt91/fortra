import { Component, OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { TrabajadoresService } from '../services/trabajadores.service';
import { Trabajadores } from '../interfaces/trabajadores';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
    selector:'app-trabajadores',
    templateUrl: './trabajadores.component.html'
}

)
export class TrabajadoresComponent implements OnDestroy, OnInit{
    trabajadores: Trabajadores [] = [];

    // datatable
    //dtOptions: DataTables.Settings = {};
    dtOptions: any = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private trabajadoresService: TrabajadoresService){
        this.getTrabajadores();
    }
    getTrabajadores() {
        this.trabajadoresService.get().subscribe((data: any) =>{
            console.log(data);
            //this.trabajadores = data; //Para Django
            this.trabajadores = data.data; //Para Laravel
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
                "infoFiltered": "(Filtrado de _MAX_ entradas totales )",
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
                    "previous": "Anterior"},
                },
            select: {style: 'multi'}
         };
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
      }
    
    delete(id: any) {
        if (confirm('Seguro que desea eliminar este trabajador?')) {
            this.trabajadoresService.delete(id).subscribe((data) => {
                alert('Eliminado con exito');
                location.reload(); //Buscar el error y arreglar esto
                console.log(data);
                this.getTrabajadores();
            }, (error) => {
                console.log(error);
            });
        }
    }

}

