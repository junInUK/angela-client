//const baseURL = 'http://localhost:3000/api/needs/'
const baseURL = 'https://jars-angela.herokuapp.com/api/needs'

export default {
  getNeeds() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addNeed(need) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(need),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  updateNeed(need) {
    return fetch(baseURL + need._id, {
      method: 'PUT',
      body: JSON.stringify(need),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
  deleteNeed(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
