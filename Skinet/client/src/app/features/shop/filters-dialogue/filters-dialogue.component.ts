import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop.service';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters-dialogue',
  standalone: true,
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatButton,
    FormsModule
  ],
  templateUrl: './filters-dialogue.component.html',
  styleUrl: './filters-dialogue.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiltersDialogueComponent {
  public shopService = inject(ShopService);
  private dialogRef = inject(MatDialogRef<FiltersDialogueComponent>);
  data = inject(MAT_DIALOG_DATA);

  selectedBrands : string[] = this.data.selectedBrands;
  selectedTypes : string[] = this.data.selectedTypes;

  applyFilters(){
    console.log(this.selectedTypes);
    this.dialogRef.close({
      selectedBrands : this.selectedBrands,
      selectedTypes : this.selectedTypes
    })
  }
}
