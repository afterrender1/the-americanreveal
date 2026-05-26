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
      id: `epstein3-drewcarey-${Date.now()}-1`,
      title: "What the Epstein Files Actually Say About Drew Carey — And Why It Matters",
      slug: 'drew-carey-epstein-files-ghislaine-maxwell-email',
      excerpt: "Drew Carey's name is in the Epstein files. Here's the full context: a 2002 email from a TV writer to Ghislaine Maxwell mentioning a dinner. It's minor. But the story of how it surfaced — and what it reveals about the people weaponizing these documents — is anything but.",
      content: `<p>Drew Carey is in the Epstein files. That sentence, stripped of context, sounds alarming. With context, it tells a very different story — one that reveals not just the limits of what the documents actually contain, but the way those documents are being weaponized in American public life in ways that have almost nothing to do with justice for Epstein's victims.</p>

<p>Here is what the record actually shows.</p>

<h2>The Email</h2>

<p>Carey's name appears in the unsealed Epstein documents in a single email. The email was written by Jeff Davis, a television writer who worked on <em>Whose Line Is It Anyway?</em> — the improv comedy show Carey hosted. It was sent to Ghislaine Maxwell, Epstein's longtime associate who was convicted in 2021 on federal sex trafficking charges and sentenced to twenty years in prison.</p>

<p>The email reads, in the relevant part: "Your ears must have been burning. I was having dinner tonight with Drew Carey and the guys from <em>Whose Line Is It Anyway?</em> and we were talking about our encounter with you."</p>

<p>That is it. A television writer telling Maxwell that he had dinner with his colleagues and that her name came up in conversation. Carey is not the author of the email. He does not appear to have sent or received communications with Maxwell or Epstein directly in the documents that have been released. His name appears because someone else mentioned him in a message to Maxwell.</p>

<p>No allegation of wrongdoing is attached to the mention. No suggestion of attendance at Epstein's properties, no financial relationship, no connection to the abuse operation. The email establishes that Jeff Davis knew both Maxwell and Carey well enough to have dinner with one and write to the other. It establishes nothing beyond that.</p>

<h2>How This Became News</h2>

<p>The mention surfaced not through investigative reporting or a congressional disclosure, but through a social media feud.</p>

<p>Spencer Pratt — a reality television personality from <em>The Hills</em> who is currently running for mayor of Los Angeles — posted about his candidacy on X in late May 2026. Drew Carey publicly criticized Pratt's campaign. Pratt responded by posting a screenshot of the Davis-Maxwell email, tagging Carey, and implying that Carey's appearance in the Epstein files was damning.</p>

<p>He made the same move against Chelsea Handler, who had also criticized his mayoral run. Handler's connection to the Epstein documents is similarly thin: she is mentioned in connection with a dinner she attended with Epstein in 2010, years before the full scope of his crimes was publicly known. Pratt posted a video clip of comedian Shane Gillis pointing out the Handler reference, framing it as hypocritical for her to criticize him while her own name appeared in the files.</p>

<p>The feud produced significant media coverage. The coverage mostly focused on the celebrity conflict rather than the substance of what the documents actually showed. And in that gap — between what the documents say and how they were used — lies a story worth examining carefully.</p>

<h2>What "Appearing in the Epstein Files" Actually Means</h2>

<p>The Epstein document releases over the past several years have included thousands of pages: emails, flight logs, address books, deposition transcripts, court filings, and financial records spanning decades. The scope of those documents reflects the scope of Epstein's operation, which was deliberately designed to cultivate relationships across every sector of American elite life.</p>

<p>Epstein collected names. He cultivated proximity to famous, powerful, and influential people as a professional and social strategy. His address book, portions of which have been released, contains hundreds of entries — politicians, academics, scientists, entertainers, financiers, royalty. Many of those people had no knowledge of his crimes. Some had minimal or social contact with him. Others were deeply involved in or aware of his operations.</p>

<p>The documents do not distinguish between these categories. An entry in an address book and a photograph on a flight log to his private island are not the same thing. A mention in someone else's email and a direct communication with Maxwell are not the same thing. The public release of these documents — necessary and overdue as it was — has created a landscape in which the same word, "mentioned," can mean wildly different things.</p>

<p>Accountability advocates and survivors who have fought for years to get these documents released have been clear about this distinction. Their goal was accountability for the people who participated in or enabled Epstein's abuse. It was not to create a list of names that could be weaponized against anyone who happened to cross paths with him or his associates in ways unconnected to that abuse.</p>

<h2>The Weaponization Problem</h2>

<p>What Spencer Pratt did with Carey's mention is a case study in a phenomenon that has complicated the Epstein accountability reckoning from the beginning: the use of document references as social ammunition, stripped of context, in service of agendas that have nothing to do with justice for victims.</p>

<p>Pratt's posting of the Davis-Maxwell email was not an act of journalism or accountability. It was a retaliatory move in a celebrity feud, deployed to deflect criticism of his political candidacy. The implication — that Carey's name in the files means something sinister — was not supported by what the document actually says. But the implication was the point. In a media environment where "Epstein files" functions as a phrase that triggers immediate alarm, the specific content of the document matters less than the association itself.</p>

<p>This dynamic has real costs. It muddies the waters around which documents are genuinely significant and which are not. It makes serious investigation harder by flooding the zone with noise. And it allows people with actual accountability concerns — survivors, their attorneys, the journalists and investigators who have spent years building the evidentiary record — to be dismissed as engaged in the same kind of point-scoring that Pratt was doing.</p>

<h2>What Drew Carey Has Said</h2>

<p>Carey has not made detailed public statements about the specific email or his knowledge of Maxwell beyond his criticism of Pratt's social media posts. He has not denied knowing people in Epstein's orbit — in the entertainment industry of the 1990s and 2000s, Epstein and Maxwell moved in circles that overlapped extensively with Hollywood and New York media. Acknowledging that overlap is different from acknowledging involvement in anything improper.</p>

<p>No law enforcement agency has identified Carey as a subject or target of any investigation related to Epstein or Maxwell. No survivor has made allegations against him. The House Oversight Committee's ongoing investigation has not publicly connected him to the abuse network in any way.</p>

<h2>The Real Story</h2>

<p>The real story here is not that Drew Carey appears in the Epstein files. The real story is that the Epstein documents — painstakingly obtained through years of legal battles by survivors and their attorneys — are now being selectively deployed in celebrity feuds, political campaigns, and social media pile-ons in ways that serve no one except the people doing the deploying.</p>

<p>Epstein's victims deserved a full accounting. They deserved documents that named the people who abused them and the people who enabled that abuse. Many of those names are still sealed, still protected, still the subject of ongoing legal battles. The people with genuine accountability concerns — the survivors, the investigators, the journalists doing serious work — are still fighting for disclosure of records that actually matter.</p>

<p>Meanwhile, a reality TV personality running for mayor of Los Angeles is using an email about a dinner to win an argument on X.</p>

<p>The distance between those two things — between what the Epstein accountability reckoning was supposed to be and what it has partly become — is itself a story. It is a story about how powerful people and their institutions have managed to dilute a genuine accountability crisis into a content cycle. And it is a story worth telling clearly, even when the individual facts are as minor as a 2002 email about a dinner that someone else attended.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
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

  return NextResponse.json({
    ok: true,
    inserted: toInsert.map((a) => a.title),
  })
}
