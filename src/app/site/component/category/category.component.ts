import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {FieldsetService} from "../../service/fieldset.service";
import {Fieldset} from "../../../global/interface/fieldset";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
  protected fieldset$ = this.fieldsetService.fieldsets;

  constructor(
    protected fieldsetService: FieldsetService,
  ) {

  }

  ngOnInit() {
    // @todo get forum id
    this.fieldsetService.getFieldSets(1);
  }

}
