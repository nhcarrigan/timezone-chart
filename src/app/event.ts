export class Event {
  constructor(
    public start: Date,
    public end: Date,
    public name: string,
    public timeZone: string
  ) {}
}
