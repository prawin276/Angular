import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: [''],
  aliases: this.fb.array([
    this.fb.control('')
  ])
});

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  updateContact() {
    this.contactForm.patchValue({
      name: 'Nancy',
      email: 'Nancy',
    });
  }

  get aliases() {
    return this.contactForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
