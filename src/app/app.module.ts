import { SharedModule } from './views/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './views/shared/services/auth/error-interceptor.service';
import { TokenInterceptorService } from './views/shared/services/auth/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddUsersComponent } from './views/users/addUser/add-users.component';
import { PostsComponent } from './views/posts/posts.component';
import { UsersIndexComponent } from './views/users/users-index/users-index.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    PostsComponent,
    UsersIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,

    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      closeButton: true,
    }),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
