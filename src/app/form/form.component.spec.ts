import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy('Form Component did not build.');
  });

  it('should have the correct properties', () => {
    expect(component.start).toBeTruthy('component is missing start value');
    expect(component.end).toBeTruthy('component is missing end value');
    expect(component.timeZones).toBeTruthy(
      'component is missing timeZones value'
    );
  });

  it('should render the form container', () => {
    const container = compiled.querySelector('.form-container');
    expect(container).toBeTruthy('form container did not render');
  });

  it('should render the start date element', () => {
    const startDate = compiled.querySelector('#startTime');
    expect(startDate).toBeTruthy('start date element did not render');
    expect(startDate.type).toBe(
      'datetime-local',
      'start date element does not have datetime-local type'
    );
    expect(startDate.name).toBe(
      'startTime',
      'start date element does not have startTime name'
    );
  });

  it('should render the end date element', () => {
    const endDate = compiled.querySelector('#endTime');
    expect(endDate).toBeTruthy('end date element did not render');
    expect(endDate.type).toBe(
      'datetime-local',
      'end date element does not have datetime-local type'
    );
    expect(endDate.name).toBe(
      'endTime',
      'end date element does not have endTime name'
    );
  });

  it('should render the time zone selector', () => {
    const zoneSelector = compiled.querySelector('#timeZone');
    expect(zoneSelector).toBeTruthy('time zone selector did not render');
    const options = zoneSelector.querySelectorAll('option');
    expect(options.length).toEqual(
      component.timeZones.length,
      'selector does not have the correct number of time zone options'
    );
  });

  it('should render the submit button', () => {
    const submitButton = compiled.querySelector('button');
    expect(submitButton).toBeTruthy('submit button did not render');
    expect(submitButton.textContent).toBe(
      'Display Times!',
      'submit button does not have the text "Display Times!"'
    );
  });

  it('should have a label for each input', () => {
    const labels = document.querySelectorAll('label');
    const inputs = document.querySelectorAll('input, select');
    expect(labels.length).toEqual(
      inputs.length,
      'the number of labels does not match the number of inputs'
    );
    const labelFor = Array.from(labels).map((label) =>
      label.getAttribute('for')
    );
    const inputId = Array.from(inputs).map((input) => input.getAttribute('id'));
    console.log(labelFor);
    console.log(inputId);
    expect(labelFor.toString()).toEqual(
      inputId.toString(),
      'the labels and inputs do not line up'
    );
  });
});
