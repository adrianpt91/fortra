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
  view2: any[] = [400, 300];
  hombres: number = 0;
  mujeres: number = 0;
  pcc: number = 0;
  ujc: number = 0;
  notiene: number = 0;
  date: Date = new Date();
  

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Leyenda';
  showXAxisLabel = true;
  xAxisLabel = 'Militancia';
  showYAxisLabel = true;
  yAxisLabel = 'Trabajadores';
  timeline = true;
  showDataLabel = true;

  colorScheme = {
    domain: ['#dc3545', '#007bff' ]
  };

  colorScheme2 = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
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

public single2 = [
  {
    "name": "PCC",
    "value": this.pcc
  },
  {
    "name": "UJC",
    "value": this.ujc
  },
  {
    "name": "No tiene",
    "value": this.notiene
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
        for (let i=0; i<this.trabajadores.length; i++) {
          if (this.trabajadores[i].militancia == 'PCC') {
            this.pcc = this.pcc+1;
          } else if(this.trabajadores[i].militancia == 'UJC') {
            this.ujc = this.ujc+1;
          } else {
            this.notiene = this.notiene+1;
          }   
        }
        this.single2 = [
          {
            "name": "PCC",
            "value": this.pcc
          },
          {
            "name": "UJC",
            "value": this.ujc
          },
          {
            "name": "No tiene",
            "value": this.notiene
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
