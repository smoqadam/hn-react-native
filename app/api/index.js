
export default class Api {
    baseUrl = "https://hn.algolia.com/api/v1/";
    getData(endPoint) {
       return fetch(this.baseUrl+endPoint).then(function(response){
            return response.json();
        }).then(function(json){
            return json;
        });
    }

    getHotList(){
        return this.getData('search_by_date');

        return hotList;
    }
}

