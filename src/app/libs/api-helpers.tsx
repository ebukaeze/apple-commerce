export async function FetchPostJSON(url: string, data?: {}) {
  try {
    const response = await fetch(url, {
      method: "POST", // Post, Get, Update, Delete etc
      mode: "cors", //no cors, *cors, same origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data), //body data must match content type
    });

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
}
