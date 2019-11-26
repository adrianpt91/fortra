import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from '../services/trabajadores.service';
import { Trabajadores } from '../interfaces/trabajadores';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent implements OnInit {
  trabajadores: Trabajadores [] = [];
  view: any[] = [600, 400];
  view2: any[] = [400, 400];
  view3: any[] = [1000, 400];
  hombres: number = 0;
  mujeres: number = 0;
  pcc: number = 0;
  ujc: number = 0;
  notiene: number = 0;
  date: Date = new Date();

  //Provincias
  guantanamo: number = 0;
  santiago: number = 0;
  granma: number = 0;
  holguin: number = 0;
  lt: number = 0;
  camaguey: number = 0;
  ca: number = 0;
  ss: number = 0;
  vc: number = 0;
  cienfuegos: number = 0;
  matanzas: number = 0;
  mayabeque: number = 0;
  artemisa: number = 0;
  pr: number = 0;
  habana: number = 0;

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Leyenda';
  showXAxisLabel = true;
  xAxisLabel = 'Militancia';
  xAxisLabel2 = 'Provincias';
  showYAxisLabel = true;
  yAxisLabel = 'Trabajadores';
  yAxisLabel2 = 'Trabajadores';
  timeline = true;

  colorScheme = {
    domain: ['#dc3545', '#007bff' ]
  };

  colorScheme2 = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  colorScheme3 = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB', '#dc3545', '#007bff', '#ffc107', '#28a745']
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

public single3 = [
  {
    "name": "Pinar del Rio",
    "value": this.pr
  },
  {
    "name": "Artemisa",
    "value": this.artemisa
  },
  {
    "name": "Mayabeque",
    "value": this.mayabeque
  },
  {
    "name": "La Habana",
    "value": this.habana
  },
  {
    "name": "Matanzas",
    "value": this.matanzas
  },
  {
    "name": "Villa Clara",
    "value": this.vc
  },
  {
    "name": "Cienfuegos",
    "value": this.cienfuegos
  },
  {
    "name": "Sancti Spiritus",
    "value": this.ss
  },
  {
    "name": "Ciego Avila",
    "value": this.ca
  },
  {
    "name": "Camaguey",
    "value": this.camaguey
  },
  {
    "name": "Las Tunas",
    "value": this.lt
  },
  {
    "name": "Holguin",
    "value": this.holguin
  },
  {
    "name": "Granma",
    "value": this.granma
  },
  {
    "name": "Santiago Cuba",
    "value": this.santiago
  },
  {
    "name": "Guantanamo",
    "value": this.guantanamo
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
        for (let i=0; i<this.trabajadores.length; i++) {
          switch(this.trabajadores[i].provincia) {
            case 'GUANTANAMO':
              this.guantanamo = this.guantanamo+1;
              break;
            case 'SANTIAGO DE CUBA':
              this.santiago = this.santiago+1;
              break;
            case 'GRANMA':
              this.granma = this.granma+1;
              break;
            case 'HOLGUIN':
              this.holguin = this.holguin+1;
              break;
            case 'LAS TUNAS':
              this.lt = this.lt+1;
              break;
            case 'CAMAGUEY':
              this.camaguey = this.camaguey+1;
              break;
            case 'CIEGO DE AVILA':
              this.ca = this.ca+1;
              break;
            case 'SANCTI SPIRITUS':
              this.ss = this.ss+1;
              break;
            case 'VILLA CLARA':
              this.vc = this.vc+1;
              break;
            case 'CIENFUEGOS':
              this.cienfuegos = this.cienfuegos+1;
              break;
            case 'MATANZAS':
              this.matanzas = this.matanzas+1;
              break;
            case 'MAYABEQUE':
              this.mayabeque = this.mayabeque+1;
              break;
            case 'LA HABANA':
              this.habana = this.habana+1;
              break;
            case 'CIUDAD DE LA HABANA':
              this.habana = this.habana+1;
              break;
            case 'ARTEMISA':
              this.artemisa = this.artemisa+1;
              break;
            default:
              this.pr = this.pr+1;
          }
        }
        this.single3 = [
          {
            "name": "Pinar del Rio",
            "value": this.pr
          },
          {
            "name": "Artemisa",
            "value": this.artemisa
          },
          {
            "name": "Mayabeque",
            "value": this.mayabeque
          },
          {
            "name": "La Habana",
            "value": this.habana
          },
          {
            "name": "Matanzas",
            "value": this.matanzas
          },
          {
            "name": "Villa Clara",
            "value": this.vc
          },
          {
            "name": "Cienfuegos",
            "value": this.cienfuegos
          },
          {
            "name": "Sancti Spiritus",
            "value": this.ss
          },
          {
            "name": "Ciego Avila",
            "value": this.ca
          },
          {
            "name": "Camaguey",
            "value": this.camaguey
          },
          {
            "name": "Las Tunas",
            "value": this.lt
          },
          {
            "name": "Holguin",
            "value": this.holguin
          },
          {
            "name": "Granma",
            "value": this.granma
          },
          {
            "name": "Santiago Cuba",
            "value": this.santiago
          },
          {
            "name": "Guantanamo",
            "value": this.guantanamo
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
