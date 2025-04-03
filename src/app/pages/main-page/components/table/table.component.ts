import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent {
  @Input() dataSource!: any;
  @Input() displayedColumns!: string[];
  @Input() columns!: string[];

  @Output() clickRow = new EventEmitter();
}
