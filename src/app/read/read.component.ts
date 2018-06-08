import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { RemoveTutorial } from '../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.tutorials = this.store.select('tutorial');
  }

  remove(index: number) {
    console.log(index);
    this.store.dispatch(new RemoveTutorial(index));
  }

}
