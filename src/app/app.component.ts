import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  capttionCode :string = '';
  inputCapttion:string = ''
  displayCapttion :any = ''
  array : string [] = []
  valid :boolean = false
  inValid : boolean =false
  empty :boolean = false
  timer: number = 15
  start: any

  ngOnInit(): void {
    this.refresh()
  }

  refresh(){
    clearInterval(this.start)
    this.time()
    this.capttionCode = Math.random().toString(36).substring(2,7)
    this.array = []
    this.array.push(...this.capttionCode)
    this.displayCapttion = this.array.map((char: any) => (Math.random() > 0.5 ? char.toUpperCase() : char)).join('')
    this.inputCapttion = ""
  }

  send(){
    if(this.displayCapttion === this.inputCapttion){
      this.valid = true
      setTimeout(() => {
        this.valid = false
        this.refresh()
      }, 2000);

    }else{

      this.inValid = true
      setTimeout(() => {
        this.inValid = false
        this.refresh()
      }, 2000);

    }
  }

  emptySolution(){
    if(this.inputCapttion.length < 5){
      this.empty = true
      setTimeout(() => {
        this.empty = false
        this.refresh()
      }, 2000);

    }else{
      this.send()
    }
  }

  time(){
    if (this.timer != 0) {
      this.timer = 15
      this.start = setInterval(() => {
        this.timer--
        if (this.timer == 0){
          this.timer = 15
          this.refresh()
        }
      },1000)
    }
  }

  title = 'Captcha-Generator';
}
