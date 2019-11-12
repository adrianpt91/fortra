import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../interfaces/actividad';
import { ActividadesService } from '../../services/actividades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-actividad',
  templateUrl: './form-actividad.component.html',
  styleUrls: ['./form-actividad.component.css']
})
export class FormActividadComponent implements OnInit {
  actividad: Actividad = {
    name: null
  };
  id: any;
  editing: boolean = false;
  actividades: Actividad[]
  constructor(private actividadesService: ActividadesService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.actividadesService.get().subscribe((data: any) => {
        //this.actividades = data; //Para Django
        this.actividades = data.data; //Para Laravel
        this.actividad = this.actividades.find((t) => {return t.id == this.id});
        //console.log(this.actividad);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveActividad(){
    if (this.editing){
      this.actividadesService.put(this.actividad).subscribe((data) => {
        alert('Actividad Actualizada');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.actividadesService.save(this.actividad).subscribe((data) => {
        alert('Actividad Guardada');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
