import { Component } from '@angular/core';
import { timezoneList } from '../timezones';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  timeZones = timezoneList.map((el) => ({ name: el.name, value: el.offset }));

  start = new Date(Date.now());
  end = new Date(Date.now());
  zone = '';
  error = 'Please submit the form above.';
  submitted = false;

  constructor() {}

  onSubmit(formData: FormDataInt) {
    const { startTime, endTime, timeZone } = formData;

    if (startTime && endTime && timeZone) {
      this.error = '';
      this.submitted = true;
      this.start = new Date(`${startTime}${timeZone}`);
      this.end = new Date(`${endTime}${timeZone}`);
    }

    if (
      this.start.toString() === 'Invalid Date' ||
      this.end.toString() === 'Invalid Date'
    ) {
      this.error = 'Please use a valid date format per the instructions above.';
      this.submitted = false;
      return;
    }
  }
}

interface FormDataInt {
  startTime: string;
  endTime: string;
  timeZone: string;
}
