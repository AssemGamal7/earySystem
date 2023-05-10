import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

export interface Exam {
  name: string;
  status: string;
}
interface que {
  id: 4;
  audioFile: null;
  question: string;
  choice1: string;
  choice2: string;
  choice3:string;
  choice4: string;
  answer: string;
}
interface Question {
  question: string;
  choices: string[];
  answer: string;
  exam: Exam;
}
@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css'],
})
export class ExamFormComponent {
  audioUrl!: string;
  exam!: Exam;
  selectedStatus: any = false;
  question: any;
  questionForm!: FormGroup;
  questions: Question[] = [];
  lool: que[] = [];
  selectedFile!: File;
  examid: any;
  add: any = true;
  constructor(
    private api: ApiService,
    private router: ActivatedRoute,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log();

    this.questionForm = this.fb.group({
      // audioFile: ['', Validators.required],
      question: ['', Validators.required],
      choice1: ['', Validators.required],
      choice2: ['', Validators.required],
      choice3: ['', Validators.required],
      choice4: ['', Validators.required],
      answer: ['', Validators.required],
    });
    this.exam = {
      name: '',

      status: '',
    };
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let id = this.router.snapshot.paramMap.get('id');
    if (id != null) {
      this.api.getById(id, 'exams').subscribe(
        (res: any) => {
          console.log(res);
          this.exam = res;
          // this.examid=res.id;
          console.log(this.exam['status']);
          if (this.exam['status'] == 'active') {
            this.selectedStatus = true;
          }
        },
        (err: any) => {
          console.log(err);
        }
      );
      this.api.get(`http://localhost:8080/api/exams/${id}/questions`).subscribe(
        (res: any) => {
         // this.add = false;
          console.log(res);
          this.lool = res;
          console.log(this.lool);
          // this.examid=res.id;
          // console.log(this.exam['status']);
          // if (this.exam['status'] == 'active') {
          //   this.selectedStatus = true;
          // }
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      this.add = true;
    }
  }
  saveExam() {
    console.log('Email: ' + JSON.stringify(this.exam));

    console.log(
      'this.selectedStatus ' + this.selectedStatus + ' this.selectedType  '
    );

    if (this.selectedStatus == true) {
      this.exam['status'] = 'active';
    } else {
      this.exam['status'] = 'inactive';
    }

    console.log(JSON.stringify(this.exam) + ' hwaa daa');

    this.api.post(this.exam, '/exams').subscribe(
      (res) => {
        console.log(res);
        this.examid = res.id;
        this.question = true;
        // this.route.navigate(['/exams']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onSubmit() {
    const newQuestion = this.questionForm.value;

    // newQuestion["examid"]=this.examid;
    newQuestion['audioFile'] = this.selectedFile;
    console.log('newQuestion ' + JSON.stringify(newQuestion));
    console.log('type ' + typeof newQuestion);
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('question', newQuestion);
    console.log(this.selectedFile);

    this.questions.push(newQuestion);
    this.questionForm.reset();

    this.api.post(formData, `/exams/${this.examid}/questions/upload`).subscribe(
      (result) => console.log(result),
      (error) => console.error(error)
    );
  }
  addQuestions() {}
  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onFileSelectedd(event: any) {
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    this.api
      .post(formData, '/exams/upload')
      .subscribe((response: { id: number }) => {
        this.audioUrl = `${response}`;
        console.log(this.audioUrl);

        this.playAudio();
      });
  }
  onFileSelectt(event: any) {
    const file: File = event.target.files[0];
    //this.uploadFile(file);
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);
    this.api.post('/assets/audio', formData).subscribe(
      (response) => console.log(response),
      (error) => console.error(error)
    );
  }
  getAudioUrl() {
    this.api
      .get(`http://localhost:8080/api/exams/file/${this.audioUrl}`)
      .subscribe((url) => {
        console.log('url ' + url);

        this.audioUrl = url;
        const audio = new Audio();
        audio.play();
      });
  }

  playAudio() {
    const audio = new Audio(this.audioUrl);
    audio.play();
  }

  editQuestion(question: any) {
    // Perform edit functionality here
    console.log('Editing question:', question);
  }

  deleteQuestion(question: any) {
    // Perform delete functionality here
    console.log('Deleting question:', question);
  }
}
