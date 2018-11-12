import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({selector: 'app-card', templateUrl: './card.component.html', styleUrls: ['./card.component.css']})
export class CardComponent implements OnInit {

  items : Observable < any[] >;
  constructor(private db : AngularFirestore) {
    this.items = db
      .collection('items')
      .valueChanges();
  }

  ngOnInit() {}

  speak(myText) {
    console.log(myText);
    const utterance = new SpeechSynthesisUtterance(myText)
    speechSynthesis.speak(utterance)
  }

  fetchHard() {

    this.items = this
      .db
      .collection('items', ref => ref.where('hard', '==', 'true'))
      .valueChanges()

  }

}
