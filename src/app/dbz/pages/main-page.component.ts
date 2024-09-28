import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DataService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor(private dbzService:DataService){


  }

  get characters():Character[]{
    return [...this.dbzService.charaacters];
  }

  deleteCharacterById(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzService.onNewCharacter(character);
  }



}
