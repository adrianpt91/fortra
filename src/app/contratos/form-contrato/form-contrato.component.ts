import { Component, OnInit } from '@angular/core';
import { Contrato } from '../../interfaces/contrato';
import { ContratosService } from '../../services/contratos.service';
import { ActivatedRoute } from '@angular/router';
import { TrabajadoresService } from '../../services/trabajadores.service';
import { Trabajadores } from '../../interfaces/trabajadores';
import { CentrosService } from '../../services/centros.service';
import { Centro } from '../../interfaces/centro';
import { CargosService } from '../../services/cargos.service';
import { Cargo } from '../../interfaces/cargo';

@Component({
  selector: 'app-form-contrato',
  templateUrl: './form-contrato.component.html',
  styleUrls: ['./form-contrato.component.css']
})
export class FormContratoComponent implements OnInit {
  contrato: Contrato = {
    codigo_contrato: null,
    tipo_contrato: null,
    fecha_alta: null,
    trabajador_id: null,
    centro_id: null,
    cargo_id: null
  };
  id: any;
  editing: boolean = false;
  titleform: string;
  select: 'Seleccionar';
  contratos: Contrato[];
  trabajadores: Trabajadores [] = [];
  centros: Centro [] = [];
  cargos: Cargo [] = [];

  constructor(private contratosService: ContratosService, private trabajadoresService: TrabajadoresService, private centrosService: CentrosService, private cargosService: CargosService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getTrabajadores();
    this.getCentros();
    this.getCargos();
    if (this.id){
      this.editing = true;
      this.titleform = 'Modificar';
      this.contratosService.get().subscribe((data: any) => {
        //this.contratos = data; //Para Django
        this.contratos = data.data; //Para Laravel
        this.contrato = this.contratos.find((t) => {return t.id == this.id});
        //console.log(this.contrato);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
      this.titleform = 'Nuevo';
    }
  }

  getTrabajadores() {
    this.trabajadoresService.get().subscribe((data: any) =>{
        //console.log(data);
        //this.trabajadores = data; //Para Django
        this.trabajadores = data.data; //Para Laravel
    }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
    });
  }

  getCentros() {
    this.centrosService.get().subscribe((data: any) =>{
        //console.log(data);
        this.centros = data.data;
    }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
    });
  }
  getCargos() {
    this.cargosService.get().subscribe((data: any) =>{
        //console.log(data);
        this.cargos = data.data;
    }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
    });
  }

  ngOnInit() {
  }

  saveContrato(){
    if (this.editing){
      this.contratosService.put(this.contrato).subscribe((data) => {
        alert('Contrato Actualizado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }else{
      this.contratosService.save(this.contrato).subscribe((data) => {
        alert('Contrato Guardado');
        console.log(data);
      }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
      });
    }
    
  }

}
