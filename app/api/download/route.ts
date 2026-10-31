import { get } from "@vercel/blob";

const APK_PATHNAME = "app-release.apk";

export async function GET() {
  const result = await get(APK_PATHNAME, {
    access: "private",
  });

  if (result === null) {
    return new Response("APK not found", {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }

  return new Response(result.stream, {
    headers: {
      "Cache-Control": "private, no-store",
      "Content-Disposition": 'attachment; filename="muraflix.apk"',
      "Content-Length": String(result.blob.size),
      "Content-Type": "application/vnd.android.package-archive",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
