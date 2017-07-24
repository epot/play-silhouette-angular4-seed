import { Router } from '@angular/router';
import { AuthService } from 'ng2-ui-auth';
import { ILoginData } from './interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { FormHelperService } from './form-helper.service';
import { ErrorHandleService } from './error-handle.service';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

/**
 * Created by Ron on 03/10/2016.
 */

@Component({
    selector: 'my-signup',
    templateUrl: 'views/signUp.html',
})
export class SignUpComponent implements OnInit {
    form: FormGroup;

    constructor(private auth: AuthService,
                private router: Router,
                private fb: FormBuilder,
                public fh: FormHelperService,
                private eh: ErrorHandleService, public toastr: ToastsManager, vcr: ViewContainerRef) {
         this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
        this.form = this.fb.group({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            rememberMe: new FormControl(true),
        })
    }

    login(loginData: ILoginData) {
        this.auth.login(loginData)
            .subscribe({
                error: (err: any) => this.toastr.error(err.toString()),  // this.eh.handleError(err),
                complete: () => this.router.navigateByUrl('main')
            });
    }

    authenticate(provider: string) {
        this.auth.authenticate(provider)
            .subscribe({
                error: (err: any) => this.toastr.error(err.toString()),  // this.eh.handleError(err),
                complete: () => this.router.navigateByUrl('main')
            });
    }
}