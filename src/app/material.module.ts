import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, 
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatCardModule],

  exports: [MatButtonModule, 
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatCardModule]
})

export class MaterialModule {}