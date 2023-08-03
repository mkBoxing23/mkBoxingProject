import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-path-dinamico',
  templateUrl: './path-dinamico.component.html',
  styleUrls: ['./path-dinamico.component.scss']
})
export class PathDinamicoComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  path =[""];

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log("RICEVO I PAREAMENTI", params);
      this.path = params.path ? params.path.split(',') : [""];
    })
  }
}
