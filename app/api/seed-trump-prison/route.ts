import { NextRequest, NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/articles'
import { kvSet } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.AUTH_SECRET && secret !== 'seed2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const articles = [
    {
      id: `trump-prison-${Date.now()}-1`,
      title: "Could Donald Trump Become the First U.S. President Ever Sentenced to Prison?",
      slug: 'trump-prison-sentence-convicted-felon-president-2029',
      excerpt: "He was convicted on 34 felony counts, won the presidency anyway, and watched every other criminal case collapse. The New York conviction still stands. When his second term ends in 2029, the question that has never been answered in American history will finally demand one: can a former president go to prison?",
      content: `<p>There is no precedent for any of this. That is the sentence that keeps appearing in legal briefs, in law review articles, in the careful hedging of constitutional scholars who have spent careers studying American law and find themselves standing at the edge of territory the framers never mapped. The United States has never had a president convicted of felony crimes while in office. It has never had a convicted felon win a presidential election. It has never confronted, in a live case with a real defendant, the question of whether the most powerful person in the world can ultimately be made to answer for crimes the way everyone else does.</p>

<p>All of that changed on May 30, 2024, when a Manhattan jury found Donald Trump guilty on all 34 counts of falsifying business records in the first degree. And now, with Trump back in the White House serving his second term, the question that verdict set in motion is suspended — not resolved, not dismissed, not answered. Just suspended. Waiting for January 20, 2029.</p>

<h2>What the Conviction Actually Is</h2>

<p>The New York case, prosecuted by Manhattan District Attorney Alvin Bragg, centered on payments made to adult film actress Stormy Daniels in the weeks before the 2016 election. Michael Cohen, Trump's former personal attorney, paid Daniels $130,000 in exchange for her silence about an alleged sexual encounter with Trump. Trump reimbursed Cohen and, according to prosecutors, directed that the reimbursements be recorded in internal business documents as legal expenses — falsifying those records to conceal the true nature of the payments.</p>

<p>The 34 counts were all felonies because prosecutors argued the falsification was done to conceal another crime: a violation of New York election law. That theory was contested by Trump's legal team throughout the trial and remains the subject of ongoing legal debate. The jury rejected it as a defense and returned guilty verdicts on every count.</p>

<p>Sentencing was scheduled, postponed, rescheduled, and postponed again through 2024 as Trump's attorneys filed motions challenging the conviction on various grounds, including arguments related to the Supreme Court's July 2024 ruling on presidential immunity. Judge Juan Merchan navigated each delay with visible frustration. Then Trump won the November 2024 election. And everything changed.</p>

<h2>How the Presidency Froze the Case</h2>

<p>Judge Merchan sentenced Trump on January 10, 2025 — ten days before his inauguration — imposing an unconditional discharge. No prison time, no probation, no fine. The sentence was, in practical terms, the minimum legally available: a formal acknowledgment that a conviction existed while imposing no punishment whatsoever. Merchan cited the extraordinary circumstances of sentencing a president-elect, the limits on what a state court could impose on a federal official, and the unresolved constitutional questions surrounding the case.</p>

<p>Trump's legal team immediately appealed the conviction itself. Those appeals are working through the New York court system while Trump sits in the Oval Office. The practical effect is a case in suspended animation: the conviction stands, the sentence has been imposed, but the underlying legal questions remain unresolved and the political reality of a sitting president makes any immediate consequence essentially impossible to enforce.</p>

<p>The other cases evaporated more completely. Special Counsel Jack Smith's federal indictments — the classified documents case and the January 6 election interference case — were both dismissed after Trump's election victory, consistent with Justice Department policy that a sitting president cannot be federally indicted or prosecuted. Smith's final report documented his evidence and conclusions but produced no legal consequence. The Georgia state case brought by Fulton County District Attorney Fani Willis has been effectively paralyzed by procedural battles and the political environment surrounding it.</p>

<p>What remains, legally, is New York. One conviction. 34 counts. An unconditional discharge. And an appeal that may not be resolved before Trump leaves office in 2029.</p>

<h2>The Constitutional Question Nobody Has Answered</h2>

<p>Can a former president be imprisoned? The question sounds simple. The answer is genuinely, maddeningly uncertain.</p>

<p>The Department of Justice's longstanding position — articulated in Office of Legal Counsel memos from 1973 and 2000 — is that a <em>sitting</em> president cannot be indicted or criminally prosecuted because doing so would unconstitutionally interfere with the executive function. Those memos have shaped DOJ policy for fifty years. They do not, on their face, address what happens to a president after he leaves office.</p>

<p>The Supreme Court's July 2024 ruling in <em>Trump v. United States</em> established that former presidents have absolute immunity from criminal prosecution for official acts taken while in office. The ruling was sweeping and controversial. It is also, in the New York case, arguably irrelevant: the conduct at issue — payments to a porn actress to influence a personal reputation matter before the 2016 election — was personal conduct, not official acts. Trump was a private citizen when the payments were made and when the business records were falsified.</p>

<p>That distinction matters enormously for what comes next. The presidential immunity doctrine does not protect Trump from the New York conviction in the way it protects him from the January 6 and classified documents cases. His attorneys have argued otherwise — that the Supreme Court's immunity analysis should be read broadly enough to reach even pre-presidential conduct. Most legal scholars believe that argument will fail. But "most legal scholars believe" is not the same as a Supreme Court ruling, and on questions this novel, what most legal scholars believe has a way of being tested.</p>

<h2>What Happens in 2029</h2>

<p>Trump's second term ends on January 20, 2029. On that day, he becomes a private citizen again. The constitutional protections that attach to the presidency — the practical immunity from prosecution that DOJ policy creates — dissolve. What remains is a convicted felon with an unconditional discharge and an appeal that may still be pending.</p>

<p>If the appeal fails and the conviction stands, Trump faces no additional legal jeopardy from the New York case — he has already been sentenced. An unconditional discharge cannot be converted into a prison sentence after the fact. The conviction would remain on his record, permanently, but the punishment has already been imposed and it was nothing.</p>

<p>The more significant question is whether any new prosecution is possible after 2029. The federal cases are gone — dismissed with prejudice in Smith's January 6 case, and the classified documents case similarly closed. Absent a new administration deciding to reopen them, which would face significant legal obstacles, those cases are finished.</p>

<p>Georgia remains theoretically alive but practically uncertain. The Fulton County prosecution has been so thoroughly entangled in motions about DA Willis's conduct, appeals about co-defendant cases, and the general political environment that its trajectory after 2029 is impossible to predict with confidence. It could resume. It could be resolved through plea deals with co-defendants that make the Trump portion moot. It could drag on for years in pretrial litigation.</p>

<h2>The Sentence Nobody Will Say Out Loud</h2>

<p>Here is the honest answer to the question in the headline: almost certainly not.</p>

<p>The path to Donald Trump in a prison cell requires a sequence of events that, while not legally impossible, faces obstacles at every step. The New York conviction — the one that actually exists — resulted in a sentence of zero. The appeals could theoretically result in a new trial and a new sentencing, but that process would take years and the ultimate outcome is uncertain. The Georgia case would have to resume, proceed to trial, produce a conviction, and result in a sentence — all processes that have proven extraordinarily difficult to complete with respect to this particular defendant.</p>

<p>More fundamentally, the American legal system has no established mechanism for imprisoning a former president, and the political will required to see that process through — in the face of inevitable claims of persecution, inevitable pressure on prosecutors and judges, inevitable Supreme Court interventions — has not been demonstrated to exist. The cases that were supposed to produce accountability were dismissed. The conviction that survived produced no punishment.</p>

<p>What the New York case did produce is something smaller but not nothing: a permanent legal record. Donald Trump is, as a matter of law, a convicted felon. That fact survived his election, his return to power, and the collapse of every other case against him. It will follow him out of office in 2029 in a way that nothing else has.</p>

<p>Whether that matters — whether a conviction without consequence means anything in a country that elected the man anyway — is not a legal question. It is a question about what accountability means, who it applies to, and whether the American legal system's promise of equality before the law survives contact with power at its most concentrated. The answer, so far, has not been encouraging.</p>

<p>The question of prison remains, for now, theoretical. The question of what that tells us about American justice is not.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
  ]

  const existing = await getAllArticles()
  const existingSlugs = new Set(existing.map((a) => a.slug))
  const toInsert = articles.filter((a) => !existingSlugs.has(a.slug))

  if (toInsert.length === 0) {
    return NextResponse.json({ ok: true, inserted: [], message: 'All articles already exist' })
  }

  const updated = [...existing, ...toInsert]
  await kvSet('tar:articles', updated)

  return NextResponse.json({ ok: true, inserted: toInsert.map((a) => a.title) })
}
