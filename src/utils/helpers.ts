/**
 * This file contains pure JS functions which serve as helpers to any or some components, UIcomponents, containers, etc
 */

import * as React from "react";
import { HeaderState } from './types';

// Capitalizes first letter of any given word.
export function capitalize(str: string): string { return (`${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`) };

// get API url based on media and query parameter passed.
export function getApiUrl({
	query
  }: HeaderState){
	return `https://itunes.apple.com/search?media=music&term=${query.split(' ').join('+')}`;
}

// get the count of all React children to any React-Node.
export function getReactChildrenCount(children: React.ReactNode): number {
    return React.Children.count(children);
}

/**
 * Test if each of the keys in two objects are all strictly equal
 */
export function shallowEqual(objA: {}, objB: {}): {
	equal: boolean,
	reason?: string,
} {

	function is(x: any, y: any) {
		if (x === y) {
			return x !== 0 || y !== 0 || 1 / x === 1 / y;
		}
		else {
			return x !== x && y !== y;
		}
	}

	if (is(objA, objB)) {
		return {
			equal: true,
		};
	}

	if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
		return {
			equal: false,
			reason: `Not equal`,
		};
	}

	const keysA = Object.keys(objA);
	const keysB = Object.keys(objB);

	if (keysA.length !== keysB.length) {
		return {
			equal: false,
			reason: `Different number of keys`,
		};
	}

	for (const keyA of keysA) {
        // @ts-ignore
		if (!objB.hasOwnProperty(keyA) || !is(objA[keyA], objB[keyA])) {
			return {
				equal: false,
				reason: `Key "${keyA}" not equal`,
			};
		}
	}

	return {
		equal: true,
	};
}

// Check if the Array is of number type.
export function isArrayTypeNumber(array: string[] | number[]) {
	// @ts-ignore
	!array.some(isNaN);
}