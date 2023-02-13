import { Injectable } from '@angular/core';
import {faAngular, faHtml5, faCss3, faJs, faNode} from '@fortawesome/free-brands-svg-icons'


@Injectable({
  providedIn: 'root'
})
export class SkillListService {
  angularIcon = faAngular;
  htmlIcon = faHtml5;
  cssIcon = faCss3;
  jsIcon = faJs;
  nodeIcon = faNode;
 
  constructor() { }

  getSkills(): any[]{

    return [
      {
         id: 0, name: "HTML", progress: 85, icon: this.htmlIcon
      },
      {
          id: 1,  name: "CSS", progress: 70, icon: this.cssIcon
      },
      {
          id: 2,  name: "JavaScript", progress: 45, icon: this.jsIcon
      },
      {
          id: 3,  name: "Angular", progress: 51, icon: this.angularIcon
      },
      {
          id: 4, name: "Node", progress: 20, icon: this.nodeIcon
      }
  ]
  }
}
