export const fetchMenu = () => {
    return 'Jerk Chicken';
}

export const fetchOpeningHours = () => {
    return 'All day err day';
}

const concierge = {};

concierge.fetchMenu = fetchMenu;
concierge.fetchOpeningHours = fetchOpeningHours;

export default concierge;