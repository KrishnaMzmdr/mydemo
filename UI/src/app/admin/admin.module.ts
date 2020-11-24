import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
 
//import { ChartsModule } from 'ng2-charts';

import { ChartModule,AccumulationChartModule  } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService, StackingAreaSeriesService, CategoryService, PieSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
	ChartModule,
	AccumulationChartModule 
	/*ChartsModule*/
  ],
  providers: [ LineSeriesService, CategoryService, PieSeriesService, StackingAreaSeriesService],
  declarations: [
    AdminComponent,
    AdminDashboardComponent, 
  ]
})
export class AdminModule { }
