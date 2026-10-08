Stop and fix the structure before doing anything else.

Right now `components/sections/` has a `desktop/` folder and a `mobile/` folder with a duplicate file for every section. That is wrong. Read CLAUDE.md again (it has been updated: "ONE file per section, fully responsive").

Do this:
1. For each section, merge `desktop/<name>.tsx` and `mobile/<name>.tsx` into ONE file `components/sections/<name>.tsx` that is responsive. Use Tailwind responsive classes (`md:` and up for desktop). Where mobile genuinely needs different markup, keep both versions inside the same file (`md:hidden` / `hidden md:block`) fed by the same variables.
2. Every piece of text appears exactly once in that file, written inline in the JSX, or as a small array at the top of the same file for repeating items (pledges, steps, cities). No separate content files. No copy typed twice.
3. Delete the `desktop/` and `mobile/` folders and the stray `components/sections/hero.tsx` duplicate. `app/page.tsx` should only import the seven sections and list them in order.
4. Move anything reused by more than one section (buttons, section label, pill, tick, receipt) into `components/ui/`.
5. Re-screenshot at 1440px and 390px for every section and compare against `reference/`. Nothing may change visually. Fix any difference before finishing.
6. Show me the final file tree and confirm that no text is duplicated (search for a few headings, for example "Receipts, not promises", and show that each appears in one file only).
