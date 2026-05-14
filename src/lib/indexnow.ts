const INDEX_NOW_KEY = 'mm-indexnow-2026';
const HOST = 'mymiracle.nl';

const urlList = [
  `https://${HOST}`,
  `https://${HOST}/behandelingen`,
  `https://${HOST}/behandelingen/lichaam`,
  `https://${HOST}/behandelingen/gezicht`,
  `https://${HOST}/lpg-endermologie`,
  `https://${HOST}/prijzen`,
  `https://${HOST}/over-mij`,
  `https://${HOST}/contact`,
  `https://${HOST}/privacy-policy`,
  `https://${HOST}/algemene-voorwaarden`,
];

export async function pingIndexNow(): Promise<{ ok: boolean; status?: number; error?: string }> {
  const payload = {
    host: HOST,
    key: INDEX_NOW_KEY,
    keyLocation: `https://${HOST}/${INDEX_NOW_KEY}.txt`,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    return { ok: false, status: res.status, error: await res.text().catch(() => 'unknown') };
  }

  return { ok: true, status: res.status };
}
