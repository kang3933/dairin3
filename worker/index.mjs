const redirects = new Map([
  ["/about", "/about/aboutdairin/"],
  ["/beer", "/menu/beer/"],
  ["/menu", "/menu/new/"],
  ["/stores", "/about/branches/"],
  ["/franchise", "/contact/open/"],
  ["/startup-cost", "/contact/open/#costs"],
]);

function reply(body, status = 200, headers = {}) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

async function submitConsultation(request, database) {
  if (request.method !== "POST") return reply({ error: "POST로 신청해 주세요." }, 405, { Allow: "POST" });
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return reply({ error: "허용되지 않은 요청입니다." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply({ error: "입력 형식을 확인해 주세요." }, 415);
  }
  const raw = await request.text();
  if (raw.length > 12000) return reply({ error: "입력 내용이 너무 깁니다." }, 413);
  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return reply({ error: "입력 내용을 확인해 주세요." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) return reply({ error: "입력 내용을 확인해 주세요." }, 400);
  const read = (key) => typeof data[key] === "string" ? data[key].trim() : "";
  const id = read("requestId");
  const name = read("name");
  const phone = read("phone").replace(/[\s()-]/g, "");
  const region = read("region");
  const beer = read("beer");
  const question = read("question");

  if (!/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i.test(id)) return reply({ error: "페이지를 새로 불러온 뒤 다시 신청해 주세요." }, 400);
  if (!name || !region || !/^(010\d{8}|01[16789]\d{7,8})$/.test(phone) || data.consent !== true) {
    return reply({ error: "성함, 휴대폰 번호, 희망 지역과 개인정보 동의를 확인해 주세요." }, 400);
  }
  if (name.length > 60 || region.length > 60 || beer.length > 60 || question.length > 2000) {
    return reply({ error: "입력 내용이 너무 깁니다." }, 400);
  }
  if (!database) return reply({ error: "접수 서비스를 준비 중입니다. 잠시 후 다시 시도해 주세요." }, 503);

  try {
    const result = await database.prepare(
      "INSERT INTO consultations (id, created_at, name, phone, region, beer, question, consent) VALUES (?, ?, ?, ?, ?, ?, ?, 1) ON CONFLICT(id) DO NOTHING",
    ).bind(id, new Date().toISOString(), name, phone, region, beer, question).run();
    if (!result.success) throw new Error("INSERT failed");
    return reply({ success: true, id }, result.meta.changes === 1 ? 201 : 200);
  } catch {
    return reply({ error: "접수 결과를 확인하지 못했습니다. 잠시 후 다시 시도해 주세요." }, 503);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const route = url.pathname.replace(/\/$/, "") || "/";
    if (route === "/api/consultations") return submitConsultation(request, env.DB);
    const redirect = redirects.get(route);
    if (redirect) return Response.redirect(new URL(redirect, url), 308);
    return env.ASSETS.fetch(request);
  },
};
