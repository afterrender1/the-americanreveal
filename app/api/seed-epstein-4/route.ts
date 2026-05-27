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
      id: `epstein4-townhall-${Date.now()}-1`,
      title: "GOP Lawmaker Melts Down at Town Hall: Constituents Demand Answers on Epstein Files and the Anti-Weaponization Fund",
      slug: 'gop-lawmaker-town-hall-epstein-files-anti-weaponization-2026',
      excerpt: "The questions were not polite. Constituents showed up to a Republican town hall armed with specifics — the Epstein files, the anti-weaponization fund, Trump's record — and their congressman had no good answers. What happened in that room is a preview of November.",
      content: `<p>Town halls were not supposed to be this hard again. After the explosive constituent confrontations of 2017 — the shouting matches over the Affordable Care Act, the members of Congress who stopped holding them entirely rather than face their voters — Republican leadership had spent years managing the format carefully. Friendly audiences. Vetted questions. Controlled environments designed to produce usable footage rather than genuine accountability.</p>

<p>What happened this week was different.</p>

<p>A Republican congressman — facing constituents in a district that has trended increasingly competitive — walked into a town hall and confronted a room that had done its homework. The questions that came were not vague expressions of frustration. They were specific. They named documents. They cited votes. They connected the anti-weaponization fund, the Epstein file releases, and Trump's record in ways that suggested voters who have been paying attention and are not satisfied with what they have seen.</p>

<h2>The Anti-Weaponization Fund Question</h2>

<p>The question that drew the sharpest response came early. A constituent — a middle-aged woman who identified herself as a lifelong Republican — stood up and asked the congressman directly: why had his party voted to establish and fund the DOJ's anti-weaponization unit while simultaneously blocking the release of complete Epstein files? What, she asked, was being protected, and from whom?</p>

<p>The question landed because it connected two things that the congressman's leadership would prefer to keep separate. The anti-weaponization apparatus has been presented publicly as a mechanism for protecting ordinary Americans from politically motivated prosecution — a response to what Republicans characterized as the weaponization of federal law enforcement against Trump and his allies. Critics, including the constituent at the microphone, have argued it functions primarily as a tool for reversing prosecutions of Trump allies and insulating powerful people from accountability.</p>

<p>The Epstein files create a problem for that framing. If the party's concern is the weaponization of law enforcement against powerful people, what does it mean that the most comprehensive federal accountability effort involving powerful people — the investigation of Epstein's network — has proceeded with extraordinary slowness? The constituent's question implied an answer: the anti-weaponization unit protects the powerful. The Epstein slowdown protects the powerful. The pattern is the pattern.</p>

<p>The congressman's response was not compelling. He cited procedural complexities. He noted that some files remain sealed for legitimate investigative reasons. He pivoted to his committee work. The room was not satisfied. The follow-up questions came faster than he could manage them.</p>

<h2>The Epstein File Demand</h2>

<p>A second constituent, a younger man in the back, asked why his representative had not signed onto legislation requiring full and unredacted release of all Epstein-related FBI files. The Epstein Files Transparency Act has gathered co-sponsors from both parties. The congressman in the room had not signed on.</p>

<p>His explanation — that he supported transparency but wanted to ensure proper process — produced audible groans. Another constituent called out from the audience: "What process? It's been years." The congressman tried to restore order. The moderator called for quiet. It took several minutes for the room to settle.</p>

<p>What the exchange illustrated is the degree to which the Epstein files have become a litmus test that crosses traditional political lines. The people demanding full release are not a monolithic ideological bloc. They are conservatives who believe the files will implicate Democrats, progressives who believe they will implicate Republicans and their allies, survivors' advocates who simply want the record made complete, and voters of no particular ideology who have concluded that if powerful people are being protected, that protection is wrong regardless of which party benefits.</p>

<p>A Republican congressman who cannot explain why he opposes full transparency faces a constituency that includes his own base. That is an uncomfortable political position, and the town hall made it visible.</p>

<h2>Trump's Record as a Liability</h2>

<p>A third line of questioning addressed Trump directly — his record on the Epstein files, his administration's handling of the DOJ investigation, and his personal history with Epstein. The congressman deflected, citing Trump's statements about wanting transparency and noting that the administration had overseen some document releases.</p>

<p>A constituent responded by reading from a printed sheet: the specific FBI files that had been released in heavily redacted form, the names that remained blacked out, the depositions that remained sealed, the timeline of promises made and not kept. The congressman had no specific response to the specifics. He thanked the constituent for their engagement and called on someone else.</p>

<p>The room did not allow a clean transition. The level of preparation that constituents brought to this town hall — the printed documents, the specific citations, the follow-up questions that anticipated the deflections — reflected a voter base that is no longer willing to accept the general when it asks a specific question.</p>

<h2>What This Predicts</h2>

<p>Town hall confrontations do not directly determine election outcomes. Fired-up constituents in a meeting room are not necessarily fired-up voters in November. But they are a signal — about the intensity of feeling on particular issues, about the degree to which official explanations are failing to satisfy people who are paying attention, about the vulnerability of incumbents who have not developed credible positions on the questions that their constituents care most about.</p>

<p>The Epstein files are not going away as a political issue. The House Oversight Committee's investigation is producing new disclosures regularly. Sarah Kellen's testimony, the three new names referred to investigators, the expansion of the Prince Andrew probe — each new development refreshes the news cycle and brings new voters into contact with questions that their elected representatives are struggling to answer.</p>

<p>A Republican congressman who cannot explain his Epstein file position to his own constituents has a problem that will not be solved by better talking points. The constituents have read the documents. They have specific questions. The November reckoning is coming.</p>`,
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
      id: `epstein4-mountsinai-${Date.now()}-2`,
      title: "Epstein's Secret VIP Status at Mount Sinai: How He Bought His Way Into One of America's Most Prestigious Hospitals",
      slug: 'epstein-mount-sinai-hospital-vip-access-donations-2026',
      excerpt: "A new report reveals Jeffrey Epstein maintained extraordinary access and influence at Mount Sinai Hospital in New York — treated as a VIP patient, cultivating relationships with top physicians, and using the institution's prestige to launder his reputation. This is the inside story of how he did it.",
      content: `<p>Jeffrey Epstein understood, with predatory precision, how institutions work. He understood that money and proximity to prestige create access, and that access creates legitimacy, and that legitimacy creates protection. He applied this understanding to universities — MIT, Harvard, Princeton all received his money and gave him credibility in return. He applied it to scientific research — funding conferences and laboratories that allowed him to present himself as a patron of knowledge rather than a criminal. And according to a detailed new report, he applied it to one of New York's most prestigious medical institutions: Mount Sinai Hospital.</p>

<p>The report, published this week, details a relationship between Epstein and Mount Sinai that went far beyond ordinary philanthropy. He was treated, sources familiar with the institution's operations during that period told investigators, as a VIP patient with access and consideration that was extraordinary even by the standards of a hospital accustomed to serving the wealthy and powerful. He cultivated personal relationships with senior physicians. He attended events that were not open to ordinary donors. He used the institution's name and his association with it as social currency — another piece of the reputation architecture he built so carefully and that collapsed so thoroughly in 2019.</p>

<h2>The Donation Strategy</h2>

<p>Epstein's approach to institutional relationships was consistent across the entities he cultivated. He gave money — sometimes substantial amounts, sometimes less than his reputation suggested — and in exchange received access, association, and the ability to name-drop affiliations that made him seem legitimate to the next person he wanted to impress. At MIT Media Lab, director Joi Ito accepted donations from Epstein even after his 2008 conviction and worked to keep those donations hidden from the institution's leadership. The pattern at other universities was similar: money moved in, credibility moved out, and the institution's oversight mechanisms failed to catch what was happening until it was too late.</p>

<p>At Mount Sinai, the specific contours of his giving and what it purchased are detailed in the new report. Epstein donated to research programs and medical initiatives that gave him entree to the institution's scientific community. He attended events where he could meet and cultivate relationships with senior physicians — the kind of relationships that translate into access to VIP patient services and the social credibility of being known personally by prominent doctors.</p>

<p>For a man who presented himself as a science patron and who claimed, in various contexts, to have formal scientific training he did not actually have, proximity to a major research hospital served multiple purposes. It gave him credibility with the academics and scientists he was simultaneously cultivating at universities. It gave him access to medical care at a level that reflected his financial status. And it gave him another institutional name to drop when constructing the elaborate false biography he presented to the world.</p>

<h2>The VIP Patient Question</h2>

<p>The report's characterization of Epstein as a VIP patient raises questions that the institution has not yet answered publicly. Hospitals serving wealthy patients routinely offer enhanced services — private rooms, expedited appointments, access to senior specialists — that are not available to patients without means. That is an ethically complicated reality of American healthcare, but it is not unusual.</p>

<p>What the report describes goes beyond the ordinary provision of premium services. Sources describe an individual who was treated with deference that reflected not just his financial relationship with the institution but a social relationship with people inside it — a relationship he had cultivated deliberately and that gave him a level of access and accommodation that would not have been extended to an ordinary wealthy patient without his specific web of personal connections.</p>

<p>The physicians who cultivated relationships with him — whether knowingly complicit in his reputation-building or simply unaware of the full nature of who he was — are not identified by name in the report. Mount Sinai has not commented on the specific allegations. The institution's current leadership took over well after the period in question and faces the familiar institutional challenge of addressing historical failures while managing ongoing operations and reputation.</p>

<h2>The Broader Reputation Laundering Operation</h2>

<p>Mount Sinai is one node in a network that Epstein constructed over decades with extraordinary deliberateness. The network served a single purpose: to make a sex trafficker look like a respected member of the global elite — someone whose name appeared on donor rolls, whose photograph appeared at scientific conferences, whose calls were returned by university presidents and hospital directors and heads of state.</p>

<p>That construction was not incidental to his crimes. It was protective infrastructure. Every institutional affiliation made it harder for victims to be believed when they spoke about him. Every prestigious name associated with his gave the next powerful person who encountered him a reason to discount the rumors that circulated in certain circles and extend him the benefit of the doubt. The reputation was the shield.</p>

<p>Understanding the Mount Sinai relationship — and relationships like it at other institutions — is not merely a matter of historical curiosity. It is an examination of how predators use the prestige economy to insulate themselves from accountability. The institutions that took his money and gave him access were not, in most cases, knowingly abetting a criminal. They were following normal procedures for engaging with wealthy donors. But those normal procedures created a system that Epstein exploited with sophistication, and that system has not been fundamentally changed by his exposure and death.</p>

<h2>What Accountability Looks Like Here</h2>

<p>Mount Sinai and institutions like it face a version of the accountability question that is less legally fraught but no less important than the criminal accountability questions surrounding Epstein's direct associates. What did they know? When did they know it? What procedures exist now that would prevent a similar relationship from developing with a similar person?</p>

<p>The House Oversight Committee's investigation has focused primarily on the criminal accountability questions — who participated in the abuse, who enabled it, who has escaped consequences. The institutional accountability questions — how the reputation architecture was built and what reforms would dismantle it — have received less systematic attention.</p>

<p>They deserve more. Jeffrey Epstein did not operate in a vacuum. He operated in a world of institutions that provided him with cover, whether they understood they were doing so or not. Understanding how that cover was constructed is essential to understanding why it took so long to remove it — and how to ensure it is not reconstructed by the next person who understands the same lessons Epstein did about how money and prestige and access work together in American life.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein4-massie-${Date.now()}-3`,
      title: "Thomas Massie Is Leaving Congress. Before He Goes, He's Promising to Blow Open the Epstein Redactions.",
      slug: 'thomas-massie-epstein-redacted-names-promise-before-leaving-congress',
      excerpt: "Trump's endorsed candidate beat him. His congressional career is ending. And Thomas Massie says he has nothing to lose — which is why he's promising to expose redacted names from the Epstein files before he walks out the door. Whether he can deliver is another question entirely.",
      content: `<p>Thomas Massie has always been the most inconvenient kind of Republican: the one who actually means what he says about limited government and institutional accountability, regardless of whether that meaning puts him crosswise with his own party's leadership or, now, with the president who just ended his congressional career.</p>

<p>Trump backed Massie's primary challenger. Massie lost. He will leave Congress when his term expires. And in the window between his defeat and his departure, he has made a promise that has the Epstein accountability world paying close attention: he intends to expose more of the redacted names from the Epstein files before he goes.</p>

<p>The promise raises immediate questions. Can he do it? What mechanism would he use? And why, if he has had access to this information during his time in Congress, has he waited until his congressional career is ending to act on it?</p>

<h2>What Massie Has Said</h2>

<p>Massie has been public on social media and in interviews about his intention to use whatever time and access remain to him in Congress to force more Epstein disclosure. His specific claim is that names which have been redacted from released documents — names of individuals connected to Epstein's network who have not been publicly identified — can and should be made public, and that he intends to be part of making that happen before he leaves.</p>

<p>He has been characteristically blunt about his motivation. He has nothing to lose. The political calculations that constrain sitting members who are seeking re-election, who are trying to maintain committee assignments, who are managing relationships with leadership — none of those calculations apply to a member who has been defeated in a primary and is counting down the days to the end of his term. The incentive structure that keeps most members cautious has been removed.</p>

<p>Whether that freedom translates into actual disclosure depends on mechanisms that are not entirely within Massie's individual control. He is one member of the House. He does not chair the relevant committees. He cannot unilaterally declassify documents or compel the executive branch to release information. What he can do is use the floor, use his voice, use whatever legislative procedures are available to a member in his final months, and — most potently — use the specific information he has access to as a sitting member before that access expires.</p>

<h2>The Redaction Problem</h2>

<p>The Epstein file releases have been marked throughout by redactions that cover names, dates, locations, and communications in ways that protect individuals whose connection to Epstein's operation has not been publicly established. The FBI's releases under FOIA requests have been among the most heavily redacted — entire pages blacked out, names replaced with brackets, passages rendered unreadable in ways that obscure precisely the information that would matter most for public accountability.</p>

<p>Congressional investigators have access to unredacted versions of some of these documents through the committee process. Members who have seen unredacted files know names that the public does not. The gap between what official Washington knows and what the public knows about the Epstein network is, according to multiple members who have spoken about it in general terms, substantial.</p>

<p>Massie's promise implies that he has seen, or has access to, information that falls in that gap — names and details that the redaction process has kept from the public. His intention, as he has stated it, is to narrow that gap before he loses the access that allows him to see it.</p>

<h2>The Mechanism Question</h2>

<p>The most significant limitation on Massie's promise is the question of mechanism. How, specifically, does a departing House member compel the disclosure of information that executive branch agencies have determined should remain redacted?</p>

<p>One path is legislation — introducing or supporting bills that require disclosure and building enough support to pass them. The Epstein Files Transparency Act, already introduced with bipartisan support, provides a vehicle. A departing member can be a vocal advocate for legislation without being its prime mover.</p>

<p>Another path is the floor itself. Members can read information into the Congressional Record under speech and debate clause protections that provide some insulation from legal consequences. Whether those protections extend to reading classified or redacted information is a question that has not been definitively resolved and that would almost certainly produce an immediate legal confrontation if tested.</p>

<p>A third path is less formal: using the access he retains as a sitting member to share information with journalists, with investigators, with the House Oversight Committee, in ways that produce public disclosure without Massie himself being the direct source of the leak. This is the path that has historically produced the most significant disclosures in politically sensitive cases — the member who ensures information reaches the right people rather than the member who stands at the microphone and reads it aloud.</p>

<h2>Why Now?</h2>

<p>The timing question is one that Massie's critics have raised with some force. He has been in Congress for more than a decade. He has had access to various aspects of the congressional oversight process throughout that time. Why, if he believes this information should be public, did he not act on it before his primary defeat removed the political calculation from the equation?</p>

<p>Massie's implicit answer — that political survival creates constraints that defeat removes — is honest about how Congress actually works. Members who want to remain in Congress, who want to maintain their committee positions and their influence over legislation, make calculations about what actions are worth the institutional cost. Massie is suggesting that those calculations prevented him from acting and that he is now free from them.</p>

<p>That answer is both credible and insufficient. If the information he has is significant enough to promise public disclosure after his defeat, it was significant enough to disclose before it. The political cost of Epstein accountability disclosure is real, but it is a cost that Massie, who built his career on a reputation for political courage, had more capacity than most to absorb.</p>

<p>What he does in the months remaining to him will determine whether his promise is a genuine commitment to accountability or a departing member's attempt to define his legacy on the way out the door. The Epstein accountability community is watching carefully. They have learned, from long experience, to evaluate these promises by their outcomes rather than their rhetoric.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein4-bondi-${Date.now()}-4`,
      title: "Pam Bondi Won't Testify. The DOJ Is Blocking Her. Here's Why That Should Alarm Everyone.",
      slug: 'pam-bondi-refuses-testify-epstein-probe-doj-blocking-2026',
      excerpt: "She was Attorney General of the United States while the Epstein investigation sat largely dormant. Now she's been fired and the DOJ says she doesn't have to answer for any of it. The argument the Justice Department is making is more dangerous than most people realize.",
      content: `<p>The argument is simple on its surface. Pam Bondi is no longer Attorney General of the United States. She is a private citizen. Private citizens, the DOJ has argued to the House Oversight Committee, are not obligated to testify before Congress in the same way that current officials are. She left office. Her obligation to account for what happened on her watch left with her.</p>

<p>The argument is also, if accepted, a template for evading accountability that would function for virtually every official who oversees a sensitive investigation and then departs before Congress gets around to asking questions. And in the Epstein case — where the investigation has moved with exceptional slowness, where key decisions about what to pursue and what to let lie were made at precisely the level of authority that Bondi occupied — the DOJ's blocking of her testimony is not a procedural footnote. It is a substantive obstacle to understanding what happened and why.</p>

<h2>What Bondi's Testimony Would Cover</h2>

<p>Pam Bondi served as Attorney General from early 2025 through her departure earlier this year. During that period, the Justice Department's handling of the Epstein investigation — the investigation into his network of associates, the question of who else might face charges, the management of the FBI's files and the congressional oversight process — fell within her authority and her responsibility.</p>

<p>The House Oversight Committee wants to ask her specifically about decisions made during her tenure regarding the scope of the investigation, the pace of file releases, the handling of the anti-weaponization unit's interactions with Epstein-related matters, and whether political considerations influenced prosecutorial decisions in any aspect of the case.</p>

<p>These are not fishing expedition questions. They go to the core of what congressional oversight of the executive branch is supposed to accomplish: understanding how the people who held power used it, and whether they used it in ways that served the public interest or other interests instead.</p>

<h2>The DOJ's Legal Argument</h2>

<p>The Justice Department's argument against compelling Bondi's testimony has several components. The first is the private citizen point: she is no longer an official, and the institutional interests that justify compelling testimony from current officials — ensuring executive branch accountability, maintaining congressional oversight of ongoing operations — do not apply with the same force to former officials who no longer control those operations.</p>

<p>The second component invokes executive privilege. Even as a former official, Bondi may have been party to communications and deliberations that fall within the executive privilege doctrine — the principle that protects confidential communications within the executive branch from compelled disclosure. The Trump administration, which has aggressively asserted executive privilege across multiple fronts, has signaled its support for Bondi's position.</p>

<p>The third component is more practical: the DOJ controls its own enforcement mechanisms. Even if the committee issues a subpoena, enforcing that subpoena against a recalcitrant former official requires going to court — a process that takes months and produces outcomes that are uncertain. The department is betting, with some historical justification, that the time and institutional friction required to compel compliance will outlast the committee's political momentum.</p>

<h2>Why This Precedent Is Dangerous</h2>

<p>The principle the DOJ is establishing — that former officials have substantially reduced obligations to testify about their conduct in office — is not new. Administrations of both parties have used versions of this argument to shield former officials from congressional accountability. What makes the Bondi situation particularly significant is the context in which it is being applied.</p>

<p>The Epstein investigation is not an ordinary policy dispute. It is an ongoing criminal accountability matter involving alleged crimes against dozens of victims. The question of whether the Attorney General exercised her authority in ways that served or undermined that accountability is not a question about policy preference or administrative discretion. It is a question about whether the chief law enforcement officer of the United States used her office to protect powerful people from consequences they legally deserve.</p>

<p>If former officials cannot be compelled to answer that question — if departure from office functions as a permanent shield against accountability for how that office was exercised — the practical effect is to make the most consequential decisions in government the least accountable ones. A cabinet secretary who makes a decision that derails an important investigation and then leaves office before Congress gets around to asking about it faces no formal accountability mechanism. That is a structural problem that extends well beyond the Epstein case.</p>

<h2>The Survivors' Perspective</h2>

<p>For the women who have spent years fighting for accountability in the Epstein case, Bondi's refusal to testify is one more entry in a very long list of institutional failures. They have watched the 2008 immunity deal protect Epstein's associates. They have watched the FBI investigation move slowly. They have watched the file releases come in heavily redacted form. They have watched case after case stall in pretrial motions or expire without charges.</p>

<p>The pattern they have observed is consistent: every time a mechanism for accountability comes into view, something blocks it. A deal. A delay. A legal argument. A departure from office. The specific blockage changes. The result is the same.</p>

<p>Pam Bondi's refusal to testify is, from their perspective, not a surprising development. It is the predictable next iteration of a system that has demonstrated, across multiple administrations and multiple legal environments, that its instinct when confronted with Epstein accountability is to find a reason why now is not the right time, this mechanism is not the right one, this official is not the right person to ask.</p>

<p>The committee has not yet decided whether to issue a subpoena and fight the DOJ's position in court. If it does, the legal battle will take months and the outcome is uncertain. If it does not, Bondi walks — one more person who held the authority to act and is never formally required to explain why she did or did not use it.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein4-wsjlawsuit-${Date.now()}-5`,
      title: "Trump's $10 Billion Lawsuit Against the Wall Street Journal Just Got Thrown Out. Here's What He Was Trying to Hide.",
      slug: 'trump-10-billion-lawsuit-wall-street-journal-epstein-dismissed',
      excerpt: "A judge dismissed Trump's $10 billion defamation suit against the Wall Street Journal over their reporting on his ties to Epstein. The lawsuit was never really about defamation. It was about suppression. And it failed.",
      content: `<p>The lawsuit was always more about pressure than about law. Donald Trump sued the Wall Street Journal for $10 billion — a number so large it functioned less as a damages claim than as a threat — over reporting that examined his relationship with Jeffrey Epstein and the social world they shared in the 1990s and early 2000s. A federal judge has now dismissed the suit, finding that the Journal's reporting was protected and that Trump's claim did not meet the legal standard required to proceed.</p>

<p>The dismissal is a legal defeat for Trump. More significantly, it is a failure of the suppression strategy that the lawsuit represented — an attempt to use the threat of catastrophic litigation to discourage news organizations from reporting on his Epstein connections. That strategy has a long history with Trump and a mixed record. In this case, it did not work.</p>

<h2>What the Journal Reported</h2>

<p>The Wall Street Journal's reporting on Trump and Epstein drew on documents, interviews, and the extensive paper trail that has accumulated around Epstein's social life over the decades. The reporting examined the period in the 1990s and early 2000s when Trump and Epstein were part of overlapping social circles in New York and Palm Beach — the parties, the events, the mutual acquaintances, the documented interactions.</p>

<p>Trump has long acknowledged knowing Epstein and has described him, in a 2002 interview with New York magazine that has become one of the most-quoted documents in Epstein coverage, as "a terrific guy" who was "a lot of fun to be with." That quote predates Epstein's 2008 conviction by six years. Trump has since claimed he cut off contact with Epstein and has distanced himself from him. The Journal's reporting examined the nature and duration of their relationship in more detail than Trump found comfortable.</p>

<p>The specific claims in the Journal's reporting that Trump characterized as defamatory were disputed vigorously by his legal team throughout the litigation. The judge's dismissal does not mean the reporting was definitively accurate in every particular — it means that Trump did not meet the legal standard to proceed with a defamation claim, which for a public figure requires demonstrating "actual malice": that the publisher knew the statements were false or acted with reckless disregard for their truth or falsity.</p>

<h2>The $10 Billion Number</h2>

<p>The specific damages figure Trump sought — $10 billion — deserves examination. The Wall Street Journal's annual revenue is approximately $2 billion. A $10 billion judgment would be existentially threatening to the publication. That is not an accident. Trump and his legal team are sophisticated enough to understand that the number bore no realistic relationship to any actual damages Trump suffered from the reporting. The number was chosen to maximize the chilling effect of the litigation — to send a message to news organizations that reporting on his Epstein connections could expose them to company-destroying liability.</p>

<p>This is a recognizable Trump litigation strategy. He has sued or threatened to sue dozens of news organizations and individuals over unfavorable coverage throughout his career. The suits rarely succeed on the merits — defamation law in the United States provides robust protections for reporting about public figures. Their purpose is not to win in court. Their purpose is to impose costs on critics, to consume the time and resources of news organizations, and to signal that reporting on certain topics will be expensive regardless of its accuracy.</p>

<p>The Journal, which is owned by News Corp and has the resources to defend against extended litigation, did not capitulate. Smaller news organizations might have. That is the calculus that suits like this one are designed to exploit.</p>

<h2>What the Dismissal Means</h2>

<p>The judge's ruling that the lawsuit does not survive the motion to dismiss stage is a clear legal victory for press freedom in a case that implicated some of the most important principles governing public interest journalism. The ruling affirms that a public figure cannot use massive defamation claims to suppress reporting about his documented relationships with a convicted sex trafficker simply because that reporting is embarrassing or politically inconvenient.</p>

<p>It also means that the Journal's reporting about Trump and Epstein stands. The legal challenge that Trump mounted to discredit it has failed. Whatever the reporting said about the nature and duration of their relationship, that reporting was protected and the publication that produced it cannot be held liable for producing it.</p>

<p>For the Epstein accountability ecosystem, the dismissal matters in a specific way. One of the most potent tools for suppressing reporting about the Epstein network has been litigation — the threat of defamation suits against publications and individuals who write about the network's members. That threat has silenced some potential reporting and added cost and friction to much of the rest. A high-profile dismissal of a $10 billion suit by the most powerful person in the world is a data point for every news organization weighing whether to publish what it knows about the Epstein network. The law protects this reporting. The threat is less powerful than it appeared.</p>

<h2>What Comes Next</h2>

<p>Trump's legal team has indicated they may appeal the dismissal. Appeals of defamation suit dismissals rarely succeed when the trial court has correctly applied the actual malice standard, but they extend the timeline and maintain pressure on the defendant. Whether the Journal will face continued litigation or whether Trump's team concludes that further pursuit is not worth the effort remains to be seen.</p>

<p>What is settled, for now, is that the attempt to use a $10 billion lawsuit to define the boundaries of permissible reporting on Trump's Epstein ties has failed in court. The reporting exists. The record exists. And the judge who reviewed the claim and found it legally insufficient has added one more entry to the growing record of accountability mechanisms that, whatever their limitations, are functioning as they were designed to.</p>`,
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

  return NextResponse.json({ ok: true, inserted: toInsert.map((a) => a.title) })
}
