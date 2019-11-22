import { Component, OnInit } from '@angular/core';
import { Trabajadores } from '../interfaces/trabajadores';
import { TrabajadoresService } from '../services/trabajadores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  trabajador: Trabajadores = {
    ci: null,
    first_name: null,
    last_name: null,
    municipio: null,
    provincia: null,
    adress: null,
    sexo: null,
    militancia: null,
    ec: null
  };
  id: any;
  editing: boolean = false;
  titleformtrabajador: string;
  trabajadores: Trabajadores[]
  constructor(private trabajadoresService: TrabajadoresService, private activatedRoute: ActivatedRoute, private router: Router) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.titleformtrabajador = 'Modificar';
      this.trabajadoresService.get().subscribe((data: any) => {
        //this.trabajadores = data; //Para Django
        this.trabajadores = data.data; //Para Laravel
        this.trabajador = this.trabajadores.find((t) => {return t.id == this.id});
        console.log(this.trabajador);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
      this.titleformtrabajador = 'Nuevo';
    }
  }

  ngOnInit() {
  }

  saveTrabajador(){
    if (this.editing){
      this.trabajadoresService.put(this.trabajador).subscribe((data) => {
        alert('Trabajador Actualizado');
        this.router.navigate(['trabajadores']);
        //console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.trabajadoresService.save(this.trabajador).subscribe((data) => {
        alert('Trabajador Guardado');
        this.router.navigate(['trabajadores']);
        //console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
