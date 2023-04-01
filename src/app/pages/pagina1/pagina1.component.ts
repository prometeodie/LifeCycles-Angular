import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements
  OnInit, OnChanges, DoCheck,  AfterContentInit , AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
{
  nombre: string = 'Franco';
  segundos: number = 0;
  timerSubcription!: Subscription;



  constructor() { console.log('Constructor') }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubcription.unsubscribe();
  }

  ngOnInit(): void {
  console.log('OnInit')

  this.timerSubcription = interval(1000).subscribe(resp => { this.segundos = resp});
  }


  guardar(){}
}
