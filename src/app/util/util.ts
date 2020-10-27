
export function calculateBMR(stats:guyStats){
  let msjtotal: number
  let rhbtotal: number
  let kgweight: number
  let cmheight: number
  let avgBMR: number
  if(stats.sex === "male"){
    let height: number
    kgweight = stats.weight/2.205
    height = stats.heightfeet*12 +stats.heightinches
    cmheight = height * 2.54

    msjtotal = 10*kgweight + 6.25*cmheight - 5*stats.age

    rhbtotal = 13.397*kgweight + 4.799*cmheight - 5.677*stats.age + 88.362

    avgBMR = (msjtotal+rhbtotal)/2
  }
  else{
    let height: number
    kgweight = stats.weight/2.205
    height = stats.heightfeet*12 +stats.heightinches
    cmheight = height * 2.54

    msjtotal= 10*kgweight + 6.25*cmheight - 5*stats.age - 161

    rhbtotal = 9.247*kgweight + 3.098*cmheight - 4.33*stats.age + 447.593

    avgBMR = (msjtotal+rhbtotal)/2
  }

  return Math.round(avgBMR*100)/100
}

export function getGains(caloriesIn, caloriesOut){
  console.log(caloriesIn, caloriesOut)
  if(caloriesIn && caloriesOut){
  return Math.round(((caloriesIn-caloriesOut)/3500)*100)/100
}
else{return 0}
}

export class guyStats{
  weight: number;
  heightfeet: number;
  heightinches: number;
  age: number;
  sex: string;

  constructor(ww: number, hf: number, hi: number, a: number, s: string){
    this.weight = ww;
    this.heightfeet = hf;
    this.heightinches = hi;
    this.age =  a;
    this.sex = s;
  }
}
