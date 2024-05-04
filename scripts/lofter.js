const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/v1.1/watermarkcheck.api")) {
    if (obj?.response.needwatermark) {
        obj.response.needwatermark = false;
    }
} else if (url.includes("/oldapi/post/detail.api")) {
    if (obj?.response.posts[0]?.post?.blogInfo?.imageProtected) {
        obj.response.posts[0].post.blogInfo.imageProtected = false;
    }
}

$done({ body: JSON.stringify(obj) });
