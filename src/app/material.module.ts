import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatListModule
} from '@angular/material';


const importExportArray = [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule
];

@NgModule({
    imports: importExportArray,
    exports: importExportArray
})

export class MaterialModule {
}
