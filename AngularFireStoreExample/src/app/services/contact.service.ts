
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, QueryFn } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable()
export class ContactService {
  contactsCollectionRef: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;
  contactDoc: AngularFirestoreDocument<Contact>;

  constructor(public afs: AngularFirestore) {}

  getContacts(ref?: QueryFn){
    this.contactsCollectionRef = (ref) ? this.afs.collection('contacts', ref) : this.afs.collection('contacts');

    this.contacts = this.contactsCollectionRef.snapshotChanges().pipe(map((changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Contact;
        data.id = a.payload.doc.id;
        return data;
      });
    }) as any));
    return this.contacts;
  }

  addContact(contact: Contact){
    this.contactsCollectionRef.add(contact);
  }

  deleteContact(contact: Contact){
    this.contactDoc = this.afs.doc(`contacts/${contact.id}`);
    this.contactDoc.delete();
  }

  updateContact(contact: Contact){
    this.contactDoc = this.afs.doc('contacts/${contact.id}');
    this.contactDoc.update(contact);
  }
}

