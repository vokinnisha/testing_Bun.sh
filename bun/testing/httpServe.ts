
console.time("bun serve");

const server = Bun.serve({
    port: 3001,
    fetch(request) {
        return new Response("Hello World!");
    },
});

console.timeEnd("bun serve");
console.log(`Listening on localhost:${server.port}`);