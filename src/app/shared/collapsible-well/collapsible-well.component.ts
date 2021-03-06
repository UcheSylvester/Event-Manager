import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-collapsible-well",
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h3>
        <ng-content select="[well-title]"></ng-content>
      </h3>
      <ng-content select="[well-body]" *ngIf="visiblity"></ng-content>
    </div>
  `,
  styleUrls: ["./collapsible-well.component.css"]
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  visiblity: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggleContent() {
    this.visiblity = !this.visiblity;
  }
}
