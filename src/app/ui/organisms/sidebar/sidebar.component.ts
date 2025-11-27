import {ChangeDetectionStrategy, Component, input, InputSignal, signal, WritableSignal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatPrefix} from '@angular/material/form-field';
import {PipBackgroundDarkComponent} from '@ui/atoms/pip-background-dark/pip-background-dark.component';
import {toggleArrowAnimation} from '@core/animations/toggle-arrow.animation';
import {slideIn} from '@core/animations/slide-in.animations';
import {PipButtonArrowComponent} from '@ui/atoms/pip-button-arrow/pip-button-arrow.component';
import {MatTooltip} from '@angular/material/tooltip';


@Component({
  selector: 'sidebar',
  imports: [
    RouterLink,
    MatIcon,
    RouterLinkActive,
    PipBackgroundDarkComponent,
    MatPrefix,
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    slideIn,
    toggleArrowAnimation
  ]
})
export class SidebarComponent {
  isOpen: InputSignal<boolean> = input.required<boolean>({});
  isPhoneMode: InputSignal<boolean> = input.required<boolean>({});
  subMenuActive: WritableSignal<number> = signal(0);


  menus: WritableSignal<any[]> = signal([
    {
      name: 'Home',
      icon: 'home',
      url: '/home',
      id: 1
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/dashboard',
      id: 2
    },
    {
      name: 'Settings',
      icon: 'settings',
      id: 3,
      subMenus: [
        {
          name: 'Services',
          icon: 'medical_services',
          url: '/settings/services',
          idParent: 3,
          id: 1
        },
        {
          name: 'Company',
          icon: 'apartment',
          url: '/settings/company',
          idParent: 3,
          id: 2
        },
      ]
    },
    {
      name: 'Test',
      icon: 'dashboard',
      url: '/dashboard',
      id: 4
    },
  ]);


  subMenu(menuId: number) {
    if (this.subMenuActive() == menuId) {
      this.subMenuActive.set(0);
      return;
    }

    this.subMenuActive.set(menuId);

  }
}
