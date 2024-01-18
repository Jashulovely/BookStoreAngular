import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit(): void {
  }

  forgotpwdForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email])
  });

  onForgotpwd(){
    //this.router.navigate(['/resetpwd'])
    console.log(this.forgotpwdForm)
    let data={
      email : this.forgotpwdForm.value.email
    }
    this.userService.ForgotPwd(data).subscribe((res:any)=>{
      console.log(res.message);
      console.log(res.data);
    })
  }

  redirectToRegister(){
    this.router.navigate(['/loginOrsignup']);
  }

}
