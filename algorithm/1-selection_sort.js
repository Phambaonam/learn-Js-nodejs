/**
 * Created by phambaonam on 07/03/2017.
 */

// TODO: Cho 1 array gồm các số ngẫu nhiên, hãy săp xếp array đó theo thứ tự tăng dần, giảm dần

let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
let temp = [];

sort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        for (let j = i + 1; array.length; j++) {
            if (array[j] < min) {
                min = array[j];
            }
        }
        console.log(min);
    }
};

sort(array);