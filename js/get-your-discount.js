const bodyItems = [
    {
        id : '1',
        title : 'shirts',
        img : 'img/all-t-shirts.png',
        text : '20% OFF ALL T-shirts',
        linkPart : '#newarrivals'
    },
    {
        id : '2',
        title : 'jackets',
        img : 'img/all-jackets.jpg',
        text : '30% OFF ALL jackets',
        linkPart : '#newarrivals'
    },
    {
        id : '3',
        title : 'trainers',
        img : 'img/all-trainers.jpg',
        text : '25% off all trainers',
        linkPart : '#newarrivals'
    }
]

function renderBodyItems(bodyItems) {
    let itemsDomString = '';
    for (const item of bodyItems){
        itemsDomString += `
        <div class = "get-your-discount__body-${item.title}">
            <div class="get-your-discount__body-${item.title}-text">
                <div class="get-your-discount__body-${item.title}-title">
                    <p>${item.text}</p>
                </div>
                <div class="get-your-discount__body-${item.title}-link">
                    <a href="${item.linkPart}">Shop Collection →</a>
                </div>
            </div>
            <div class="get-your-discount__body-${item.title}-image">
                <img src="${item.img}" alt="${item.text}"/>
            </div>
        </div>
        `
    }
    document.querySelector('.get-your-discount__body').innerHTML = itemsDomString;
}

renderBodyItems(bodyItems);