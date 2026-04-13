import { NextResponse, NextRequest } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get client IP
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(/, /)[0] : null;
    
    const apiUrl = ip ? `https://ipapi.co/${ip}/json/` : "https://ipapi.co/json/";

    // Primary: ipapi.co
    const res = await fetch(apiUrl, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: 'no-store'
    });

    if (res.ok) {
      const data = await res.json();
      if (data.country_code) {
        return NextResponse.json({ country_code: data.country_code }, { status: 200 });
      }
    }

    // Fallback: ip-api.com
    const res2 = await fetch(ip ? `http://ip-api.com/json/${ip}` : "http://ip-api.com/json/", {
      cache: 'no-store'
    });
    
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2.countryCode) {
        return NextResponse.json({ country_code: data2.countryCode }, { status: 200 });
      }
    }

    return NextResponse.json({ country_code: "TR" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ country_code: "TR" }, { status: 200 });
  }
}
