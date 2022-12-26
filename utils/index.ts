export const convertDate = (published: string): string => {
	const months = {
		1: 'January',
		2: 'February',
		3: 'March',
		4: 'April',
		5: 'May',
		6: 'June',
		7: 'July',
		8: 'August',
		9: 'September',
		10: 'October',
		11: 'November',
		12: 'December'
	};
	const date = published.substring(0, 10);
	const [year, month, day] = date.split('-');
	// @ts-ignore
	return `${day}-${months[parseInt(month)]}-${year}`;
};
