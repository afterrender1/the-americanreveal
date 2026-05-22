import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'data', 'articles.json');

const markdownToHtml = {
  "550e8400-e29b-41d4-a716-446655440001": `<h2>The Documents That Change Everything</h2>\n<p>For years, the full extent of Jeffrey Epstein's network remained hidden behind sealed courtroom doors. Now, newly released documents are pulling back the curtain on a web of connections that reaches into the highest corridors of power in America and abroad.</p>\n<p><img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80" alt="Legal documents and scales of justice" /></p>\n<p>The documents, released following a prolonged legal battle by advocacy groups and journalists, contain sworn depositions, flight logs, and financial records that name dozens of prominent individuals who had dealings with Epstein across a period spanning more than two decades.</p>\n<h2>What the Records Show</h2>\n<p>Among the most significant revelations are detailed flight manifests from Epstein's private aircraft. These records show dozens of round trips to his private island in the U.S. Virgin Islands, with passenger lists that include sitting politicians, prominent businessmen, and figures from the worlds of finance and entertainment.</p>\n<p>Financial records also reveal the complex web of shell companies and offshore accounts used to funnel money through Epstein's operation, suggesting a level of institutional protection that went beyond what was previously known to the public or to investigators.</p>\n<h2>Key Findings from the Released Documents</h2>\n<ul>\n<li>Over 200 previously unnamed individuals are referenced across the depositions</li>\n<li>Flight logs show dozens of trips to Little St. James Island over a three-year window</li>\n<li>Multiple non-disclosure agreements were signed by witnesses in exchange for financial settlements</li>\n<li>Records indicate coordination between Epstein's legal team and officials in at least two federal agencies</li>\n</ul>\n<h2>The Question of Accountability</h2>\n<p>Perhaps the most troubling aspect of these revelations is not the crimes themselves, but the systematic way in which accountability was avoided. The documents reveal coordinated legal efforts to suppress information, intimidate witnesses, and ensure that key figures remained shielded from scrutiny.</p>\n<p>Advocates for Epstein's victims say the newly released information, while significant, represents only a fraction of what remains under seal. The full story of how a convicted predator was able to operate for decades with apparent impunity has not yet been fully told.</p>\n<h2>What Happens Next</h2>\n<p>Federal investigators have reportedly reopened several lines of inquiry based on the newly released materials. Congressional oversight committees have called for hearings. Whether those hearings will produce meaningful accountability, or whether they will follow the familiar pattern of high-profile inquiries that generate headlines without consequences, remains the central question.</p>`,
  "550e8400-e29b-41d4-a716-446655440002": `<h2>A Friendship Documented in Public Records</h2>\n<p>Long before Jeffrey Epstein became the subject of a federal sex trafficking investigation, he and Donald Trump moved in overlapping social circles in New York and Palm Beach. The relationship between the two men is not a matter of speculation — it is documented in photographs, news archives, court records, and the statements of people who knew them both.</p>\n<p><img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80" alt="Political figures shaking hands" /></p>\n<p>What those records reveal, and what questions they leave unanswered, is the subject of significant public interest as both Epstein's crimes and their aftermath continue to reverberate through American political life.</p>\n<h2>The Palm Beach Connection</h2>\n<p>Both men owned properties in Palm Beach, Florida — Trump at Mar-a-Lago, Epstein at his nearby mansion on El Brillo Way. Local and national society pages from the 1990s and early 2000s document their presence at many of the same events. Trump was quoted in a 2002 New York Magazine profile of Epstein describing him as a 'terrific guy' who 'enjoys his social life.'</p>\n<h2>Court Records and Depositions</h2>\n<p>In the civil litigation that followed Epstein's 2008 conviction, depositions from various witnesses placed Trump at events also attended by Epstein. Flight logs subpoenaed as part of those proceedings show Trump traveled on Epstein's plane on at least one occasion in the early 1990s.</p>\n<p>Trump has denied any knowledge of Epstein's crimes and has stated he distanced himself from Epstein years before Epstein's arrest. His campaign noted that Trump was the first person to ban Epstein from Mar-a-Lago after learning of allegations involving a young club member.</p>\n<h2>What the Record Leaves Open</h2>\n<p>The documented history establishes that Trump and Epstein had a genuine social relationship over a significant period. What it does not establish — and what the public record cannot fully answer — is the extent of Trump's knowledge of Epstein's activities, or whether their association had any bearing on the lenient plea deal Epstein received in 2008, negotiated under the administration of a U.S. Attorney who would later serve in Trump's cabinet.</p>`,
  "550e8400-e29b-41d4-a716-446655440003": `<h2>The Most Sought-After Document in America</h2>\n<p>Jeffrey Epstein was, among other things, a collector of people. He documented his connections obsessively — in a leather-bound address book seized by investigators, in computer files, in the logs of his aircraft and his properties. These records constitute what many investigators and journalists have called the most consequential set of contact files in modern American history.</p>\n<p><img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80" alt="Bound leather book pages" /></p>\n<h2>The Address Book</h2>\n<p>The original black book contained roughly 1,000 names, phone numbers, and contact details. It included heads of state, members of the British royal family, prominent American politicians, CEOs, and entertainers.</p>\n<h2>Why Names Stay Hidden</h2>\n<ul>\n<li>Active litigation by unnamed individuals seeking to maintain their anonymity</li>\n<li>Agreements between prosecutors and Epstein's estate that sealed certain records</li>\n<li>National security claims asserted by government attorneys in some proceedings</li>\n<li>Judicial discretion in cases where inclusion may reflect only peripheral contact</li>\n</ul>\n<h2>The Acosta Agreement and Its Consequences</h2>\n<p>The 2008 non-prosecution agreement granted immunity to unnamed co-conspirators — a provision later ruled unlawful by a federal judge, but whose practical effect in limiting prosecutions of Epstein's associates has been lasting.</p>\n<h2>The Fight for Full Disclosure</h2>\n<p>Advocacy groups and press freedom organizations continue to litigate for full disclosure. Progress has been slow. Each batch of released documents is typically accompanied by heavy redactions, and the legal arguments for continued secrecy appear inexhaustible.</p>`,
  "550e8400-e29b-41d4-a716-446655440004": `<h2>Justice for Whom</h2>\n<p>The United States prides itself on a legal tradition rooted in equal application of the law. The reality, documented across decades of legal proceedings, corporate settlements, and prosecutorial decisions, tells a different story.</p>\n<p><img src="https://images.unsplash.com/photo-1505664173692-dbceb18146fc?auto=format&fit=crop&w=800&q=80" alt="Scales of Justice" /></p>\n<h2>The Epstein Case as Blueprint</h2>\n<p>The 2008 non-prosecution agreement negotiated for Jeffrey Epstein by federal prosecutors in Florida is perhaps the most documented example of the two-tier system in operation. A man who, by the FBI's own assessment, had victimized dozens of underage girls, received a sentence so lenient that the judge who later reviewed the case called the agreement a violation of the Crime Victims Rights Act.</p>\n<h2>The Mechanics of Elite Immunity</h2>\n<ul>\n<li>Pre-trial diversion agreements that avoid indictment entirely</li>\n<li>Deferred prosecution agreements that suspend charges contingent on compliance</li>\n<li>Civil settlements with non-disclosure provisions that prevent public accountability</li>\n<li>Regulatory fines structured as a cost of doing business rather than a deterrent</li>\n</ul>\n<h2>Financial Crime and the Disappearing Prison Sentence</h2>\n<p>In the years following the 2008 financial crisis, the major banks whose fraudulent practices contributed to the collapse paid tens of billions of dollars in fines. The number of senior executives who served prison time: effectively zero.</p>\n<h2>The Public Response</h2>\n<p>Public confidence in the American justice system has declined significantly over the past two decades. The perception that the system operates differently for the powerful is not a fringe view — it is a majority position held across party lines.</p>`,
  "550e8400-e29b-41d4-a716-446655440005": `<h2>The Questions That Don't Get Asked</h2>\n<p>In the years since Jeffrey Epstein's 2019 arrest and subsequent death, a particular line of inquiry has remained largely off-limits in mainstream coverage: the question of what, if anything, American intelligence agencies knew about Epstein's operations.</p>\n<p><img src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=800&q=80" alt="Surveillance cameras on a building" /></p>\n<h2>The Attorney General's Unusual Statement</h2>\n<p>When Attorney General William Barr announced that he had personally reviewed the circumstances of Epstein's death and found 'no indication' of foul play, the statement was unusual in several respects. Attorneys general do not typically conduct personal reviews of in-custody deaths.</p>\n<h2>The Surveillance Camera Failure</h2>\n<p>On the night of Epstein's death, two surveillance cameras outside his cell failed to record. The prison's log showed that the two guards assigned to check on him had not done so for approximately three hours. Both guards were later charged with falsifying prison records — charges subsequently dropped under a deferred prosecution agreement.</p>\n<h2>What Intelligence Officials Have Said</h2>\n<p>Former CIA officer Robert Baer was among the first senior intelligence figures to state publicly that Epstein's operation bore the hallmarks of an intelligence gathering operation — specifically, the systematic collection of compromising material on powerful individuals.</p>\n<h2>The Ongoing Silence</h2>\n<p>Requests filed under the Freedom of Information Act for any records relating to Epstein held by the CIA, NSA, and FBI have been met with denial that records exist, claims of national security exemptions, and in some cases, no response at all.</p>`
};

const seoExcerpts = {
  "550e8400-e29b-41d4-a716-446655440001": "Unsealed court documents expose the hidden network of powerful figures tied to Jeffrey Epstein, triggering profound questions about institutional accountability.",
  "550e8400-e29b-41d4-a716-446655440002": "An in-depth chronological investigation of Donald Trump's documented interactions with Jeffrey Epstein, spanning three decades of court records and news archives.",
  "550e8400-e29b-41d4-a716-446655440003": "Jeffrey Epstein's infamous 'Black Book' remains highly protected. Discover the legal mechanisms shielding his powerful contacts and why full disclosure is stalled.",
  "550e8400-e29b-41d4-a716-446655440004": "Exploring America's two-tier justice system through the lens of elite immunity, financial crimes, and the controversial 2008 Epstein non-prosecution agreement.",
  "550e8400-e29b-41d4-a716-446655440005": "Analyzing the unsettling silence from the U.S. intelligence community regarding Jeffrey Epstein's vast surveillance network and potential intelligence gathering operations.",
  "new-article-001": "Uncover the documented intersections between Melania Trump's early modeling days in New York and the elite social circles of Jeffrey Epstein and Ghislaine Maxwell.",
  "new-article-002": "A deep dive into the official ruling of Jeffrey Epstein's death, exploring institutional failures, physical evidence disputes, and the questions that remain unanswered.",
  "new-article-003": "Track the evolution of Donald Trump's statements regarding his relationship with Jeffrey Epstein, analyzing flight logs, court records, and shifting political narratives.",
  "new-article-004": "An analysis of Donald Trump's presidency versus his campaign promises, examining the rhetoric of draining the swamp and the reality of his administration's policies.",
  "new-article-005": "Review the formal legal claims of sexual misconduct against Donald Trump, including the 2016 federal complaint and the established verdicts from the E. Jean Carroll trials.",
  "new-article-006": "Investigate Bill Gates's documented meetings with Jeffrey Epstein after his conviction, raising critical questions about accountability, judgment, and the power of extreme wealth.",
  "new-article-007": "Explore Ghislaine Maxwell's central role in Jeffrey Epstein's trafficking enterprise, what her 20-year federal sentence means, and the powerful secrets she continues to keep.",
  "new-article-008": "Step inside Little St. James, Jeffrey Epstein's private island. Discover the architecture of isolation and what sworn testimonies reveal about the epicenter of his network.",
  "new-article-009": "Examine the controversial 2008 non-prosecution agreement negotiated by Alexander Acosta, detailing how Jeffrey Epstein temporarily escaped federal justice and its lasting impact.",
  "new-article-010": "Understand how Jeffrey Epstein built a sophisticated system of mutual compromise, using surveillance and blackmail to secure his operation among the world's most powerful."
};

const imageMap = {
  '/uploads/epstein.jpg': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
  '/uploads/mar-a-lago.jpg': 'https://images.unsplash.com/photo-1577083165350-14c11b1f6db5?auto=format&fit=crop&w=800&q=80',
  '/uploads/melania.jpg': 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&w=800&q=80',
  '/uploads/maxwell.jpg': 'https://images.unsplash.com/photo-1505664173692-dbceb18146fc?auto=format&fit=crop&w=800&q=80',
  '/uploads/courthouse.jpg': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
  '/uploads/whitehouse.jpg': 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?auto=format&fit=crop&w=800&q=80',
  '/uploads/carroll.jpg': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80',
  '/uploads/gates.jpg': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  '/uploads/epstein-temple.jpg': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
  '/uploads/island-aerial.jpg': 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
  '/uploads/island-aerial2.jpg': 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=800&q=80',
  '/uploads/acosta.jpg': 'https://images.unsplash.com/photo-1505664173692-dbceb18146fc?auto=format&fit=crop&w=800&q=80',
  '/uploads/mcc.jpg': 'https://images.unsplash.com/photo-1533062325358-00fc26bc2bf5?auto=format&fit=crop&w=800&q=80',
  '/uploads/trump.jpg': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
  '/uploads/capitol.jpg': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
};

const coverImageMap = {
  '550e8400-e29b-41d4-a716-446655440001': 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&w=1200&q=80',
  '550e8400-e29b-41d4-a716-446655440002': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80',
  '550e8400-e29b-41d4-a716-446655440003': 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
  '550e8400-e29b-41d4-a716-446655440004': 'https://images.unsplash.com/photo-1505664173692-dbceb18146fc?auto=format&fit=crop&w=1200&q=80',
  '550e8400-e29b-41d4-a716-446655440005': 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=1200&q=80',
  'new-article-001': 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80',
  'new-article-002': 'https://images.unsplash.com/photo-1533062325358-00fc26bc2bf5?auto=format&fit=crop&w=1200&q=80',
  'new-article-003': 'https://images.unsplash.com/photo-1568048602288-7517173db761?auto=format&fit=crop&w=1200&q=80',
  'new-article-004': 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1200&q=80',
  'new-article-005': 'https://images.unsplash.com/photo-1505664173692-dbceb18146fc?auto=format&fit=crop&w=1200&q=80',
  'new-article-006': 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
  'new-article-007': 'https://images.unsplash.com/photo-1533062325358-00fc26bc2bf5?auto=format&fit=crop&w=1200&q=80',
  'new-article-008': 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=1200&q=80',
  'new-article-009': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
  'new-article-010': 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?auto=format&fit=crop&w=1200&q=80',
};

const article16 = {
  "id": "a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d",
  "title": "The Geopolitical Rift: Trump and Netanyahu's Strategic Clash Over Iran",
  "slug": "trump-netanyahu-clash-over-iran",
  "excerpt": "An in-depth analysis of the complex dynamics and rising tensions between Donald Trump and Benjamin Netanyahu regarding the strategic approach to Iran's nuclear ambitions.",
  "content": "<h2>The Shifting Sands of US-Israel Relations</h2>\n<p>Historically, the alliance between the United States and Israel has been viewed as an unbreakable geopolitical bond. However, recent developments have revealed significant fissures, particularly concerning the strategic approach to Iran. The dynamic between Donald Trump and Israeli Prime Minister Benjamin Netanyahu has evolved from tight alignment to a more complicated clash of strategic interests.</p>\n<p><img src=\"https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=800&q=80\" alt=\"Diplomatic relations and geopolitical strategy concept\" /></p>\n<h2>The Root of the Conflict: Dealing with Tehran</h2>\n<p>At the heart of the disagreement lies the methodology for curbing Iran's nuclear program and its regional influence in the Middle East. While Netanyahu has historically advocated for a highly aggressive, zero-tolerance policy—often hinting at unilateral military strikes—Trump's \"America First\" doctrine has at times favored immense economic pressure coupled with a reluctance to engage in prolonged foreign military entanglements.</p>\n<p>This ideological difference became glaringly apparent during discussions on how to respond to Iranian provocations in the Persian Gulf and proxy conflicts in Syria and Lebanon. Netanyahu's push for a more forceful American military umbrella in the region occasionally clashed with Trump's desire to draw down US troop presence in the Middle East.</p>\n<h2>Political Ramifications and Global Impact</h2>\n<p>The friction between the two leaders carries profound implications for global markets and Middle Eastern stability. A lack of unified strategy between Washington and Jerusalem emboldens regional adversaries and complicates diplomatic normalization efforts, such as the Abraham Accords.</p>\n<p><img src=\"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80\" alt=\"Middle East negotiations and political strategy\" /></p>\n<h2>Conclusion</h2>\n<p>As the geopolitical landscape continues to shift, the relationship between these two political titans will serve as a bellwether for Western policy in the Middle East. Whether they can reconcile their strategic differences or continue to clash over Iran will undoubtedly shape the next decade of international relations.</p>\n<hr />\n<h4>Sources & Further Reading:</h4>\n<ul>\n<li><em>Middle East Institute: \"US-Israel Relations in the Modern Era\"</em></li>\n<li><em>Foreign Policy Research Institute: \"Iran's Regional Strategy and the Western Response\"</em></li>\n<li><em>Council on Foreign Relations: \"The Evolution of the America First Doctrine\"</em></li>\n</ul>",
  "category": "Politics",
  "author": "The American Reveal",
  "publishedAt": "2026-05-22T11:40:00Z",
  "published": true,
  "featured": true,
  "coverImage": "https://images.unsplash.com/photo-1533728005318-7b4478f77366?auto=format&fit=crop&w=1200&q=80",
  "accentColor": "#0E7490"
};

async function main() {
  try {
    const rawData = await fs.readFile(DATA_FILE, 'utf-8');
    let articles = JSON.parse(rawData);

    articles = articles.map(article => {
      if (markdownToHtml[article.id]) article.content = markdownToHtml[article.id];
      if (seoExcerpts[article.id]) article.excerpt = seoExcerpts[article.id];
      if (coverImageMap[article.id]) article.coverImage = coverImageMap[article.id];
      
      // Decode any escaped HTML entities present in the last 10 articles
      let newContent = article.content
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

      Object.keys(imageMap).forEach(localPath => {
        newContent = newContent.split(localPath).join(imageMap[localPath]);
      });
      article.content = newContent;

      return article;
    });

    // Append the 16th article if it hasn't been added yet
    if (!articles.find(a => a.slug === article16.slug)) {
       articles.push(article16);
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(articles, null, 2));
    console.log('✅ Successfully updated articles.json with SEO enhancements, HTML structure, and high-quality Unsplash images!');
  } catch (error) {
    console.error('❌ Error updating articles:', error);
  }
}

main();