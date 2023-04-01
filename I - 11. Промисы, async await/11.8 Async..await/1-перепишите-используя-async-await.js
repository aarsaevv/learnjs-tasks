async function loadJSON(url) {

  let res = await fetch(url)

  if (response.status === 200) {
      return response.json()
  } else {
      throw new Error(response.status)
  }
}

loadJSON('no-such-user.json').catch(alert)