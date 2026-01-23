import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Verb {
  base: string;
  past: string;
  pastParticiple: string;
  translation: string;
}

@Component({
  selector: 'app-dictionary',
  standalone: true,
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
  imports: [NgFor, RouterModule, FormsModule, NgIf]
})
export class DictionaryComponent {
  searchText: string = '';

  verbs: Verb[] = [
    { base: 'be', past: 'was / were', pastParticiple: 'been', translation: 'être' },
    { base: 'become', past: 'became', pastParticiple: 'become', translation: 'devenir' },
    { base: 'begin', past: 'began', pastParticiple: 'begun', translation: 'commencer' },
    { base: 'break', past: 'broke', pastParticiple: 'broken', translation: 'casser' },
    { base: 'bring', past: 'brought', pastParticiple: 'brought', translation: 'apporter' },
    { base: 'build', past: 'built', pastParticiple: 'built', translation: 'construire' },
    { base: 'buy', past: 'bought', pastParticiple: 'bought', translation: 'acheter' },
    { base: 'catch', past: 'caught', pastParticiple: 'caught', translation: 'attraper' },
    { base: 'choose', past: 'chose', pastParticiple: 'chosen', translation: 'choisir' },
    { base: 'come', past: 'came', pastParticiple: 'come', translation: 'venir' },
    { base: 'cost', past: 'cost', pastParticiple: 'cost', translation: 'coûter' },
    { base: 'cut', past: 'cut', pastParticiple: 'cut', translation: 'couper' },
    { base: 'do', past: 'did', pastParticiple: 'done', translation: 'faire' },
    { base: 'draw', past: 'drew', pastParticiple: 'drawn', translation: 'dessiner' },
    { base: 'drink', past: 'drank', pastParticiple: 'drunk', translation: 'boire' },
    { base: 'drive', past: 'drove', pastParticiple: 'driven', translation: 'conduire' },
    { base: 'eat', past: 'ate', pastParticiple: 'eaten', translation: 'manger' },
    { base: 'fall', past: 'fell', pastParticiple: 'fallen', translation: 'tomber' },
    { base: 'feel', past: 'felt', pastParticiple: 'felt', translation: 'ressentir' },
    { base: 'fight', past: 'fought', pastParticiple: 'fought', translation: 'se battre' },
    { base: 'find', past: 'found', pastParticiple: 'found', translation: 'trouver' },
    { base: 'fly', past: 'flew', pastParticiple: 'flown', translation: 'voler' },
    { base: 'forget', past: 'forgot', pastParticiple: 'forgotten', translation: 'oublier' },
    { base: 'get', past: 'got', pastParticiple: 'got / gotten', translation: 'obtenir' },
    { base: 'give', past: 'gave', pastParticiple: 'given', translation: 'donner' },
    { base: 'go', past: 'went', pastParticiple: 'gone', translation: 'aller' },
    { base: 'have', past: 'had', pastParticiple: 'had', translation: 'avoir' },
    { base: 'hear', past: 'heard', pastParticiple: 'heard', translation: 'entendre' },
    { base: 'know', past: 'knew', pastParticiple: 'known', translation: 'savoir / connaître' },
    { base: 'leave', past: 'left', pastParticiple: 'left', translation: 'partir / quitter' },
    { base: 'lend', past: 'lent', pastParticiple: 'lent', translation: 'prêter' },
    { base: 'let', past: 'let', pastParticiple: 'let', translation: 'laisser' },
    { base: 'lose', past: 'lost', pastParticiple: 'lost', translation: 'perdre' },
    { base: 'make', past: 'made', pastParticiple: 'made', translation: 'faire / fabriquer' },
    { base: 'meet', past: 'met', pastParticiple: 'met', translation: 'rencontrer' },
    { base: 'pay', past: 'paid', pastParticiple: 'paid', translation: 'payer' },
    { base: 'put', past: 'put', pastParticiple: 'put', translation: 'mettre / poser' },
    { base: 'read', past: 'read', pastParticiple: 'read', translation: 'lire' },
    { base: 'ride', past: 'rode', pastParticiple: 'ridden', translation: 'monter (vélo / cheval)' },
    { base: 'run', past: 'ran', pastParticiple: 'run', translation: 'courir' },
    { base: 'say', past: 'said', pastParticiple: 'said', translation: 'dire' },
    { base: 'see', past: 'saw', pastParticiple: 'seen', translation: 'voir' },
    { base: 'sell', past: 'sold', pastParticiple: 'sold', translation: 'vendre' },
    { base: 'send', past: 'sent', pastParticiple: 'sent', translation: 'envoyer' },
    { base: 'set', past: 'set', pastParticiple: 'set', translation: 'mettre / fixer' },
    { base: 'sit', past: 'sat', pastParticiple: 'sat', translation: 's’asseoir' },
    { base: 'sleep', past: 'slept', pastParticiple: 'slept', translation: 'dormir' },
    { base: 'speak', past: 'spoke', pastParticiple: 'spoken', translation: 'parler' },
    { base: 'spend', past: 'spent', pastParticiple: 'spent', translation: 'passer (temps / argent)' },
    { base: 'stand', past: 'stood', pastParticiple: 'stood', translation: 'se tenir debout' },
    { base: 'take', past: 'took', pastParticiple: 'taken', translation: 'prendre' },
    { base: 'teach', past: 'taught', pastParticiple: 'taught', translation: 'enseigner' },
    { base: 'tell', past: 'told', pastParticiple: 'told', translation: 'raconter / dire' },
    { base: 'think', past: 'thought', pastParticiple: 'thought', translation: 'penser' },
    { base: 'understand', past: 'understood', pastParticiple: 'understood', translation: 'comprendre' },
    { base: 'win', past: 'won', pastParticiple: 'won', translation: 'gagner' },
    { base: 'write', past: 'wrote', pastParticiple: 'written', translation: 'écrire' },
    // verbes supplémentaires utiles
    { base: 'arise', past: 'arose', pastParticiple: 'arisen', translation: 'se lever / surgir' },
    { base: 'awake', past: 'awoke', pastParticiple: 'awoken', translation: 'se réveiller' },
    { base: 'can', past: 'could', pastParticiple: ' - ', translation: 'pouvoir' },
    { base: 'bear', past: 'bore', pastParticiple: 'borne', translation: 'porter / supporter' },
    { base: 'beat', past: 'beat', pastParticiple: 'beaten', translation: 'battre' },
    { base: 'bend', past: 'bent', pastParticiple: 'bent', translation: 'plier / courber' },
    { base: 'blow', past: 'blew', pastParticiple: 'blown', translation: 'souffler' },
    { base: 'burn', past: 'burnt', pastParticiple: 'burnt', translation: 'brûler' },
    { base: 'cling', past: 'clung', pastParticiple: 'clung', translation: 's’accrocher' },
    { base: 'creep', past: 'crept', pastParticiple: 'crept', translation: 'ramper / se faufiler' },
    { base: 'dig', past: 'dug', pastParticiple: 'dug', translation: 'creuser' },
    { base: 'feed', past: 'fed', pastParticiple: 'fed', translation: 'nourrir' },
    { base: 'freeze', past: 'froze', pastParticiple: 'frozen', translation: 'geler' },
    { base: 'hide', past: 'hid', pastParticiple: 'hidden', translation: 'cacher / se cacher' },
    { base: 'kneel', past: 'knelt', pastParticiple: 'knelt', translation: 's’agenouiller' },
    { base: 'ring', past: 'rang', pastParticiple: 'rung', translation: 'sonner / appeler' },
    { base: 'rise', past: 'rose', pastParticiple: 'risen', translation: 'se lever / augmenter' },
    { base: 'shake', past: 'shook', pastParticiple: 'shaken', translation: 'secouer' },
    { base: 'shoot', past: 'shot', pastParticiple: 'shot', translation: 'tirer / abattre' },
    { base: 'sing', past: 'sang', pastParticiple: 'sung', translation: 'chanter' },
    { base: 'sink', past: 'sank', pastParticiple: 'sunk', translation: 'couler / sombrer' },
    { base: 'slide', past: 'slid', pastParticiple: 'slid', translation: 'glisser' },
    { base: 'steal', past: 'stole', pastParticiple: 'stolen', translation: 'voler (quelque chose)' },
    { base: 'swim', past: 'swam', pastParticiple: 'swum', translation: 'nager' },
    { base: 'throw', past: 'threw', pastParticiple: 'thrown', translation: 'jeter / lancer' },
    { base: 'wake', past: 'woke', pastParticiple: 'woken', translation: 'se réveiller' },
    { base: 'wear', past: 'wore', pastParticiple: 'worn', translation: 'porter (vêtements)' },
    { base: 'weep', past: 'wept', pastParticiple: 'wept', translation: 'pleurer' },
    { base: 'wring', past: 'wrung', pastParticiple: 'wrung', translation: 'tordre / essorer' },
    { base: 'dream', past: 'dreamt', pastParticiple: 'dreamt', translation: 'rêver' },
    { base: 'grow', past: 'grew', pastParticiple: 'grown', translation: 'grandir / croître' },
    { base: 'hit', past: 'hit', pastParticiple: 'hit', translation: 'frapper' },
    { base: 'keep', past: 'kept', pastParticiple: 'kept', translation: 'garder / conserver' },
    { base: 'lay', past: 'laid', pastParticiple: 'laid', translation: 'poser / étendre' },
    { base: 'learn', past: 'learnt', pastParticiple: 'learnt', translation: 'apprendre' },
    { base: 'shut', past: 'shut', pastParticiple: 'shut', translation: 'fermer' },
    { base: 'trow', past: 'threw', pastParticiple: 'thrown', translation: 'jeter / lancer' },
  ];
  selectedVerb: Verb | null = null;

  ngOnInit() {
    // trier les verbes par ordre alphabétique
    this.verbs.sort((a, b) => a.base.localeCompare(b.base));
  }

  selectVerb(verb: Verb) {
    this.selectedVerb = this.selectedVerb === verb ? null : verb;
  }
  

  get filteredVerbs(): Verb[] {
    return this.verbs.filter(v =>
      v.base.toLowerCase().includes(this.searchText.toLowerCase()) ||
      v.past.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}