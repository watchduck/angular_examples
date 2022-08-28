import {
  AfterViewChecked, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges
} from '@angular/core';


export class Contact {
  constructor(
    public name: string,
    public address: string
  ) { }
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnChanges, AfterViewChecked {

  @Input() contact?: Contact;
  @Output('onSelect') selectEmitter = new EventEmitter();

  checkCount = 0;

  selectEntry() {
    this.selectEmitter.emit(this.contact);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`■ ngOnChanges: ${changes['contact']?.currentValue.name}; ${changes['contact']?.currentValue.address}`);
  }

  ngAfterViewChecked() {
    console.log(`□ ngAfterViewChecked: ${this.contact?.name}; ${this.contact?.address} (${this.checkCount++})`);
  }

}
