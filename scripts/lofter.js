const method = $request.method;
const params = $request.url.split("?")[1];

if (method === "GET") {
    if (params.includes("x0&")) {
        $done({});
    } else {
        const url = $request.url.split("?")[0]
        $done({url});
    }
} else {
    $done({});
}