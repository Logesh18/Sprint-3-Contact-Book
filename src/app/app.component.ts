import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {contacts} from './contact';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newContact={
      name:"",
      email:"",
      phoneNumber:"",
      image:""
  };
  title = 'contact-book';
  contacts=contacts;
  addContact(form:NgForm){
      this.contacts.push({
          name:this.newContact.name,
          email:this.newContact.email,
          phoneNumber:this.newContact.phoneNumber,
          image:"./assets/images/contact.png",
      });
      console.log(this.contacts);
      form.reset();
  }
}
