import {ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {NgClass} from '@angular/common';
import {NavbarComponent} from '@ui/organisms/navbar/navbar.component';
import {SidebarComponent} from '@ui/organisms/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './main-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  protected isOpen: WritableSignal<boolean> = signal(false);
  protected isPhoneMode: WritableSignal<boolean> = signal(false);
  private readonly _breakpointObserver: BreakpointObserver = inject(BreakpointObserver);


  constructor() {
    // detect screen size changes
    this._breakpointObserver.observe([
      "(max-width: 640px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isOpen.set(false);
        this.isPhoneMode.set(true);
        return;
      }
      this.isOpen.set(true);
      this.isPhoneMode.set(false);
    });
  }

}
