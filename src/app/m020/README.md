# 20 &bull; contact list <small>(optimized with `OnPush`)</small>

This app has fewer checks than the [last branch](../m019).<br>
All components except `MainComponent` have the following line in the `@Component` decorator:<br>
`changeDetection: ChangeDetectionStrategy.OnPush`<br>
This requires immutable data structures. Changing existing objects would not cause the app to be redrawn. Replacing them does.

## [main](main)

### [main.component.ts](main/main.component.ts)

* `contacts`, `contactName`, `contactAddress`, `selectedContact`

* `selectContact2()`, `updateSelectedContact()`, `createContact()`

```typescript
contactsObservable = new ReplaySubject<Contact[]>();

ngOnInit() {
  this.contactsObservable.next(this.contacts);
}
```

In `createContact()` the list is not appended (like in the last branch), but replaced:
```typescript
this.contacts = [...this.contacts, contact];
```

In `updateSelectedContact()` the list is also replaced. The function `Array.map` is used for that.

### [main.component.html](main/main.component.html)

```html
<app-list [contacts]="contacts"
          (onSelect)="selectContact2($event)"
></app-list>

<app-counter [contacts]="contactsObservable"></app-counter>

<form>
  <input type="text" name="something" [(ngModel)]="contactName">
  <input type="text" name="whatever" [(ngModel)]="contactAddress">
  <button (click)="updateSelectedContact()">update selected</button>
  <button (click)="createContact()">create new</button>

</form>
```

## [list](list)

### [list.component.ts](list/list.component.ts)

```typescript
@Input() contacts: Contact[] = [];
@Output('onSelect') selectEmitter = new EventEmitter();

selectContact1(selected: Contact) {
  this.selectEmitter.emit(selected);
}
```

### [list.component.html](list/list.component.html)

```html
<app-contact *ngFor="let contact of contacts"
              [contact]="contact"
              (onSelect)="selectContact1(contact)"
></app-contact>
```

## [contact](contact)

### [contact.component.ts](contact/contact.component.ts)

```typescript
@Input() contact?: Contact;
@Output('onSelect') selectEmitter = new EventEmitter();

selectEntry() {
  this.selectEmitter.emit(this.contact);
}
```

`ngOnChanges` and `ngAfterViewChecked` for console logging

### [contact.component.html](contact/contact.component.html)

```html
<div class="contact" (click)="selectEntry()">
  <label>name:</label> {{contact?.name}}<br>
  <label>address:</label> {{contact?.address}}<br>
</div>
```

## [counter](counter)

### [counter.component.ts](counter/counter.component.ts)

```typescript
@Input() contacts?: Observable<Contact[]>

constructor(private changeDetector: ChangeDetectorRef) { }

ngOnInit(): void {
  this.contacts?.subscribe((contacts) => {
    this.count = contacts.length;
    this.changeDetector.markForCheck();
  })
}
```

### [counter.component.html](counter/counter.component.html)

```html
<label>number of contacts:</label> {{count}}
```
