
document.addEventListener('DOMContentLoaded', function() {

    function fetchCatFact() {
        return fetch('https://catfact.ninja/fact')
            .then(response => response.json())
            .then(data => {
                const catFactElement = document.getElementById('catFact');
                catFactElement.textContent = data.fact;
            })
            .catch(error => {
                console.error('Error fetching cat fact:', error);
            });
    }

    fetchCatFact();

    document.getElementById('fetchCatFactBtn').addEventListener('click', fetchCatFact);
});

