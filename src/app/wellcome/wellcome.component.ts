import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required]

  })

  onSubmit(){

  }

}
