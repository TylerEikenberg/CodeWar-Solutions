// 1.
// const friend = (friends) => {
//     // store real friends somewhere
//     // iterate over incoming friends array
//     //  if friend.length is 4
//     //      push into realFriends array

//     const realFriends = []
//     for (let index = 0; index < friends.length; index++) {
//         const friend = friends[index];

//         if(friend.length === 4){realFriends.push(friend)}
//     }
//     return realFriends;
// }

// 2.
// const friend = friends => {
//   // store real friends somewhere
//   // iterate over incoming friends array
//   //  if friend.length is 4
//   //      push into realFriends array

//   const realFriends = [];

//   friends.forEach(friend => {
//     if (friend.length === 4) {
//       realFriends.push(friend);
//     }
//   });
//   return realFriends;
// };

// 3.
// returning an array with friends length of 4 removed
const friend = friends => {
  //                          choosing to filter any friend whos length is 4
  return friends.filter(friend => friend.length === 4);
};
