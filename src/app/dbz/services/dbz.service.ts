import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';
@Injectable({providedIn: 'root'})
export class DataService {


  public charaacters: Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },{
    id:uuid(),
    name:'goku',
    power:9500
  },{
    id:uuid(),
    name:'Vegueta',
    power:9500
  }];

  onNewCharacter(character:Character):void{
    const newCharacter: Character={
      id:uuid(),
      ...character
    }
    this.charaacters.push(newCharacter );
    // console.log('MainPage');
    // console.log(character);

  }

  deleteCharacterById(id:string){
    this.charaacters=this.charaacters.filter(character=>character.id !== id);
  }





}
