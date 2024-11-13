import { defineStore } from "pinia";
import { ref,computed } from "vue";

interface Bill {
    id: number;
    type: 'income' | 'expense'
    bill: number
    reason: string
}
export const useBillStore = defineStore("bill", () => {
    const Bills = ref<Bill[]>([]);

    const addBill = (type: 'income' | 'expense', bill: number, reason: string) => {
        const newBill: Bill = {
            id: Date.now(),
            type,
            bill,
            reason
        };
        Bills.value.push(newBill);
    };
    const removeBill = (index: number) => {
        Bills.value.splice(index, 1);
    };
    const totalIncome = computed(() => {
        return Bills.value
            .filter(Bill => Bill.type === 'income')
            .reduce((sum, Bill) => sum + Bill.bill, 0);
    });

    const totalExpenses = computed(() => {
        return Bills.value
            .filter(Bill => Bill.type === 'expense')
            .reduce((sum, Bill) => sum + Bill.bill, 0);
    });

    const balance = computed(() => {
        return totalIncome.value - totalExpenses.value;
    });

    return {
        Bills,
        addBill,
        removeBill,
        totalIncome,
        totalExpenses,
        balance
    };
},
    {
        persist: {
            key: 'my-Bill-store',
            storage: localStorage
        }
})