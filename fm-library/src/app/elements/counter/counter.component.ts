import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() name: string = 'name';
  @Input() placeholder: string = '0,00';
  @Input() value: number = 0;
  @Input() step: number = 1;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Input() light: boolean = false;
  faMinus = faMinus
  faPlus = faPlus
  @Output() public counterValue:EventEmitter<any> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  count(element: any, type: string, min: number, max: number, step: number) {
    let newCount, oldCount;

    if (element.value !== '') {
      oldCount = parseInt(element.value);
      if (type === 'up') {
        if(element.value < max) {
          newCount = oldCount + step;
        } else {
          newCount = max
        }
        element.value = newCount;
      } else {
        if(element.value > min) {
          newCount = oldCount - step;
        } else {
          newCount = min
        }
        element.value = newCount;
      }
    } else {
      newCount = min
      element.value = newCount;
    }

    this.counterValue.emit(newCount);
    console.log(element.value)
  }

}
