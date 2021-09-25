function parseCount (string) {
  let parsing = Number.parseInt(string);
  if(Number.isNaN(parsing)) {
    throw new Error("Невалидное значение");
  }
return parsing;
}

function validateCount (text) {
  try {
    let parseValidate;
    parseValidate = parseCount(text);
    return parseValidate;
  } catch (err) {
    return (err)
  }
}

class Triangle {
  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ((a + b) < c || (b + c) < a || (c + a) < b) {
      throw new Error("Треугольник с такими сторонами не существует")
    }
  }

  getPerimeter(){
  let sum = (this.a + this.b + this.c);
   return sum;
  }

  getArea(){
   let P = this.getPerimeter() / 2;
   let S = Math.sqrt(P*(P - this.a)*(P - this.b)*(P - this.c));
   return +S.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    const obj = new Triangle(a, b, c);
    return obj;
  } catch (err) {
    const newObj = {
      getPerimeter: () => 'Ошибка! Треугольник не существует',
      getArea: ()=> 'Ошибка! Треугольник не существует'
    }
    return newObj;
  }
}


          //'Ошибка! Треугольник не существует'
          // this.getArea('Ошибка! Треугольник не существует')}

const triangle = getTriangle(2,5,100)
console.log(triangle)
console.log(triangle.getPerimeter());
console.log(triangle.getArea())