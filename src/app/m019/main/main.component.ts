import { Component } from '@angular/core';

import {Contact} from "../contact/contact.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  contacts = [
    new Contact('John Doe', '123 Main Street, Anytown'),
    new Contact('Richard Roe', '456 Fifth Avenue, Otherville'),
  ];

  contactName = '';
  contactAddress = '';

  selectedContact?: Contact;

  selectContact2(contact: Contact) {
    console.log(`◆ selectContact2: ${contact.name}; ${contact.address}`);
    this.selectedContact = contact;
    this.contactName = contact.name;
    this.contactAddress = contact.address;
  }

  updateSelectedContact() {
    if (this.selectedContact) {
      this.selectedContact.name = this.contactName;
      this.selectedContact.address = this.contactAddress;
      this.selectedContact = undefined;
      console.log(`▶ updateSelectedContact: ${this.contactName}; ${this.contactAddress}`)
      this.resetSelectedContact();
    }
  }

  createContact() {
    const contact = new Contact(this.contactName, this.contactAddress);
    this.contacts.push(contact);
    this.resetSelectedContact();
  }

  resetSelectedContact() {
    this.selectedContact = undefined;
    this.contactName = '';
    this.contactAddress = '';
  }

}
