import { create } from 'zustand'


const useStore = create((set) => ({
 cartProducts:[],
 addToCart:(product)=>set((state)=>({
    cartProducts:[
        product,
        ...state.cartProducts
    ]
 }))
}))
export default useStore