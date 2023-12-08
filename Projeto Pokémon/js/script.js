document.addEventListener('DOMContentLoaded', () => {
    const pokemonList = document.getElementById('pokemon-list');
    const pokemonDetailsModal = document.getElementById('pokemon-details');
    const detailImageContainer = document.getElementById('detail-image-container');
    const detailTextContainer = document.getElementById('detail-text-container');
    const teamListContainer = document.getElementById('team-list-container');
    
    let teamPokemonList = [];

    async function openModal(pokemonDetails) {
            console.log(pokemonDetails);
        try {

            const detailsHTML = `
                <h2>${pokemonDetails.name}</h2>
                <p>Número: #${pokemonDetails.number}</p>
                <p>Tipo: ${pokemonDetails.types?.join(', ')}</p>
                <p>Habilidades: ${formatAbilities(pokemonDetails.abilities)}</p>
                <p>Via console</p>
            `;

            const addToTeamButton = document.createElement('button');
            addToTeamButton.textContent = 'Capturar Pokémon';
            addToTeamButton.addEventListener('click', () => addToTeam(pokemonDetails));

            const spaceElement = document.createElement('span');
            spaceElement.innerHTML = '&nbsp;';

            const backButton = document.createElement('button');
            backButton.textContent = 'Voltar';
            backButton.addEventListener('click', goBackToHome);

            detailTextContainer.innerHTML = '';
            detailTextContainer.innerHTML = detailsHTML;
            detailTextContainer.appendChild(addToTeamButton);
            detailTextContainer.appendChild(spaceElement);
            detailTextContainer.appendChild(backButton);

            detailImageContainer.innerHTML = `<img src="${pokemonDetails.image}" alt="${pokemonDetails.name}">`;

            displayTeamList();

            pokemonDetailsModal.style.display = 'block';
        } catch (error) {
            console.error('Erro ao abrir os detalhes do pokémon', error);
        }
    }
    function addToTeam(pokemonDetails) {
        if (teamPokemonList.length < 6 && !isPokemonInTeam(pokemonDetails)) {
            teamPokemonList.push({
                name: pokemonDetails.name,
                icon: pokemonDetails.image,
            });

            displayTeamList();
        } else {
            alert('Só é possível capturar no máximo 6 pokémons e não pode ser duplicado!');
        }
    }

    function isPokemonInTeam(pokemonDetails) {
        return teamPokemonList.some(pokemon => pokemon.name === pokemonDetails.name);
    }

    function displayTeamList() {
        teamListContainer.innerHTML = '<h3>No time</h3>';

        if (teamPokemonList.length > 0) {
            teamPokemonList.forEach(pokemon => {
                const teamPokemon = document.createElement('div');
                teamPokemon.className = 'pokémons capturados';

                const icon = document.createElement('img');
                icon.src = pokemon.icon;
                icon.alt = pokemon.name;

                const name = document.createElement('p');
                name.textContent = pokemon.name;

                teamPokemon.appendChild(icon);
                teamPokemon.appendChild(name);

                teamListContainer.appendChild(teamPokemon);
            });
        } else {
            const noTeamMessage = document.createElement('p');
            noTeamMessage.textContent = 'Nenhum pokémon capturado ainda.';
            teamListContainer.appendChild(noTeamMessage);
        }
    }

    function formatAbilities(abilities) {
        return abilities?.length ? `<ul><li>${abilities.join('</li><li>')}</li></ul>` : 'none';
    }

    function closeModal() {
        pokemonDetailsModal.style.display = 'none';
    }

    function goBackToHome() {
        closeModal();
        pokemonList.style.display = 'flex';
    }

    async function fetchPokemonData() {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
            const data = await response.json();
            const pokemonArray = data.results;

            const pokemonDetailsArray = await Promise.all(pokemonArray.map(pokemon => fetchPokemonDetails(pokemon.url)));

            pokemonDetailsArray.sort((a, b) => a.number - b.number);

            pokemonDetailsArray.forEach(pokemonDetails => {
                createPokemonCard(pokemonDetails);
            });
        } catch (error) {
            console.error('Erro ao procurar os dados do pokémon', error);
        }
    }

    async function fetchPokemonDetails(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            const abilitiesPromises = data.abilities.map(async ability => {
                const abilityResponse = await fetch(ability.ability.url);
                const abilityData = await abilityResponse.json();
                return abilityData.names.find(name => name.language.name === 'en').name;
            });

            const typesPromises = data.types.map(async type => {
                const typeResponse = await fetch(type.type.url);
                const typeData = await typeResponse.json();
                return typeData.names.find(name => name.language.name === 'en').name;
            });

            const abilities = await Promise.all(abilitiesPromises);
            const types = await Promise.all(typesPromises);

            return {
                name: data.name,
                number: data.id,
                image: data.sprites.front_default,
                types,
                abilities,
            };
        } catch (error) {
            console.error('Erro ao procurar os detalhes do pokémon', error);
            return null;
        }
    }
    function createPokemonCard({ name, number, image }) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';

        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = name;

        const nameElement = document.createElement('h3');
        nameElement.textContent = name;

        const numberElement = document.createElement('p');
        numberElement.textContent = `#${number}`;

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Detalhes';
        detailsButton.addEventListener('click', () => openModal({ name, number, image }));

        cardContainer.appendChild(imgElement);
        cardContainer.appendChild(nameElement);
        cardContainer.appendChild(numberElement);
        cardContainer.appendChild(detailsButton);

        pokemonList.appendChild(cardContainer);

    }
    fetchPokemonData();
});
