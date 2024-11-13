import { defineStore } from 'pinia'

//定义 CounterStore 的接口
interface CounterStore {
  count: number
}
//定义一个Store，名为counter
export const useCounterStore = defineStore('counter', {
  state: (): CounterStore => ({
    count: 0
  }),
    getters: {
      doubleCount: (state: CounterStore):number => state.count * 2
    },
    actions: {
      increment(): void {
        this.count++
        },
      decrement(): void {
        this.count--
      }
    }
})
