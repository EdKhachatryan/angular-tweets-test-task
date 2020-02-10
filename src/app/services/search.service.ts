import {Injectable} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {DataModel} from '../models/data.model';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private datePipe: DatePipe) {
  }
  /*Generic implementation of search function for custom data model with usage of map and filter*/
  filtertable(array$: Observable<DataModel[]>, filter1: FormControl): Observable<DataModel[]> {
    let filteredTweets$: Observable<DataModel[]>;

    const filter$ = filter1.valueChanges.pipe(startWith(''));
    filteredTweets$ = combineLatest(array$, filter$).pipe(
      map(([tweets, filterString]) => tweets.filter(
        tweet =>
          tweet.text.toString().includes(filterString) ||
          tweet.likes.toString().includes(filterString) ||
          tweet.replies.toString().includes(filterString) ||
          tweet.retweets.toString().includes(filterString) ||
          tweet.hashtags.toString().includes(filterString) ||
          this.datePipe.transform(tweet.date, 'MMM d, y').toString().includes(filterString))
      ));
    return filteredTweets$;
  }
}
