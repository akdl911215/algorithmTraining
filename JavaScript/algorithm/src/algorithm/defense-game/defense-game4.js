function solution(n, k, enemy) {

   const pivot = {
       left: 0,
       right: enemy.length
   }

   let midPivot = Math.floor((pivot.left + pivot.right) / 2);
   while (pivot.left <= pivot.right) {
       const arr = enemy.slice(0, midPivot).sort((a, b) => b - a);
       let mugeock = k;
       const battle = arr.reduce((accumulator, currentValue) => {
           if (mugeock > 0){
               mugeock--;
               return accumulator;
           }
           return accumulator + currentValue;
       }, 0);

       if (n - battle >= 0 && mugeock >= 0) {
           pivot.left = midPivot + 1;
       } else {
           pivot.right = midPivot - 1;
       }
       midPivot = Math.floor((pivot.left + pivot.right) / 2);
   }
    return pivot.left - 1;
}
// console.log(solution(7,3, [4, 2, 4, 5, 3, 3, 1]))
console.log(solution(2, 4, [3, 3, 3, 3]))