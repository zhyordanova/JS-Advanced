function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            Object.assign(this, {
                destination,
                price,
                status
            });
        }
    }

    const ticketsObjs = [];

    tickets.forEach((entry) => {
        const [dest, price, status] = entry.split('|');
        ticketsObjs.push(new Ticket(dest, Number(price), status));
    })

    if (criteria == 'destination') {
        ticketsObjs.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == 'status') {
        ticketsObjs.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    } else {
        ticketsObjs.sort((a, b) => {
            return a.price - b.price;
        })
    }

    return ticketsObjs;
}


console.log(solve(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(solve(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));