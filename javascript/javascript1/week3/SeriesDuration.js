const seriesDurations = [
	{
		title: "Game of thrones",
		days: 3,
		hours: 1,
		minutes: 0,
	},
	{
		title: "Sopranos",
		days: 3,
		hours: 14,
		minutes: 0,
	},
	{
		title: "The Wire",
		days: 0,
		hours: 2,
		minutes: 50,
	},
];
const averageLifeSpan = 80;
const averageLifeMinutes = averageLifeSpan * 365 * 24 * 60;
function lifeSpended() {
	let spendTime = 0;
	seriesDurations.forEach((series) => {
		const durationMinutes =
			series.days * 24 * 60 + series.hours * 60 + series.minutes;
		const lifePercentage = (100 * durationMinutes) / averageLifeMinutes;
		console.log(`${series.title} took ${lifePercentage}% of my life`);
		spendTime += durationMinutes;
	});
	const totalPercentage = (100 * spendTime) / averageLifeMinutes;
	console.log(`In total that is ${totalPercentage}% of my life`);
}
