var faker = require('faker');

var database = { 
  items: [
    {
      "title": "Marshall Acton 2",
      "description": "A great convenient speaker",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/91xWshl4tOL._AC_SX679_.jpg",
      "category_id": 1,
      "shop_url": "https://www.amazon.it/Marshall-04091800-Altoparlante-Amplificato-Nero/dp/B01LY30F3J/ref=asc_df_B01LY30F3J/?tag=googshopit-21&linkCode=df0&hvadid=84184851143&hvpos=1o2&hvnetw=g&hvrand=6159159642510801100&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1008214&hvtargid=pla-273961895979&psc=1",
      "id": 3,
      "date_add": "2012-01-01T06:25:24Z"
    },
    {
      "title": "Boots",
      "description": "Great boots for ski!!!",
      "image_url": "https://www.jacadi.it/medias/sys_master/images/images/h69/h8b/9111647092766/2017952-123FRONT-product.jpg",
      "category_id": 2,
      "shop_url": "https://www.jacadi.it/it/scarpe/scarpe-bambina/stivali/Moonboot/p/2017952_123?productSize=27&LGWCODE=40091522;160785;5537&et_keyword=&et_campaign=1733545891&et_device=c&et_matchtype=&kard=1&gclid=Cj0KCQiAyKrxBRDHARIsAKCzn8w_9LX_-rQsPGMax1qCFvD9Gl3ig2e3fNXr_j6aH7e-S0Clhfyby1saAsLVEALw_wcB",
      "id": 4,
      "date_add": "2010-01-01T06:25:24Z"
    },
    {
      "title": "iPad Pro",
      "description": "The best tablet out there",
      "image_url": "https://images-na.ssl-images-amazon.com/images/I/61g6Z7viX5L._AC_SL1500_.jpg",
      "category_id": 1,
      "shop_url": "https://www.amazon.it/iPad-Pro-11-Wi-Fi-64GB/dp/B07K2WN28W/ref=sr_1_1_sspa?adgrpid=55317661591&gclid=CjwKCAiA66_xBRBhEiwAhrMuLbnVikr0MKPGans9NtSh6Lq34sYebG5hFg3cLlVOxmSFSk0UtDnXQhoCJrgQAvD_BwE&hvadid=255169956459&hvdev=c&hvlocphy=9050575&hvnetw=g&hvpos=1t2&hvqmt=e&hvrand=1584171687900749903&hvtargid=kwd-16876054206&hydadcr=22140_1766023&keywords=ipad+pro&qid=1579956622&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFBTDY5MUlaQ1pHSlImZW5jcnlwdGVkSWQ9QTA2ODA4NDYyNlpJWThaS1kxNURBJmVuY3J5cHRlZEFkSWQ9QTA2MTkwMDIyNUJRN0VRWlhERUtDJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
      "id": 5
    }
  ],
    suggestions: []
  };

for (var i = 1; i<= 100; i++) {
  database.suggestions.push({
    title: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    image_url: "https://source.unsplash.com/800x600/?product",
    category_id: faker.random.number(12),
    shop_url: "http://test.com/"+faker.random.number(1200)
  });
}

console.log(JSON.stringify(database));

