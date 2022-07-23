function parseCount (index){
    if(!isNaN(Number.parseInt(index))){
        return Number.parseInt(index) 
    }
    throw new Error("Невалидное значение");
}
function validateCount (ind){
    try {
        return parseCount(ind)
    }
    catch (e) {
        return e
    }
}
class Triangle {
    constructor (a, b, c){
        if (a < b + c && b < a + c && c < a + b){
            this.a = a
            this.b = b
            this.c = c
        }
        else{
            throw new Error("Треугольник с такими сторонами не существует");   
        }
    }
    getPerimeter = function (){
        return this.a+this.b+this.c
    }
    getArea = function (){
        let p = (this.a+this.b+this.c)/2
        return parseFloat(Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)).toFixed(3));

    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    }
    catch (e) {
        return {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует'
        }
    }  
    
}