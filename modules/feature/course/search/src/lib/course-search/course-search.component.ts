import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CourseSearchService } from '@treinamento-ergon/course-data-access';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import { Course } from 'modules/data-access/course/src/lib/models/course.model';

@Component({
  selector: 'treinamento-ergon-course-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss'],
})
export class CourseSearchComponent implements OnInit {
  public control = new FormControl('', { nonNullable: true });
  public courses$!: Observable<Course[]>;

  constructor(private courseSearchService: CourseSearchService) {}

  ngOnInit(): void {
    this.courses$ = this.control.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      filter((v) => v.length > 2),
      switchMap((value) => this.courseSearchService.searchByTitle(value))
    );
  }
}
