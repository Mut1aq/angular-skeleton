import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Renderer2, OnDestroy, Inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoginForm } from 'src/app/core/shared/interfaces/forms/login-form.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly authService: AuthService,
    private readonly toast: ToastService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'body-background');
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: (tokens: { accessToken: string; refreshToken: string }) => {
        this.authService.initLoggedInUser(tokens);
      },
      error: (err: any) => {
        this.toast._onApiError(err);
      },
      complete: () => {},
    });
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'body-background');
  }
}
