## push数据接口说明

* endpoint 、counter 可以自定义
* step 是根据上传数据的频率来自动生成的，最小30s？上传数据时指定step 无效？
* 上传时的timestamp作用不大，真正的timestamp是上传时的时间
* 新定义的endpoint、counter 十分钟之后数据才可以查询到
* 通过query接口可以查询到所有数据，dashboard 图表最近的两个点查询不到
* 上传数据组中的数据依次处理，如果已经有对应的timestamp的值，此值将会被忽略
* endpoint、counter 与mysql表中定义无关，那里只是提供一个查询入口