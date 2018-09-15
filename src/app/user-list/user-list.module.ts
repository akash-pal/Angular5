import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {UserListRoutingModule} from './user-list-routing.module';
import {UserListComponent} from './user-list.component';

@NgModule({
    imports:[CommonModule,UserListRoutingModule,FormsModule],
    declarations:[UserListComponent]
})

export class UserListModule {}