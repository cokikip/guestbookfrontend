import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {

  constructor(private visitorService:VisitorService) { }

  ngOnInit(): void {

  }

}
