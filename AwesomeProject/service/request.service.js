/**
 * 数据请求
 */
export class RequestService {
    ajax(url, type, param, config) {
        var cfg = {
            method: type,
            body: param
        };
        if (!!config) {
            cfg = Object.assign({}, cfg, {
                header: config
            });
        }
        return fetch(url, cfg)
               .then((response) => response.json())
               .catch((error) => {
                   console.error(error);
               });
    }
    get(url, param, cfg) {
        return this.ajax(url, param, cfg);
    }
    post(url, param, cfg) {
        return this.ajax(url, param, cfg);
    }
    put(url, param, cfg) {
        return this.ajax(url, param, cfg);
    }
    delete(url, param, cfg) {
        return this.ajax(url, param, cfg);
    }
}
