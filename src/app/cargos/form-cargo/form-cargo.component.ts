import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../interfaces/cargo';
import { CargosService } from '../../services/cargos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-cargo',
  templateUrl: './form-cargo.component.html',
  styleUrls: ['./form-cargo.component.css']
})
export class FormCargoComponent implements OnInit {
  cargo: Cargo = {
    nombre_cargo: null
  };
  id: any;
  editing: boolean = false;
  cargos: Cargo[]
  constructor(private cargosService: CargosService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.editing = true;
      this.cargosService.get().subscribe((data: any) => {
        //this.cargos = data; //Para Django
        this.cargos = data.data; //Para Laravel
        this.cargo = this.cargos.find((t) => {return t.id == this.id});
        //console.log(this.cargo);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }
  }

  ngOnInit() {
  }

  saveCargo(){
    if (this.editing){
      this.cargosService.put(this.cargo).subscribe((data) => {
        alert('Cargo Actualizado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.cargosService.save(this.cargo).subscribe((data) => {
        alert('Cargo Guardado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
