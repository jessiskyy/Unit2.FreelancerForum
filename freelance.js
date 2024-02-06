const names = ["Alice", "Bob", "Carol", "Brenda", "John"];
const occupations = ["Writer", "Teacher", "Programmer", "Gardener", "Driver"];
const newParagraph = document.createElement('p');
const freelancersContainer = document.getElementById('freelancers-container');

/*newParagraph.textContent = 'The average starting price is $40';
document.body.append(newParagraph);*/

const freelancers = [
    { name: "Tom Cruise", price: 25, occupation: "gardener" },
    { name: "Channing Tatum", price: 51, occupation: "programmer" },
    { name: "Zac Efron", price: 43, occupation: "teacher" },
    { name: "Dwayne Johnson", price: 81, occupation: "teacher" },
    { name: "Kevin Hart", price: 43, occupation: "teacher" },
    { name: "Ryan Reynolds", price: 76, occupation: "programmer" },
    { name: "Michael Jordan", price: 47, occupation: "teacher" },
    { name: "Brad Pitt", price: 72, occupation: "driver" },
];

document.addEventListener("DOMContentLoaded", function () {
    renderFreelancers();
});

function renderFreelancers() {
    const freelancersContainer = document.getElementById('freelancers-container');
    freelancersContainer.innerHTML = '';

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement('div');
        freelancerElement.classList.add('freelancer');
        freelancerElement.innerHTML = `
            <h3>${freelancer.name}</h3>
            <p>Occupation: ${freelancer.occupation}</p>
            <p>Starting Price: $${freelancer.price}</p>
        `;
        freelancersContainer.appendChild(freelancerElement);
    });
}
    
function generateRandomFreelancer() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100

    const newFreelancer = {
        name: randomName,
        occupation: randomOccupation,
        price: randomStartingPrice,
    };

    freelancers.push(newFreelancer);
    return newFreelancer; 
}

generateRandomFreelancer();
console.log(freelancers);

const addFreelancersIntervalId = setInterval(() => {
    generateRandomFreelancer();
    renderFreelancers();
    calculateAverageStartingPrice();
}, 5000);


  
function calculateAverageStartingPrice() {
    const totalStartingPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = totalStartingPrice / freelancers.length;
    return averagePrice;
}

function updateAveragePrice() {
    const averagePriceParagraph = document.getElementById('average-price');
    averagePriceParagraph.textContent = `The average starting price is $${calculateAverageStartingPrice().toFixed(2)}`;
}

updateAveragePrice();
  
