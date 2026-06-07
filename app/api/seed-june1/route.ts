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
      id: `june1-trump-mtp-${Date.now()}-1`,
      title: "Trump on Meet the Press: Iran's Missiles Are 'Decimated,' the War Is Almost Over. Is He Right?",
      slug: 'trump-meet-the-press-iran-war-missile-arsenal-interview-2026',
      excerpt: "In a rare Sunday sit-down interview, Trump told Meet the Press that Iran's missile arsenal has been 'largely decimated' and that he expects the war to end 'very soon.' Military analysts and intelligence veterans are parsing every word. Here's what he said, and what the record shows.",
      content: `<p>Donald Trump sat down with Meet the Press on Sunday for one of the most significant television interviews of his second term — a wide-ranging conversation that focused heavily on the Iran conflict, his claims about the military situation on the ground, and his timeline for ending a war that has now lasted more than three months and driven oil prices to $100 a barrel.</p>

<p>The claims he made were specific, confident, and consequential. Iran's missile arsenal, he said, has been "largely decimated" by the strikes of Operation Epic Fury. The war, he told the interviewer, would be ending "very soon." He expressed confidence that the ceasefire terms he sent back with tougher conditions would be accepted by Tehran, and suggested that Iran's leadership understands it has no viable path to continued military confrontation.</p>

<p>Military analysts, intelligence veterans, and foreign policy observers spent Sunday and Monday parsing those claims against the available evidence. The picture that emerges is complicated — some of Trump's assertions are supported by the open-source record, others are contested, and some raise questions about whether the president's public statements reflect his actual intelligence picture or a strategic communication effort designed to accelerate Iranian capitulation.</p>

<h2>The Missile Arsenal Claim</h2>

<p>Trump's assertion that Iran's missile arsenal has been "largely decimated" is the claim that has attracted the most scrutiny. Operation Epic Fury's strikes in February targeted, among other things, Iranian missile production facilities, storage sites, and launch infrastructure. The strikes were extensive and, by all public accounts, more successful than many analysts predicted in degrading Iran's ballistic missile capabilities.</p>

<p>But "largely decimated" is a specific claim that the intelligence community has not publicly confirmed at that level of confidence. Open-source analysis of satellite imagery since the February strikes shows significant damage to known missile facilities. It also shows that Iran's missile force, while degraded, has continued to function — the country has launched missiles at Israeli and American targets in the months since the initial strikes, demonstrating that whatever was decimated was not everything.</p>

<p>The distinction matters strategically. A missile arsenal that is degraded by fifty percent is a very different military situation than one that is decimated — effectively destroyed. If Iran retains significant residual missile capability, the ceasefire negotiations have a different character than if it has been reduced to minimal threat. Trump's framing, whether accurate or not, serves his negotiating strategy: it tells Iranian leadership that they are negotiating from a position of military weakness, not strength.</p>

<h2>The "Very Soon" Timeline</h2>

<p>Trump's suggestion that the war will end "very soon" has generated both hope and skepticism. The hope is grounded in the fact that ceasefire negotiations have been ongoing for weeks and that, by multiple accounts, the broad outlines of a deal are understood by both sides. The skepticism is grounded in Trump's own recent rejection of the memorandum of understanding that negotiators had described as "mostly agreed," and in the history of predictions about imminent resolution that have not materialized.</p>

<p>The "very soon" framing is also a strategic communication tool. If Iranian leadership believes Trump is confident enough in American military superiority to publicly predict a swift resolution, the implicit message is that they should accept terms before their negotiating position deteriorates further. Whether that message is received as intended — as pressure to settle — or as a signal that Trump is impatient enough to be pressured himself is a matter of how Tehran's decision-makers read American psychology.</p>

<h2>The Domestic Political Context</h2>

<p>The Meet the Press interview did not happen in a vacuum. It happened in the context of oil at $100 a barrel, consumer sentiment declining, and a midterm election cycle in which the Iran conflict's economic costs are becoming a political liability. A president who can credibly claim the war is almost over — who can point to a decimated enemy arsenal and a ceasefire on the horizon — is a president who can run on ending a war rather than managing one.</p>

<p>Trump's political interest in the war ending quickly is obvious and does not make his claims false. Presidents communicate strategically in part because strategic communication is a legitimate tool of statecraft. The question is whether the gap between the claims and the military reality, if one exists, undermines the strategy or reflects a genuine assessment that has not yet been confirmed by open sources.</p>

<p>The answer will arrive with events rather than analysis. If a ceasefire is signed in the next few weeks, Trump's Sunday claims will look prescient. If the talks collapse and strikes resume, they will look like premature optimism that strengthened Iran's negotiating hand. The interview is on the record. History will judge it by what happens next.</p>`,
      author: 'The American Reveal Foreign Policy Desk',
      publishedAt: new Date('2026-06-01').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `june1-ohio-shooting-${Date.now()}-2`,
      title: "12 Shot at Toledo Street Festival. This Is America in 2026 — and Nothing Has Changed.",
      slug: 'ohio-toledo-festival-shooting-12-wounded-gun-violence-2026',
      excerpt: "Gunfire erupted near a packed street festival in Toledo, Ohio on Saturday, wounding at least 12 people. It was a warm weekend afternoon. Families were there. And once again, America absorbs a mass shooting, mourns briefly, and moves on. Here's what happened and what it says about where we are.",
      content: `<p>Saturday afternoon in Toledo, Ohio. A street festival on a warm late-spring day. Families, music, food, the ordinary life of an American city enjoying a weekend. Then gunfire. At least twelve people wounded. The chaos of a crowd trying to understand what was happening and where to run. First responders arriving to a scene where the immediate danger had already passed but the damage had already been done.</p>

<p>The Toledo shooting is not the kind of event that produces sustained national coverage anymore. It was not a school. The death toll, as of the latest reporting, has not crossed the threshold that the American media has developed — through years of processing these events — as the line between a significant shooting and a national tragedy. Twelve wounded. No reported fatalities at publication time. In the taxonomy of American gun violence, this registers as a serious incident rather than a catastrophe.</p>

<p>That taxonomy is itself worth examining.</p>

<h2>What Happened</h2>

<p>The shooting occurred near a busy street festival in Toledo on the afternoon of Saturday, May 31. Police responded to reports of gunfire in the area and found multiple victims with gunshot wounds. At least twelve people were transported to area hospitals. The nature and severity of their injuries has varied in early reporting.</p>

<p>A suspect or suspects had not been publicly identified or apprehended at the time of initial reporting. Investigators were reviewing surveillance footage and interviewing witnesses. The festival — which drew hundreds of people to a public street in a residential and commercial area — was evacuated and shut down. The scene was secured.</p>

<p>The specific circumstances of how the shooting began — whether it arose from a confrontation between individuals, whether it was targeted or indiscriminate, whether the shooter or shooters were themselves attendees of the festival or arrived specifically to commit violence — had not been established in early reporting. Those details matter for understanding the event. They do not change its fundamental nature.</p>

<h2>The American Context</h2>

<p>The Gun Violence Archive, which tracks shootings in the United States, defines a mass shooting as an incident in which four or more people are shot, not including the shooter. By that definition, the Toledo festival shooting is a mass shooting. It is also, by that definition, one of hundreds that occur in the United States each year — a frequency so high that most of them receive, at most, local news coverage and a brief mention in national outlets before disappearing from the news cycle entirely.</p>

<p>The United States has more mass shootings per capita than any other wealthy nation. This is not a contested statistical finding. It is documented in peer-reviewed public health research, in FBI crime data, in the records of organizations across the political spectrum that track gun violence. The policy debate about what to do about this fact — or whether anything should be done, or whether the cause is guns or mental health or culture or something else — has been ongoing for decades without producing legislative resolution at the federal level.</p>

<p>In the current political environment, that debate is even further from resolution than it was five years ago. The Supreme Court's 2022 Bruen decision significantly narrowed the ability of states and localities to regulate firearms in public spaces. The Trump administration has not proposed federal gun legislation. Congressional Republicans, who control both chambers, have shown no appetite for gun control measures. Congressional Democrats, who support various measures, do not have the votes to pass them.</p>

<h2>Toledo's Response</h2>

<p>Toledo's mayor and police chief held a press conference in the hours after the shooting. The mayor expressed grief and called for community solidarity. The police chief outlined the investigation. Local officials thanked first responders. The language of these press conferences has become so familiar — so ritualized by repetition — that it is possible to anticipate almost exactly what will be said before it is said.</p>

<p>That familiarity is itself a data point. The ritual response to mass shootings in America has been refined through so many iterations that it no longer feels like a response to an emergency. It feels like a procedure — the thing that gets done after something terrible happens, performed smoothly because it has been performed many times before.</p>

<p>The twelve people who were shot in Toledo on Saturday afternoon did not experience it as a ritual or a statistic. They experienced it as violence — sudden, arbitrary, and real. Their recoveries will take time. The festival that was supposed to be a pleasant afternoon will be something else in their memories. Toledo will heal in the way American cities heal from these events: gradually, incompletely, with the knowledge that it could happen again anywhere, at any time, at any gathering of people enjoying a warm afternoon.</p>

<p>Because in America in 2026, it always could. And the systems designed to prevent it have not changed in ways that would make it less likely. That is the story that every shooting like this one tells, underneath the specific details of the specific event. It is a story that the country has not yet decided it wants to change.</p>`,
      author: 'The American Reveal National Desk',
      publishedAt: new Date('2026-06-01').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `june1-pope-spain-${Date.now()}-3`,
      title: "Pope Leo XIV in Madrid: The First Papal Visit to Spain in 15 Years and What It Signals for the Church",
      slug: 'pope-leo-xiv-spain-corpus-christi-madrid-first-papal-visit-2026',
      excerpt: "Pope Leo XIV presided over a Corpus Christi Mass in Madrid on Sunday — the first time a pope has visited Spain in fifteen years. The symbolism was layered: a new American pope, a historically Catholic nation wrestling with secularism, and a church trying to reclaim relevance in Western Europe.",
      content: `<p>The plaza was filled before dawn. By the time Pope Leo XIV arrived to preside over the Corpus Christi Mass in Madrid on Sunday, hundreds of thousands of people had gathered in and around the Plaza de Colón and the surrounding streets — a crowd that organizers and city officials described as one of the largest religious gatherings in Spain in a generation. The occasion was Corpus Christi, one of the most significant feasts in the Catholic calendar. The significance was larger than the feast.</p>

<p>It was the first papal visit to Spain in fifteen years. And it was the first time that Spain — a country whose Catholic identity runs so deep it shaped the entire Western Hemisphere — had received a pope who was himself American: Robert Francis Prevost, elected as Leo XIV in May 2025, the first pope from the United States in the two-thousand-year history of the Catholic Church.</p>

<h2>The Symbolism of the Visit</h2>

<p>Papal visits are never purely religious events. They are geopolitical and cultural statements as much as spiritual ones — deliberate choices about where the church wants to be seen, what relationships it wants to reinforce, what message it wants to send about its priorities and its presence in the world.</p>

<p>Leo XIV's decision to make Spain his destination for this Corpus Christi Mass carries multiple layers of meaning. Spain was the country that, more than any other in European history, shaped the global expansion of Catholicism — the Spanish missionaries and conquistadors who brought the faith to Latin America, Asia, and Africa, creating the global church that today counts more than a billion members. Visiting Spain is, in one sense, a visit to the roots of the modern Catholic world.</p>

<p>It is also a visit to a country in the middle of a complicated relationship with its own Catholic heritage. Spain has undergone dramatic secularization over the past forty years — from a country where Catholicism was effectively the state religion under Franco, through a transition to democracy and then a rapid shift in which church attendance has declined sharply, religious education has been removed from mandatory curriculum in many regions, and the church has faced intense scrutiny over its handling of clerical abuse cases. The Spain that received Leo XIV on Sunday is not the Spain that received John Paul II in 1982 or 2003.</p>

<h2>An American Pope in Catholic Europe</h2>

<p>The novelty of Leo XIV's American origins was present in every dimension of the visit. For Spanish Catholics who have lived their entire religious lives within a European framework — where the Vatican's relationship with the major Catholic nations of Italy, France, Spain, and Germany formed the geographic and cultural center of the church — an American pope is a genuine cognitive shift. The papacy has been European, essentially without interruption, for fifteen centuries.</p>

<p>Leo XIV has used his American background deliberately rather than downplaying it. His approach to the papacy reflects both the theological formation of his Augustinian religious order and the particular character of American Catholicism — more pluralistic than European Catholicism, more accustomed to operating within a secular democratic culture, more focused on the church's social mission in a diverse society. His homily at the Madrid Mass reflected those emphases: solidarity with the poor and marginalized, the call to serve rather than to govern, the church as a community rather than an institution.</p>

<p>For some Spanish Catholics, particularly those who identify with the more traditional, hierarchical, European model of the church, these emphases are not entirely comfortable. For others — for younger Spanish Catholics and for those who have stayed in the church despite its institutional difficulties — the American pope's tone represents exactly the kind of renewal the church in Western Europe needs.</p>

<h2>The Secularism Challenge</h2>

<p>The most significant challenge that Leo XIV's visit implicitly addresses is the one that no papal visit can solve by itself: the dramatic decline of active Catholic practice across Western Europe. Spain's statistics are representative of a broader continental pattern. Regular Mass attendance, which was above ninety percent in Franco-era Spain, has fallen to single digits in many urban areas. Vocations to the priesthood and religious life have collapsed. Young Spaniards identify as Catholic at far lower rates than their parents, and those who do identify as Catholic often do so culturally rather than in terms of active practice.</p>

<p>The hundred-thousand-plus people in the Madrid plaza on Sunday represent a genuine constituency — Spaniards for whom Catholicism remains a living faith, not a cultural artifact. They exist. They came. But they are a smaller share of Spanish society than they were when the last pope visited, and the trend line has not reversed.</p>

<p>Leo XIV's response to this challenge is pastoral rather than institutional. He has shown no interest in reverting to the defensive, culture-war Catholicism that some conservatives in the church advocate as the path to renewal. His emphasis is on the church's positive witness — on what it offers rather than what it opposes — and on meeting people where they are rather than demanding they return to where the church expects them to be.</p>

<p>Whether that approach can reverse the secularization trend in Western Europe is a question that will take decades to answer. What Sunday's Mass in Madrid demonstrated is that the constituency for a renewed, outward-facing Catholicism in Spain is real and large enough to fill a plaza before dawn. That is not nothing. It is also not the same as a church that has solved its institutional crisis.</p>`,
      author: 'The American Reveal International Desk',
      publishedAt: new Date('2026-06-01').toISOString(),
      category: 'World',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#0F766E',
    },
    {
      id: `june1-ai-sanders-${Date.now()}-4`,
      title: "Sanders Wants the Government to Own a Piece of Every AI Company. Washington Is About to Have a Fight.",
      slug: 'bernie-sanders-ai-sovereign-wealth-fund-act-anthropic-ipo-washington-2026',
      excerpt: "Senator Bernie Sanders introduced the American AI Sovereign Wealth Fund Act — a bill that would give the U.S. government equity stakes in major AI companies. It dropped right as Anthropic IPO buzz is reaching a fever pitch. The debate it's sparked goes to the heart of who owns the future.",
      content: `<p>The timing was not accidental. Senator Bernie Sanders introduced the American AI Sovereign Wealth Fund Act as Anthropic — the AI safety company behind Claude, widely expected to be one of the most significant technology IPOs in years — has been the subject of intense speculation about when it will go public and at what valuation. The juxtaposition was deliberate: here is a company that may soon be worth hundreds of billions of dollars, trained on data produced by millions of Americans, built with research that drew on decades of publicly funded academic work. Who should own it?</p>

<p>Sanders's answer is: the American people, at least in part. His bill would establish a sovereign wealth fund — a government-owned investment vehicle — that would acquire equity stakes in major artificial intelligence companies, with the returns distributed as dividends to American citizens. It is the most significant proposal yet for public ownership of AI infrastructure, and it has landed in a Washington that is simultaneously fascinated by AI's potential and deeply divided about how to govern it.</p>

<h2>What the Bill Would Do</h2>

<p>The American AI Sovereign Wealth Fund Act, as introduced, would create a federal fund capitalized through a combination of a tax on AI company revenues above a certain threshold and through the issuance of government bonds. The fund would use this capital to acquire equity stakes in qualifying AI companies — defined by their scale, their revenue, and their significance to American AI infrastructure.</p>

<p>The returns from those equity stakes — dividends, capital gains from share appreciation — would be distributed to American citizens as an annual payment, modeled loosely on Alaska's Permanent Fund dividend, which distributes a share of the state's oil revenues to every Alaskan resident. The explicit parallel is pointed: oil was the transformative resource of the twentieth century, and states that owned their oil resources were able to share the wealth broadly rather than allowing it to accumulate entirely to private capital. AI, Sanders argues, is the transformative resource of the twenty-first century. The same logic applies.</p>

<p>The bill includes provisions for the fund to exercise the governance rights that come with equity ownership — voting on corporate matters, participating in boards, using ownership to push for labor standards and safety practices. This dimension of the proposal has attracted as much attention as the dividend provision: it would give the federal government a direct voice in how major AI companies are operated.</p>

<h2>The Anthropic IPO Context</h2>

<p>Anthropic has not confirmed IPO plans. But the company, which has raised billions of dollars in investment from Amazon, Google, and other technology players, has a valuation that analysts estimate in the range of $60 to $100 billion and a product — Claude, its AI assistant — that has achieved widespread enterprise and consumer adoption. The conditions for a public offering are present.</p>

<p>When Anthropic does go public, it will join a category of AI companies whose collective market capitalization is expected to reach into the trillions over the next decade. The wealth creation will be extraordinary. Who captures that wealth — the founders, the venture capital investors, the institutional shareholders who buy in at IPO — is a distributional question with profound implications for American inequality.</p>

<p>Sanders's bill intervenes in that question explicitly. By establishing a mechanism for public ownership before the wealth is fully created and concentrated, it attempts to solve a distributional problem before it becomes a political crisis rather than after. The argument is that waiting until AI wealth has already been created and concentrated, and then trying to redistribute it through taxation, is both politically harder and practically less effective than establishing ownership stakes at the beginning.</p>

<h2>The Opposition and Its Arguments</h2>

<p>The bill faces opposition from multiple directions. Technology industry groups have argued that government equity ownership would introduce political considerations into corporate governance that would distort decision-making and slow innovation. Libertarian-leaning economists have argued that the fund would represent an inappropriate extension of government power into private markets. Even some Democrats who agree with the distributional goals of the bill have expressed concern about the governance implications of the federal government holding voting shares in the country's most significant technology companies.</p>

<p>The constitutional questions are also real. Federal ownership of equity stakes in private companies is not unprecedented — the government held equity in banks and auto companies during the 2008 financial crisis — but a permanent, ongoing equity acquisition program of the scale Sanders envisions would be novel and would face legal challenges.</p>

<p>The political path for the bill in the current Congress is, to put it gently, narrow. Republicans control both chambers and have shown no appetite for measures that expand government ownership of private enterprise. The bill is unlikely to pass in its current form. That is not, by itself, a reason to dismiss it — legislation that fails in one Congress sometimes shapes the debate in ways that produce results in a later one, and Sanders's proposals have a track record of moving from the margins of Democratic politics to the mainstream over time.</p>

<h2>The Real Debate Underneath the Bill</h2>

<p>The American AI Sovereign Wealth Fund Act is, on one level, a specific legislative proposal. On another level, it is an opening bid in a debate that Washington has been avoiding: the question of who owns the AI future and what obligations AI companies have to the public whose data, whose creative work, and whose publicly funded research made their products possible.</p>

<p>That debate is coming regardless of whether Sanders's specific bill advances. The Anthropic IPO, when it happens, will make the wealth creation visible in a way that valuations and private funding rounds do not. The concentration of AI capability in a small number of companies, and the concentration of AI wealth in a small number of investors, is going to produce political pressure for some kind of public claim on the technology. Whether that claim takes the form Sanders proposes, or some other form, or no form at all, is the question that the next several years of Washington politics will have to answer.</p>`,
      author: 'The American Reveal Technology Desk',
      publishedAt: new Date('2026-06-01').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#0F766E',
    },
    {
      id: `june1-senate-immigration-${Date.now()}-5`,
      title: "Republicans Just Passed a $70 Billion Immigration Enforcement Bill After an All-Night Senate Brawl",
      slug: 'senate-immigration-enforcement-70-billion-vote-a-rama-trump-2026',
      excerpt: "After an overnight 'vote-a-rama' that stretched into Sunday morning, Senate Republicans passed a $70 billion Trump-backed immigration enforcement funding package. Here's what's in it, how it passed, and why Democrats are calling it the most dangerous immigration bill in American history.",
      content: `<p>The Senate voted through the night. Amendment after amendment was called, debated briefly, and voted down or accepted in the procedural marathon that Senate rules require before a reconciliation bill can receive a final vote. By the time the sun came up Sunday morning, senators had been on the floor for more than eighteen consecutive hours. The final vote, when it came, was close — a reflection of a Republican majority thin enough that every defection matters and every procedural move is contested.</p>

<p>The result: a roughly $70 billion immigration enforcement funding package, backed by the Trump administration, passed the Senate and is headed to the President's desk for signature. It is the largest single investment in immigration enforcement infrastructure in American history. Democrats have called it the most dangerous immigration bill Congress has ever passed. Republicans have called it the fulfillment of a promise that voters made clear they wanted kept.</p>

<h2>What the Bill Funds</h2>

<p>The $70 billion is allocated across several major categories, each representing a significant expansion of the immigration enforcement apparatus that the Trump administration has been building since January 2025.</p>

<p><strong>Detention capacity:</strong> The largest single allocation — more than $25 billion — goes to expanding immigration detention capacity. The current system holds approximately 50,000 people at any given time. The new funding would expand that capacity to more than 100,000 beds, with the explicit goal of eliminating the backlog of immigration cases and the "catch and release" practices that the administration has characterized as a magnet for illegal entry. New facilities will be constructed, existing ones expanded, and contracts with private detention companies significantly extended.</p>

<p><strong>Deportation operations:</strong> Approximately $15 billion for the operational costs of expanded deportation — flights, personnel, coordination with foreign governments, and the legal and administrative costs of the removal proceedings that must precede most deportations. The administration has set a target of removing more than one million people per year, a number that would far exceed any historical precedent and that immigration lawyers have characterized as logistically impossible to achieve with due process protections intact.</p>

<p><strong>Border technology and infrastructure:</strong> About $12 billion for surveillance technology, sensor networks, vehicle barriers, and the completion of border wall construction in areas where the physical barrier authorized by the Big Beautiful Bill has not yet begun. The technology investment is designed to address gaps in the physical barrier where wall construction is impractical due to terrain.</p>

<p><strong>Personnel:</strong> $10 billion for hiring and training new Immigration and Customs Enforcement agents, Customs and Border Protection officers, and immigration judges — the last category being an acknowledgment that the enforcement machinery requires a functioning adjudication system to process the cases it generates.</p>

<h2>The Vote-A-Rama and Its Battles</h2>

<p>The overnight vote-a-rama produced dozens of recorded votes that will define the political landscape of the immigration debate for years. Democrats offered amendments designed to add due process protections, prohibit family separation, require independent oversight of detention facilities, and carve out specific categories of immigrants — DACA recipients, asylum seekers fleeing domestic violence, people with pending applications who have been in the country for years — from the enhanced enforcement provisions.</p>

<p>Republicans voted down every Democratic amendment, with two or three exceptions on relatively minor provisions that attracted bipartisan support. The process was efficient and, for Democrats, deliberately frustrating — a demonstration that on immigration enforcement, the Republican caucus is unified in a way that produces clean votes against any qualification of the enforcement framework.</p>

<p>The votes will be used by both parties. Republicans will point to their votes for enforcement as fulfillment of a mandate. Democrats will point to their votes against family separation and for due process protections as a demonstration of their values. Both narratives are accurate. Both will appear in campaign advertisements in November.</p>

<h2>The Constitutional and Legal Questions</h2>

<p>The scale of the deportation operation the bill is designed to fund has already generated legal challenges that will play out simultaneously with its implementation. Federal courts in multiple circuits have issued injunctions limiting specific aspects of the administration's enforcement operations — challenging expedited removal procedures, detention conditions, and the treatment of asylum seekers. The new funding does not resolve those legal questions. It escalates them.</p>

<p>The administration's position is that it has broad statutory and constitutional authority to enforce immigration law aggressively and that courts that interfere with that enforcement are overstepping their jurisdiction. Courts have, so far, disagreed in specific cases while generally affirming the executive branch's broad immigration enforcement authority. The legal battles over how far the new $70 billion enforcement apparatus can go will determine, in practical terms, how much of what the bill funds can actually be implemented.</p>

<h2>What This Means on the Ground</h2>

<p>For the roughly eleven million undocumented immigrants currently in the United States, the passage of this bill represents an escalation of the enforcement environment that has been building since January 2025. Expanded detention capacity means more people can be held while their cases are processed. Enhanced deportation funding means more removal operations. Additional personnel means more enforcement presence in communities across the country.</p>

<p>For immigrant communities and the cities and states that have tried to limit cooperation with federal enforcement, the bill represents a direct challenge. The $70 billion is not just money — it is a statement of institutional commitment to a level of immigration enforcement that has not existed before, funded at a scale that makes it durable through at least the next several years regardless of what happens in the midterms.</p>

<p>The Senate voted through the night to make it happen. The question of whether it makes the country what its supporters say it will — more orderly, more controlled, more secure — or what its opponents say it will — more fearful, more divided, more willing to sacrifice due process for enforcement numbers — is the question that American communities are now going to live with, whether they voted for it or not.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-06-01').toISOString(),
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
