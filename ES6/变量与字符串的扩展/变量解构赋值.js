//var foods = {
//    best: '小龙虾',
//    good: '火锅',
//    normal: '快餐',
//    bad:'方便面'
//}

//获取foods中的best和good
//var best = foods.best
//var bad = foods.bad

//解构赋值
//var {best,bad} = foods
//console.log(best)
//console.log(bad)

//var {best:best1,bad:bad1} = foods
//console.log(best1)
//console.log(bad1)

const address = {
    city: {
        name: '南京',
        area: {
            name: '栖霞区',
            school: {
                name: '南工'
            }
        }
    }
}

let {
    city: { name: cityName,
        area: {
            name: areaName,
            school: {
                name: schoolName
            }
        }
    }
} = address

console.log(cityName)
console.log(areaName)
console.log(schoolName)
