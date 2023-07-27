import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngOnInit(): void {
    console.log('ngOnInIt called');
  }
  constructor() {
    console.log('constructor called');
  }
  ngOnDestroy(): void {
    console.log('on destroy called');
  }
  ngAfterViewInit(): void {
    console.log('after view init called');
  }
  ngAfterViewChecked(): void {
    console.log('after view checked called');
  }
  ngAfterContentChecked(): void {
    console.log('after content checked');
  }
  ngAfterContentInit(): void {
    console.log('after content init called');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called');
    console.log(changes);
  }
  @Input('srcElement') element: { type: string; name: string; content: string };
  @Input() name: string;
}
