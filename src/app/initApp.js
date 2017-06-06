export default function (){

    var data = [
        2,3,2,4,6,1,3,6,7,2,1,7,9,32,23,65,35,88,13,21,33,11,38,44,321,2123,231,12,35,56,12,56,6,7,2,8
    ];


    //pass(data);

    function pass(arr){
        if(arr.length < 2) {
            return arr;
        }
        let middle = arr[Math.round(arr.length / 2)];
        let arrLeft = [];
        let arrRight = [];
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] < middle) {
                arrLeft.push(arr[i]);
            } else {
                arrRight.push(arr[i]);
            }
        }

        return [...pass(arrLeft), ...pass(arrRight)]
    }




    // Есть функция transform (изменять нельзя), которая обрабатывает один элемент
    // асинхронно и возвращает его значение.
    //    Нужно реализовать функцию asyncMap, которая принимает массив,
    //    функцию трансформации
    // (предположим, что есть другие аналоги transform)
    // и callback, куда функция возвращает массив модифицированных значений.

    /**
     * function transform(element, callback) {
     *  setTimeout(function() {
     *   callback(element + 1)
     *  }, 0);
     * }
      */

    //function transform(element, callback) {
    //  setTimeout(function() {
    //      callback(element + 1)
    //  }, 0);
    //}

    //asyncMap([1,2,3], transform, result => console.log("result: ", result));

    // 1.
    function asyncMap(arr, transform, callback){
        let promises = arr.map(element => {
            return new Promise((resolve, reject) => {
                try {
                    transform(element, transformedElement => resolve(transformedElement));
                } catch (e) {
                    reject(e)
                }
            })
        });

        Promise.all(promises)
            .then(results => {
                callback(results)
            })
            .catch(e => {
                console.error(e);
            });
    }

    // 2.
    function remove(arr) {
        let [array, ...indexes] = arguments;
        return array.filter((item, index) => {
            return indexes.indexOf(index) === -1;
        })
    }


// -----------------------------------------------------------------------------

    //Напишите функцию remove, которая первым аргументом будет принимать массив,
    //    а все последующие аргументы — индексы элементов, которые следует удалить из
    //массива. Индексов может быть несколько. В конце работы функция должна
    //возвращать новый, отредактированный массив. Исходный массив менять запрещено.


    // чтоб попробовать
    //1. asyncMap([1,2,3], transform, result => console.log("result: ", result));
    //2. console.log (remove([1,2,3,4,5], 2,4));

// -----------------------------------------------------------------------------

        //Напишите функцию для сложения чисел, причем количество вызовов такой функции
    //может быть неограничего. Например:

    /**
     * sum(4)(2)(1)(); // => 7
     * sum(1)(2)(3)(4)(5)(); // => 15
     * sum(3)(); // => 3
     * sum(); // => 0
     */

    // Опционально: Проверять, что передали именно число, иначе кидать исключение

}

// 3. немного каряво, наспех
const sumzz = (function (amount = 0){
    return function inside(x){
        if (x) {
            if (typeof x !== "number") {
                throw new TypeError('"x" is not a number');
            }
            amount += x;

            return inside((x) => {})
        } else {
            const result = amount;
            amount = 0;
            return result;
        }
    }
})();


const sumx = (function (){
    return function sum(z, amount = 0) {
        return function(x){
            if(!x) {return amount}
            amount += x;
            return sum(x, amount)
        }
    }
})()();


//var s = sum();
console.log(sumx(2)(4)());
console.log(sumx(2)(4)(3)(1)());