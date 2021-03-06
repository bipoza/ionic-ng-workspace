import {Component} from '@angular/core';
import {Lib1Service} from 'lib1';

@Component({
  selector: 'app-home-page',
  template: `
      <h1>Page 1: {{result1}}</h1>
      <lib1-component></lib1-component>

      <shared-pages-menu page="page-1"></shared-pages-menu>
      <shared-copyright></shared-copyright>
  `,
})
export class Page1Component {
  public result1: string;

  constructor(
    lib1Service: Lib1Service,
  ) {
    this.result1 = lib1Service.foo1();
  }
}
