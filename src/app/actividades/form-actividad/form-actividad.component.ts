import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../interfaces/actividad';
import { ActividadesService } from '../../services/actividades.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  titleformact: string;
  actividades: Actividad[]
  constructor(private actividadesService: ActividadesService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.titleformact = 'Modificar';
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
      this.titleformact = 'Nueva';
    }
  }

  ngOnInit() {
  }

  saveActividad(){
    if (this.editing){
      this.actividadesService.put(this.actividad).subscribe((data) => {
        alert('Actividad Actualizada');
        this.router.navigate(['actividades']);
        //console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.actividadesService.save(this.actividad).subscribe((data) => {
        alert('Actividad Guardada');
        this.router.navigate(['actividades']);
        //console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
