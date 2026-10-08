# TODO-CONTENT — placeholders to replace before launch

Everything here is visible on the site as a placeholder. Search the file named in each row for the words.

## Contact details (footer, header, Contact)
| Placeholder | Where |
|---|---|
| Phone `(214) 000-0000` | `components/site-header.tsx`, `components/sections/footer.tsx` |
| `[EMAIL]`, `[ADDRESS]`, `[HOURS]` | `components/sections/footer.tsx` |
| Social links (not added yet) | footer |

## Home page
| Placeholder | File |
|---|---|
| "Sample data" numbers: +212%, 41 → 128 calls, $38,400/MO, call log rows, rank tracker | `components/sections/receipts.tsx` |
| Receipts tabs HVAC / Dental have no data yet (only Roofing exists) | `components/sections/receipts.tsx` |
| Services card one-line descriptions (DRAFT, written from the old bullets) | `components/sections/services.tsx` |
| Services "Sample data · replace with real client numbers" note | `components/sections/services.tsx` |
| Manifesto paragraph (DRAFT), `[FOUNDER NAME]` | `components/sections/pledges.tsx` |
| Speed score "SAMPLE" badge (static 38/100 until PageSpeed route is wired) | `components/sections/contact.tsx` |
| Hero search card example business and ratings | `components/sections/hero.tsx` |

## About page (`/about`)
| Placeholder | File |
|---|---|
| "Draft copy · confirm with the founder" (hero intro) | `components/sections/about/about-hero.tsx` |
| `[YEAR]`, `[NUMBER]` (active clients), `[FOUNDER NAME]`, draft "Why we exist" statement | `components/sections/about/why-we-exist.tsx` |
| Rule cards copy (draft) | `components/sections/about/how-we-work.tsx` |
| Pledge wording (draft, confirm each with the founder) | `components/sections/about/pledges.tsx` |
| City list (confirm service area) | `components/sections/about/where-we-work.tsx` |

## Contact + FAQ page (`/contact`, FAQ at `/contact#faq`)
| Placeholder | File |
|---|---|
| Phone, `[EMAIL]`, `[ADDRESS]`, `[HOURS]`, "Placeholder contact details · confirm with founder" | `components/sections/contact/contact-hero.tsx` |
| "Book a 15-minute call" currently calls the phone number; replace `BOOK_CALL.href` with a Calendly / Cal.com link | `components/sections/contact/contact-hero.tsx` |
| Form is static (no submit yet) | `components/sections/contact/audit-form.tsx` |
| All 8 FAQ answers are DRAFT, `[PRICE]` in "How much does it cost?" | `components/sections/contact/faq.tsx` |

## Marketing page (`/marketing`)
| Placeholder | File |
|---|---|
| `[PRICE]` in "How do you charge?" (all FAQ answers are DRAFT) | `components/sections/marketing/faq.tsx` |
| Child pages linked from the orbit, goal rows and index do not exist yet (`/marketing/seo` etc., `/web-design`, `/consulting`) | built one by one |

## Web design page (`/web-design`)
| Placeholder | File |
|---|---|
| Hero headline is DRAFT; mock site uses a sample name and phone | `components/sections/web-design/web-hero.tsx` |
| Six feature one-liners are DRAFT | `six-things.tsx` |
| Story beats are DRAFT | `your-story.tsx` |
| Four process lines are DRAFT | `process.tsx` |
| `[STACK DETAILS: confirm CMS or framework]`, draft FAQ answers | `faq.tsx` |

## Consulting page (`/consulting`)
| Placeholder | File |
|---|---|
| `[PRICE]` x3 (one per way to work) | `components/sections/consulting/ways-to-work.tsx` |
| Sample audit findings in the hero note | `consulting-hero.tsx` |
| Sample roadmap bars | `roadmap.tsx` |
| Draft one-liners and FAQ answers | `deliverables.tsx`, `fit-check.tsx`, `faq.tsx` |

## SEO page (`/marketing/seo`)
| Placeholder | File |
|---|---|
| Sample search, businesses, ratings in the hero animation | `components/sections/seo/seo-hero.tsx` |
| Sample monthly report (calls 128, keywords, chart) | `clear-steps.tsx` |
| Draft bullets and step lines | `three-layers.tsx`, `clear-steps.tsx`, `month-by-month.tsx` |
| Draft FAQ answers | `faq.tsx` |

## Local SEO page (`/marketing/local-seo`)
| Placeholder | File |
|---|---|
| Sample map, search and result card (Your Business, 4.9) | `components/sections/local-seo/local-hero.tsx` |
| Sample report: calls per month, directions 214, visits 1,380, reviews 18 | `your-report.tsx` |
| Draft FAQ answers (last three) | `faq.tsx` |

## Not built yet
Privacy and Terms text, `/services`, service sub-pages, `/contact` + FAQ, real form submit (email + lead storage), PageSpeed route, analytics, OG image, sitemap/robots.
