import axios from 'axios'

const MY_SERVER = "http://127.0.0.1:8000/products"

export function fetchProducts() {
  return axios.get(MY_SERVER)

}
export function delProduct(id) {
  return axios.delete(MY_SERVER + "/" + id)

}
export function addProduct(prod) {
  return axios.post(MY_SERVER,prod)

}
export function updProduct(prod) {
  return axios.put(MY_SERVER+"/"+ prod.id,prod)

}
