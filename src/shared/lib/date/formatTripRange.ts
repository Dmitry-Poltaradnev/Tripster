export const formatTripDate = (val: string) => {
    return new Date(val).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });
}

export const formatTripRange = (startDate: string, endDate: string) => {
    return `${formatTripDate(startDate)} - ${formatTripDate(endDate)}`;
}