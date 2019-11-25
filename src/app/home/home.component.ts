import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../services/trabajadores.service';
import { Trabajadores } from '../interfaces/trabajadores';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trabajadores: Trabajadores [] = [];
  view: any[] = [600, 400];
  hombres: number = 0;
  mujeres: number = 0;
  date: Date = new Date();
  

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Leyenda';
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#dc3545', '#007bff' ]
  };

  //pie
  showLabels = true;

  // data goes here
public single = [
  {
    "name": "Mujeres",
    "value": this.mujeres
  },
  {
    "name": "Hombres",
    "value": this.hombres
  }
];



  constructor(private trabajadoresService: TrabajadoresService) {
    this.getTrabajadores();
   }

   getTrabajadores() {
    this.trabajadoresService.get().subscribe((data: any) =>{
        //console.log(data);
        //this.trabajadores = data; //Para Django
        this.trabajadores = data.data; //Para Laravel
        for (let i=0; i<this.trabajadores.length; i++) {
          if (this.trabajadores[i].sexo == 'M') {
            this.hombres = this.hombres+1;
          }
          else {
            this.mujeres = this.mujeres+1;
          }          
        }
        this.single = [
          {
            "name": "Mujeres",
            "value": this.mujeres
          },
          {
            "name": "Hombres",
            "value": this.hombres
          }
        ];
    }, (error) =>{
        console.log(error);
        alert('Ocurrio un error');
    });
  } 

  ngOnInit() {
  }

}
