import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from "../contact/contact.component";


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  count = 0;

  @Input() contacts?: Observable<Contact[]>

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.contacts?.subscribe((contacts) => {
      this.count = contacts.length;
      this.changeDetector.markForCheck();
    })
  }

}
