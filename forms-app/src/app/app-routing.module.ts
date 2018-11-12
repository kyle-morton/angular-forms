import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { ProfileEditorFormBuilderComponent } from './components/profile-editor-form-builder/profile-editor-form-builder.component';

const routes: Routes = [
  { path: '', component: ProfileEditorFormBuilderComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
