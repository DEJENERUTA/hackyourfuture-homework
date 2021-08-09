const names = [
	"Peter",
	"Ahmad",
	"Yana",
	"kristina",
	"Rasmus",
	"Samuel",
	"katrine",
	"Tala",
];
const nameToRemove = "Ahmad";
const newNames = names.filter((name) => {
	return nameToRemove !== name;
});
console.log(newNames);
