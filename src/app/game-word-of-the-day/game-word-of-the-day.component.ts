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
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule, NgIf],
  templateUrl: './game-word-of-the-day.component.html',
  styleUrl: './game-word-of-the-day.component.scss'
})
export class GameWordOfTheDayComponent {
  words: Word[] = [];
  queue: Word[] = [];
  currentWord!: Word;

  userAnswer: string = '';
  feedback: string = '';
  score: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadWords();
  }

  // 🔹 Charger et préparer la queue
  loadWords() {
    this.http.get<Word[]>('words.json').subscribe(data => {
      this.words = data;
      this.queue = [...this.words];
      this.shuffleQueue();
      this.nextWord();
    });
  }

  // 🔹 Mélange (Fisher–Yates)
  shuffleQueue() {
    for (let i = this.queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
    }
  }

  // 🔹 Mot suivant
  nextWord() {
    if (this.queue.length === 0) {
      this.queue = [...this.words];
      this.shuffleQueue();
    }

    this.currentWord = this.queue.shift()!;
    this.userAnswer = '';
    this.feedback = '';
  }

  // 🔹 Vérification avec réinsertion si erreur
  checkAnswer() {
    const isCorrect =
      this.userAnswer.trim().toLowerCase() === this.currentWord.word;

    if (isCorrect) {
      this.feedback = '✅ Correct !';
      this.score++;
    } else {
      this.feedback = `❌ Mauvaise réponse : ${this.currentWord.word}`;

      // 👉 repose le mot plus tard (3 à 5 mots après)
      const delay = Math.min(4, this.queue.length);
      this.queue.splice(delay, 0, this.currentWord);
    }
    setTimeout(() => this.nextWord(), 1300);
  }
}
