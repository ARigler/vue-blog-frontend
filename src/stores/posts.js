import { defineStore } from 'pinia'

export const postStore = defineStore({
  id: 'posts',
  state: () => ({
    post_list: []
  }),
  actions: {
    fetch_posts(){
      let response_json = [];
      fetch("http://127.0.0.1:3000/posts/all")
        .then(response => response.json())
        .then(data => this.post_list = data);
    }
  },
  getters: {
   get_post(i){
     return this.post_list[i];
   }
}
})
