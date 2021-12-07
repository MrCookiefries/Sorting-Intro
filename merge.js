function merge(left, right) {
	let l = 0;
	let r = 0;
	const arr = [];
	while (l < left.length && r < right.length) {
		if (left[l] < right[r]) {
			arr.push(left[l]);
			l++;
		} else {
			arr.push(right[r]);
			r++;
		}
	}
	while (l < left.length) {
		arr.push(left[l]);
		l++;
	}
	while (r < right.length) {
		arr.push(right[r]);
		r++;
	}
	return arr;
}

function mergeSort(arr) {
	if (arr.length <= 1) return arr;
	const middle = Math.floor(arr.length / 2);
	const left = mergeSort(arr.slice(0, middle));
	const right = mergeSort(arr.slice(middle));
	return merge(left, right);
}

module.exports = { merge, mergeSort };
