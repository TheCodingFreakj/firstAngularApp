import { Component, OnInit } from '@angular/core';
import { catchError, from, map, of, tap, throwError } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
}
