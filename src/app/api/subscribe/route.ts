export async function POST(req: Request) {
  const { email, locale } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.MAILERLITE_API_KEY;
  const listId = process.env.MAILERLITE_LIST_ID;

  if (!apiKey || !listId) {
    return Response.json({ error: "generic" }, { status: 500 });
  }

  try {
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        groups: [listId],
        fields: { locale: locale || "en" },
        status: "unconfirmed",
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      if (res.status === 422 && data?.message?.includes("already")) {
        return Response.json({ success: true, already: true });
      }
      return Response.json({ error: "generic" }, { status: 500 });
    }

    const data = await res.json();
    const alreadyExists = data?.data?.status === "active";

    return Response.json({ success: true, already: alreadyExists });
  } catch {
    return Response.json({ error: "generic" }, { status: 500 });
  }
}
