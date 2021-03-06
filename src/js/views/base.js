export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResultList: document.querySelector('.results__list')
}

// classes of elements in string form
export const elementStrings = {
    loader: 'loader'
}

// Insert a loader or spinner and remove it
export const renderLoader = parent => {
    const loader = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
}
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    loader && loader.parentElement.removeChild(loader);
}
//================================================================================