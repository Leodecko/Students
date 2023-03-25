import {Component, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/interfaces/IStudent';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SubjectService } from 'src/app/services/subject/subject.service';
import { StudentScoreService } from 'src/app/services/student-score.service';
import { ISkill } from 'src/app/interfaces/ISkill';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class StudentComponent {
  dataSource = new MatTableDataSource<Student>();
  columnsToDisplay = ['name', 'lastName', 'email'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: null; 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private state: Student[] = [];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.paginator._intl.itemsPerPageLabel= 'Elementos por página';

    this.dataSource.sort = this.sort;
    
    this.getStudents()
  }

  // ngOnInit(){
  //   this.getStudents()
  // }

  constructor(public _studentService : StudentService, 
    private _subjectService : SubjectService,
    private _studentScoreService : StudentScoreService){
    
  }

  getStudents(){
    this._studentService.GetStudents().subscribe(result =>{

      this.dataSource.data = result;

      this.state = result;

    },
    err => console.log(err) );

  }

  getUserSubjectsScore(studentId:number){
    this._subjectService.getStudentSubjects(studentId).subscribe(result => {

      const currentStudent = this.state.find(x => x.id == studentId);

      currentStudent!.subjects = result;

      this.dataSource.data = this.state;

    }, err => console.log(err));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  

  deleteStudent(studentId: number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._studentService.DeleteStudent(studentId).subscribe(() => {
          this.getStudents();
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    });
  }
}