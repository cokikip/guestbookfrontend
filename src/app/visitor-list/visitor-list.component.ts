import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorService } from '../visitor.service';
import { Visitor } from './../Visitor';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css'],
})
export class VisitorListComponent implements OnInit {
  visitors!: Visitor[];
  visitor!: Visitor;

  constructor(private visitorService: VisitorService) { }

  ngOnInit(): void {
    this.getVisitors();
  }
  getVisitors(): void {
    this.visitorService.getVisitor().subscribe(
      (res: Visitor[]) => {
        this.visitors = res;
        console.log(this.visitors);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  checkOut(visitor: Visitor): void {
    this.visitorService.updateVisitor(visitor)
      .subscribe(arg => {
        this.visitor = arg
        this.getVisitors();
      });

  }
  public searchEmployees(key: string): void {
    const result: Visitor[] = []
    for (const vis of this.visitors) {
      if (
        (vis.firstName.toLowerCase() + " " + vis.lastName.toLowerCase()).indexOf(key.toLowerCase()) !== -1 ||
        vis.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        vis.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        vis.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        vis.reasonToVisit.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        vis.personToVisit.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        result.push(vis);
      }
    }
    this.visitors = result;
    if (result.length === 0 || !key) {
      this.getVisitors();
    }
  }
}
