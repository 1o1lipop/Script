var body = $response.body;

// 去除贴吧首页的广告
body = body.replace(/<div id="thread_list_bottom_ad"[^>]*>[\s\S]*?<\/div>/g, "");

// 去除帖子内容中的广告
body = body.replace(/<div class="ad_[^>]*>[\s\S]*?<\/div>/g, "");

$done({ body });
