import {takeUntil, throttleTime} from 'rxjs/operators';
import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[preventDoubleClick]'
})
export class PreventDoubleClickDirective implements OnInit, OnDestroy  {

  @Input() throttleTime: number = 500;
  @Output() throttledClick = new EventEmitter();
  private _clicks = new Subject();
  private _unsubscribeAll: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this._clicks
      .pipe(takeUntil(this._unsubscribeAll), throttleTime(this.throttleTime))
      .subscribe((e) => this.emitThrottledClick(e));
  }

  /**
   * Emit event of change in component
   * @param e
   */
  emitThrottledClick(e: unknown): void {
    this.throttledClick.emit(e);
  }

  /**
   * get click of user and stop events
   * @param event
   */
  @HostListener('click', ['$event'])
  clickEvent(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this._clicks.next(event);
  }


}
