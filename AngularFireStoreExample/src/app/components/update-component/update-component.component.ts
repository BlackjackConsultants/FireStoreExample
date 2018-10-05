import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../..//models/Contact';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponent implements OnInit {
  public contact: Contact;

  constructor(private cs: ContactService) { }

  ngOnInit() {
    this.contact = {};
  }

  save() {
    this.cs.updateContact(this.contact);
  }

  load() {
    let query = ref => ref
      .where('id', '==', this.contact.id)

    this.cs.getContacts(query).subscribe(contacts => {
      this.contact = contacts[0];
    });
  }
}
