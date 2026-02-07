// // const stats = [
// //   { label: "Moves Completed", value: "15,000+" },
// //   { label: "Cities Served", value: "12+ major hubs" },
// //   { label: "Avg. Response Time", value: "5 min" },
// //   { label: "Customer Rating", value: "4.9/5" },
// // ];

// // export default function Stats() {
// //   return (
// //     <section className="section py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
// //       {stats.map((s) => (
// //         <div key={s.label} className="card p-4 text-center">
// //           <p className="text-2xl font-bold text-red-500">{s.value}</p>
// //           <p className="text-sm text-red-700">{s.label}</p>
// //         </div>
// //       ))}
// //     </section>
// //   );
// // }




// const stats = [
//   { label: "Moves Completed", value: "15,000+" },
//   { label: "Cities Served", value: "12+ major hubs" },
//   { label: "Avg. Response Time", value: "5 min" },
//   { label: "Customer Rating", value: "4.9/5" },
// ];

// export default function Stats() {
//   return (
//     <section className="section py-12 grid grid-cols-2 md:grid-cols-4 gap-4">
//       {stats.map((s) => (
//         <div
//           key={s.label}
//           className="card p-4 text-center"
//         >
//           <p className="text-2xl font-bold bg-clip-text text-transparent 
//                         bg-gradient-to-r from-orange-400 via-red-400 to-orange-300">
//             {s.value}
//           </p>
//           <p className="text-sm text-red-700">{s.label}</p>
//         </div>
//       ))}
//     </section>
//   );
// }

const stats = [
  { label: "Moves Completed", value: "15,000+" },
  { label: "Cities Served", value: "12+ major hubs" },
  { label: "Avg. Response Time", value: "5 min" },
  { label: "Customer Rating", value: "4.9/5" },
];

export default function Stats() {
  return (
    <section className="relative -mt-12 py-12 px-6 md:px-16 bg-gradient-to-b from-transparent via-orange-50 to-red-50 pt-24">
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-4 text-center">
            <p className="text-2xl font-bold bg-clip-text text-transparent 
                          bg-gradient-to-r from-orange-400 via-red-400 to-orange-300">
              {s.value}
            </p>
            <p className="text-sm text-red-700">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
