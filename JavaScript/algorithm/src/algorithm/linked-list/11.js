const friends = ["muzi", "ryan", "frodo", "neo"];

for (let [friend1, friend2] of friends
  .flatMap((f) =>
    friends.map((f2) => {
      console.log("f :", f, "/ f2 : ", f2);

      return [(f, f2)];
    })
  )
  .filter(([f1, f2]) => f1 !== f2)) {
  console.log("friend1 : ", friend1);
  console.log("friend2 : ", friend2);
  //
  // Gift indices are equal, do nothing
}
