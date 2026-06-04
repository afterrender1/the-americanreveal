import { NextRequest, NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/articles'
import { kvSet } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.AUTH_SECRET && secret !== 'seed2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const articles = [
    // ── HOT TOPICS ──────────────────────────────────────────────────────────────
    {
      id: `may30-iran-${Date.now()}-1`,
      title: "Oil at $100, Hormuz Closed, Ceasefire Talks Stalling: Inside America's Most Dangerous Gamble",
      slug: 'iran-war-strait-hormuz-oil-prices-ceasefire-2026',
      excerpt: "Operation Epic Fury killed Iran's Supreme Leader and shut the world's most critical oil chokepoint. Now oil is back at $100 a barrel, a ceasefire is 'mostly agreed' but unsigned, and the U.S. military is warning it's ready to resume combat. Here's what's actually happening.",
      content: `<p>On February 28, 2026, the United States and Israel launched coordinated airstrikes on Iran under the codename Operation Epic Fury. The strikes targeted military facilities, nuclear sites, and Iranian leadership. Supreme Leader Ali Khamenei was killed. Iran's nuclear program was set back by years. And the Strait of Hormuz — the narrow waterway through which twenty-five percent of the world's seaborne oil and twenty percent of its liquefied natural gas passes — was closed.</p>

<p>Three months later, oil is back at $100 a barrel. The strait remains contested. A ceasefire agreement is described as "mostly agreed" but still unsigned. The U.S. military is warning it is ready to resume combat if talks collapse. And the American public is watching gas prices, watching the news, and trying to understand how a war that was supposed to be decisive has produced something that feels like it has no clear ending.</p>

<h2>How the War Started and What It Achieved</h2>

<p>The Trump administration's decision to strike Iran was the product of months of escalating tensions over Iran's nuclear program, its support for proxy forces in the region, and its attacks on American military assets in the Gulf. The decision to make the strikes comprehensive — targeting leadership, not just facilities — represented a strategic bet that decapitating the Iranian government would accelerate the country's collapse or produce a successor leadership more willing to negotiate.</p>

<p>That bet has produced mixed results. Khamenei's death did create leadership chaos in Tehran. The Iranian nuclear program was significantly degraded. Several of the proxy networks Iran had funded and armed across the region were disrupted by the loss of their central command and financing. In those terms, Operation Epic Fury achieved what it set out to achieve.</p>

<p>What it did not achieve was a quick resolution to the Strait of Hormuz crisis. Iranian forces, acting on orders given before the strikes and continuing under successor military commanders, declared the strait closed beginning March 4. Attacks on commercial shipping attempting to transit the strait have created an effective blockade of the world's most critical energy chokepoint. The economic consequences have been global and severe.</p>

<h2>The Oil Price Roller Coaster</h2>

<p>Global oil prices spiked dramatically when the strait closed, touching $140 per barrel in mid-March before receding as buyers adapted, alternative supply routes were developed, and strategic petroleum reserves were released by the U.S. and its allies. When Trump signaled in mid-May that he was pulling back from a planned new wave of military strikes to allow ceasefire negotiations more time, oil fell more than ten percent in five days — the market's response to the possibility of a negotiated resolution that would reopen the strait.</p>

<p>Then new U.S. strikes were launched. Oil jumped back to $100. The cycle — hope for ceasefire, strikes, price spike, hope for ceasefire — has played out multiple times since March and has created extraordinary volatility in energy markets that affects everything from airline tickets to grocery prices to the cost of heating and cooling American homes.</p>

<p>The economic impact on ordinary Americans has been significant. Average gas prices nationally have been elevated for months. The inflation that had been gradually receding from its post-COVID peaks has been pushed upward again by energy costs. The political implications of $100 oil sustained through the summer and into the fall midterm election period are not lost on the administration, which is why the ceasefire negotiations have a particular urgency that goes beyond the geopolitical.</p>

<h2>The Ceasefire Talks</h2>

<p>Negotiations for a ceasefire and a framework for reopening the Strait of Hormuz have been ongoing through intermediaries in Oman and elsewhere. The outlines of what is "mostly agreed," according to sources familiar with the talks, include a 60-day memorandum of understanding that would pause military operations, allow commercial shipping through the strait under some form of international oversight, and begin negotiations on Iran's nuclear program under a new framework.</p>

<p>What remains unresolved — the gap between "mostly agreed" and signed — involves the specific terms of the inspection regime for Iranian shipping, the conditions under which the U.S. and Israel would guarantee not to resume strikes, and the political question of which Iranian figures the successor government can allow to participate in an agreement that will inevitably be characterized domestically as capitulation to American military pressure.</p>

<p>Trump has not signed off on the current terms. His public statements have been characteristically oscillating — warning of devastating consequences if Iran does not agree, then suggesting a deal is close, then threatening new strikes. The pattern has made it difficult for Iranian negotiators to know which signals represent actual positions and which represent negotiating theater.</p>

<h2>The Military's Warning</h2>

<p>Defense Secretary Pete Hegseth's statement that the U.S. military is "ready to resume combat in the Gulf if needed" is not a bluff. American naval and air assets in the region have been maintained at elevated readiness since the February strikes. The military option is real and available. Whether Trump exercises it depends on whether the ceasefire talks produce an agreement, and whether that agreement holds.</p>

<p>For the American public, the question that has no clean answer is what success looks like from here. The nuclear program was degraded. Khamenei is dead. The strait is still contested. Oil is at $100. A deal is close but not signed. The war that was supposed to be decisive has produced outcomes that are real but incomplete, at costs — in lives, in treasure, in economic disruption — that are still being tallied.</p>

<p>The answer to what comes next is being written right now in negotiating rooms in Oman. The world is watching the oil price for signals about how those negotiations are going.</p>`,
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
      id: `may30-newark-ice-${Date.now()}-2`,
      title: "Tear Gas in Newark: When a State and the Federal Government Go to War Over an ICE Detention Center",
      slug: 'newark-ice-detention-tear-gas-new-jersey-protests-2026',
      excerpt: "New Jersey state authorities announced they were taking over security at the Delaney Hall ICE facility after tear gas was fired on protesters outside. The standoff between Trump's immigration enforcement and Democratic state governments has reached a new flashpoint. This is where it stands.",
      content: `<p>On May 30, 2026, tear gas spread over protesters gathered outside Delaney Hall, an Immigration and Customs Enforcement detention facility in Newark, New Jersey. In the aftermath of the clashes between ICE agents and demonstrators, New Jersey state authorities made an announcement that escalated a local confrontation into a constitutional standoff: they were taking charge of security at the facility.</p>

<p>The move was unprecedented. A state government asserting authority over the security arrangements at a federal immigration detention center is not something that has a clear legal framework. It is an assertion of state power against federal enforcement that the Trump administration characterized immediately as illegal interference with federal law. And it represents the sharpest point yet in a conflict between the administration's immigration enforcement agenda and the Democratic-led states that have been resisting it since day one of Trump's second term.</p>

<h2>What Happened at Delaney Hall</h2>

<p>The protests outside Delaney Hall have been ongoing for weeks, part of a broader wave of demonstrations against the administration's immigration detention policies that have spread across the country. Newark has been a particular flashpoint. The city has a large immigrant community, a Democratic mayor and city council that have been vocal in their opposition to ICE operations, and a history of activism around immigration enforcement that predates the current administration.</p>

<p>The events of May 30 began when a confrontation between protesters and ICE agents at the facility perimeter escalated. Tear gas was deployed. Videos of the deployment spread rapidly on social media, generating national attention and bringing additional protesters to the scene. State police and other New Jersey authorities who had been monitoring the situation intervened.</p>

<p>The state's announcement that it was taking over security responsibility was, in legal terms, an act of extraordinary boldness. The federal government has clear authority over its own detention facilities. State governments do not have the authority to assume control of federal security operations simply because they disagree with how those operations are being conducted. New Jersey officials clearly understood this — the announcement was not a legal claim so much as a political statement and a practical assertion of force.</p>

<h2>The Constitutional Collision</h2>

<p>The legal framework governing the relationship between federal immigration enforcement and state authority has been contested and reshaped throughout the Trump presidency. The administration has pushed aggressively to expand federal immigration enforcement into jurisdictions that have declared themselves sanctuaries — places that have explicitly limited local law enforcement cooperation with ICE. Courts have generally upheld federal immigration authority while limiting the administration's ability to coerce state and local cooperation.</p>

<p>What New Jersey did at Delaney Hall goes beyond the sanctuary city framework. It is not a refusal to cooperate with federal enforcement. It is an assertion of affirmative state authority over a federal facility. That is a different and more confrontational legal posture, and it is one that the federal government is almost certain to challenge in court if the state persists in it.</p>

<p>The administration's response has been to characterize New Jersey's actions as illegal obstruction and to promise legal action. Whether that legal action is swift enough to resolve the immediate standoff, or whether the standoff persists in a kind of constitutional limbo while the courts work through the question, will determine whether this incident is an isolated escalation or the beginning of a new phase in the federal-state immigration conflict.</p>

<h2>The Political Calculation on Both Sides</h2>

<p>For New Jersey's Democratic governor and the state officials who made the decision to intervene, the calculation is about base mobilization and resistance politics. Democratic voters in New Jersey, and in similar blue states, have been demanding that their elected officials do more than express opposition to Trump's immigration policies. Taking a dramatic, visible action — even one that may not survive legal scrutiny — demonstrates responsiveness to that demand in a way that carefully worded statements do not.</p>

<p>For the Trump administration, the confrontation serves its own political purposes. The image of Democratic state officials "blocking" immigration enforcement plays well with the Republican base and fits the narrative that liberal states are protecting illegal immigrants at the expense of public safety. Whether the tear gas images — the visible deployment of chemical weapons against civilian protesters — complicate that narrative depends on which news sources the relevant voters consume.</p>

<p>What is clear is that the confrontation at Delaney Hall is not going to be the last of its kind. The administration has signaled it intends to accelerate deportation operations through the summer. Democratic states have signaled they intend to resist. The legal and political collision between those two commitments is going to produce more Delaney Halls — more moments where the abstract conflict over immigration policy becomes concrete and visible and involves tear gas and state troopers and constitutional questions that courts are going to have to resolve at a speed they are not designed to operate at.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },

    // ── TRUMP SERIES ────────────────────────────────────────────────────────────
    {
      id: `may30-trump-vs-presidents-${Date.now()}-3`,
      title: "Trump vs. The Last Four Presidents: An Honest Comparison of What They Each Actually Delivered",
      slug: 'trump-vs-previous-presidents-comparison-achievements-record',
      excerpt: "Bush gave us two wars and a financial crisis. Obama gave us a slow recovery and Obamacare. Trump's first term delivered a booming economy before COVID hit. Biden got inflation. Now Trump is back — and the numbers from his second term are forcing a serious re-evaluation of where he stands in the modern presidential ranking.",
      content: `<p>Presidential rankings are usually written by historians, decades after the fact, with the benefit of hindsight that was unavailable to the people living through the events being assessed. That distance is useful. It is also a reason why the rankings we have — the ones that consistently place Lincoln, Washington, and FDR at the top — do not tell us very much about how the presidents of the last thirty years should be evaluated relative to each other.</p>

<p>The comparison that matters to most Americans is the more immediate one: not how Trump compares to Lincoln, but how he compares to the presidents who came before him in the modern era. Bush, Obama, Trump's first term, Biden. Four presidents across twenty-four years. Here is an honest look at what each delivered and what it costs to deliver it.</p>

<h2>George W. Bush: Two Wars and a Financial Collapse</h2>

<p>The Bush presidency is, in retrospect, difficult to defend on outcomes. The decision to invade Iraq on the basis of intelligence that turned out to be wrong — weapons of mass destruction that did not exist, a connection to al-Qaeda that was not what was claimed — produced a war that cost more than 4,400 American lives, hundreds of thousands of Iraqi civilian deaths, and trillions of dollars, while destabilizing a region that is still paying the price.</p>

<p>The 2008 financial crisis, which originated in the regulatory environment of Bush's second term, wiped out trillions in American household wealth, produced the deepest recession since the Great Depression, and required a bailout of the financial system that cost hundreds of billions in public funds. The combination of two costly wars and a financial collapse is a legacy that is difficult to spin positively regardless of ideological starting point.</p>

<p>Bush's genuine accomplishments — PEPFAR, which saved millions of lives from AIDS in Africa, the initial response to 9/11, No Child Left Behind's accountability framework — are real but operate in the shadow of the larger failures.</p>

<h2>Barack Obama: Recovery, but Slowly</h2>

<p>Obama inherited the worst economic crisis since the 1930s and oversaw a recovery that, while real, was the slowest in post-war American history. The unemployment rate peaked at ten percent in October 2009 and did not return to pre-crisis levels until 2015. GDP growth averaged around 2.3 percent annually over his two terms — positive, but historically modest for a recovery period.</p>

<p>The Affordable Care Act extended coverage to more than twenty million previously uninsured Americans. It also increased costs for many middle-class families who did not qualify for subsidies, produced political backlash that cost Democrats the House in 2010, and remains the most contested domestic policy achievement of the modern era.</p>

<p>On foreign policy, Obama ended the combat mission in Iraq, oversaw the killing of Osama bin Laden, negotiated the Iran nuclear deal, and expanded drone warfare to an unprecedented degree. The withdrawal from Iraq created the conditions for the rise of ISIS. The Libya intervention produced a failed state. The Syria policy produced a humanitarian catastrophe. The foreign policy record is mixed in ways that the administration's proponents have sometimes been slow to acknowledge.</p>

<h2>Trump's First Term: The Pre-COVID Economy and Its Disruptions</h2>

<p>The pre-COVID Trump economy was, by the numbers, genuinely strong. Unemployment hit a fifty-year low. Blue-collar wage growth reached levels not seen in decades. The stock market reached record highs. GDP growth exceeded the Obama years in 2018 and 2019. The tax reform package delivered on the corporate rate reduction that business advocates had sought for years.</p>

<p>COVID-19 then produced the sharpest economic contraction in American history. The administration's response — the CARES Act stimulus, Operation Warp Speed for vaccine development — combined genuine achievements with documented failures in testing, PPE distribution, and public health messaging. More than a million Americans died from COVID during and after his first term.</p>

<p>On foreign policy, Trump's first term was notable for what it did not start as much as what it did. No new major military engagements were initiated. The Abraham Accords normalized relations between Israel and four Arab states, the most significant Middle East diplomatic achievement in a generation. The trade confrontation with China represented a genuine strategic recalibration that has outlasted his first term.</p>

<h2>Biden: Inflation and an Incomplete Legacy</h2>

<p>Biden's presidency will be defined, in popular memory, by inflation. The Consumer Price Index peaked at 9.1 percent in June 2022 — the highest in forty years — driven by COVID supply chain disruptions, pandemic-era stimulus, and energy price shocks from the Ukraine war. The political damage from that inflation spike was severe and contributed significantly to Trump's 2024 victory.</p>

<p>The Infrastructure Investment and Jobs Act and the Chips and Science Act represented real industrial policy achievements that will shape American manufacturing for decades. The Inflation Reduction Act was the largest climate legislation in American history. Biden's foreign policy managed the response to Ukraine's defense with significant allied support. His record is more substantive than the inflation narrative allows — and less popular than his administration hoped.</p>

<h2>Trump's Second Term: The Early Numbers</h2>

<p>Trump's second term has produced economic data that his supporters point to as validation of his approach and his critics situate within concerning context. Real GDP grew at 4.3 percent annualized in the third quarter of 2025 — significantly above expectations and above Obama-era averages. Blue-collar wage growth hit levels not seen in nearly sixty years. Illegal border crossings reached their lowest level since the 1970s, achieving what supporters describe as genuine border control for the first time in a generation.</p>

<p>The Iran war has complicated the picture significantly. Oil at $100 a barrel, global supply chain disruption, and the economic uncertainty of an ongoing military conflict in the Gulf are headwinds that the strong GDP numbers did not anticipate. Consumer sentiment has declined sharply. The long-term economic consequences of the Iran conflict are not yet written.</p>

<p>Where Trump lands in the modern presidential ranking depends substantially on how the next three years unfold — on whether the Iran situation resolves favorably, on whether the economic gains prove durable, on whether the institutional stresses of his second term produce lasting damage or prove more resilient than critics feared. The comparison to his recent predecessors is more competitive than his opponents are willing to acknowledge and more complicated than his supporters prefer to admit.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may30-trump-businessman-${Date.now()}-4`,
      title: "Is Trump 'Just a Businessman'? The Answer Is More Complicated — and More Interesting — Than That",
      slug: 'trump-businessman-president-dealmaker-what-he-brings-white-house',
      excerpt: "Critics dismiss him as a real estate developer who stumbled into politics. Supporters call him America's CEO. Both framings miss something essential. What does a businessman's mind actually bring to the presidency — and where does it fall short?",
      content: `<p>The "just a businessman" framing has always been reductive — and it cuts both ways. His critics use it to suggest he lacks the depth, the temperament, and the institutional understanding that the presidency demands. His supporters use it to suggest he brings a results-oriented, dealmaking efficiency that career politicians lack. Both framings capture something real and miss something important.</p>

<p>Donald Trump is not just a businessman. He is a specific kind of businessman — one whose career has been built on branding, negotiation, real estate leverage, and the cultivation of a public persona that is itself a product. Understanding what that specific background brings to the White House, and where it creates blind spots, is more useful than either the dismissive or the celebratory version of the businessman narrative.</p>

<h2>What the Business Background Actually Developed</h2>

<p>Trump's business career is genuinely unusual as preparation for the presidency, but not in the ways usually cited. The skills it developed most intensively are: the ability to negotiate under pressure, comfort with risk and with the possibility of failure, the instinct to use attention and media presence as strategic tools, and a particular kind of decisiveness that comes from years of making decisions with incomplete information and living with the consequences.</p>

<p>Presidential historians who have studied effective executives note that these are not trivial skills. The presidency involves continuous high-stakes negotiation — with Congress, with foreign leaders, with domestic interest groups, with the media. It involves decisions that must be made without complete information. It involves the management of public perception as a political resource. A president who is uncomfortable with any of these dimensions is going to be less effective than one who is not.</p>

<p>Trump's specific business background — real estate, hospitality, entertainment — also developed a granular understanding of how physical investment, development, and infrastructure work that is relevant to a president dealing with infrastructure policy, economic development, and the practical mechanics of how large projects get built. His instinct toward visible, tangible results — buildings, walls, factories — reflects a businessman's preference for concrete outcomes over procedural achievements.</p>

<h2>The Dealmaking Model and Its Presidential Application</h2>

<p>Trump has described his approach to international affairs explicitly in dealmaking terms, and in some cases, the framework has produced results that conventional diplomatic approaches had failed to achieve. The Abraham Accords — the normalization agreements between Israel and the UAE, Bahrain, Sudan, and Morocco — were negotiated through a process that bypassed traditional State Department channels and relied heavily on personal relationships, financial incentives, and the application of direct pressure in ways that the career diplomatic establishment considered unorthodox.</p>

<p>The result was the most significant shift in Middle Eastern diplomatic relationships in decades. Countries that had maintained formal hostility toward Israel for fifty years established normal relations within months. The conventional wisdom that such normalization was impossible without a Palestinian state was proven wrong. The dealmaking instinct — the willingness to approach an apparently intractable problem as a negotiation with addressable interests on all sides — produced something that decades of traditional diplomacy had not.</p>

<p>The same framework has produced less uniformly positive results in other contexts. Trade negotiations with China, which Trump approached as bilateral deal-making, produced agreements that were not fully implemented and a trade relationship that remains more conflicted than before the negotiations began. The North Korea diplomacy — the summits with Kim Jong-un that generated enormous publicity — did not produce the denuclearization that was their stated goal. The dealmaking model works better in some contexts than others, and the president's instinct has not always distinguished reliably between the contexts where it applies and those where it does not.</p>

<h2>Where the Business Background Creates Blind Spots</h2>

<p>The most significant limitation of the businessman-president model is institutional. The presidency operates within and through institutions — Congress, the courts, the permanent executive branch, allied governments, international organizations — that do not respond to the negotiating dynamics Trump is most comfortable with. You cannot fire a senator the way you fire an employee. You cannot renegotiate a constitutional provision because you think the terms are unfair. You cannot walk away from a Supreme Court ruling because you think the court got it wrong.</p>

<p>Trump's relationship with institutional constraints has been consistently adversarial — not because he is uniquely authoritarian, but because his professional background did not develop the instinct to work within and through institutions rather than around them. A businessman who disagrees with a regulator tries to get the regulation changed or to find a workaround. A president who operates that way finds himself in conflicts with co-equal branches of government that create friction, legal challenges, and political costs.</p>

<p>The second limitation is the distinction between private-sector and public-sector accountability. In business, the relevant metric is profit — a single number that aggregates everything else. The presidency does not have an equivalent metric. The interests it must balance are plural, competing, and not reducible to a single measure. A president who defaults to thinking about outcomes in terms of a business metric — stock market performance, GDP growth, deal count — may systematically underweight the things that do not show up easily in numbers: institutional health, democratic norms, the interests of people who are not well-positioned in the market.</p>

<h2>The Honest Assessment</h2>

<p>Trump is more than just a businessman. He is a politician who has won two presidential elections, navigated four years of intense opposition in his first term, and is now serving a second term while managing a war, an economic transformation, and a political environment that would tax any president's capabilities. The businessman background is part of his profile, not the whole of it.</p>

<p>Whether that background has made him a better or worse president than someone with a different background would have been is ultimately unknowable — you cannot run the counterfactual. What you can say is that it has made him a distinctive president, one whose strengths and weaknesses follow patterns that are recognizable from his business career rather than from the conventional political biography. The dealmaker who produced the Abraham Accords is the same dealmaker whose North Korea negotiations stalled. The risk-taker who launched Operation Epic Fury is the same risk-taker whose business career included six bankruptcies. The pattern is consistent. Whether you see it as a feature or a flaw depends on how you weigh the outcomes.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may30-trump-economy-${Date.now()}-5`,
      title: "The Numbers Don't Lie: Trump's Economic Record Is Stronger Than His Critics Will Admit",
      slug: 'trump-economic-record-gdp-wages-border-second-term-2026',
      excerpt: "GDP at 4.3%, blue-collar wages at sixty-year highs, illegal crossings at their lowest since the 1970s. The mainstream media has spent two years downplaying Trump's economic numbers. Here's an honest look at what the data actually shows — and where the real vulnerabilities are.",
      content: `<p>There is a version of the Trump economic story that you will not hear from most mainstream outlets. It involves real numbers — official government statistics, Federal Reserve data, independent economic analysis — that paint a picture significantly more positive than the narrative of chaos and disruption that dominates much of the coverage. The numbers exist. They are not fabricated. Examining them honestly is not an act of political loyalty to Trump. It is an act of analytical integrity.</p>

<p>Here is what the data shows, and here is the full context that makes sense of it.</p>

<h2>GDP Growth: Exceeding Expectations</h2>

<p>Real GDP grew at a 4.3 percent annualized rate in the third quarter of 2025 — more than double the Congressional Budget Office's pre-term projections and significantly above the 2.3 percent average that characterized the Obama recovery years. The growth was broad-based, driven by manufacturing investment, consumer spending, and business capital expenditure that reflected genuine economic confidence rather than a single-sector spike.</p>

<p>For context: Obama's best GDP quarter was 5.1 percent in the second quarter of 2014, achieved during the recovery from the 2008 crisis. Biden's best single quarter was 6.9 percent in the fourth quarter of 2021, which reflected the post-COVID reopening bounce rather than underlying economic health. Trump's 4.3 percent in 2025 represents genuine momentum in a mature economic cycle — the kind of growth that economists generally consider difficult to achieve when you are not recovering from a crisis.</p>

<p>The caveat is the Iran war's disruption, which has introduced uncertainty that the 2025 numbers did not reflect. How the economy performs through the conflict and its aftermath will be the more important measure of Trump's economic stewardship.</p>

<h2>Wages: The Blue-Collar Turnaround</h2>

<p>The wage story is the one that should matter most to the voters who have supported Trump most consistently — and it is the one that is most consistently underreported in outlets that serve primarily professional-class readers. Blue-collar wage growth under Trump's second term has hit levels not seen in nearly sixty years. Workers in manufacturing, construction, logistics, and other non-professional sectors have seen real wage gains that outpace inflation — a reversal of a decades-long trend of stagnation for workers without college degrees.</p>

<p>The mechanisms behind this wage growth are multiple and contested. Trump's immigration enforcement, which has significantly reduced the inflow of low-wage workers competing in blue-collar labor markets, is one contributor. Reshoring of manufacturing facilitated by the tariff structure is another. A tight labor market in physical-work sectors, sustained longer than economists predicted, has given workers bargaining power they did not have when labor markets were looser.</p>

<p>Critics argue that higher wages in blue-collar sectors are partly offset by higher prices for goods produced in those sectors — that tariffs tax consumers to benefit workers, producing a redistribution rather than a net gain. This is a legitimate analytical point. It does not change the fact that for workers who have experienced the wage gains, the gains are real and represent something that previous administrations promised but did not deliver.</p>

<h2>The Border: Forty-Year Low</h2>

<p>Illegal border crossings reached their lowest level since the 1970s in 2025. This is a remarkable achievement by any honest measure. Immigration enforcement has been a defining political issue for decades, producing promises from politicians of both parties that were routinely broken or produced limited results. The scale of what the Trump administration achieved on this specific metric — not just reduction but a reduction to levels not seen in half a century — is historically significant regardless of your view of the underlying immigration policy.</p>

<p>The human costs of achieving that reduction are real and have been extensively documented: families separated, asylum seekers returned to dangerous conditions, deportation operations that have affected long-established communities. These costs should be part of any honest accounting. So should the achievement itself, which the populations most supportive of enforcement — communities that experienced elevated crime connected to illegal immigration, workers in sectors affected by illegal labor competition — regard as genuinely meaningful.</p>

<h2>Where the Vulnerabilities Are</h2>

<p>An honest assessment of Trump's economic record requires acknowledging the vulnerabilities alongside the achievements. The Iran war represents the most significant economic risk: sustained oil above $100, continued closure of the Strait of Hormuz, and the broader uncertainty of ongoing military conflict in the world's most important energy region are headwinds that the strong 2025 numbers did not anticipate and that could significantly reshape the economic picture by 2027.</p>

<p>Consumer sentiment has declined sharply from the optimism of late 2025. The University of Michigan Consumer Sentiment Index reached record lows in early 2026. Sentiment is a leading indicator — it reflects expectations about future conditions, not current ones. When Americans are pessimistic about the economic future despite current data that looks strong, the gap is usually resolved by the future eventually looking more like the sentiment than like the current data.</p>

<p>The manufacturing employment trend is also mixed. While manufacturing investment has increased and reshoring has added some jobs, manufacturing employment declined every month following the tariff increases as businesses adapted to higher input costs in ways that did not always involve more workers. The promise of a manufacturing renaissance — of towns that lost factories getting them back — is more complicated in practice than in campaign rhetoric.</p>

<p>These vulnerabilities do not negate the achievements. They contextualize them. A president's economic record should be assessed on both what was accomplished and what risks were created. Trump's second-term record, fairly assessed, includes genuine accomplishments that deserve acknowledgment and genuine risks that deserve scrutiny. Both things are true simultaneously, and the public is better served by the honest version than by either the promotional or the dismissive one.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-30').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may30-trump-no-wars-${Date.now()}-6`,
      title: "The 'No New Wars' Claim, Honestly Examined: Trump's Foreign Policy Record vs. Bush, Obama, and Biden",
      slug: 'trump-no-new-wars-foreign-policy-record-comparison-iran-2026',
      excerpt: "Trump built his 2024 campaign partly on the claim that he doesn't start wars — that unlike Bush or Obama, he keeps America out of foreign entanglements. Then came Operation Epic Fury and the Iran conflict. How does his foreign policy record actually hold up under scrutiny?",
      content: `<p>One of the central pillars of Trump's foreign policy brand has been the "no new wars" argument: that while his predecessors got America into costly, prolonged military entanglements in the Middle East and elsewhere, he keeps America out of wars and brings troops home. In his first term, there was meaningful substance to this claim. His second term has complicated it considerably.</p>

<p>The honest assessment requires examining both what the claim was based on and how Operation Epic Fury — the strikes on Iran that killed Supreme Leader Khamenei and triggered the ongoing Gulf conflict — changes the picture.</p>

<h2>The First Term Record</h2>

<p>Trump's first term foreign policy record, assessed on the specific question of military engagement, was genuinely different from his predecessors. He did not start a new war. He reduced troop levels in Afghanistan — a reduction that his successor ultimately completed through the chaotic withdrawal of August 2021. He struck Syria twice in targeted operations but did not escalate into sustained military campaigns. He killed Iranian General Qasem Soleimani in a January 2020 strike, which produced significant regional tension but not the broader war that critics predicted.</p>

<p>Compared to Bush, who launched two of the longest wars in American history, and to Obama, who expanded the drone war to seven countries and intervened militarily in Libya, Trump's first-term restraint was real. The president who ran against "forever wars" and the military-industrial complex's appetite for endless conflict did, in his first term, largely practice what he preached.</p>

<h2>The Abraham Accords: A Genuine Achievement</h2>

<p>The most substantive foreign policy achievement of Trump's first term was the Abraham Accords, and it represents something that the "no new wars" framing undersells. The normalization of relations between Israel and the UAE, Bahrain, Sudan, and Morocco was not just the absence of conflict — it was affirmative diplomatic construction, the creation of new relationships that had not existed and that have proven durable despite the subsequent Gaza conflict and regional tensions.</p>

<p>The conventional diplomatic wisdom held that Middle Eastern countries could not normalize with Israel while the Palestinian issue remained unresolved. Trump's team — Jared Kushner, in particular — approached the problem as a negotiation in which the parties had addressable interests that could be satisfied without waiting for the Palestinian question to be answered first. The result proved the conventional wisdom wrong. Countries that had maintained formal hostility toward Israel for decades established normal relations. The achievement stands regardless of how one assesses the broader Trump foreign policy record.</p>

<h2>Operation Epic Fury and the "No New Wars" Complication</h2>

<p>Operation Epic Fury — the February 2026 coordinated strikes on Iran that Trump ordered in his second term — is the central challenge to the "no new wars" foreign policy brand. It is, unambiguously, a new war. It killed a foreign head of state. It produced Iranian retaliatory strikes on American military assets. It closed the Strait of Hormuz. It has involved ongoing military operations for months. By any definition, the United States is at war in the Gulf in a way it was not before Trump ordered the strikes.</p>

<p>Trump supporters have offered several responses to this. The first is that the strikes preempted a greater threat — that an Iran on the verge of nuclear capability represented a danger that justified the military cost of Operation Epic Fury. The second is that the war is, as of this writing, moving toward a ceasefire resolution rather than an indefinite occupation or counterinsurgency — that it is a decisive strike rather than the kind of open-ended entanglement that the "no new wars" argument was aimed at. The third is that the Iran conflict, unlike Iraq and Afghanistan, is being prosecuted with a defined strategic objective and without large-scale ground troop deployments.</p>

<p>These arguments have merit. They also do not change the fundamental fact that Trump started a war. The question is whether the war's justification, its execution, and its likely outcome justify that departure from his stated foreign policy doctrine. That question will ultimately be answered by how the Iran situation resolves — whether the ceasefire holds, whether the Strait reopens, whether the region is more or less stable in 2027 than it was in 2025.</p>

<h2>The Broader Comparison</h2>

<p>Assessed across both terms, Trump's foreign policy record sits in an interesting position relative to his predecessors. He did less harm than Bush, whose wars produced catastrophic human and financial costs with mixed strategic results. He was more willing to use force than his rhetoric suggested, but less willing than Obama to deploy it in open-ended ways across multiple theaters. The Abraham Accords represent a positive achievement with no clear equivalent in either the Bush or Obama records on diplomatic construction in the Middle East.</p>

<p>The Iran conflict is the variable that history will weigh most heavily. If it produces a durable strategic realignment — a denuclearized or significantly weakened Iran, a Strait that reopens and stays open, a regional order that is more stable — then Operation Epic Fury may be assessed as a difficult but ultimately successful strategic decision. If it produces continued instability, higher energy costs, and a region more hostile to American interests, the "no new wars" brand will be its own obituary.</p>

<p>The answer is being written right now. The oil price is the real-time indicator. And at $100 a barrel, the verdict is not yet in.</p>`,
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
      id: `may30-trump-profile-${Date.now()}-7`,
      title: "Who Is Donald Trump, Really? The Man Behind the Brand, the Bankruptcies, and the Presidency",
      slug: 'donald-trump-profile-real-man-behind-brand-presidency-2026',
      excerpt: "He's been called a genius and a con man, a savior and a dictator. He's filed six bankruptcies and won two presidential elections. He's the most written-about person in America and one of the least understood. This is the fullest picture we have of who Donald Trump actually is.",
      content: `<p>There is almost no one left in America who is neutral about Donald Trump. Eight years of his dominance over American political life have sorted virtually everyone into a camp — the people who see him as a transformative leader who finally said what others were afraid to, and the people who see him as an existential threat to the institutions they value. Both camps have developed elaborate internal mythologies that, in different ways, prevent them from seeing the man clearly.</p>

<p>This is an attempt to set those mythologies aside and describe, as accurately as available evidence allows, who Donald Trump actually is.</p>

<h2>The Origin Story</h2>

<p>Donald John Trump was born on June 14, 1946, in Queens, New York, the fourth of five children of Fred Trump and Mary Anne MacLeod Trump. Fred Trump was a successful real estate developer who built middle-income housing in Brooklyn and Queens — not the Manhattan luxury market, but a solid, profitable business that made the family wealthy by any ordinary standard. Donald grew up rich, went to private schools, was sent to the New York Military Academy at thirteen after behavioral problems, and eventually graduated from the Wharton School of the University of Pennsylvania with a degree in economics in 1968.</p>

<p>The biography he has presented publicly — of a self-made man who built an empire from nothing — has always been more myth than reality. He inherited significant wealth from his father, received at least $413 million from his father's estate according to New York Times reporting, and began his career with access to financing and connections that are unavailable to genuinely self-made entrepreneurs. This does not mean his accomplishments are fake. It means they are different from what he claims — the accomplishments of a man who started on third base and hit a long single, rather than a home run from nothing.</p>

<h2>The Business Career: Genuine Successes and Six Bankruptcies</h2>

<p>The Trump business record is complicated in ways that neither his supporters nor his critics adequately acknowledge. The genuine achievements are real. Trump Tower, completed in 1983, was a landmark Manhattan development that established his brand as a symbol of New York luxury. His golf courses, whatever one thinks of his character, are among the finest in the world. His ability to brand properties — to make the Trump name a premium marker that commanded higher prices — was a genuine business skill that produced real revenue.</p>

<p>The six business bankruptcies — of Trump Taj Mahal, Trump Plaza Hotel, Trump Plaza Casino, Trump Hotels and Casino Resorts, Trump Entertainment Resorts, and Trump Hotels — are also real. They involved hundreds of millions in debt defaults, losses to bondholders and small contractors and employees, and the kind of financial engineering that transferred risk from Trump personally to his creditors and investors. He personally survived the bankruptcies in better financial condition than many of the people who had done business with him. That is not illegal. It is a business record.</p>

<p>The reality television years — The Apprentice, from 2004 to 2015 — were arguably the most commercially successful period of his career, and they are the period that most directly created the political persona he carried into the 2016 election. The Apprentice made Trump famous to a demographic that had not been following his business career — middle-American, non-New York, working and middle class — and presented him as a decisive, successful executive whose judgment was worth deferring to. The show was more fiction than documentary. Its political impact was entirely real.</p>

<h2>The Psychological Profile</h2>

<p>Psychologists who have written about Trump — from a distance, observing public behavior rather than conducting clinical assessments — have consistently noted a cluster of traits that appear across his career with unusual consistency: an extreme sensitivity to perceived slights and criticism, a relationship with truth that is instrumentalizing rather than principled, a preference for loyalty over competence in subordinates, and an energy and confidence that is unusually self-sustaining in the face of failure and setback.</p>

<p>These traits interact with his political environment in specific ways. The sensitivity to criticism produces the counterpunching style that his supporters find satisfying and his critics find disqualifying. The instrumentalizing relationship with truth produces the stream of false statements that fact-checkers catalog and his supporters largely discount. The preference for loyalty over competence has produced both the turnover in his administrations and the protection of associates who have served him badly. The resilience — the ability to survive multiple crises that would have ended other political careers — is genuinely remarkable and is a real psychological asset in the brutal environment of presidential politics.</p>

<h2>What He Believes</h2>

<p>The question of what Trump actually believes — as distinct from what he says to his various audiences — is genuinely difficult. He has held almost every political position at some point, often simultaneously. He was a Democrat for parts of his adult life. He donated to Hillary Clinton's Senate campaign. He has been pro-choice and anti-abortion, for universal healthcare and against it, for various gun control measures and against them.</p>

<p>The beliefs that appear consistent across his career are fewer but more interesting: a conviction that America is being taken advantage of by foreign countries in trade and military alliances; a belief that strong personal relationships and deal-making can solve problems that institutional processes cannot; a distrust of expert consensus that seems to be partly temperamental and partly strategic; and a view of loyalty as the highest virtue and disloyalty as the highest offense.</p>

<p>These are not the ideological commitments of a conventional conservative. They are the beliefs of a particular kind of businessman and a particular kind of New Yorker. They have shaped his presidencies in recognizable ways — in the trade confrontation with China, in the bilateral deal-making of the Abraham Accords, in the dismissal of intelligence community consensus, in the treatment of perceived disloyal Republicans like John Cornyn.</p>

<h2>The Verdict</h2>

<p>Donald Trump is neither the genius his supporters claim nor the monster his critics fear. He is a specific person with specific capabilities and specific limitations, operating in a political environment that amplifies both. He is more formidable as a political figure than almost anyone predicted in 2015, and more constrained as a president than his most alarmed critics anticipated. He has achieved real things and failed at real things, often for reasons that follow predictably from who he is.</p>

<p>History will have decades to render its verdict. What we can say now is that he is something American democracy has not produced before — and that the system has so far survived the experiment, changed by it in ways that are not yet fully visible, holding in forms that are more resilient than the pessimists predicted and less intact than the optimists hoped.</p>`,
      author: 'The American Reveal Investigative Staff',
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
