import { AbstractControl, ValidatorFn } from '@angular/forms';
import {
  lowercaseLetters,
  numbers,
  specialCharacters,
  uppercaseLetters,
} from '../shared/constants/validation.constants';

export class CustomValidators {
  static specialCharacters(): ValidatorFn {
    const error = {
      requiresSpecialCharacters: true,
    };
    return (
      control: AbstractControl<string>
    ): { [key: string]: any } | null => {
      const { value } = control;
      if (!value) {
        return null;
      }
      let valid = false;
      for (const specialCharacter of specialCharacters) {
        if (value.includes(specialCharacter)) valid = true;
      }

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }

  static numbers(): ValidatorFn {
    const error = {
      requiresNumbers: true,
    };
    return (
      control: AbstractControl<string>
    ): { [key: string]: any } | null => {
      const { value } = control;
      if (!value) {
        return null;
      }
      let valid = false;
      for (const number of numbers) {
        if (value.includes(`${number}`)) valid = true;
      }

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }

  static uppercaseLetters(): ValidatorFn {
    const error = {
      requiresUppercaseLetter: true,
    };
    return (
      control: AbstractControl<string>
    ): { [key: string]: any } | null => {
      const { value } = control;
      if (!value) {
        return null;
      }
      let valid = false;
      for (const uppercaseLetter of uppercaseLetters) {
        if (value.includes(uppercaseLetter)) valid = true;
      }

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }

  static lowercaseLetters(): ValidatorFn {
    const error = {
      requiresLowercaseLetter: true,
    };
    return (
      control: AbstractControl<string>
    ): { [key: string]: any } | null => {
      const { value } = control;
      if (!value) {
        return null;
      }
      let valid = false;
      for (const lowercaseLetter of lowercaseLetters) {
        if (value?.includes(lowercaseLetter)) valid = true;
      }

      // if true, return no error, otherwise return the error object passed in the second parameter.
      return valid ? null : error;
    };
  }

  static MatchValidator(control: AbstractControl) {
    const passwordValue: string = control.get('password')!.value;
    const confirmPassword = control.get('confirmPassword')!;
    const confirmPasswordValue: string = control.get('confirmPassword')!.value;

    if (!confirmPasswordValue?.length) {
      return null;
    }

    if (passwordValue !== confirmPasswordValue) {
      confirmPassword.setErrors({ mismatch: true });
    }
    return null;
  }
}
