import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteId= new EventEmitter<string>();

  @Input()
  public characterList:Character[]=[{
    id:uuid(),
    name:'Trunks',
    power:10
  }]




  onDeleteCharacter(id?:string):void{
    if(!id) return;

    console.log("id",id);

   this.onDeleteId.emit(id);
  }

}
