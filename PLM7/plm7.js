const sentence = "Jahid is a passionate developer who loves coding and problem-solving. Jahid enjoys working with React, Next.js, and Tailwind CSS. Jahid believes in continuous learning and self-improvement. Jahid also has a keen interest in UI/UX design. Jahid spends his free time exploring new technologies. Jahid’s dedication to excellence sets him apart."

const matches = sentence.match(/jahid/gi)

// console.log(matches);
const ocurances = matches ? matches.length : 0;
// console.log(ocurances);

let position = sentence.search(/jahid/i)
position = position =>0 ? position : "not found data"