export default function (){


    var data = [
        2,3,2,4,6,1,3,6,7,2,1,7,9,32,23,65,35,88,13,21,33,11,38,44,321,2123,231,12,35,56,12,56,6,7,2,8
    ];


    pass(data);

    function pass(arr){
        let middle = arr[Math.round(arr.length / 2];
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
}