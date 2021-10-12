import qs from "qs";
import { message } from "antd";
const BASE_URL = "/api/";

export default function fetchs(url, data = {}, type) {
    return new Promise((resolve, reject) => {
        let promise;
        // 执行请求
        switch (type) {
            case "GET":
                promise = fetch(BASE_URL + url + "?" + qs.stringify(data));
                break;
            case "POST":
                promise = fetch(BASE_URL + url, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "content-type": "application/json",
                    },
                });
                break;
            default:
        }
        promise
            .then((res) => res.json())
            // 失败 -> 不调用reject
            .catch((error) => {
                message.error(error.message);
                reject()
            })
            // 成功-> resolve(value )
            .then((data) => {
                if (data.status === 0) {
                    resolve(data);
                } else if (data.status === 500) {
                    message.error(data.error)
                    reject()
                }
            });
    });
}
