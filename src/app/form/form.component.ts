import { Component, OnInit } from '@angular/core';
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

  onSubmit(formData: formDataInt) {
    const { startTime, endTime, timeZone } = formData;
    console.log(formData);

    if (startTime && endTime && timeZone) {
      this.error = '';
      this.submitted = true;
      this.start = new Date(`${startTime}${timeZone}`);
      this.end = new Date(`${startTime}${timeZone}`);
    }
  }

  constructor() {}
}

interface formDataInt {
  startTime: String;
  endTime: String;
  timeZone: String;
}
