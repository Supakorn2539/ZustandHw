import axios from "axios"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const benzStore = (set) => ({
    arr : [
        {id :1 , title : 'work1'},
        {id :2 , title : 'work2'}
    ],
    addArr : (newValue) => set((state) => ({
        
            arr: [...state.arr, { id: state.arr.length > 0 ? state.arr.pop().id + 1 : 1, title: newValue }]
        
    })),
    
    delArr : (id) => set ((state) =>({
        arr : state.arr.filter(el => el.id !== id)
    }))
})

const usePersist = {
    name : benzStore,
    getStorage : () => localStorage,
    partialize : (state) => ({
        arr : state.arr,
        addArr : state.addArr,
        delArr : state.delArr
    })
}

const useStore = create(persist(benzStore,usePersist))
export default useStore


