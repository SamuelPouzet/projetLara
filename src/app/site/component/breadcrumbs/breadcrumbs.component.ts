import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {Breadcrumbs} from "../../../global/interface/breadcrumbs";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs$?: Observable<Breadcrumbs[]>;

}
