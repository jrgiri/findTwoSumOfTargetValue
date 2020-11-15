let twoSum = (arr, target) => {
    // arr = [...new Set(arr)]; //*In case you have duplicate values in array.
    let temp_arr = []
    for (let i = 0; i < arr.length; i++) {
        var first = arr[i]
        for (let j = i+1; j < arr.length; j++) {
            var second = arr[j]
            if (first+second == target) {
                temp_arr.push([first, second])
            }
        }
    }
    return temp_arr
}
console.log(twoSum([1,2,2,3,4,5],6));