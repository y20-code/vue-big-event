import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'
//文章分类列表查询
export const ArticleCategoryListService = ()=>{
    const tokenStore = useTokenStore();
    //在pinia中定义响应数据不用.value
    return request.get('/category',{headers:{'Authorization':tokenStore.token}})
}