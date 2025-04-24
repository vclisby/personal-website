import { expect, test, describe } from 'vitest';
import { getYearsBetweenDates } from '$lib/utilities/dateTime';

describe('getYearsBetweenDates', () => {
	test('From date same as to date', () => {
		const from = new Date(2018, 0, 22);
		const to = new Date(2018, 0, 22);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(0);
	});
	test('From date before to date with different day and month', () => {
		const from = new Date(2018, 0, 22);
		const to = new Date(2024, 3, 24);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(6);
	});
	test('From date before to date with same day and month', () => {
		const from = new Date(2018, 0, 22);
		const to = new Date(2024, 0, 22);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(6);
	});
	test('From date after to date with same day and month', () => {
		const from = new Date(2019, 0, 22);
		const to = new Date(2018, 0, 22);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(0);
	});
	test('From date before to date with same month and one day before to date', () => {
		const from = new Date(2018, 0, 21);
		const to = new Date(2024, 0, 22);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(6);
	});
	test('From date before to date with same month and one day after to date', () => {
		const from = new Date(2018, 0, 23);
		const to = new Date(2024, 0, 22);
		const years = getYearsBetweenDates(from, to);

		expect(years).toEqual(5);
	});
});
