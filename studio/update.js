// const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json"));
// const sanityClient = require("@sanity/client");
// const { default: PQueue } = require("p-queue");
// const queue = new PQueue({
//   concurrency: 1,
//   interval: 1000 / 25,
// });

// const sanity = sanityClient({
//   projectId: "uazrsdp8",
//   dataset: "production",
//   token: "",
//   useCdn: false,
// });

// const query = `*[_type == "country"]`;

// sanity.fetch(query).then(x => {
//   // console.log(players.length);
//   // console.log(data.length);
//   // fs.writeFileSync("players.json", JSON.stringify(players));
//   x.forEach(item => {
//     const fresh = data.find(x => x._id === player._id);
//     if (fresh) {
//       const stats = {
//         goals: fresh.goals,
//         assists: fresh.assists,
//         points: fresh.points,
//       };
//       queue.add(() =>
//         sanity
//           .patch(player._id)
//           .set({
//             goals: stats.goals,
//             assists: stats.assists,
//             points: stats.goals + stats.assists,
//           })
//           .commit()
//           .then(() => console.log("Player updated")),
//       );
//     }
//   });
// });
