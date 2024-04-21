let money = 10;
let generators = [];

for (let i = 0; i < 10; i++) {
  let generator = {
    cost: Math.pow(Math.pow(10, i), i),
    bought: 0,
    amount: 0,
    mult: 1,
  };
  generators.push(generator);
}
