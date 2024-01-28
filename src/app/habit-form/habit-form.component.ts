import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-habit-form',
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add habit" formControlName="title"/>
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
    `
      button {
        background-color: mediumpurple;
        color: white;
        border-redius: 5px;
        font-size: 16px;
      }
    `
  ]
})
export class HabitFormComponent implements OnInit {
  habitForm: any;
  @Output() addHabit = new EventEmitter()

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    })
  }

  ngOnInit(): void {
  }

  onSubmit(newHabit: any) {
    this.addHabit.emit(newHabit);
    this.habitForm.reset();
  }
}
