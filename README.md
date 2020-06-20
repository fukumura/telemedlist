# オンライン診療対応の医療機関検索サイト

data以下のjsonを読み込んでます。  
利用しているデータは 
厚労省が公開している「[新型コロナウイルス感染症の感染拡大を踏まえたオンライン診療について](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/rinsyo/index_00014.html)」を元に作られています。

> オンライン診療検索 https://telemedlist.com

$ yarn install  
$ yarn dev  

http://localhost:3000/

## .envに下記をセットしてご利用ください。
* https://www.algolia.com/
  * ALGOLIA_APP_ID
  * ALGOLIA_SEARCH_ONLY_API_KEY
* https://developers.google.com/maps/gmp-get-started
  * GOOGLE_API_KEY
* https://firebase.google.com/products
  * FIREBASE_API_KEY
  * FIREBASE_AUTH_DOMAIN
  * FIREBASE_DATABASE_URL
  * FIREBASE_PROJECT_ID
  * FIREBASE_STORAGE_BUCKET
  * FIREBASE_MESSAGING_SENDER_ID
* https://support.google.com/analytics/answer/1008015
  * GA_TRACKING_ID
