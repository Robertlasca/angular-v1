import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Event emitter se utiliza para enviar un objeto y así registrarlo
  @Output()
  public onNewCharacter:EventEmitter<Character>= new EventEmitter();

  public character:Character={
    name:'Roberto',
    power:3
  };

  emitCharacter():void{
    // debugger;
    if(this.character.name.length===0)return;

    // debugger;
    this.onNewCharacter.emit(this.character);
    console.log(this.character);

    this.character={name:'',power:0};

     }
}
