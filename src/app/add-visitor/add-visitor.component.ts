import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Visitor } from '../Visitor';
import { VisitorService } from '../visitor.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  constructor(private visitorService: VisitorService, private router: Router) { }

  ngOnInit(): void {
  }

  public addVisitor(addForm: NgForm): void {
    this.visitorService.addVisitor(addForm.value).subscribe(
      (res: Visitor) => {
        console.log(res);
        addForm.reset();
        this.router.navigateByUrl('/visitors');

      }
    )
  }
  public visitorCancel(): void {
    this.router.navigateByUrl('/visitors');
  }

}
