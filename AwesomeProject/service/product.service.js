import {RequestService} from  './request.service';

/**
 * 产品数据服务
 */
export class ProductService extends RequestService{
    
    getList(){
    	  return this.get('http://localhost:3000/product');
    }
}