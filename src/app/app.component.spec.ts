import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, FormComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'timezone-chart'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('timezone-chart');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header').textContent).toContain(
      'Timezone Calculator'
    );
  });

  it('should render info text', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const infoBox = compiled.querySelector('#info');
    expect(infoBox).toBeTruthy();
    const paragraphs = infoBox.querySelectorAll('p');
    expect(paragraphs[0].textContent).toContain(
      `Enter your event's start and end date + time in the form.`
    );
    expect(paragraphs[1].textContent).toContain(
      'Click "Display Times" to generate a chart of timezones!'
    );
  });

  it('should render form component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const formElement = compiled.querySelector('app-form');
    expect(formElement).toBeTruthy();
  });

  it('should render footer', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const footer = compiled.querySelector('footer');
    expect(footer).toBeTruthy();
    const content = footer.querySelector('p');
    expect(content.textContent).toContain('© 2021 Nicholas Carrigan');
    const link = content.querySelector('a');
    expect(link.textContent).toContain('Nicholas Carrigan');
    expect(link.href).toBe('https://www.nhcarrigan.com/');
  });
});
