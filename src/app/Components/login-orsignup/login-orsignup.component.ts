import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';


@Component({
  selector: 'app-login-orsignup',
  templateUrl: './login-orsignup.component.html',
  styleUrls: ['./login-orsignup.component.scss']
})
export class LoginOrsignupComponent implements OnInit {

  
  constructor(private userService : UserService, private router : Router) { }
  ngOnInit(): void {
    
  }

  loginForm = new  FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$")])
  })

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    number: new FormControl('', [Validators.required, Validators.minLength(10),Validators.pattern("^(0|91)?[6-9][0-9]{9}$")]),
    state: new FormControl('', [Validators.required,]),
    city: new FormControl('', [Validators.required,]),
    address: new FormControl('', [Validators.required,])
  })

  

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  get name(){
    return this.signupForm.get('name');
  }

  get emailId(){
    return this.signupForm.get('email');
  }

  get pwd(){
    return this.signupForm.get('password');
  }

  get number(){
    return this.signupForm.get('number');
  }

  RedirectToForgotPwd(){
    this.router.navigate(['/forgotpwd']);
  }
  
  onLogin(){
    console.log(this.loginForm)
    let data={
      email : this.loginForm.value.email,
      pwd : this.loginForm.value.password
    }
    this.userService.Login(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
      localStorage.setItem("token",res.data);
    });
    this.router.navigate(['/homepage'])
  }

  onSignup(){

      let data={
        fullName:this.signupForm.value.name,
        email : this.signupForm.value.email,
        pwd : this.signupForm.value.password,
        mobNo: parseInt(this.signupForm.value.number),
        state : this.signupForm.value.state,
        city : this.signupForm.value.city,
        address : this.signupForm.value.address
      }
      this.userService.Register(data).subscribe((res:any)=>{
        console.log(res.message);
        console.log(res.data);
      })
      this.router.navigate(['/loginOrsignup'])
  }

}
