import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService} from '../../services/games.service'


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row'   //voy a crear una fila a todo el este componente

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res
      },
      error => console.log(error)
      );
  }

  deleteGame(id:string){
    //console.log(id)
    this.gamesService.deleteGame(id).subscribe(
      res =>{
        console.log(res)  //obtenemos la respuesta del servidor
        this.getGames()   //cargamos todo de nuevo
      },
      err => console.log(err)
    )
  }
}
