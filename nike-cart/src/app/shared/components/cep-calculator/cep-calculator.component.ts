import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cep-calculator',
  templateUrl: './cep-calculator.component.html',
  styleUrls: ['./cep-calculator.component.scss']
})
export class CepCalculatorComponent implements OnInit {

  cepForm = new FormGroup({
    'cep': new FormControl(null, [Validators.minLength(8), Validators.required])
  });

  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  cepValidations: any = {isValid: undefined, isValidOnSubmit: undefined, isLoading: false, isCalculated: false}

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    setTimeout(() => {
      this.checkInputValidation();
    },0);

    if (this.navigationKeys.indexOf(e.key) > -1) {
      return;
    }

    if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }

  
  constructor() { }

  ngOnInit(): void {
  }

  calcDeliveryTime() {
    if(this.cepForm.get('cep')!.valid) {
      this.cepValidations.isLoading = true;
      setTimeout(()=>{
        this.cepValidations.isLoading = false;
        this.cepValidations.isCalculated = true;
      },1000);
    }else {
      this.cepValidations.isValidOnSubmit = false;
    }
  }

  checkInputValidation() {
    if(this.cepForm.get('cep')!.valid) {
      this.cepValidations.isValid = true;
      this.cepValidations.isValidOnSubmit = true;
    }else {
      this.cepValidations.isValid = false;
    }
  }


}
