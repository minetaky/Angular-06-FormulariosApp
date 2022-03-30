import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveModule } from './reactive/reactive.module';
import { SharedModule } from './shared/shared.module';
import { TemplateModule } from './template/template.module';

const routes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then( m => ReactiveModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => TemplateModule)
  },
  {
    path: '**',
    redirectTo: 'template'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
