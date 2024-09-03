//定义一个泛型接口
interface Pair<T, U> {
    first: T;
    second: U;
  }
  
  //使用泛型接口
  let pair: Pair<string, number> = { first: "One", second: 1 }
  let pair2: Pair<boolean, String> = { first: true, second: "true" }
  
  console.log(pair); // { first: 'One', second: 1 }
  console.log(pair2); // { first: true, second: 'true' }