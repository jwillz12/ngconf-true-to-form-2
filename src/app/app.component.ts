import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public form = this._fb.group({
    firstName: '',
    lastName: '',
    age: 18,
    subscribe: true,
  });

  public formUpdate$ = this.form.valueChanges.pipe(
    startWith(this.form.value), // this allows it to immediatly have a value if needed
    map((formValues) => {
      return {
        ...formValues,
        valid: this.form.valid,
      };
    })
  );

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.form.value);
  }
}
