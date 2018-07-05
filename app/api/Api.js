
export default class Api {
    baseUrl = "https://hn.algolia.com/api/v1/";
    getData(endPoint) {
        return fetch(this.baseUrl+endPoint)
            .then(response => {
                if (response.ok){
                    return response.json()
                }

                return Promise.reject(Error(JSON.stringify(response)))
            })
            .then(function(json){
                return json
            })
            .catch(e => {
                return Promise.reject(Error(e.message));
            });
    }

    getHotList(page ){
        return this.getData('search?tags=front_page&page='+page);

        return hotList;
    }

    getComments(story_id){
        return this.getData('items/'+story_id);
    }
}

