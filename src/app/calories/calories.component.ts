import { secrets } from '../../../secret'
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { calculateBMR, getGains, guyStats } from '../util/util'

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {
  totalCalories: number
  minimalCalories: number
  calorieDeficit: number

  constructor(
    private httpClient: HttpClient
    ) { }
  ngOnInit(): void {
    this.totalCalories = 0
    this.minimalCalories = 0
    this.calorieDeficit = 0
  }
  async getCalories(val){
    let headers: HttpHeaders = new HttpHeaders();
    let valHolder: number = 0

    headers = headers.set("x-app-id", secrets.appId).set("x-remote-user-id", "0").set("x-app-key", secrets.appKey).set("x-remote-user-id", secrets.remoteId)
    await this.httpClient.post<any>('https://trackapi.nutritionix.com/v2/natural/nutrients', {query:`${val.food}`}, {headers: headers}).subscribe(
      data => {
        for(let x of data.foods){
          this.totalCalories += x.nf_calories
          valHolder += x.nf_calories
          console.log(valHolder)
        }
        this.totalCalories = Math.round(this.totalCalories*100)/100
      }
    )
    this.getSummary(valHolder, this.minimalCalories)
  }

  getBMR(val){
    let inputStats = new guyStats(val.weight, val.heightfeet, val.heightinches, val.age, val.sex)
    this.minimalCalories = calculateBMR(inputStats)
    this.getSummary(this.totalCalories, this.minimalCalories)
  }
  getSummary(calIn, calOut){
    this.calorieDeficit = getGains(calIn, calOut)
  }
}

