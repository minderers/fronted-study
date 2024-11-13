import api from "./axiosInstance";
import type { HotItem } from "../types/zhihu";

// 获取知乎热榜
export const fetchHotList = () => api.get<{ data: HotItem[] }>('/hot');
//添加数据
export const addHotItem = (item: Partial<HotItem>) => api.post('/hot', item);
//更新数据
export const updateHotItem = (id: number, updatedItem: Partial<HotItem>) => api.put(`/hot/${id}`, updatedItem);
//删除数据
export const deleteHotItem = (id: number) => api.delete(`/hot/${id}`);