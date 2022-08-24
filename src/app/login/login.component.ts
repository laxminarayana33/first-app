import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private fb:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  loginForm = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })

  onSubmit(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res=>{
    const user = res.find((obj:any)=>{
      return obj.username === this.loginForm.value.username && obj.password === this.loginForm.value.password
    });
    if(user){
      alert("login sucessfull");
      this.loginForm.reset();
      this.router.navigate(['']);
    }else{
      alert("user not found");
    }    
    },err=>{
      alert("something went wrong")
    })
  }
}
