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
      id: `may30b-iran-crypto-${Date.now()}-1`,
      title: "America Just Grabbed $1 Billion of Iran's Crypto — and Trump Is Rejecting the Ceasefire Deal",
      slug: 'us-seized-billion-iran-crypto-bessent-trump-rejects-ceasefire-2026',
      excerpt: "Treasury Secretary Bessent announced the U.S. has seized roughly $1 billion in Iranian cryptocurrency — 'just outright grabbed the wallets.' Hours later, Trump rejected the ceasefire MOU and sent Iran tougher terms. The economic war against Iran is escalating even as the military one pauses.",
      content: `<p>Scott Bessent did not use diplomatic language. Speaking at the Reagan National Economic Forum on May 29, 2026, the Treasury Secretary told the audience that the United States had seized approximately $1 billion in Iranian cryptocurrency assets. His phrasing was deliberate: "We just outright grabbed the wallets."</p>

<p>The announcement came as the broader Iran conflict sits in an uneasy suspension — military strikes paused, ceasefire negotiations ongoing, oil prices still elevated near $100 a barrel. But the economic war, Bessent made clear, has never stopped. While diplomats negotiate in Oman and Trump makes public statements about wanting a deal, the Treasury Department has been running a parallel campaign to strangle the Iranian government's financial lifelines through cryptocurrency seizures, sanctions enforcement, and coordination with private blockchain infrastructure companies.</p>

<p>Then, within hours of Bessent's announcement, Trump rejected the ceasefire memorandum of understanding that negotiators had described as "mostly agreed," saying he would "not rush to reach an agreement" and sending Iran a revised version with significantly tougher terms.</p>

<h2>How the Crypto Seizures Work</h2>

<p>The $1 billion figure announced by Bessent is cumulative — the total seized since the beginning of Operation Economic Fury, the financial component of the broader Iran campaign. The seizures have operated through multiple mechanisms. Direct asset freezes on identified Iranian government wallets. Coordination with stablecoin issuer Tether, which froze $344 million in USDT held across two Tron blockchain addresses linked to Iran's Islamic Revolutionary Guard Corps and the Central Bank of Iran on April 24. Enforcement actions targeting cryptocurrency exchanges that had processed Iranian transactions in violation of sanctions.</p>

<p>The use of cryptocurrency seizure as a sanctions enforcement tool represents a significant evolution in how the U.S. Treasury conducts economic warfare. Iran had, over years of conventional sanctions pressure, developed sophisticated systems for moving money through informal networks, front companies, and financial intermediaries that were difficult to track and freeze. Cryptocurrency was supposed to offer an alternative — a decentralized system that, in theory, no government could control.</p>

<p>In practice, the decentralization of cryptocurrency is more limited than its advocates claimed. Stablecoin issuers like Tether can freeze specific wallets on request. Blockchain transactions are publicly traceable in ways that cash transactions are not. The Treasury Department, working with blockchain analytics firms, has developed the capability to identify Iranian-linked wallets with significant accuracy and to coordinate with the private infrastructure companies on which those wallets depend. The $1 billion seized is a demonstration of that capability.</p>

<h2>Trump Rejects the Ceasefire — For Now</h2>

<p>The timing of Trump's rejection of the ceasefire MOU is significant. Negotiators on both sides had described the broad outlines of a 60-day memorandum as "mostly agreed." The deal would have paused military operations, allowed commercial shipping through the Strait of Hormuz under international oversight, and begun formal negotiations on Iran's nuclear program under a new framework.</p>

<p>Trump's decision to send it back with tougher conditions — on nuclear development timelines, on sanctions relief, on Iranian asset unfreezing — is consistent with his negotiating pattern: accepting a deal when it meets his terms, not when the other side says it is ready. The public statement that he is "in no rush" serves multiple strategic purposes. It maintains pressure on Iran. It signals to the Republican base that he is not making concessions out of impatience. And it gives him flexibility to accept a deal later that he can present as having negotiated harder than the initial framework would have allowed.</p>

<p>Whether it is also a genuine reflection of his assessment of the strategic situation — that Iran is near its "end of their tether," as Bessent put it, and that more pressure now will produce better terms later — is the question that will determine whether the strategy works. Iran's successor leadership has its own domestic constraints. A government that accepts terms it can be characterized as having surrendered to faces political risks that could be destabilizing. The harder Trump pushes, the harder it becomes for any Iranian government to publicly agree.</p>

<h2>The Oil Price Signal</h2>

<p>The oil market's reaction to Trump's rejection of the ceasefire deal was immediate: prices moved higher. The market had been pricing in increasing probability of a deal that would reopen the Strait of Hormuz and allow the roughly twenty-five percent of global seaborne oil that passes through it to flow again. Trump's rejection of the current terms reset those expectations.</p>

<p>At $100 per barrel sustained, the economic cost to American consumers — in gas prices, in goods prices, in the inflation that elevated energy costs feed through the entire economy — is significant and politically relevant heading into the midterm election cycle. The administration is betting that the economic pressure on Iran will produce better terms quickly enough that the domestic cost remains manageable. That bet has a deadline built into it: if the conflict extends into the fall without resolution, the political cost of $100 oil becomes a serious electoral vulnerability.</p>

<p>The billion dollars in seized crypto is a pressure tool. The rejected ceasefire is a negotiating move. The oil price is the clock. All three things are running simultaneously, and how they resolve will define one of the most consequential chapters of Trump's second term.</p>`,
      author: 'The American Reveal Foreign Policy Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may30b-epstein-35m-${Date.now()}-2`,
      title: "3.5 Million Pages. The DOJ Says the Epstein Release Is Complete. Archivists and Survivors Say Otherwise.",
      slug: 'doj-epstein-files-35-million-pages-release-complete-missing-pages-2026',
      excerpt: "The Justice Department just published 3.5 million pages of Epstein material — 2,000 videos, 180,000 images, one of the largest document releases in U.S. history. It says its obligations are now fulfilled. Outside archivists, congressional investigators, and survivors disagree. Here's what's missing.",
      content: `<p>The numbers are staggering. The Department of Justice has published over 3.5 million pages of material responsive to the Epstein Files Transparency Act — including more than 2,000 videos and 180,000 images, making it one of the largest single document releases in American history. The DOJ has told Congress that with this release, combined with previous tranches, its obligations under the law are complete.</p>

<p>The archivists say pages are missing. The survivors say the most important documents are still hidden. Congressional investigators say the release is less complete than it appears. And the debate over what 3.5 million pages does and does not contain has become one of the most consequential disputes in the ongoing Epstein accountability effort.</p>

<h2>What Was Released</h2>

<p>The January 2026 release — the largest single tranche — included FBI investigative files, interview records, financial documents, correspondence, and the visual material: the videos and images that represent some of the most significant evidence of what actually happened at Epstein's various properties. The visual archive alone, at 180,000 images and more than 2,000 videos, contains material that investigators and prosecutors have described as directly relevant to identifying individuals who visited Epstein's properties and who may have participated in or witnessed the abuse of young women and girls.</p>

<p>The Epstein Files Transparency Act, signed into law by Trump on November 19, 2025, imposed specific obligations on the DOJ to produce all responsive material. The act was written to be comprehensive — the result of years of advocacy by survivors and their attorneys who had watched previous voluntary releases produce heavily redacted, carefully curated documents that protected powerful people rather than exposing them.</p>

<p>The release of 3.5 million pages is, in raw terms, extraordinary. It dwarfs the releases that preceded it. For ordinary observers trying to navigate the Epstein accountability landscape, the sheer volume is itself a challenge — 3.5 million pages cannot be meaningfully reviewed by any individual or small team, and the documents that matter most could be buried in a flood of administrative records, duplicate files, and marginally relevant material.</p>

<h2>What Archivists and Investigators Say Is Missing</h2>

<p>Outside archivists who have been tracking the releases — academics, journalists, and civil society organizations who have cross-referenced the released documents against the known Epstein record — have identified specific gaps. Pages that were included in an early release were subsequently taken down. Documents that witnesses and court records establish should exist are absent from what was published. Specific FBI 302 interview forms — the standard record of witness interviews — are not present in the release when the underlying interviews are documented elsewhere in the record.</p>

<p>The most significant specific gap, identified by NPR's investigation and now confirmed by congressional investigators, is the material related to allegations involving the President. Those pages, which the documentary record establishes should exist, are not in the 3.5 million pages the DOJ has published. The FBI interviewed a complainant about Trump-related allegations multiple times. Those interviews are not there.</p>

<p>Congressional Democrats on the House Oversight Committee have formally requested an accounting of what was withheld and why. The DOJ has maintained that its release is complete and compliant with the Transparency Act's requirements. The gap between those two positions has not been resolved, and the act does not contain a clear mechanism for forcing resolution quickly.</p>

<h2>The Survivors' Assessment</h2>

<p>For the women who spent years fighting for the Epstein files to be released, the 3.5 million pages represent something genuinely significant — and genuinely insufficient. The scale of what has been released is larger than anyone who began the fight for transparency a decade ago would have predicted was possible. The FBI files exist. The images exist. Some of the documentary record of what happened has been made public in ways that cannot be undone.</p>

<p>At the same time, the most critical accountability question — who, besides Epstein himself and Ghislaine Maxwell, faces criminal consequences for what the documents show — has not been answered by the release. Having 3.5 million pages of documentary evidence of a massive sex trafficking operation produces accountability only if prosecutors use that evidence to bring cases. Most criminal accountability so far has unfolded overseas — in the UK's investigation of Prince Andrew, in various foreign jurisdictions where Epstein associates have faced legal proceedings — rather than in U.S. courts.</p>

<p>The DOJ says its disclosure obligations are fulfilled. Whether that is true in the technical legal sense is a question courts may ultimately have to resolve. Whether it is true in the substantive sense — whether the documents that would produce criminal accountability for the most powerful people connected to Epstein's network have been released — is a question whose answer is, at minimum, contested.</p>

<h2>What Happens Next</h2>

<p>The release of 3.5 million pages does not end the Epstein accountability process. It changes its character. The investigative phase — the fight to obtain documents — transitions into the analytical phase, the work of going through what was released to identify the evidence that matters most and connecting it to potential prosecutorial action.</p>

<p>That work is happening simultaneously across multiple institutions: the House Oversight Committee, independent journalists and researchers, survivors' legal teams, and foreign law enforcement agencies. The volume of material is enormous. The time available before political momentum shifts, before the congressional investigation concludes, before the news cycle moves on, is finite.</p>

<p>Whether 3.5 million pages produces justice for Epstein's victims, or whether it becomes a massive release that can be pointed to as evidence of transparency while the most important accountability questions remain unanswered, will depend on whether the analytical work produces findings that the legal system is willing to act on. The documents are there. The question is what we do with them.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `may30b-big-beautiful-bill-${Date.now()}-3`,
      title: "The Big Beautiful Bill Passed 51–50. JD Vance Broke the Tie. Here's Everything That's Now Law.",
      slug: 'big-beautiful-bill-passes-senate-51-50-vance-tiebreaker-whats-in-it',
      excerpt: "Vice President JD Vance cast the deciding vote to pass Trump's sweeping reconciliation package — $46 billion for the border wall, permanent tax cuts, $150 billion for defense. Democrats called it a disaster. Republicans called it historic. Here's what actually changed.",
      content: `<p>The vote was 50-50. Vice President JD Vance walked into the Senate chamber and cast the tiebreaking vote. The One Big Beautiful Bill Act passed.</p>

<p>The legislation — Trump's signature domestic policy achievement of his second term, combining tax cuts, border enforcement funding, and defense increases into a single reconciliation package — cleared the Senate after a marathon voting session that stretched into the early morning hours. The margin reflects the political reality of a Republican majority thin enough that any two defections produce a tie and any three produce defeat. In the end, the defections were managed, the tiebreaker was available, and the most consequential domestic legislation since the 2017 Tax Cuts and Jobs Act became law.</p>

<h2>What's In It: The Major Provisions</h2>

<p>The bill is massive — hundreds of pages of legislative text covering tax policy, immigration enforcement, defense spending, and domestic program restructuring. The headline provisions are these:</p>

<p><strong>Border and immigration:</strong> More than $46.5 billion for border wall construction and related infrastructure — the largest single appropriation for physical border security in American history. Additional funding for immigration enforcement personnel, detention capacity expansion, and deportation operations. Changes to immigration law that make it harder to claim asylum at the southern border and that expedite removal proceedings.</p>

<p><strong>Tax policy:</strong> The bill makes permanent many of the individual tax cuts from the 2017 Tax Cuts and Jobs Act that were set to expire in 2025, including the expanded child tax credit, now permanently set at $2,200. It preserves the corporate rate reductions from 2017. It includes new provisions on carried interest treatment and international taxation that reflect the administration's priorities on keeping manufacturing investment in the United States.</p>

<p><strong>Defense spending:</strong> A $150 billion increase in the Department of Defense budget — the largest single-year defense spending increase in decades. The money is directed toward naval expansion, missile defense systems, and the technology modernization that military leaders have been requesting for years. In the context of the Iran conflict, the timing of the defense increase is significant: it funds the continuation and potential escalation of military operations in the Gulf while simultaneously funding the long-term modernization that strategic planners say is necessary to maintain American military dominance.</p>

<p><strong>Domestic program changes:</strong> Work requirements for Medicaid recipients — a provision that the Congressional Budget Office estimated will result in millions of Americans losing coverage — and changes to SNAP eligibility that tighten income limits and add documentation requirements. Democrats have characterized these as cuts to essential safety net programs. Republicans have characterized them as accountability measures that ensure programs serve people who truly need them.</p>

<h2>How It Passed: The Senate Dynamics</h2>

<p>The path through the Senate was not smooth. The "vote-a-rama" — the period of unlimited amendment votes that precedes final passage of reconciliation bills — produced dozens of politically charged votes that will appear in campaign advertisements for years. Democratic senators offered amendments designed to force Republicans to vote against popular provisions. Republican leadership blocked most of them, but the procedural battle consumed more than twenty hours.</p>

<p>The two Republican senators whose votes were most uncertain — both representing states with large Medicaid populations where the coverage losses are expected to be most significant — ultimately voted for the bill after extracting private assurances about implementation flexibility. Whether those assurances translate into meaningful mitigation of the coverage losses will be tested over the next several years of implementation.</p>

<p>The tiebreaker itself — Vance's vote — was constitutionally available because the Vice President can vote to break ties in the Senate. It has been used rarely in American history precisely because engineering a 50-50 split requires a level of vote management that most legislative situations do not produce. That it was needed here reflects both how close the vote was and how much the administration wanted this bill.</p>

<h2>What Democrats Are Saying</h2>

<p>The Democratic response has been uniform in its alarm and specific in its targeting of the Medicaid and SNAP provisions. Congressional Budget Office projections showing millions of Americans losing health coverage have become the centerpiece of Democratic messaging — a concrete, quantifiable cost that the party intends to make the defining image of Republican governance heading into the midterms.</p>

<p>Senate Minority Leader Chuck Schumer called the bill "the largest transfer of wealth from working Americans to billionaires in history." That characterization oversimplifies the legislation's distributional effects, but it captures the Democratic political strategy: frame the tax provisions as benefits to the wealthy paid for by cuts to the poor. Whether that framing resonates with the voters Republicans need to hold — suburban moderates, seniors on fixed incomes, workers in states with large Medicaid populations — will determine much of the midterm landscape.</p>

<h2>What It Means for 2026 and Beyond</h2>

<p>The passage of the Big Beautiful Bill represents the full realization of the legislative agenda Trump outlined in the 2024 campaign. The border wall will be built — not metaphorically, not as a partial structure, but as a comprehensive physical barrier funded at a level that makes completion plausible within a single presidential term. The tax cuts will not expire. The defense buildup will proceed.</p>

<p>The political consequences will play out over the next eighteen months. The border provisions take effect immediately and will be visible — in wall construction, in deportation numbers, in the detention of individuals whose cases the prior system would have processed differently. The tax provisions take effect at the 2025 filing year, meaning Americans will see the permanent child tax credit in their 2026 tax returns. The Medicaid changes phase in over two years, meaning the coverage losses will accelerate through 2027.</p>

<p>Republicans are betting that voters will feel the border enforcement and the tax cuts before they feel the Medicaid losses — that the sequencing favors them in November. Democrats are betting the opposite. The bill is law. The election will tell us who read the political calendar correctly.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
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
