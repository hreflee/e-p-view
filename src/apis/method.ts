import axios from '@axios';
import {GetMethodResponse} from "@/apis/types/method";

export function getMethods() {
    return axios.get<GetMethodResponse>('/method').then(res => res.data);
}