const endpointInput = document.getElementById('endpointInput');
const submitBtn = document.getElementById('submitBtn');
const resultContainer = document.getElementById('resultContainer');
const spinner = document.getElementById('spinner');

submitBtn.addEventListener('click', () => {
    const endpoint = endpointInput.value.trim();

    if (endpoint) {
        showSpinner();
        fetchData(endpoint);
    }
});

async function fetchData (endpoint) {
    try {
        const response = await fetch(`https://swapi.dev/api/${endpoint}`);
        const data = await response.json();

        const controller = endpoint.split('/')[0];
        const id = endpoint.split('/')[1];

        const resultHTML = `
            <pre>
                Controller: ${controller}
                ID: ${id}
                ${JSON.stringify(data, null, 2)}
            </pre>
        `;

        resultContainer.innerHTML = resultHTML;
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        hideSpinner();
    }
}



function showSpinner() {
    spinner.classList.remove('d-none');
}

function hideSpinner() {
    spinner.classList.add('d-none');
}
