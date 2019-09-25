import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "duration"
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    switch (value) {
      case 1:
        return "Half hour";
      case 2:
        return "One hour";
      case 1:
        return "Half day";
      case 1:
        return "full day";
      default:
        return value.toString();
    }
  }
}
