// 使用 Fetch API 获取每日一图的 JSON 数据
fetch('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US')
    .then(response => response.json())
    .then(data => {
        // 构造每日一图的完整 URL
        const imageUrl = 'https://www.bing.com' + data.images[0].url;
        console.log('Edge 每日一图链接:', imageUrl);

        // 在网页上显示图片
        // document.body.innerHTML = `<img src="${imageUrl}" alt="Edge 每日一图" />`;
    })
    .catch(error => console.error('Error fetching daily image:', error));
