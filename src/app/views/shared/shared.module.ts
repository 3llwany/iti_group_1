import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './Comps/not-found/not-found.component';

const sharedComps = [NotFoundComponent];
@NgModule({
  declarations: [sharedComps],
  imports: [CommonModule],
  exports: [sharedComps],
})
export class SharedModule {}
