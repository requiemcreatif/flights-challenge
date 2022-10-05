const url = "https://flyapi.onrender.com";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getUrl(path) {
  await sleep(1000);
  return await fetch(`${url}/${path}`);
}
