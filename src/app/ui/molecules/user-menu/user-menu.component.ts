import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {RouterLink} from '@angular/router';
import {UserButtonComponent} from '@ui/molecules/user-button/user-button.component';

@Component({
  selector: 'user-menu',
  imports: [
    MatDivider,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    RouterLink,
    UserButtonComponent
  ],
  templateUrl: './user-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {

}
