import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { CentrosService } from '../services/centros.service';
import { Centro } from '../interfaces/centro';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {
  centros: Centro [] = [];
  date: Date = new Date();

    // datatable
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();

    constructor(private centrosService: CentrosService){
        this.getCentros();
    }
    getCentros() {
        this.centrosService.get().subscribe((data: any) =>{
            console.log(data);
            this.centros = data.data;
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
        if (confirm('Seguro que desea eliminar este centro?')) {
            this.centrosService.delete(id).subscribe((data) => {
                alert('Eliminado con exito');
                console.log(data);
                this.getCentros();
            }, (error) => {
                console.log(error);
            });
        }
    }

}
