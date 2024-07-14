import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSlideToggleModule, 
    MatCheckboxModule, 
    MatButtonModule, 
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  newPassword: string = "";
  title = 'CursoAngular1';
  texto: string = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;

  onButtonClicked(texto: string) {
    console.log("clicked button string ");
    this.texto = texto;
    console.log(`
      Include Letters ${this.includeLetters}
      Include Numbers ${this.includeNumbers}
      Include Symbols ${this.includeSymbols}
      `);
  }

  getName() {
    return this.texto;

  }
  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;

  }
  
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;

  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;

  }  

  onChangeLength(value: any) {
    const parsedValue = parseInt(value.value);
    this.length = parsedValue;
  }

  randomGetChars(max: number): number {
    let sorteio = 0;

    while (sorteio === 0) {
      sorteio = Math.floor(Math.random()*(max));
    }

    console.log(sorteio);
    return sorteio;

  }

  createPassword() {

    let letters = "abcdefRSTUghijklABCDEFGHIpqrsJKLMNOPQVWXYZmnotuvwxyz";
    let numbers = "0123456789";
    let symbols = "@#";

    let validChars = "!";

    let newpass = "";

    if(this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      newpass += validChars[this.randomGetChars(validChars.length)];

    }

    this.newPassword = newpass;

  }

}
