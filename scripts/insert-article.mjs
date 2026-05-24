import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_ANON_KEY env vars')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const KV_KEY = 'tar:articles'

const article = {
  id: crypto.randomUUID(),
  title: "Dan Bilzerian's Epstein Bombshell: What the Instagram King Claims He Knows",
  slug: "dan-bilzerian-epstein-claims-what-he-knows",
  excerpt: "Social media mogul Dan Bilzerian has made explosive claims about Jeffrey Epstein, raising fresh questions about who in elite circles knew what — and when.",
  category: "Justice",
  author: "Editorial Staff",
  publishedAt: new Date().toISOString(),
  published: false,
  featured: false,
  coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg/800px-Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
  content: `<h2>The Billionaire Playboy Who Says He Saw It All</h2>
<p>Dan Bilzerian — the Armenian-American poker player, venture capitalist, and social media personality whose carefully constructed image of excess has garnered tens of millions of followers — has emerged as one of the more unexpected voices in the ongoing public reckoning over Jeffrey Epstein's network. In interviews and social media posts that have since gone viral, Bilzerian has made pointed claims about Epstein, his associates, and the culture of silence that allegedly shielded the convicted sex offender for decades.</p>
<p>The claims, which Bilzerian has made with characteristic bluntness, touch on the culture of willful ignorance among the ultra-wealthy — a world Bilzerian himself has long inhabited. While he has stopped short of naming names beyond those already in the public domain, his assertions have reignited debate about how many people in elite circles were aware of Epstein's activities and chose to look the other way.</p>

<h2>What Bilzerian Actually Said</h2>
<p>In remarks that circulated widely across social media platforms, Bilzerian stated that Epstein's lifestyle and behavior were <strong>not a secret among a certain tier of the ultra-wealthy</strong>. "Everybody knew," Bilzerian said in one widely shared clip, adding that the financier's island and his proclivities were discussed openly in certain circles. He claimed that powerful figures who have publicly expressed shock at Epstein's crimes were not being truthful about the extent of their prior knowledge.</p>
<p>Bilzerian also suggested that Epstein's death in a Manhattan jail cell in August 2019 — ruled a suicide by the medical examiner but disputed by Epstein's legal team and many independent observers — was not the random tragedy it was presented as. While he offered no specific evidence to support this claim, his willingness to speak publicly where others have remained silent has drawn significant attention.</p>
<p>On his podcast and across Instagram and X (formerly Twitter), Bilzerian has repeatedly returned to the theme that <strong>the full story of Epstein's network has not been told</strong>, and that those with the power to ensure accountability have instead used that same power to obstruct it.</p>

<h2>Why Bilzerian's Voice Cuts Through</h2>
<p>In a media landscape saturated with Epstein commentary, Bilzerian's perspective carries a specific kind of weight — not because of journalistic credentials or legal expertise, but because of his own documented proximity to the world of extreme wealth and the social circles that orbit it.</p>
<p>Bilzerian's father, Paul Bilzerian, was a corporate raider convicted of securities fraud in 1989. Dan Bilzerian himself has described his upbringing as one shaped by both enormous privilege and legal turbulence. He has spent his adult life cultivating relationships with figures across the spectrum of wealth and power, from Hollywood celebrities to tech billionaires to political donors.</p>
<p>This background, Bilzerian's defenders argue, gives him a ground-level understanding of how the ultra-wealthy operate — the unspoken codes, the shared knowledge, the mutual protection arrangements that rarely surface in courtrooms or congressional hearings. <strong>He is, in the parlance of the street, someone who has been in the room.</strong></p>

<h2>The Epstein Network: What We Know</h2>
<p>The documented facts of Jeffrey Epstein's case remain staggering in their scope. Epstein, a financier with murky origins and an inexplicably vast fortune, was first arrested in 2006 on charges related to the sexual abuse of minors in Palm Beach, Florida. In a deal that has since become notorious as a miscarriage of justice, then-U.S. Attorney Alexander Acosta granted Epstein a non-prosecution agreement that allowed him to plead guilty to minor state charges, register as a sex offender, and serve just 13 months in a county jail — during which he was permitted to leave on "work release" for up to 12 hours a day, six days a week.</p>
<p>Epstein was arrested again in July 2019 on federal sex trafficking charges. The subsequent weeks saw his death in custody at the Metropolitan Correctional Center in New York City, an event that sparked immediate and widespread skepticism. His cell's surveillance cameras malfunctioned. His guards failed to conduct required checks. The circumstances, many argued, were too convenient for too many powerful people.</p>
<p>The release of court documents related to a civil lawsuit brought by Epstein accuser Virginia Giuffre against Ghislaine Maxwell — Epstein's longtime associate and alleged co-conspirator, now serving a 20-year federal prison sentence — has revealed a constellation of powerful figures who interacted with Epstein. Among them: British royal Prince Andrew, who reached a settlement with Giuffre; former President Bill Clinton, who has acknowledged flights on Epstein's private jet; and numerous titans of finance, technology, and entertainment.</p>

<h2>The Culture of Silence Among the Elite</h2>
<p>What Bilzerian's comments spotlight — and what investigators, journalists, and victims' advocates have argued for years — is the existence of a culture of deliberate blindness among the powerful. Epstein did not operate in shadows. He maintained a townhouse in Manhattan, an estate in Palm Beach, a private island in the U.S. Virgin Islands, and properties in Paris and New Mexico. He flew frequently on a Boeing 727 that became known as the "Lolita Express." He attended dinners, galas, and conferences populated by some of the most recognizable figures in the world.</p>
<p><strong>The question that Bilzerian and others keep returning to is not merely what Epstein did, but who enabled him to do it for so long.</strong> The non-prosecution agreement of 2008 suggests answers at the prosecutorial level. The documented relationships suggest answers at the social level. What remains elusive is accountability at either.</p>
<p>Ghislaine Maxwell's conviction addressed one piece of the puzzle. But Maxwell's accusers and their legal representatives have consistently argued that she could not have operated without accomplices — and that those accomplices have not been held to account.</p>

<h2>What Comes Next</h2>
<p>The Epstein case has never fully left the public consciousness, and recent years have seen renewed interest driven by court document releases, documentary films, and the persistent advocacy of survivors. The question of whether additional criminal referrals or prosecutions will follow remains open.</p>
<p>For figures like Bilzerian — who occupy an unusual position as both insiders and outsiders to the world of extreme power — the calculus of speaking publicly is different than for those with more to lose. His willingness to make claims that more cautious figures avoid has kept pressure on a story that powerful interests would prefer to see buried.</p>
<p>Whether his specific claims can be corroborated, and whether they will contribute to any meaningful accountability, remains to be seen. What is clear is that the public appetite for answers about Epstein's network — who knew, who helped, and who has escaped consequences — shows no signs of diminishing.</p>
<p><strong>The American Reveal will continue to report on developments in the Epstein case and the ongoing pursuit of accountability for those who enabled one of the most consequential sex trafficking operations in modern American history.</strong></p>`
}

async function run() {
  // Get existing articles
  const { data } = await supabase.from('kv_store').select('value').eq('key', KV_KEY).single()
  const articles = data?.value ?? []

  // Add new article
  articles.push(article)

  // Save back
  const { error } = await supabase
    .from('kv_store')
    .upsert({ key: KV_KEY, value: articles }, { onConflict: 'key' })

  if (error) {
    console.error('Failed:', error.message)
  } else {
    console.log('Article inserted as draft:', article.title)
    console.log('Slug:', article.slug)
  }
}

run()
