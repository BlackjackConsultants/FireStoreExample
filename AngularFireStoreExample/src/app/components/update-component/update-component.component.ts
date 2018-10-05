import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../..//models/Contact';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private cs: ContactService) { }

  ngOnInit() {
    let c: Contact = {}
    this.cs.updateContact(c);
  }
}