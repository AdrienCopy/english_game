import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

interface Word {
  word: string;
  type: string;
  translation: string;
  definition: string;
  example: string;
}

@Component({
  selector: 'app-game-word-of-the-day',
  imports: [ RouterModule, HttpClientModule, FormsModule, NgIf ],
  templateUrl: './game-word-of-the-day.component.html',
  styleUrl: './game-word-of-the-day.component.scss'
})
export class GameWordOfTheDayComponent {
  words: Word[] = [];
  currentWord!: Word;
  userAnswer: string = '';
  feedback: string = '';
  score: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadWords();
  }

  loadWords() {
    this.http.get<Word[]>('words.json').subscribe(data => {
      this.words = data.sort((a, b) => a.word.localeCompare(b.word));
      this.newWord();
    });
  }

  newWord() {
    const index = Math.floor(Math.random() * this.words.length);
    this.currentWord = this.words[index];
    this.userAnswer = '';
    this.feedback = '';
  }

  checkAnswer() {
    if (this.userAnswer.trim().toLowerCase() === this.currentWord.word) {
      this.feedback = '✅ Correct !';
      this.score++;
    } else {
      this.feedback = `❌ Mauvaise réponse : ${this.currentWord.word}`;
    }

    setTimeout(() => this.newWord(), 1500);
  }

}
