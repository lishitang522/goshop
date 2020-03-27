// ajax请求函数模块
// 返回值 promise对象
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET'){
    return new Promise(function (resolve, reject){
    //   执行异步Ajax请求，成功调用resolve()
    //   失败调用reject（）
    let promise
    if (type === 'GET'){
        // 准备 url query 参数数据
        let dataStr = '' //数据拼接字符串
        Object.keys(data).forEach(key => { dataStr += key + '=' + data[key] + '&' })//不太懂等会查查
        
        if (dataStr !== '') { 
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&')) 
        url = url + '?' + dataStr 
    }
        // 发送 get 请求
        promise = axios.get(url)
    }
    //发送post请求
    else{
        promise = axios.post(url, data)
    }
    promise.then(response => { 
        resolve(response.data) 
    })
    .catch(error => { 
        reject(error) 
    })
    })
}