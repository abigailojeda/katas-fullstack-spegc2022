import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-template';
	public word: string = '';
	public clue: string = '';
	public letra: string = '';
	public letters: string[] = [];
	public correct: number[] = [];
	public incorrects: string[] = [];
	public cont: number = 9;

	ngOnInit() {
		this.clue = 'palabra bonita';

		this.word = 'paco';

		for (let i = 0; i < this.word.length; i++) {
			console.log('word', this.word[i]);
			this.letters.push('');
		}
	}

	checkWord() {
		console.log(this.letra);
		
		//if(this.cont>0){
			for (let i = 0; i < this.word.length; i++) {
				// if(this.letters.includes(this.letra) || this.incorrects.includes(this.letra)){
				// 	break;
				// }  //pepe
				
				let noEncontrado:boolean = true;

				if (this.word[i] == this.letra) {
					this.letters[i] = this.letra;
					noEncontrado=false;
				} else {
			
					if(noEncontrado){
						this.incorrects.push(this.letra);
					}
				
					//this.cont-=1;
					break;
				}

			}
		//}
			
	
	}
}
