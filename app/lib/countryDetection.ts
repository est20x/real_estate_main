/**
 * Country detection utilities
 * Provides multiple strategies for detecting user's country
 */

export type CountryCode = string;

/**
 * Detect country from browser timezone
 */
export function detectCountryFromTimezone(): CountryCode | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const timezoneMap: Record<string, CountryCode> = {
      // Ukraine
      'Europe/Kyiv': 'ua',
      'Europe/Kiev': 'ua',
      'Europe/Uzhgorod': 'ua',
      'Europe/Zaporozhye': 'ua',

      // Russia
      'Europe/Moscow': 'ru',
      'Europe/Samara': 'ru',
      'Asia/Yekaterinburg': 'ru',

      // Turkey
      'Europe/Istanbul': 'tr',

      // USA
      'America/New_York': 'us',
      'America/Los_Angeles': 'us',
      'America/Chicago': 'us',
      'America/Denver': 'us',

      // UK
      'Europe/London': 'gb',
    };

    // Direct match
    if (timezoneMap[timezone]) {
      return timezoneMap[timezone];
    }

    // Partial match for common patterns
    const patterns: Array<[string | string[], CountryCode]> = [
      [['Kyiv', 'Kiev'], 'ua'],
      ['Moscow', 'ru'],
      ['Istanbul', 'tr'],
      ['America/', 'us'],
      ['London', 'gb'],
    ];

    for (const [pattern, country] of patterns) {
      const patterns = Array.isArray(pattern) ? pattern : [pattern];
      if (patterns.some(p => timezone.includes(p))) {
        return country;
      }
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Detect country from internal API (IP-based)
 */
export async function detectCountryFromAPI(): Promise<CountryCode | null> {
  try {
    const res = await fetch('/api/detect-country');
    if (!res.ok) return null;

    const data = await res.json();
    return data?.country_code?.toLowerCase() || null;
  } catch {
    return null;
  }
}

/**
 * Detect country from external API (fallback)
 */
export async function detectCountryFromExternalAPI(): Promise<CountryCode | null> {
  try {
    const res = await fetch('https://api.country.is');
    if (!res.ok) return null;

    const data = await res.json();
    return data?.country?.toLowerCase() || null;
  } catch {
    return null;
  }
}

/**
 * Main country detection with fallback chain
 * Priority: Timezone → Internal API → External API → Default
 */
export async function detectCountry(defaultCountry: CountryCode = 'tr'): Promise<CountryCode> {
  // 1. Try timezone (instant, most reliable for local dev)
  const timezoneCountry = detectCountryFromTimezone();
  if (timezoneCountry) {
    return timezoneCountry;
  }

  // 2. Try internal API (IP-based, not blocked by AdBlock)
  const apiCountry = await detectCountryFromAPI();
  if (apiCountry) {
    return apiCountry;
  }

  // 3. Try external API (may be blocked)
  const externalCountry = await detectCountryFromExternalAPI();
  if (externalCountry) {
    return externalCountry;
  }

  // 4. Fallback to default
  return defaultCountry;
}
