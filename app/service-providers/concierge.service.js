const concierge = {
    fetchMenu() {
        return 'Jerk Chicken';
    },
    fetchOpeningHours() {
        return 'All day err day';
    },
    handleRequest(message) {
        if (message === 'Menu?') {
            return this.fetchMenu()
        } else if (message === 'Open?') {
            return this.fetchOpeningHours()
        }
    }
};

export default concierge;