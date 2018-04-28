import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/Contact';
import { QueryFn } from 'angularfire2/firestore';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {}

  onQueriesClick() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  onMaleContactsQueryClick() {
    let query = ref => ref.orderBy('FirstName', 'asc')
    this.contactService.getContacts(query).subscribe(contacts => {
      this.contacts = contacts;
    });
  }

  onOrderByContactFNQueryClick() {
    let query = ref => ref.orderBy('FirstName', 'asc')
    this.contactService.getContacts(query).subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}
