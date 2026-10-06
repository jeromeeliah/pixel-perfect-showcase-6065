<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Auberge Tigida site
- All copy lives in src/content/locales.ts; images by role in src/content/images.ts; rooms/experiences in src/content/collections.ts; contact/links in src/content/site.ts — components never hardcode content, so real photos and facts swap in without layout changes.
- Locales: English unprefixed, others under /$lang; legal at /mentions-legales and /$lang/mentions-legales — keeps one component per page across languages.
- Unknown facts stay as [bracketed] placeholders rendered with `placeholder-fact` — the brief forbids inventing facts.
- Stay form posts through src/lib/stay-request.ts (not connected yet) — single integration point for a future backend.
