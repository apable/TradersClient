import { Component, OnInit } from '@angular/core';
import { Grains } from 'src/app/models/grains';
import { GrainsStoreService } from 'src/app/services/grains-store.service';
import { ExportService } from 'src/app/services/export.service';

@Component({
	selector: 'app-grain-list',
	templateUrl: './grain-list.component.html',
	styleUrls: ['./grain-list.component.css']
})
export class GrainListComponent implements OnInit {
	grainsList: Grains[];
	selectedGrain: string;
	grains: Grains[];
	unique: String[];
	constructor(private grainsStoreService: GrainsStoreService, private exportService: ExportService) {
	}

	ngOnInit() {
		this.grainsStoreService.getGrains().subscribe(data => {
			this.grainsList = data;
			this.unique = [...new Set(this.grainsList.map(x => x.grainName))];
		},
			error => {
				alert('Unable to find records.');
			}
		);
	}


	onGrainChange() {

		this.grainsStoreService.getGrainsByName(this.selectedGrain).subscribe(data => {
			this.grains = data;
		},
			error => {
				alert('Unable to find records.');
			}
		);
	}

	export() {
		this.exportService.exportExcel(this.grains, 'grains');
	}

}
