import { secrets } from '../../../secret'
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { calculateBMR } from '../util/util'

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {
  totalCalories: number
  minimalCalories: number

  constructor(
    private httpClient: HttpClient
    ) { }
  ngOnInit(): void {
    this.totalCalories = 0
    this.minimalCalories = 0
  }
  getCalories(val){
    console.log(val)

    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set("x-app-id", secrets.appId).set("x-remote-user-id", "0").set("x-app-key", secrets.appKey).set("x-remote-user-id", secrets.remoteId)
    this.httpClient.post<any>('https://trackapi.nutritionix.com/v2/natural/nutrients', {query:`${val.food}`}, {headers: headers}).subscribe(
      data => {
        for(let x of data.foods){
          this.totalCalories += x.nf_calories
        }
      }
    )
  }
  getBMR(val){
    this.minimalCalories = calculateBMR(val)
  }
}

