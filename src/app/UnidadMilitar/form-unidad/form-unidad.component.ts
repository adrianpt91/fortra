import { Component, OnInit } from '@angular/core';
import { UnidadMilitar } from '../../interfaces/unidad_militar';
import { UnidadesMilitaresService } from '../../services/unidades-militares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-unidad',
  templateUrl: './form-unidad.component.html',
  styleUrls: ['./form-unidad.component.css']
})
export class FormUnidadComponent implements OnInit {
  unidad: UnidadMilitar = {
    nombre_unidad: null,
    fecha_alta: null
  };
  id: any;
  editing: boolean = false;
  unidades: UnidadMilitar[]
  constructor(private unidadesService: UnidadesMilitaresService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.unidadesService.get().subscribe((data: any) => {
        //this.unidades = data; //Para Django
        this.unidades = data.data; //Para Laravel
        this.unidad = this.unidades.find((t) => {return t.id == this.id});
        //console.log(this.unidad);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveUnidades(){
    if (this.editing){
      this.unidadesService.put(this.unidad).subscribe((data) => {
        alert('Datos Militares Actualizados');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.unidadesService.save(this.unidad).subscribe((data) => {
        alert('Datos Militares Guardados');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }
}
