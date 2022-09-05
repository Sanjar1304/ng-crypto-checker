import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { NgChartsModule } from 'ng2-charts';


const materialComponent = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  NgChartsModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponent
  ],
  exports: [
    materialComponent
  ],
})
export class MaterialModuleModule { }
