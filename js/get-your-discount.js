const bodyItems = [
    {
        id : '1',
        title : 'shirts',
        text : '20% OFF ALL T-shirts',
        linkPart : 'index.html#mid_season_sale'
    },
    {
        id : '2',
        title : 'jackets',
        text : '30% OFF ALL jackets',
        linkPart : 'index.html#mid_season_sale'
    },
    {
        id : '3',
        title : 'trainers',
        text : '25% off all trainers',
        linkPart : '#newarrivals'
    }
]

function renderBodyItems(bodyItems) {
    let itemsDomString = '';
    for (const item of bodyItems){
        itemsDomString += `
        <div class="get-your-discount__body-${item.title}">
            <div class="get-your-discount__body-${item.title}-back">
                <div class="get-your-discount__body-${item.title}-title">
                    <p>${item.text}</p>
                </div>
                <div class="get-your-discount__body-${item.title}-link">
                    <a href="${item.linkPart}">Shop Collection →</a>
                </div>
            </div>
        </div>
        `
    }
    document.querySelector('.get-your-discount__body').innerHTML = itemsDomString;
}

renderBodyItems(bodyItems);