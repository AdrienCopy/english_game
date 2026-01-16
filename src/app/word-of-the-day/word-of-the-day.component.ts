import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

interface Word {
  word: string;
  type: string;
  translation: string;
  definition: string;
  example: string;
}

@Component({
  selector: 'app-word-of-the-day',
  imports: [ RouterModule, CommonModule, HttpClientModule, FormsModule ],
  templateUrl: './word-of-the-day.component.html',
  styleUrl: './word-of-the-day.component.scss'
})
export class WordOfTheDayComponent {
  words: Word[] = [];
  selectedWord: Word | null = null;
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadWords();
  }

  loadWords() {
    this.http.get<Word[]>('words.json').subscribe(data => {
      this.words = data.sort((a, b) => a.word.localeCompare(b.word));
    });
  }

  selectWord(word: Word) {
    this.selectedWord = this.selectedWord === word ? null : word;
  }

  get filteredWords(): Word[] {
    return this.words
      .filter(w => w.word.toLowerCase().includes(this.searchText.toLowerCase()))
      .sort((a, b) => a.word.localeCompare(b.word)); // tri alphabétique
  }
}




