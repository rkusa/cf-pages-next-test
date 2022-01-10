export function onRequestGet({ env, request }) {
  return env.ASSETS.fetch(
    new Request(new URL("/post/[pid]/", request.url).toString(), request)
  );
}