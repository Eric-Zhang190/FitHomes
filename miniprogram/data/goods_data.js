let goods_data = [

  {
    "cat_id": 1,
    "cat_name": "娱乐设施",
    "cat_level": 0,
    "children": [{
      "cat_id": 3,
      "cat_name": "电视",
      "cat_pid": 1,
      "cat_level": 1,
      "cat_deleted": false,
      "cat_icon": "",
      "children": [{
        "cat_id": 5,
        "cat_name": "曲面电视",
        "cat_pid": 3,
        "cat_level": 2,
        "cat_deleted": false,
        "cat_icon": "https://api-hmugo-web.itheima.net/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg"
      }]
    }]
  }

];

module.exports = {
  goods_data
};