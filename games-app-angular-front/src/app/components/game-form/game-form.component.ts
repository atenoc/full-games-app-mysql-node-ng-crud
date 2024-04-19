import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/models/Game';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row'

  //objeto para enlazar con el formulario 

  game : Game ={
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  edit: boolean = false  //bandera para poder editar o guardar el formulario

  constructor(private gamesService:GamesService, private router:Router,
      private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    //verificar si entramos desde la ruta editar : ActivatedRoute

    const parametros = this.activatedRoute.snapshot.params
    
    if(parametros.id){
      this.gamesService.getGame(parametros.id)
        .subscribe(
          res => {
            console.log(res);
            this.game = res;
            this.edit = true;
          },
          err => console.error(err)
        )
    }
  }

  saveGame(){
    console.log('Agregar Registro')
    console.log('Antes: ',this.game)

    delete this.game.created_at
    delete this.game.id

    console.log('Despues: ', this.game)

    this.gamesService.saveGame(this.game)
      .subscribe(
        res => { 
          console.log(res)  
          //this.router.navigate([/games])   // router: redireccionar a otra vista | navigate: toma un parámetro y despues lo envía
        },
        err => console.error(err) 
      )
  }

  updateGame(){
    //console.log('Editar Registro')
    delete this.game.created_at    //eliminados solo la fecha 
    
    console.log(this.game)
    
    
    this.gamesService.updateGame(this.game.id, this.game)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      )
  }

}
