// Сделать функцию, которая будет позволять вызывать себя последовательно для
// суммирования и/или при выводе и/или математической операции вернет конечный
// результат fucn(2)(3)(5) = 10

// >> Реализация для неограниченных вызовов с корректным логированием
const infiniteSum = (a = 0) => {
  let result = a;
  
  const next = (b = 0) => {
    result += b;
    return next;
  };

  next.toString = () => result;
  next.valueOf = () => result;

  return next;
};


console.log(infiniteSum(1)(1)(2)(3)(5)(8)); // => 20
console.log(infiniteSum(1)(1)(1)(7) + infiniteSum(1)(2)(3)); // => 16


// Преобразовать строку в объект, разделяя свойства по точке.

// >> Реализация через метод reduce для массива значений, полученного из исходной строки
function convertStringToObject (text) {
  const splitted = text.split('.');
  let resultObj = splitted.reverse().reduce((prev, current) => {
    let result = {};
    return result[current] = prev, result
  }, {})
  
  return resultObj;
}

const str = "one.two.three.four.five";

// console.log(convertStringToObject(str));