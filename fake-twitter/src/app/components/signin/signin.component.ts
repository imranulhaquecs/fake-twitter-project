import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginReqModel, LoginResModel } from 'src/app/models/login.model';
import { DBkeys } from 'src/app/services/db-keys';
import { LocalStoreManager } from 'src/app/services/local-store-manager.service';
import { SigninService } from 'src/app/services/signin.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  form: any | null;
  private subs = new SubSink();
  model = new LoginReqModel();
  
  constructor(
    private fb: FormBuilder, 
    private service: SigninService,
    private localStorage: LocalStoreManager,
    private router: Router){
  }

  onSignin(){

    Object.assign(this.model, this.form.value);
    this.subs.add(this.service.login(this.model).subscribe(data => this.saveSuccessHelper(data), error => this.saveFailedHelper(error)));

  }

  private saveSuccessHelper(data: any) {    
    this.localStorage.savePermanentData(data.token, DBkeys.ACCESS_TOKEN);
    //this.alertService.showMessage('Success', `Data saved successfully`, MessageSeverity.success);
    this.router.navigate(['/home']);
  }

  private saveFailedHelper(error: any) {
    debugger
    //this.alertService.showStickyMessage('Load Error', `Unable to save data.\r\nErrors: "${Utilities.getHttpResponseMessages(error)}"`, MessageSeverity.error, error);
  }

  signinForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.maxLength(32), Validators.minLength(8)]),
  })

  getControl(name: any) : AbstractControl | null{
    return this.signinForm.get(name);
  }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern, Validators.maxLength(100)]],
      password: ['', [Validators.required]],
    }, {
    });

  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
