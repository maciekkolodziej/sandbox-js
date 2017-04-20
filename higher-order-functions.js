let cl = console.log;
let items = [ 1, 2, 3, 4, 5 ];

let filterRule = (x) => x > 3;
let filteredItems = items.filter(filterRule);
cl("Filtered items:", filteredItems);

let mappedItems = items.map((x) => x * 2);
cl("Mapped items:", mappedItems);

let foundItem = items.find((x) => x < 3);
cl("Found item:", foundItem);

let summedItems = items.reduce((sum, x) => sum + x, 0);
cl("Summed items:", summedItems);
