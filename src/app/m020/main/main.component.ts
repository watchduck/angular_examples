import {Component, OnInit} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {Contact} from "../contact/contact.component";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName = '';
  contactAddress = '';

  selectedContact?: Contact;
  contactsObservable = new ReplaySubject<Contact[]>();

  ngOnInit() {
    this.contactsObservable.next(this.contacts);
  }

  selectContact2(contact: Contact) {
    console.log(`◆ selectContact2: ${contact.name}; ${contact.address}`);
    this.selectedContact = contact;
    this.contactName = contact.name;
    this.contactAddress = contact.address;
  }

  noContactSelected() {
    return this.selectedContact == undefined;
  }

  fieldsAreEmpty() {
    return this.contactName == '' && this.contactAddress == ''
  }

  updateSelectedContact() {
    this.contacts = this.contacts.map((entry) => {
      if (entry !== this.selectedContact) {
        return entry;
      }
      return new Contact(this.contactName, this.contactAddress);
    });
    console.log(`▶ updateSelectedContact: ${this.contactName}; ${this.contactAddress}`);
    this.contactsObservable.next(this.contacts);
    this.resetSelectedContact();
  }

  createContact() {
    const contact = new Contact(this.contactName, this.contactAddress);
    this.contacts = [...this.contacts, contact];
    this.contactsObservable.next(this.contacts);
    this.resetSelectedContact();
  }

  resetSelectedContact() {
    this.selectedContact = undefined;
    this.contactName = '';
    this.contactAddress = '';
  }

}
