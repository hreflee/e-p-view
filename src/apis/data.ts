import axios from '@axios';
import {
    GetDataResponse,
    GetLastSelectedAttrsRequest,
    GetLastSelectedAttrsResponse,
    PostDataRequest,
    PostDataResponse
} from "./types/data";

export function getData():Promise<GetDataResponse> {
    return axios.get<GetDataResponse>('/data')
        .then(res => res.data)
}

export function postData(params:PostDataRequest) {
    let formData = new FormData();
    formData.append('file', params.file);
    return axios.post<PostDataResponse>('/data', formData)
        .then(res => res.data)
}

export function getLastSelectedAttrs(params:GetLastSelectedAttrsRequest) {
    return axios.get<GetLastSelectedAttrsResponse>('/data/lastSelectedAttrs', {
        params
    })
        .then(res => res.data)
}