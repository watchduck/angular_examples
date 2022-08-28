import {Directive, HostBinding, HostListener} from "@angular/core";


@Directive({
  selector: '[appLowerCase]'
})
export class LowerCaseDirective {
  @HostBinding('value') boundValue = '';

  @HostListener('change', ['$event']) namedAnon($changeEvent: Event) {
    const event_target = $changeEvent.target as HTMLInputElement;
    this.boundValue = event_target.value.toLowerCase();
  }
}
