import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { UnidadesMilitaresService } from '../services/unidades-militares.service';
import { UnidadMilitar } from '../interfaces/unidad_militar';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  unidades: UnidadMilitar [] = [];
  date: Date = new Date();

    // datatable
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private unidadesService: UnidadesMilitaresService){
        this.getUnidades();
    }
    getUnidades() {
        this.unidadesService.get().subscribe((data: any) =>{
            //console.log(data);
            this.unidades = data.data;
            this.dtTrigger.next();
        }, (error) =>{
            console.log(error);
            alert('Ocurrio un error');
        });
    }
    ngOnInit() {
        this.dtOptions = { };
    }
    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
      }
    
    delete(id: any) {
        if (confirm('Seguro que desea eliminar este dato?')) {
            this.unidadesService.delete(id).subscribe((data) => {
                alert('Eliminado con exito');
                console.log(data);
                this.getUnidades();
            }, (error) => {
                console.log(error);
            });
        }
    }    

}
