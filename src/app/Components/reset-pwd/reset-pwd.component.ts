import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.scss']
})
export class ResetPwdComponent implements OnInit {

  resetpwdForm = new FormGroup({
    password: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    confirmPassword: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')])
  });

  token : any;
  constructor(private router : Router, private userService : UserService, private activeRoute : ActivatedRoute) { 
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }

  ngOnInit(): void {
  }

  get password(){
    return this.resetpwdForm.get('password');
  }

  get confirmpassword(){
    return this.resetpwdForm.get('confirmPassword');
  }

  onResetpwd(){
    if(this.resetpwdForm.valid){
      let reqData = {
        password : this.resetpwdForm.value.password,
        confirmPassword : this.resetpwdForm.value.confirmPassword
      }
      this.userService.ResetPwd(reqData,this.token).subscribe((res : any)=>{
        console.log(res.message);
      });
    }
    this.router.navigate(['/loginOrsignup']);
  }

}
