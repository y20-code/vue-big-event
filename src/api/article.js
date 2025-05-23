import request from '@/utils/request.js'
import { useTokenStore } from '@/stores/token.js'
//文章分类列表查询
export const ArticleCategoryListService = ()=>{
    // const tokenStore = useTokenStore();
    //在pinia中定义响应数据不用.value
    // return request.get('/category',{headers:{'Authorization':tokenStore.token}})
    return request.get('/category')
}

//文章分类添加
export const articleCategoryAddService = (categoryData) =>{
    return request.post('/category',categoryData)
}

//文章分类修改
export const articleCategoryUpdateService = (categoryData) =>{
    return request.put('/category',categoryData)
}

//文章分类删除
export const articleCategoryDeleteService = (id) => {
    return request.delete('/category?id=' + id)
}

//文章列表查询

export const articleListService = (params)=>{
    return request.get('/article',{params:params})
}

//文章添加
export const articleAddService = (articleData) =>{
    return request.post('/article',articleData);
}

//文章修改
export const articleUpdateService = (articleData) =>{
    // 确保发送给后端的数据格式正确
    console.log('发送更新请求：', articleData);
    return request.put('/article', articleData);
}

//文章删除
export const articleDeleteService = (id) =>{
    return request.delete('/article?id=' + id);
}
