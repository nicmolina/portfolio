const API_URL = 'http://rockyblogposts.com.br/graphql/';
const API_CRYPTO_URL = 'https://backendverinha.herokuapp.com/cryptos'
import axios from 'axios';

async function fetchCryptoAPI() {

  const options ={
    headers: {
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin' : '*'
    }
  };

  const res = await axios.get(API_CRYPTO_URL, options)
    .then(res => {
      return res;
  })
  console.log(res);
  const json = res.data;
  console.log(json);
  return json;
}

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables })
  });

  const json = await res.json();
  if (json.errors) {
    console.log(json.errors);
    console.log('error details', query, variables);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getCrypto() {
    const data = await fetchCryptoAPI()
      
  
    return data;
}

export async function getAllPosts(preview) {
    const data = await fetchAPI(
      `
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC}}) {
          edges {
            node {
              id
              date
              title
              slug
              extraPostInfo {
                authorExcerpt
                thumbImage {
                  mediaItemUrl
                }
              }
              content(format: RENDERED)
            }
          }
        }
      }
      `
    );
  
    return data?.posts;
  }

  export async function getAllPostsWithSlug() {
    const data = await fetchAPI(
      `
      {
        posts(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `);
    return data?.posts;
  }

  export async function getPost(slug) {
    const data = await fetchAPI(
      `
      fragment PostFields on Post {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          ...PostFields
          content
        }
      }
    `,
      {
        variables: {
          id: slug,
          idType: 'SLUG'
        }
      }
    );
  
    return data;
  }

  export async function getHomePage() {
    const data = await fetchAPI(
    `
      query HomePage {
        pages(where: {search: "home"}) {
          edges {
            node {
              id
              date
              title
              slug
              homeInfo {
                carouselImage {
                  mediaItemUrl
                }
                carouselText
                fieldGroupName
              }
            }
          }
        }
      }
    `
    );
  

    console.log(data);
    return data;
  }

  export async function getConectors(){

    const data = await fetchAPI(
      `
        query Conectores {
          posts(where: {categoryName: "Conectores"}) {
            nodes {
              extraPostInfo {
                authorExcerpt
                fieldGroupName
                previewImage {
                  mediaItemUrl
                }
              }
              title
              id
            }
          }
        }
        `
      );

    console.log(data);
    return data;
  }


  /**
 * 
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization' : 'Bearer BQDR0XtLL2ug5PngVy4QVU0A6V90AiWO57yaoV-e16v8O7grUP14v6R-Uf3O8fb8ZEjLZdmG-naEQsfRrZTNfaRUMwuVieEiYXok4kuQBxaQeSvUuhyPwe0q6S2sNF63MkT5-kV5VhRpjdiL'
    }
  }
  
  fetch(`https://cors-rocky.herokuapp.com/https://api.spotify.com/v1/users/12144832406`, options)
  .then(function(response){
    return response.text();
  }).then(function (text){
    console.log(text);
  }).catch(function (error){
    console.error(error);
  })
 */