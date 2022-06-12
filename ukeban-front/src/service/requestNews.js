import { get } from "../utils/request";

export function getNews(page = 0){
    return get('/news',{ params: { page: page } })
}