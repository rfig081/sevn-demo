import Vuex from "vuex";
import axios from 'axios';
import { create } from "domain";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },

      addPost(state, post) {
        state.loadedPosts.push(post);
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id ===  editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('http://localhost:3000/show-posts')
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({
                ...res.data[key],
                id: key
              });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext,  post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        console.log('Created Data')
        console.log(createdPost)
        return axios.post('http://localhost:3000/post', createdPost)
        .then(res => {
          console.log(res.data)
          vuexContext.commit("addPost", {
            ...createdPost,
            id: res.data.id
          })
        })
        // return axios.post('https://nuxt-demo-a8021.firebaseio.com/posts.json', createdPost)
        // .then(res => {
        //   vuexContext.commit("addPost", {
        //     ...createdPost,
        //     id: res.data.id
        //   });
        // })
        .catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return axios.put('https://nuxt-demo-a8021.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
        .then(res => {
          vuexContext.commit("editPost", editedPost);
        })
        .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
