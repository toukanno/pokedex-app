const API_BASE = 'https://pokeapi.co/api/v2';
const POKEMON_PER_PAGE = 20;

let currentOffset = 0;
let allPokemon = [];

const grid = document.getElementById('pokemon-grid');
const loading = document.getElementById('loading');
const loadMoreBtn = document.getElementById('load-more');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const detailModal = document.getElementById('pokemon-detail');
const closeDetailBtn = document.getElementById('close-detail');

// Fetch a page of pokemon
async function fetchPokemonList(offset, limit) {
    const response = await fetch(`${API_BASE}/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data.results;
}

// Fetch detailed pokemon data
async function fetchPokemonDetail(nameOrId) {
    const response = await fetch(`${API_BASE}/pokemon/${nameOrId}`);
    if (!response.ok) {
        throw new Error('Pokemon not found');
    }
    return response.json();
}

// Create a pokemon card element
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';

    const id = pokemon.id;
    const sprite = pokemon.sprites.front_default;
    const name = pokemon.name;
    const types = pokemon.types.map(t => t.type.name);

    card.innerHTML = `
        <img src="${sprite}" alt="${name}" loading="lazy">
        <span class="pokemon-id">#${String(id).padStart(3, '0')}</span>
        <div class="pokemon-name">${name}</div>
        <div class="types">
            ${types.map(type => `<span class="type-badge type-${type}">${type}</span>`).join('')}
        </div>
    `;

    card.addEventListener('click', () => showDetail(pokemon));
    return card;
}

// Show pokemon detail modal
function showDetail(pokemon) {
    const statNames = {
        hp: 'HP',
        attack: 'こうげき',
        defense: 'ぼうぎょ',
        'special-attack': 'とくこう',
        'special-defense': 'とくぼう',
        speed: 'すばやさ',
    };

    document.getElementById('detail-img').src = pokemon.sprites.front_default;
    document.getElementById('detail-name').textContent = pokemon.name;
    document.getElementById('detail-id').textContent = `#${String(pokemon.id).padStart(3, '0')}`;
    document.getElementById('detail-height').textContent = `${(pokemon.height / 10).toFixed(1)} m`;
    document.getElementById('detail-weight').textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;

    const typesHtml = pokemon.types
        .map(t => `<span class="type-badge type-${t.type.name}">${t.type.name}</span>`)
        .join('');
    document.getElementById('detail-types').innerHTML = typesHtml;

    const abilities = pokemon.abilities.map(a => a.ability.name).join(', ');
    document.getElementById('detail-abilities').textContent = abilities;

    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';
    pokemon.stats.forEach(stat => {
        const name = statNames[stat.stat.name] || stat.stat.name;
        const value = stat.base_stat;
        const percentage = Math.min((value / 255) * 100, 100);

        statsContainer.innerHTML += `
            <div class="stat-row">
                <span class="stat-name">${name}</span>
                <div class="stat-bar-bg">
                    <div class="stat-bar" style="width: ${percentage}%"></div>
                </div>
                <span class="stat-value">${value}</span>
            </div>
        `;
    });

    detailModal.classList.remove('hidden');
}

// Load and display pokemon
async function loadPokemon() {
    loading.classList.remove('hidden');
    loadMoreBtn.classList.add('hidden');

    try {
        const list = await fetchPokemonList(currentOffset, POKEMON_PER_PAGE);
        const details = await Promise.all(
            list.map(p => fetchPokemonDetail(p.name))
        );

        details.forEach(pokemon => {
            allPokemon.push(pokemon);
            grid.appendChild(createPokemonCard(pokemon));
        });

        currentOffset += POKEMON_PER_PAGE;
    } catch (error) {
        console.error('Failed to load pokemon:', error);
    } finally {
        loading.classList.add('hidden');
        loadMoreBtn.classList.remove('hidden');
    }
}

// Search pokemon
async function searchPokemon() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;

    loading.classList.remove('hidden');
    grid.innerHTML = '';
    loadMoreBtn.classList.add('hidden');

    try {
        const pokemon = await fetchPokemonDetail(query);
        grid.appendChild(createPokemonCard(pokemon));
    } catch (error) {
        grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:40px;color:#999;">ポケモンが見つかりませんでした</p>';
    } finally {
        loading.classList.add('hidden');
    }
}

// Reset search and show all
function resetSearch() {
    searchInput.value = '';
    grid.innerHTML = '';
    allPokemon.forEach(pokemon => {
        grid.appendChild(createPokemonCard(pokemon));
    });
    loadMoreBtn.classList.remove('hidden');
}

// Event listeners
loadMoreBtn.addEventListener('click', loadPokemon);

searchBtn.addEventListener('click', searchPokemon);

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchPokemon();
    }
});

searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        resetSearch();
    }
});

closeDetailBtn.addEventListener('click', () => {
    detailModal.classList.add('hidden');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.add('hidden');
    }
});

// Initial load
loadPokemon();
