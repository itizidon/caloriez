import { secrets } from '../../../secret'
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


interface nutrition{

}

class Food {
  constructor(
    public food_name: string,
    public brand_name: string,
    public serving_unit: string,
    public serving_weight_grams: number,
    public nf_calories: number,
    public nf_total_fat: number,
    public nf_saturated_fat: number,
    public nf_cholesterol: number,
    public nf_sodium: number,
    public nf_total_carbohydrate: number,
    public nf_dietary_fiber: number,
    public nf_sugars: number,
    public nf_protein: number,
    public nf_potassium: number,
    public nf_p: number,
    public full_nutrients: []
  )
  {}
}

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.css']
})
export class CaloriesComponent implements OnInit {

  constructor(
    private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCalories()
  }
  getCalories(){
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set("x-app-id", secrets.appId).set("x-remote-user-id", "0").set("x-app-key", secrets.appKey).set("x-remote-user-id", secrets.remoteId)
    this.httpClient.post<any>('https://trackapi.nutritionix.com/v2/natural/nutrients', {query:"2 eggs"}, {headers: headers}).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
