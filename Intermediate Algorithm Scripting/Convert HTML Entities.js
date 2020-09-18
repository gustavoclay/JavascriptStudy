const htmlEntities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
};

function convertHTML(str) {
  return str.replace(/([&<>\"'])/g, str => htmlEntities[str]);
}

console.log(convertHTML("Dolce & Gabbana"));
