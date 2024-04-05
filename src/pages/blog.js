import * as React from "react"

const SSRPage = ({ serverData }) => {
  return <main>
  <h1>SSR Page with Dogs</h1>
  <p>{serverData.title}</p>
  <p>{serverData.description}</p>
  <p>{serverData.price}</p>
</main>
};

export default SSRPage

export async function getServerData() {
  try {
    const res = await fetch(`https://dummyjson.com/products/1`)
      .then(res => res.json())
      .then(json => json)

    return {
      props: res,
      headers: {
        'Cache-Control': 'max-age=86400',
      }
    }
  } catch (error) {
    return {
      status: 500,
    }
  }
}