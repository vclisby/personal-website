import { differenceInYears } from 'date-fns';

/**
 * Finds the amount of years between 2 given dates
 * @param from From date
 * @param to To date
 * @returns The number of full years
 */
export function getYearsBetweenDates(from: Date, to: Date): number {
	const diff = differenceInYears(to, from);

	// The from date should never be AFTER the to date. To avoid showing negative numbers on the UI, return 0.
	if (diff < 0) {
		return 0;
	}

	return diff;
}
