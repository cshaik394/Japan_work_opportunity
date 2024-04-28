// Sample job listings data (can be fetched from an API)
const jobListings = [
    { title: "Software Engineer", location: "Kanto", salary: "$80,000" },
    { title: "PHP Devloper", location: "Osaka", salary: "$55,000" },
    { title: "Marketing Specialist", location: "Hokkaido", salary: "$54,000" },
      { title: "Cloud Specialist", location: "df", salary: "$70,000" },    { title: "Tester", location: "Kyūshū Fukuoka", salary: "$80,000" },
      { title: "Graphic Designer", location: "Kyushu-Okinawa", salary: "$60,000" },
      { title: "Front-End Develoer", location: "Shikoku", salary: "$55,000" },
        { title: "Content Writing", location: "Tohoku", salary: "$35,000" },    { title: "Frontend Developer", location: "Kyūshū Fukuoka", salary: "$50,000" },
        { title: "Information Technology", location: "Chugoku", salary: "$70,000" },
        { title: "Telecommunications", location: "Shikoku", salary: "$90,000" },
        { title: "Aero Sace", location: "Tokyo", salary: "$25,000" },
        { title: "Buisness Development Manager", location: "Kyushu-Okinawa", salary: "$70,000" },
        { title: "Tourism", location: "Tokyo", salary: "$20,000" },
        { title: "banking", location: "Hokkaido", salary: "$100,000" },
        { title: "Java Full-Stack Developer", location: "Kanto", salary: "$55,000" },
       
];

// Function to generate job listings HTML dynamically
function generateJobListings(listings) {
    const jobListingsContainer = document.querySelector('.job-listings');
    jobListingsContainer.innerHTML = '';
    listings.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            
            <div class="job-card-content">
                <h3>${job.title}</h3>
                <p>Location: ${job.location}</p>
                <p>Salary: ${job.salary}</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
        `;
        jobListingsContainer.appendChild(jobCard);
    });
}

// Function to filter job listings based on search input
function filterJobListings(searchTerm) {
    const filteredListings = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    generateJobListings(filteredListings);
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', function() {
    filterJobListings(this.value.trim());
});

// Example of micro-interaction: Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
