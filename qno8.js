function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < intervals.length; i++) {
        const currentStart = intervals[i][0];
        const previousEnd = intervals[i - 1][1];

        if (currentStart <= previousEnd) {
            return false;
        }
    }

    return true;
}

const intervals = [[0, 30], [5, 10], [15, 20]];
const canAttendAllMeetings = canAttendMeetings(intervals);
console.log(canAttendAllMeetings);
