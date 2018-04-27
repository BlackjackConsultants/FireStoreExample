import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService {
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  contactDoc: AngularFirestoreDocument<Contact>;

  constructor(public afs: AngularFirestore) { 
    this.contactsCollection = this.afs.collection('contacts', ref => ref.orderBy('FirstName','asc'));

    this.contacts = this.contactsCollection.snapshotChanges().map((changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Contact;
        data.id = a.payload.doc.id;
        return data;
      });
    }) as any);
  }

  getContacts(){
    return this.contacts;
  }

  addContact(contact: Contact){
    this.contactsCollection.add(contact);
  }

  deleteContact(contact: Contact){
    this.contactDoc = this.afs.doc(`contacts/${contact.id}`);
    this.contactDoc.delete();
  }

  updateContact(contact: Contact){
    this.contactDoc = this.afs.doc(`contacts/${contact.id}`);
    this.contactDoc.update(contact);
  }
}

