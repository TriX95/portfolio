import { Component } from '@angular/core';
import {SkillListService} from '../../services/skill-list.service'
@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent{



  constructor(private SkillListService:SkillListService){}
  skills: any[] = []
  ngOnInit(): void {
    this.skills = this.SkillListService.getSkills()
  }
}
