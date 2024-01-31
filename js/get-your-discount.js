const bodyItems = [
    {
        id : '1',
        title : 'shirts',
        text : '20% OFF ALL T-shirts',
        img : 'img/all-t-shirts.png',
        linkPart : 'index.html#mid_season_sale'
    },
    {
        id : '2',
        title : 'jackets',
        text : '30% OFF ALL jackets',
        img : 'img/all-jackets.jpg',
        linkPart : 'index.html#mid_season_sale'
    },
    {
        id : '3',
        title : 'trainers',
        text : '25% off all trainers',
        img : 'img/all-trainers.jpg',
        linkPart : '#newarrivals'
    }
]

function renderBodyItems(bodyItems) {
    let itemsDomString = '';
    for (const item of bodyItems){
        itemsDomString += `
        <div class="get-your-discount__body-${item.title}">
            <div class="get-your-discount__body-${item.title}-title">
                ${item.text}
            </div>
            <div class="get-your-discount__body-${item.title}-image">
                <img src="${item.img}" alt="${item.text}"/>
            </div>
            <div class="get-your-discount__body-${item.title}-link">
                <a href="${item.linkPart}">Shop Collection →</a>
            </div>
        </div>
        `
    }
    document.querySelector('.get-your-discount__body').innerHTML = itemsDomString;
}

renderBodyItems(bodyItems);