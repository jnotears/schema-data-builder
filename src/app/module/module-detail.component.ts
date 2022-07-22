import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  standalone: true,
  selector: 'module-detail',
  template: ``
})
export class ModuleDetailComponent implements OnInit{
  constructor(
    private readonly actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.actRoute.params.subscribe(param => {

    });
  }
}
