document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        {name: "Liniker",image: "img/liniker.png"},
        {name: "Lady Gaga",image: "img/lady.png"},
        {name: "Nabru",image: "img/nabruPfp.png"},
        {name: "SonoTws",image: "img/sono.png"},
        {name: "Pumapjl",image: "img/puma.png"},
        {name: "System of a Down",image: "img/SystemofaDown.png"},
        {name: "2ZDinizz",image: "img/2zdinizz.png"},
];

    const albumsData = [
        {name: "Patrono",image: "img/patrono.png"},
        {name: "Caju",image: "img/Caju.png"},
        {name: "Marquises e Jardins",image: "img/nabru.png"},
        {name: "Sono TWS",image: "img/otafita.png"},
        {name: "Pumapjl",image: "img/pumapjl.png"},
        {name: "Toxicity",image: "img/system.png"},
        {name: "The Fame",image: "img/ladygaga.png"}
    ];

    const artistGrid = document.querySelector('.artistGrid')
    const albumsGrid = document.querySelector('.albumsGrid')

    artistData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artistCard')

        artistCard.innerHTML = `
            <img src=${artist.image} alt="${artist.name}">
            <h3>${artist.name}</h3>
            <p>Artist</p>
        `       

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach(album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('albumCard')

        albumCard.innerHTML = `
            <img src=${album.image} alt="${album.name}">
            <h3>${album.name}</h3>
            <p>Album</p>
        `       

        albumsGrid.appendChild(albumCard)
    })

})


