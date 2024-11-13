import Mock from "mockjs";

Mock.mock("http://api.zhihu.com/hot","get", {
    "data|10": [{
        "id|+1": 1,
        title: "@ctitle(5,10)",
        excerpt: "@paragraph(2,3)",
        url: "@url",
        image: '@image("200x100", "#51af88", "#FFF", "img")',
        hotIndex: "@integer(1000, 5000)"
    }]
})

Mock.mock("http://api.zhihu.com/hot", "post", {
    message: "添加成功",
    data: {
        id:"@integer(11, 100)",
        title: "新的标题",
        excerpt: "新的内容",
        url: "@url",
        image: 'https://minder-bucket.oss-cn-nanjing.aliyuncs.com/jpg/flower.jpg',
        hotIndex: "8888"
    }
})

Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/, "put", {
    message: "更新成功"
});

Mock.mock(/http:\/\/api.zhihu.com\/hot\/\d+/, "delete", {
    message: "删除成功"
})