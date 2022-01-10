export function onRequestGet({ env, request }) {
  return env.ASSETS.fetch(
    new Request(new URL("/profiles/[profile]", request.url).toString(), request)
  );
}