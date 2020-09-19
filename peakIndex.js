var peakIndexInMountainArray = function(A) {
    let left = 0;
    let right = A.length - 1;
    let boundary_index = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (mid === A.length - 1 || A[mid] >= A[mid + 1]) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundary_index;
};