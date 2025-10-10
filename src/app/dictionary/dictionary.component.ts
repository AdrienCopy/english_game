import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Verb {
  base: string;
  past: string;
}

@Component({
  selector: 'app-dictionary',
  standalone: true,
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  imports: [NgFor, RouterModule, FormsModule]
})
export class DictionaryComponent {
  searchText: string = '';

  verbs: Verb[] = [
    { base: 'be', past: 'was/were' },
    { base: 'become', past: 'became' },
    { base: 'begin', past: 'began' },
    { base: 'break', past: 'broke' },
    { base: 'bring', past: 'brought' },
    { base: 'build', past: 'built' },
    { base: 'buy', past: 'bought' },
    { base: 'catch', past: 'caught' },
    { base: 'choose', past: 'chose' },
    { base: 'come', past: 'came' },
    { base: 'cost', past: 'cost' },
    { base: 'cut', past: 'cut' },
    { base: 'do', past: 'did' },
    { base: 'draw', past: 'drew' },
    { base: 'drink', past: 'drank' },
    { base: 'drive', past: 'drove' },
    { base: 'eat', past: 'ate' },
    { base: 'fall', past: 'fell' },
    { base: 'feel', past: 'felt' },
    { base: 'fight', past: 'fought' },
    { base: 'find', past: 'found' },
    { base: 'fly', past: 'flew' },
    { base: 'forget', past: 'forgot' },
    { base: 'get', past: 'got' },
    { base: 'give', past: 'gave' },
    { base: 'go', past: 'went' },
    { base: 'have', past: 'had' },
    { base: 'hear', past: 'heard' },
    { base: 'know', past: 'knew' },
    { base: 'leave', past: 'left' },
    { base: 'lend', past: 'lent' },
    { base: 'let', past: 'let' },
    { base: 'lose', past: 'lost' },
    { base: 'make', past: 'made' },
    { base: 'meet', past: 'met' },
    { base: 'pay', past: 'paid' },
    { base: 'put', past: 'put' },
    { base: 'read', past: 'read' },
    { base: 'ride', past: 'rode' },
    { base: 'run', past: 'ran' },
    { base: 'say', past: 'said' },
    { base: 'see', past: 'saw' },
    { base: 'sell', past: 'sold' },
    { base: 'send', past: 'sent' },
    { base: 'sit', past: 'sat' },
    { base: 'sleep', past: 'slept' },
    { base: 'speak', past: 'spoke' },
    { base: 'spend', past: 'spent' },
    { base: 'stand', past: 'stood' },
    { base: 'take', past: 'took' },
    { base: 'teach', past: 'taught' },
    { base: 'tell', past: 'told' },
    { base: 'think', past: 'thought' },
    { base: 'understand', past: 'understood' },
    { base: 'win', past: 'won' },
    { base: 'write', past: 'wrote' }
  ];

  get filteredVerbs(): Verb[] {
    return this.verbs.filter(v =>
      v.base.toLowerCase().includes(this.searchText.toLowerCase()) ||
      v.past.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}