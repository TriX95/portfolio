import { Component} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  constructor( ){
  }
   fdsa: number;
   desc = 2
  progress = 50;
  strokeArray = 31.5
  strokeOffset = 0
  stroke = (this.progress < 25 ? "#81B214": this.progress >25 && this.progress<50 ? "#FFCC29": this.progress > 50 && this.progress<75? "#F58634" : "3F58634")
  ngOnInit(){
   if(this.progress > 100)
   {
     this.progress = 100
   }
   this.strokeOffset = this.strokeArray - (this.strokeArray * this.progress) /100;
   return this.strokeOffset
 }

}
