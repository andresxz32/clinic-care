import {ChangeDetectionStrategy, Component, output, OutputEmitterRef} from '@angular/core';
import {PipIconButtonComponent} from '@ui/atoms/pip-icon-button/pip-icon-button.component';
import {LogoComponent} from '@ui/molecules/logo/logo.component';
import {UserMenuComponent} from '@ui/molecules/user-menu/user-menu.component';

@Component({
  selector: 'navbar',
  imports: [
    PipIconButtonComponent,
    LogoComponent,
    UserMenuComponent
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  onClickMenu: OutputEmitterRef<void>= output();
}
