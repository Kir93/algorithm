function solution(arr, delete_list) {
    return arr.filter(n => !delete_list.includes(n));
}