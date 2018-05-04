import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CarPartComponent} from "./car-part.component";
import {CarPartService} from "./car-part.service";
import {CarPartFormComponent} from "./car-part-form.component";

@NgModule({
  imports:[CommonModule,FormsModule,ReactiveFormsModule],
  declarations:[
    CarPartComponent,
    CarPartFormComponent],
  exports:[CarPartComponent],
  providers:[CarPartService]
})
export class CarPartModule {

}
