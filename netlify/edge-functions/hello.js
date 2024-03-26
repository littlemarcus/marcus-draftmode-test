export default () => {
    console.log("ef invoked");
    new Response("Hello world");
}
export const config = { path: "/edge-test" };