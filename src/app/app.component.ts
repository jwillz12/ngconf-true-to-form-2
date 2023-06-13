import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent { 
  public form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(18),
    subscribe: new FormControl(true),
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

  ngOnInit() {
    console.log(this.form.value);
  }
}
