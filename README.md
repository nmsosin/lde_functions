# Задание № 2 в рамках стажировки: объекты и функции

## Лига Цифровой Экономики
## Сосин Николай

**Задание**

1. Сделать функцию, которая будет позволять вызывать себя последовательно для
суммирования и/или при выводе и/или математической операции вернет конечный
результат fucn(2)(3)(5) = 10

2. Преобразовать строку в объект, разделяя свойства по точке.

``` javascript
const str = "one.two.three.four.five";

// RESULT ==>
{
  one: {
    two: {
      three: {
        four: {
          five: {}
        }
      }
    }
  }
}
```