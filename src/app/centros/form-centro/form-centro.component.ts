import { Component, OnInit } from '@angular/core';
import { Centro } from '../../interfaces/centro';
import { CentrosService } from '../../services/centros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-centro',
  templateUrl: './form-centro.component.html',
  styleUrls: ['./form-centro.component.css']
})
export class FormCentroComponent implements OnInit {
  centro: Centro = {
    codigo: null,
    nombre_centro: null
  };
  id: any;
  editing: boolean = false;
  titleformcentro: string;
  centros: Centro[]
  constructor(private centrosService: CentrosService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.titleformcentro = 'Modificar';
      this.centrosService.get().subscribe((data: any) => {
        //this.centros = data; //Para Django
        this.centros = data.data; //Para Laravel
        this.centro = this.centros.find((t) => {return t.id == this.id});
        //console.log(this.trabajador);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
      this.titleformcentro = 'Nuevo';
    }
  }

  ngOnInit() {
  }

  saveCentro(){
    if (this.editing){
      this.centrosService.put(this.centro).subscribe((data) => {
        alert('Centro Actualizado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.centrosService.save(this.centro).subscribe((data) => {
        alert('Centro Guardado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
