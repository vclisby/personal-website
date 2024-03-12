export function isString(x: unknown): x is string {
	return typeof x === 'string';
}

export function isObject(x: unknown): x is object {
	return typeof x === 'object';
}

export function isArrayOfType<T>(
	x: ReadonlyArray<unknown>,
	guardFn: (a: unknown) => boolean
): x is ReadonlyArray<T> {
	return x.every(guardFn);
}

export function isNotNull<T>(val: T | undefined | null): val is T {
	return val !== null && val !== undefined;
}
