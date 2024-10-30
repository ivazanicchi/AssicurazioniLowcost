import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'mail-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './mail-form.component.html',
  styleUrl: './mail-form.component.css'
})
export class MailFormComponent implements OnInit{
  form: FormGroup;
  isExpanded: boolean = false;
  fileLoaded: boolean = false;
  fileName?: string;
  showInputRequired: boolean = false;
  listaVeicoli = [
    {value: 'Autovettura', label: 'Autovettura'},
    {value: 'Moto', label: 'Moto'},
    {value: 'Scooter', label: 'Scooter'},
    {value: 'Autocarro', label: 'Autocarro'},
    {value: 'Altro', label: 'Altro'}
  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      targa: ['', [Validators.required, Validators.pattern('^[A-Za-z]{2}[0-9]{3}[A-Za-z]{2}$|^[A-Za-z]{2}[0-9]{5}$')]],
      flagFormatoTargaNonItaliano: [false],
      tipoVeicolo: ['', Validators.required],
      dataDiNascita: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: [''],
      note: ['', Validators.required],
      file: [null]
    });
  }

  ngOnInit(): void {

  }

  onFlagChange(){
    const formTarga = this.form.get('targa');

    //Condizione per cui se il flag è true allora toglie il required sul campo targa
    if(this.form.get('flagFormatoTargaNonItaliano')?.value) {
      formTarga?.clearValidators()
    }
    formTarga?.updateValueAndValidity()
  }

  validateNumberInput(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileLoaded = true;
      this.fileName = file.name;
      console.log('File selezionato:', file);
    }
  }

  removeFile() {
    this.form.controls['file'].setValue(null)
    console.log(this.form, this.form.controls['file'])
    this.fileLoaded = !this.fileLoaded
  }

  expandForm() {
    this.isExpanded = !this.isExpanded;
  }

  onSubmit() {
    if(this.form.valid) {
      console.log(this.form.value);
      this.form.reset()
    } else {
      this.showInputRequired = true;
    }
  }


}

