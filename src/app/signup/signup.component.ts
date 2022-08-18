import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor( private fb:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  signUpForm = this.fb.group({
    firstname:['', Validators.required],
    lastname:['', Validators.required],
    email:['',Validators.required],
    phonenumber:[Number, Validators.required],
    dob:[Date, Validators.required],
    hno:['', Validators.required],
    street:['', Validators.required],
    city:['', Validators.required],
    state:['', Validators.required],
    username:['', Validators.required],
    password:['', Validators.required],
    confirmpassword:['', Validators.required],

  })

  onSubmit(){
    this.http.post<any>('http://localhost:3000/users', this.signUpForm.value).subscribe(res=>{
      alert("signup sucessfull");
      this.signUpForm.reset();
      this.router.navigate(['login'])
    })
  }

}
