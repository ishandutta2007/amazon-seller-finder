var amzSel = require('amazon-seller');

// Options:
// sellerId:    Seller ID
// marketplace: Marketplace code

amzSel.sellerInfo({sellerId: 'AWOYFB5PBTDSJ', marketplace: 'IN'}, function(err, data) {
  if(!err) {
    console.log(JSON.stringify(data, null, 2));
  } else {
    console.log(JSON.stringify(err, null, 2));
  }
});
