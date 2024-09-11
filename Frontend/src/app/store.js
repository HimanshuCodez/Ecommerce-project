import { create } from 'zustand'


const useStore = create((set) => ({
 cartProducts:[],
 addToCart:(product)=>set{(state)}
}))
