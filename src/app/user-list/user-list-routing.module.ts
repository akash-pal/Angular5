import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserListComponent } from './user-list.component';

const routes: Routes = [
    {
        path: "", component: UserListComponent, children: [
            { path: 'detail/:name', loadChildren: '../user/user.module#UserModule', }
        ]
    },
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})

export class UserListRoutingModule { }