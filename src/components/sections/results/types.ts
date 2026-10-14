// One client's results: everything the graph and the Google block show.
export type Client = {
  id: string;
  tab: string; // label on the tab pill
  tag: string; // small line naming the client above the graph
  // weekly numbers from Google: low and flat before we started, then a climb (with a few dips) to `high`
  clicks: { low: number; high: number; seed: number; shape: "steady" | "late" | "early" }; // how the climb is shaped
  impressions: { low: number; high: number };
  milestones: { w: number; text: string }[]; // what we did and when (week index, after we started)
  query: string; // what the searcher typed
  listing: { name: string; url: string; title: string; snippet: string; place: string; rating: string; reviews: string };
  keywords: { kw: string; from: number; now: number }[]; // 1 to 5 keywords with their positions
};
