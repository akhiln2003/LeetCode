/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('');
    let left = 0, right = arr.length - 1;
    let vowels = /[aeiou]/i;

    while (left < right) {
        if (!vowels.test(arr[left])) {
            left += 1;
            continue; 
        }
        if (!vowels.test(arr[right])) {
            right -= 1;
            continue; 
        }
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left += 1;
        right -= 1;
    }
    return arr.join('');
};
