import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-collapsible-well",
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content selector="[well-title]"></ng-content>
      </h4>
      <ng-content selector="[well-body]" *ngIf="visiblity"></ng-content>
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
