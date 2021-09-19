import axios from "axios";
import config from "../config";
import { POST_TYPES } from "../types";

function fetchPost(id) {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts/${id}?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.FETCH_POST,
    payload: request,
  };
}

function fetchPosts() {
  const request = axios.get(
    `${config.REDUXBLOG_API_BASE_URL}/api/posts?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.FETCH_POSTS,
    payload: request,
  };
}

function createPost(post) {
  const request = axios.post(
    `${config.REDUXBLOG_API_BASE_URL}/posts?key=${config.REDUXBLOG_API_KEY}`,
    post
  );

  return {
    type: POST_TYPES.CREATE_POST,
    payload: request,
  };
}

function deletePost(id) {
  const request = axios.delete(
    `${config.REDUXBLOG_API_BASE_URL}/posts/${id}?key=${config.REDUXBLOG_API_KEY}`
  );

  return {
    type: POST_TYPES.DELETE_POST,
    payload: request,
  };
}

export default {
  fetchPosts,
  createPost,
  fetchPost,
  deletePost,
};
