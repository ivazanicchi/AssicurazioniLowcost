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

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      targa: ['', Validators.required],
      dataDiNascita: ['', Validators.required],
      telefono: ['', Validators.required],
      email: [''],
      note: ['', Validators.required],
      file: [null]
    });
  }

  ngOnInit(): void {

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

