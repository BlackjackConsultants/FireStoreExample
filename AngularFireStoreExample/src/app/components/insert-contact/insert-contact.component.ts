import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../..//models/Contact';

@Component({
  selector: 'app-insert-contact',
  templateUrl: './insert-contact.component.html',
  styleUrls: ['./insert-contact.component.css']
})
export class InsertContactComponent implements OnInit {
  public contact: Contact;

  constructor(private cs: ContactService) { }

  ngOnInit() {
    this.contact = {};
  }

  save() {
    this.cs.setContact(this.contact);
  }
}
