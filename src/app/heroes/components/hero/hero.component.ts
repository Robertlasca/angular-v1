import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age:  number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }

  changeNameHero(newName:string):void{
    this.name=newName;
  }

  changeAgeHero(newAge:number):void{
    if(newAge!==45){
      this.age=newAge;
    }

  }

  resetForm():void{
    this.age=45;
    this.name='iroman';
  }

}

