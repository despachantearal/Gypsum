const facts = [
  "Gypsum is a soft sulfate mineral.",
  "It is commonly used in drywall and plaster.",
  "Gypsum has a hardness of 2 on the Mohs scale.",
  "It can form beautiful crystals like selenite.",
  "Gypsum is found in sedimentary rock formations."
];

function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").innerText = facts[random];
}

function testGypsum() {
  alert("🪨 Testing hardness... Gypsum is very soft!");
}
