import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { CargosService } from '../services/cargos.service';
import { Cargo } from '../interfaces/cargo';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit, OnDestroy {
  cargos: Cargo [] = [];
  date: Date = new Date();

    // datatable
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private cargosService: CargosService){
        this.getCargos();
    }
    getCargos() {
        this.cargosService.get().subscribe((data: any) =>{
            //console.log(data);
            this.cargos = data.data;
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
        if (confirm('Seguro que desea eliminar este cargo?')) {
            this.cargosService.delete(id).subscribe((data) => {
                alert('Eliminado con exito');
                console.log(data);
                this.getCargos();
            }, (error) => {
                console.log(error);
            });
        }
    }

}
