export default () => {
    console.log("ef invoked");
    return new Response("Hello world");
}
export const config = { path: "/edge-test" };