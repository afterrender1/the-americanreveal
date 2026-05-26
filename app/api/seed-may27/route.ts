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
      id: `may27-paxton-${Date.now()}-1`,
      title: "Trump Torches His Own Party: Why Endorsing Paxton Over Cornyn Could Cost Republicans the Senate",
      slug: 'trump-endorses-paxton-over-cornyn-texas-senate-2026',
      excerpt: "Donald Trump just endorsed one of the most scandal-plagued politicians in Texas history over a five-term incumbent Senate leader — against the explicit advice of his own Senate majority. This is either political genius or a catastrophic miscalculation.",
      content: `<p>John Cornyn has served five terms in the United States Senate. He is the senior senator from Texas, a former Senate Majority Whip, and one of the most powerful Republican legislators in Washington. He has voted with Donald Trump's agenda more than ninety percent of the time. He raised tens of millions of dollars for the party. He is, by virtually every conventional measure, exactly the kind of Republican senator that a Republican president should want to keep.</p>

<p>Donald Trump just threw him overboard anyway.</p>

<p>With the Texas GOP Senate primary runoff on May 26, 2026, Trump endorsed Ken Paxton — Texas's two-term Attorney General, a man who has been federally indicted for securities fraud, impeached by his own state's Republican-controlled legislature, investigated by the FBI for corruption, and whose wife recently filed for divorce on what she described as "biblical grounds." Trump called him a "True MAGA warrior" and said Cornyn "was not supportive of me when times were tough."</p>

<p>Senate Republicans are furious. And quietly, many of them are scared.</p>

<h2>Why Trump Did It</h2>

<p>The stated reason is loyalty. Trump has never forgiven Cornyn for moments of hesitation during the 2016 campaign, when the Texas senator — like many establishment Republicans — kept a careful distance from Trump as the Access Hollywood tape and other controversies threatened to collapse the ticket. In Trump's political universe, that kind of hedging has a very long memory attached to it.</p>

<p>The practical reason is the filibuster. Paxton has been explicit: he supports eliminating the Senate filibuster to pass Trump's legislative agenda, including the SAVE America Act. Cornyn has been more cautious about filibuster reform, reflecting the institutional conservatism of a senator who has spent decades working within Senate rules and knows what a world without the filibuster looks like when the other party has the majority.</p>

<p>Trump wants the filibuster gone. Cornyn wants to preserve it. On that single issue, Paxton is more useful to Trump's second-term agenda than the man who has reliably voted for everything Trump wanted for eight years.</p>

<h2>Why Republicans Are Panicking</h2>

<p>Senate Majority Leader John Thune made personal calls to Trump urging him to stay out of the race or back Cornyn. The National Republican Senatorial Committee invested heavily in Cornyn's campaign. Senior Republican strategists argued privately and publicly that Paxton's baggage — the indictment, the impeachment, the FBI investigation, the personal scandals — makes him a liability in a general election that, against a credible Democratic opponent, could actually be competitive.</p>

<p>Texas has been trending toward competitiveness in recent cycles. In 2018, Beto O'Rourke came within three points of defeating Cornyn's colleague Ted Cruz. Democrats have invested heavily in voter registration and infrastructure across the state's major metropolitan areas. A Paxton nomination would give Democrats a target-rich environment: a candidate with a federal indictment, an impeachment record, and a personal life that has generated tabloid headlines, running in a state where suburban voters — particularly suburban women — have been moving away from the Republican Party.</p>

<p>Trump's advisors who made these arguments to him were not wrong about the math. The question is whether Trump calculated that the risk is acceptable — that Texas is still red enough that even Paxton wins — or whether he simply weighted loyalty and filibuster positioning over electability concerns entirely.</p>

<h2>The Paxton File</h2>

<p>Ken Paxton's political biography is a remarkable document. In 2015, he was indicted on felony securities fraud charges for allegedly soliciting investments in a tech company without disclosing that he was being paid to promote it. That case dragged through the courts for nearly a decade without resolution, becoming a symbol of a two-tiered justice system in which connected politicians avoid consequences that would end a normal person's career.</p>

<p>In 2023, the Texas House of Representatives voted to impeach him on twenty articles, including bribery, abuse of office, and obstruction of justice. The allegations centered on his relationship with campaign donor Nate Paul, a real estate developer who federal prosecutors later indicted. Paxton was acquitted by the Texas Senate after a trial that critics described as politically motivated toward acquittal. His wife, Senator Angela Paxton, was a member of the body that voted on his fate — she recused herself.</p>

<p>The FBI has been investigating his office for years. The investigation's status and scope have not been publicly disclosed.</p>

<p>Trump endorsed him anyway. Called him a warrior. Said Cornyn wasn't loyal enough.</p>

<h2>What This Means for the Midterms</h2>

<p>The Texas Senate race now becomes one of the most closely watched contests of the 2026 midterm cycle. If Paxton wins the primary and goes on to win the general election, Trump's instinct will be validated — he will have demonstrated that in Texas, MAGA loyalty beats establishment credibility. If Paxton loses the general election in a state that hasn't sent a Democrat to the Senate since 1988, it will become the defining example of Trump's revenge politics costing his party a seat it should have held easily.</p>

<p>For Senate Republicans watching from Washington, the deeper concern is not just this race. It is the pattern. Trump has now made clear that five terms of reliable voting, tens of millions in fundraising, and a career spent advancing the party's agenda is not sufficient protection against being sacrificed for insufficient personal loyalty. The message to every Republican senator is clear: your record does not matter. Your relationship with Trump does. And that relationship can sour at any moment, over a slight that happened a decade ago, with consequences that arrive without warning.</p>

<p>John Cornyn did everything right by the traditional rules of Republican politics. In the Trump era, those rules no longer apply.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may27-alabama-${Date.now()}-2`,
      title: "Federal Judges Just Blocked Alabama's Racist Redistricting Map. Now It's Headed to the Supreme Court.",
      slug: 'alabama-redistricting-blocked-federal-court-supreme-court-2026',
      excerpt: "A three-judge federal panel has halted Alabama's new congressional map, ruling it was tainted by intentional racial discrimination. Alabama is appealing to the Supreme Court. The midterms — and the balance of the House — may hang on the outcome.",
      content: `<p>A three-judge federal panel has blocked Alabama's newly drawn congressional map from taking effect for the 2026 midterm elections, ruling that the plan was "tainted by intentional race-based discrimination" and could not be imposed on Alabama voters. The decision, handed down on May 26, 2026, is a significant setback for the Republican Party's broader strategy of using redistricting to lock in House majorities — and it is almost certainly headed to the Supreme Court before November.</p>

<p>Alabama's attorney general has already vowed to appeal. The question of which map Alabama uses in November may ultimately be decided by the same Supreme Court that, in its 2025 <em>Callais</em> ruling, dramatically curtailed the use of race in drawing electoral districts — a ruling that Alabama Republicans had used as justification for the new map the federal judges just blocked.</p>

<h2>The Map and What It Would Have Done</h2>

<p>Alabama currently uses a court-ordered congressional map drawn in 2023, after the Supreme Court ruled in <em>Allen v. Milligan</em> that the state's previous map violated the Voting Rights Act by diluting Black voting power. That 2023 ruling produced the current map, which includes a majority-Black congressional district in the southeastern part of the state — a district currently held by a Democrat.</p>

<p>Republican legislators in Alabama responded to the <em>Callais</em> decision by drawing a new map that eliminated that majority-Black district. The new map would split the Black-majority population across multiple districts, making it effectively impossible for Black voters to elect their preferred candidate in any of them — and flipping a Democratic seat to the Republicans.</p>

<p>The federal panel reviewing the new map concluded that this was not a race-neutral redistricting response to a changed legal landscape. It was, the judges wrote, an attempt to use a Supreme Court ruling about limiting racial classification to achieve what the court had previously said Alabama could not do: systematically dilute Black voting power to benefit one party. The distinction between "not using race to draw districts" and "using race-neutral pretexts to achieve the same discriminatory outcome" was one the court was not willing to elide.</p>

<h2>Trump's Redistricting Push</h2>

<p>The Alabama case does not exist in isolation. President Trump has publicly and privately urged Republican-controlled state legislatures across the South to aggressively redraw congressional maps following <em>Callais</em>, with the explicit goal of gaining Republican House seats in the midterms. The strategy is straightforward: Republican operatives identified several districts in Southern states where new maps could, in theory, flip Democratic-held seats by dismantling the Black-majority districts that produced them.</p>

<p>Alabama was the first test case. The federal court's ruling suggests the strategy has legal vulnerabilities that Republican strategists may have underestimated. The <em>Callais</em> decision limited the use of race as an explicit criterion in redistricting. It did not, the Alabama panel made clear, authorize states to draw maps whose predictable and intended effect is racial vote dilution simply because race was not explicitly mentioned in the line-drawing process.</p>

<p>That distinction — between explicit racial classification and discriminatory effect achieved through facially neutral means — is one the Supreme Court has never definitively resolved in the post-<em>Callais</em> environment. Alabama's appeal will force that resolution, one way or the other, before November.</p>

<h2>What the Supreme Court Will Decide</h2>

<p>The Supreme Court that will hear this case, if it grants certiorari on an emergency basis, is the same court that issued <em>Callais</em>. It is a six-three conservative supermajority. And it is also the court that, in <em>Allen v. Milligan</em> — the case that produced Alabama's 2023 court-ordered map in the first place — ruled five to four that the Voting Rights Act still required states to draw majority-minority districts under certain circumstances.</p>

<p>That five-to-four ruling held because Chief Justice John Roberts joined the liberal justices in a decision that surprised many court watchers. Whether Roberts would reach the same conclusion under the post-<em>Callais</em> legal framework is the central question. Roberts has historically been sensitive to the court's institutional credibility on voting rights issues. He has also consistently voted to narrow the Voting Rights Act's reach.</p>

<p>How he reads the tension between <em>Callais</em> and the long line of cases establishing that discriminatory intent and effect remain relevant to redistricting analysis will determine whether Alabama uses the court-ordered map or the Republican-drawn map in November. And whether Alabama uses that map may determine whether Republicans hold or lose one House seat — and potentially, in a closely divided Congress, the majority itself.</p>

<h2>The Stakes for November</h2>

<p>The House of Representatives currently operates with a razor-thin Republican majority. The redistricting strategy Trump has encouraged in Southern states was designed to provide a buffer — to add two or three seats that could absorb losses elsewhere and preserve Republican control. Alabama was supposed to be one of those added seats.</p>

<p>If the courts block the new maps — in Alabama and potentially in South Carolina, where a similar legal challenge is pending — that buffer disappears. Republicans would be defending their majority without the structural advantages the redistricting strategy was designed to create.</p>

<p>The judges who blocked Alabama's map were not, as the state's attorney general suggested in his statement promising an appeal, engaging in judicial overreach. They were applying longstanding constitutional principles to a map that, by their reading, violated those principles. Whether the Supreme Court agrees — and whether it does so before November — is now the most consequential unanswered question in the 2026 midterm landscape.</p>`,
      author: 'The American Reveal Political Desk',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `may27-knicks-${Date.now()}-3`,
      title: "The Knicks Are Going to the NBA Finals. For New York, This Is More Than Basketball.",
      slug: 'new-york-knicks-nba-finals-2026-cavaliers-sweep',
      excerpt: "Twenty-seven years. That's how long New York has waited. The Knicks swept the Cavaliers in four games, Jalen Brunson was named conference MVP, and Madison Square Garden lost its mind. What this team means to a city — and to a league that desperately needed this moment.",
      content: `<p>The final buzzer sounded and Jalen Brunson stood at center court, arms raised, and the noise coming out of Madison Square Garden was the kind you don't manufacture. Twenty-seven years of waiting, of losing, of near-misses and embarrassments and ownership controversies and draft busts and coaching carousels — all of it discharged in a single roar that rattled windows on Seventh Avenue.</p>

<p>The New York Knicks are going to the NBA Finals.</p>

<p>They swept the Cleveland Cavaliers 130-93 in Game 4 of the Eastern Conference Finals on May 26, 2026. They did it by an average margin of 23.7 points. They extended their playoff winning streak to eleven games. They won every game but one by double digits. This was not a scrappy upset. This was a team that spent four years being built correctly finally doing what it was built to do.</p>

<h2>How They Got Here</h2>

<p>The last time the Knicks were in the NBA Finals was 1999. Latrell Sprewell, Patrick Ewing who didn't make it to the Finals that year due to an Achilles tear, Allan Houston's floater that beat Miami. They lost to the San Antonio Spurs in five games. The city has been waiting ever since through seasons that ranged from mediocre to actively humiliating — the Isiah Thomas years, the Andrea Bargnani trade, the Carmelo Anthony era that produced talent but never a champion, the lottery years, the James Dolan ownership saga that became a running national sports media joke.</p>

<p>What changed was the construction of something patient and coherent. Jalen Brunson arrived in the summer of 2022, a point guard dismissed by some as a complementary piece, and proceeded to prove that he was a franchise player — not in the flashy, contract-driven, superstar-recruitment way that had defined the Knicks' failed attempts to compete, but in the grinding, game-by-game, series-by-series way that actually wins championships. Karl-Anthony Towns came via trade in 2024, a center whose offensive versatility opened the floor in ways that multiplied what Brunson could do. The supporting cast was built through the draft, through smart role-player acquisitions, through the kind of organizational patience that had been conspicuously absent from this franchise for most of the previous quarter century.</p>

<p>The result is a team that wins ugly when it has to and wins by thirty when it doesn't. A team that has been the best in the Eastern Conference since January. A team that swept its conference finals opponent while everyone was still asking whether they were quite ready.</p>

<h2>Brunson's Moment</h2>

<p>Jalen Brunson was named the Eastern Conference Finals MVP. The selection was not debated. He averaged twenty-six points, eight assists, and five rebounds across the four games, with a player efficiency rating that put him in the company of the great playoff performers of the last decade. More than the numbers, he was the conductor of a team that played its best basketball when the moment was largest.</p>

<p>There is a particular pleasure in watching a player prove people wrong at the highest possible level. Brunson was not recruited to New York as a savior. He was recruited as a very good player who might be enough alongside the right supporting cast. The case for him as an elite player — not just a very good one, but genuinely elite — has been building for two years. These playoffs have closed it.</p>

<p>The narrative also matters in a city that runs on narratives. New York has not had a sports figure who feels genuinely its own, who chose the city and made it better and stayed through difficulty, in a long time. Brunson has become that figure. The city knows it. The way Madison Square Garden responds to him — the particular frequency of the noise — is different from the way it responds to other players. It is recognition, and gratitude, and something that operates below the level of sports entirely.</p>

<h2>Karl-Anthony Towns and What He Adds</h2>

<p>Karl-Anthony Towns scored nineteen points and grabbed fourteen rebounds in the clinching game. The line does not capture what he does for this team. Towns is a seven-footer who can make threes, handle in space, set screens that collapse defenses, and protect the rim when he has to. He is, when healthy and engaged, one of the five most versatile offensive players in the league. Paired with Brunson, he creates problems that most defensive schemes cannot solve: if you hedge on Brunson's drives, Towns is open at the arc; if you drop back to contain Towns, Brunson has space to operate in the mid-range and at the rim.</p>

<p>The Cavaliers had no answer for the combination. The Thunder or the Spurs, whoever emerges from the Western Conference Finals, will face the same problem. Neither team has a defensive profile that clearly maps onto what the Knicks do offensively. The Finals start June 3. The Knicks will have home court if the Thunder hold their series lead.</p>

<h2>What This Means for New York</h2>

<p>It is easy to underestimate what sports mean to a city until the right team does the right thing at the right time. New York has had champions recently — the Yankees, the Giants, the Rangers who won the Cup in 2024. But the Knicks occupy a particular place in the city's self-image, something rooted in the Garden's history, in the 1970s championship teams, in the Patrick Ewing era when the team was the loudest thing in a loud city and still couldn't get over the top.</p>

<p>The people filling the Garden for these playoff games — the ones who were there in 1999, the ones who kept buying tickets through the Isiah Thomas disaster, the ones who stayed loyal through a quarter century of losing — they are not watching a sports team. They are watching something that belongs to them. The Knicks going to the Finals is not just a basketball result. It is the city getting something back that it did not realize, fully, how much it had missed.</p>

<p>The Finals begin June 3. New York is ready.</p>`,
      author: 'The American Reveal Sports Desk',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Sports',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#1D4ED8',
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
