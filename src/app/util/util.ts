
export function calculateBMR(stats){
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

    avgBMR = msjtotal+rhbtotal/2
  }
  else{
    let height: number
    kgweight = stats.weight/2.205
    height = stats.heightfeet*12 +stats.heightinches
    cmheight = height * 2.54

    msjtotal= 10*kgweight + 6.25*cmheight - 5*stats.age - 161

    rhbtotal = 9.247*kgweight + 3.098*cmheight - 4.33*stats.age + 447.593

    avgBMR = msjtotal+rhbtotal/2
  }

  return Math.round(avgBMR*100)/100
}
