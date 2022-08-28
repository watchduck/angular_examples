# 19 &bull; contact list <small>(with too many checks)</small>

This app uses `ChangeDetectionStrategy.Default`. This leads to too many checks (which can be seen in the logs).

## [main](main)

### [main.component.ts](main/main.component.ts)

* `contacts`, `selectedContact`, `contactName`, `contactAddress`
* `selectContact2(contact)`, `updateSelectedContact()`, `createContact()`

### [main.component.html](main/main.component.html)

```html
<app-list [contacts]="contacts"
          (onSelect)="selectContact2($event)"
></app-list>

<form>
  <input type="text" name="something" [(ngModel)]="contactName">
  <input type="text" name="whatever"  [(ngModel)]="contactAddress">
  <button (click)="updateSelectedContact()">update selected</button>
  <button (click)="createContact()">create new</button>
</form>
```

The `name` attribute of the inputs must be used, although the content does not matter.

## [list](list)

### [list.component.ts](list/list.component.ts)

```typescript
@Input() contacts: Contact[] = [];
@Output('onSelect') selectEmitter = new EventEmitter();

selectContact1(contact: Contact) {
  this.selectEmitter.emit(contact);
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
@Output() onSelect = new EventEmitter<Contact>();

selectEntry() {
  this.onSelect.emit(this.contact);
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
