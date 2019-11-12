import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { Actividad } from '../interfaces/actividad';
import { Subject } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {
  actividades: Actividad [] = [];

  // datatable
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private actividadesService: ActividadesService){
      this.getActividades();
  }
  getActividades() {
      this.actividadesService.get().subscribe((data: any) =>{
          //console.log(data);
          this.actividades = data.data;
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
      if (confirm('Seguro que desea eliminar esta actividad?')) {
          this.actividadesService.delete(id).subscribe((data) => {
              alert('Eliminada con exito');
              console.log(data);
              this.getActividades();
          }, (error) => {
              console.log(error);
          });
      }
  }    

}
