//定义一个具有泛型约束的接口
interface lengthwise {
    length: number;
}

//泛型函数 要求T必须具有length属性
function loggingIdentity<T extends lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

//使用泛型函数
loggingIdentity('hello TypeScript');
loggingIdentity([1, 2, 3, 4, 5]);
loggingIdentity({ length: 10, value: 100 });