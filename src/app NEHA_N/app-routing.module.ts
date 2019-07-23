import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PlayComponent } from './play/play.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LogoutComponent } from './logout/logout.component';
import { SettingComponent } from './setting/setting.component';
import { AddplayComponent } from './addplay/addplay.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { ForgetComponent } from './forget/forget.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"play",component:PlayComponent},
  { path:"gallary",component:GallaryComponent },
  { path:"feedback",component:FeedbackComponent },
  { path:"logout",component:LogoutComponent },
  { path:"setting",component:SettingComponent },
  { path:"addplay",component:AddplayComponent },
  { path:"interviews",component:InterviewsComponent },
  { path:"forget",component:ForgetComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
