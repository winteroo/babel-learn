// Promise
const promise = Promise.resolve(1);

// 数组的includes语法
let arr = [1, 2, 3];
let flag = arr.includes(3);
console.log(flag);

// class语法
class Animal {
  constructor (name) {
    this.name = name;
  }
  run () {
    console.log(`${this.name} is running`);
  }
}

// 异步函数
const fun = async () => {
  let ans = await new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    })
  })
  console.log(ans);
}
