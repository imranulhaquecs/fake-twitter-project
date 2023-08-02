import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupReqModel } from 'src/app/models/signup.model';
import { SignupService } from 'src/app/services/signup.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  form: any | null;
  private subs = new SubSink();
  model = new SignupReqModel();
   
  constructor(
    private fb: FormBuilder, 
    private service: SignupService,
    private router: Router){
  }

  signupForm = new FormGroup({
    username: new FormControl("", [Validators.required, Validators.maxLength(32)]),
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  })

  getControl(name: any) : AbstractControl | null{
    return this.signupForm.get(name);
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.pattern, Validators.maxLength(100)]],
      password: ['', [Validators.required]],
      //confirmPassword: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(50)]]
    }, {
      ////validator: MisMatch('newPassword', 'confirmPassword')
    });

  }

  onSignup() {
    Object.assign(this.model, this.form.value);
    this.subs.add(this.service.create(this.model).subscribe(data => this.saveSuccessHelper(data), error => this.saveFailedHelper(error)));
  }

  private saveSuccessHelper(data?: any) {    
    this.router.navigate(['']);
  }

  private saveFailedHelper(error: any) {
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onCancel() {
    this.router.navigate(['/']);
  }


}
