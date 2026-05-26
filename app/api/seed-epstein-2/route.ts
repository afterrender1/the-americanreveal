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
      id: `epstein2-kellen-${Date.now()}-1`,
      title: "She Ran Epstein's Operation — Now Sarah Kellen Is Finally Talking",
      slug: 'sarah-kellen-testifies-house-oversight-epstein',
      excerpt: "For years she was Epstein's most protected lieutenant, the woman who scheduled the girls and answered his phone. On May 22, Sarah Kellen sat before the House Oversight Committee and broke her silence. What she said may change everything.",
      content: `<p>For more than a decade, Sarah Kellen was the one name prosecutors, survivors, and journalists kept circling back to — and kept being blocked from. She was Jeffrey Epstein's personal assistant, his scheduler, the woman who made the calls and managed the logistics of what federal prosecutors would later describe as a sprawling sex trafficking operation. She received immunity in the 2008 non-prosecution agreement that let Epstein walk. She changed her name. She married a NASCAR driver and largely disappeared from public view.</p>

<p>On May 22, 2026, that silence broke.</p>

<p>In a closed-door deposition before the House Oversight Committee, Sarah Kellen testified for hours about her role inside Epstein's world. And what she told investigators was not the story her years of silence had allowed people to imagine. According to sources briefed on the deposition, Kellen told the committee that she herself was a target of Epstein's abuse — recruited, manipulated, and ultimately controlled by a man who used proximity and dependency as instruments of coercion.</p>

<h2>The Woman Behind the Curtain</h2>

<p>To understand why Kellen's testimony matters, you have to understand the role she occupied. She was not a peripheral figure. Survivors described her in lawsuits and victim impact statements as one of the primary people who recruited them, who arranged their travel to Epstein's various properties, who was present during assaults. In a 2005 police report from Palm Beach, she was listed as a potential co-conspirator. In the 2008 deal Alexander Acosta negotiated with Epstein's lawyers, she was among a small group of associates granted immunity from federal prosecution.</p>

<p>That immunity agreement has haunted the case ever since. Critics argued it was written so broadly — extending protections not just to Epstein but to unnamed co-conspirators — that it functionally shielded people like Kellen from accountability no matter what came to light later. When Epstein was re-arrested in 2019 on federal sex trafficking charges, prosecutors in the Southern District of New York argued the 2008 deal did not bind them. Epstein died in his cell before that question was ever tested in court.</p>

<p>Kellen's immunity survived Epstein's death. She has declined to speak publicly about the case for years, citing it. Her attorneys have long maintained she was a young woman herself who was drawn into Epstein's orbit and had limited agency over what happened around her. That is, broadly, what she told the committee on May 22.</p>

<h2>What She Said</h2>

<p>Sources familiar with the deposition describe a testimony that was both more forthcoming than expected and more carefully constructed than some investigators hoped. Kellen acknowledged that she managed scheduling for Epstein's interactions with young women and girls. She acknowledged that she understood, over time, that what was happening was wrong. And she told the committee that she herself had been subjected to abuse by Epstein — that her role as his assistant did not place her above the exploitation that defined his operations, but made her a part of it in ways she did not fully comprehend when she was young.</p>

<p>She was reportedly reluctant to provide names beyond Epstein himself. Investigators pressed her on who else knew what was happening at his properties in New York, Palm Beach, New Mexico, and the US Virgin Islands. She answered some questions and declined to answer others, according to sources, citing ongoing legal sensitivities. Her attorneys were present throughout.</p>

<p>What she did confirm, sources say, is that the operation was far larger and more deliberately organized than Epstein ever publicly acknowledged — that the network of contacts, donors, and associates who visited his properties was extensive, that records were kept, and that some of those records were deliberately destroyed or removed in the period following his 2019 arrest.</p>

<h2>The Immunity Question, Again</h2>

<p>Her appearance before the committee has reignited the debate over the 2008 immunity deal and whether it should be revisited. Several members of the committee have called for the Justice Department to review whether Kellen's cooperation with Congress could form the basis for new agreements — agreements that might compel her to name names she has so far protected.</p>

<p>That is a complicated legal question. The 2008 deal granted immunity from federal prosecution, not from congressional testimony. But compelling a witness to testify in ways that might expose them to state-level charges, or to criminal liability in foreign jurisdictions, is territory courts have not fully mapped in cases like this one.</p>

<p>For survivors, the legal nuances are almost secondary to the emotional weight of finally seeing one of the most protected figures in this case forced to answer questions in an official setting. Virginia Giuffre, whose lawsuits against Epstein associates have driven much of the public accountability in this case, wrote on social media the morning of May 22 that she had waited eighteen years for the people around Epstein to be held accountable. "One deposition doesn't make it right," she wrote. "But it's a start."</p>

<h2>What Comes Next</h2>

<p>The committee has indicated it will release a transcript of the deposition, though the timeline for that release remains unclear. Members from both parties have said the testimony was significant, though they have been careful not to characterize its contents publicly while it remains under review.</p>

<p>The Justice Department's ongoing investigation into the Epstein network — an investigation that has been criticized as slow and insufficiently aggressive by survivors and advocacy groups — has not publicly commented on Kellen's testimony or whether her cooperation with Congress has any bearing on federal efforts.</p>

<p>What is clear is that the architecture of protection that has surrounded Epstein's associates for nearly two decades is showing more cracks than at any previous point. The 2008 immunity deal that was supposed to close the book on this case has instead become the central document of an ongoing accounting. Kellen's testimony is not the end of that accounting. It may not even be the most important chapter of it. But for the first time in years, she is no longer simply a name on a list of people who got away with something.</p>

<p>She is now someone who had to sit in a room and answer for it.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein2-newnames-${Date.now()}-2`,
      title: "Three New Names. The House Oversight Committee Confirms They Exist. America Demands to Know Who They Are.",
      slug: 'epstein-three-new-accused-names-house-oversight',
      excerpt: "Sarah Kellen's deposition didn't just break her silence — it reportedly named three men previously unknown to the public as Epstein abusers. The committee has passed the names to investigators. The rest of us are waiting.",
      content: `<p>The deposition of Sarah Kellen before the House Oversight Committee on May 22, 2026 produced something no one publicly anticipated: three names. Three previously unidentified individuals, accused by Kellen of being connected to Jeffrey Epstein's abuse operation, whose identities have now been passed to federal and state investigators.</p>

<p>The committee chair confirmed the referral on May 23. The names themselves have not been made public. And that gap — between confirmation that the names exist and disclosure of who they belong to — has ignited one of the most intense cycles of speculation and demand for transparency in this case since Epstein's death in 2019.</p>

<h2>What We Know</h2>

<p>According to the committee chair's public statement, Kellen identified three individuals during her closed-door deposition who were, in her account, directly involved in or aware of Epstein's abuse of young women and girls. The chair did not characterize the individuals beyond that — did not indicate whether they are public figures, whether they hold or have held government positions, or whether they are individuals who have previously appeared in court documents or media reporting related to the case.</p>

<p>The names were referred to the Department of Justice and, according to sources, to at least one state attorney general's office. Whether those referrals lead to formal investigations, charges, or public disclosure is now entirely at the discretion of prosecutors who have historically moved slowly in Epstein-adjacent matters.</p>

<p>Members of the committee have declined to identify the individuals even in background conversations with reporters. Several have noted that premature disclosure could compromise any investigation. Others have been more pointed: they want the Justice Department to move quickly, and the refusal to name names publicly is contingent on DOJ actually acting on the referral.</p>

<h2>The Pattern of Protection</h2>

<p>The announcement fits a pattern that has frustrated survivors and accountability advocates throughout this case. Names emerge. They are referred to investigators. Investigations proceed slowly or not at all. Eventually, names that were once secret appear in court documents, in civil depositions, or in journalistic investigations — not because the government compelled disclosure, but because the legal and reporting process ground forward despite official resistance.</p>

<p>The most prominent example of this pattern is the 2024 release of documents from the civil lawsuit filed by Epstein's former associate Ghislaine Maxwell's accusers. Those documents named dozens of individuals, most of whom were never charged with any crime, many of whom had been known to investigators for years. The release produced enormous public attention and almost no prosecutorial action.</p>

<p>Critics of the Justice Department's handling of the Epstein case argue that this pattern is not accidental — that the names which surface tend to be names that powerful interests have an interest in suppressing, and that the institutional incentives within DOJ push toward caution rather than accountability when powerful people are implicated. The department has denied this characterization.</p>

<h2>Who Are They?</h2>

<p>Publicly, no one is saying. Privately, the speculation has been intense. The Epstein case has touched virtually every sector of American elite life — finance, politics, academia, media, philanthropy, technology. Epstein cultivated relationships across ideological and professional lines, and the list of individuals who visited his properties or received his donations or attended his dinners is vast and varied.</p>

<p>Survivors and their attorneys have maintained for years that the full scope of who knew what — and who participated in what — has never been publicly established. The 2008 non-prosecution agreement, the sealed court documents, the FBI's slow pace of investigation, and the deaths of key potential witnesses (Epstein himself, and individuals who might have spoken if properly protected) have all contributed to a record that remains, in its most important dimensions, incomplete.</p>

<p>Kellen's identification of three previously unknown individuals suggests that even now, after years of litigation and investigation, there are people connected to this case whose involvement has not yet entered the public record. That is either a testament to how thoroughly Epstein protected his associates, or evidence that investigators have not fully pursued all available leads, or both.</p>

<h2>The Demand for Disclosure</h2>

<p>Advocacy groups representing Epstein survivors have called on the committee to release the names publicly, arguing that the individuals in question have had years of protection and that further shielding them from public scrutiny serves their interests rather than the public's. Several survivors have made the same demand directly, noting that their own names were made public through court documents and media coverage without their consent, while those who abused them have remained anonymous.</p>

<p>The committee has so far declined, citing the active investigation. That position may not hold indefinitely. Committee members are aware that they face a political calculus: the longer the names remain secret, the more the investigation risks appearing captured by the same instinct toward protection that has characterized official handling of this case from the beginning.</p>

<p>Three names. Passed to investigators. America is watching to see if anything happens next — or if this becomes one more chapter in a long story about powerful people and the systems that protect them.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein2-andrew-${Date.now()}-3`,
      title: "Prince Andrew's Reckoning Is Getting Bigger: Sexual Misconduct Probe Expands Beyond Original Charge",
      slug: 'prince-andrew-investigation-expanding-sexual-misconduct',
      excerpt: "The UK investigation into Prince Andrew was already unprecedented. Now it's growing. Investigators are examining allegations beyond the original misconduct in public office charge, and new questions about a trade envoy role he was never vetted for are making the Palace very nervous.",
      content: `<p>The investigation into Prince Andrew, Duke of York, which has been proceeding quietly within British law enforcement for months, is no longer quiet. According to reporting from multiple outlets confirmed by sources with knowledge of the investigation, the scope of the probe has expanded to encompass sexual misconduct allegations that go beyond the original charge of misconduct in public office that initially triggered scrutiny.</p>

<p>The expansion represents a significant escalation. Misconduct in public office is a serious charge in British law, but it is procedural in nature — it concerns the abuse of an official position, not the underlying acts themselves. The broadening of the investigation to include sexual misconduct allegations brings it into fundamentally different legal territory and dramatically raises the stakes for the Duke and for the Royal Family.</p>

<h2>The Original Charge and What It Covered</h2>

<p>The misconduct in public office investigation centered on Andrew's relationships with Jeffrey Epstein and Ghislaine Maxwell during the period when he held official royal duties and was funded by the public purse. The theory of the original charge was that Andrew used his position — his access, his connections, the prestige of his royal role — in ways that were connected to and potentially facilitated Epstein's operations.</p>

<p>That framing was always somewhat narrow given the full scope of allegations against Andrew. Virginia Giuffre, who settled a civil lawsuit against him in 2022 for an undisclosed sum, accused him of sexually abusing her on multiple occasions when she was seventeen years old. Andrew has consistently denied those allegations, and the civil settlement did not constitute an admission of wrongdoing.</p>

<p>British law enforcement has been carefully examining what, if anything, falls within their jurisdiction given that the alleged acts primarily occurred in the United States and the US Virgin Islands. The expansion of the investigation suggests investigators believe they may have found a path.</p>

<h2>The Trade Envoy Question</h2>

<p>Separately, new reporting has revealed that Prince Andrew was never properly vetted for a UK trade envoy role that was the late Queen Elizabeth II's personal wish. The role, which Andrew occupied for a period before his 2011 resignation amid public controversy over his Epstein connections, came with significant diplomatic access and represented him formally abroad as a representative of the British government.</p>

<p>Standard security vetting for such a role would have required a thorough review of his associations, his finances, and his conduct. Sources indicate that vetting was either not completed or was completed in a form so cursory as to be meaningless — that the Queen's personal endorsement of the appointment effectively bypassed the normal process.</p>

<p>This matters for several reasons. It raises questions about how long British institutions were aware of concerns about Andrew's conduct and chose to look away. It raises questions about what the security services knew about his relationship with Epstein and when they knew it. And it potentially provides investigators examining his official conduct with a cleaner evidentiary path: if Andrew operated as a government representative without proper vetting, the connections between his official role and his private associations become easier to establish.</p>

<h2>The Palace's Increasingly Difficult Position</h2>

<p>King Charles III has already stripped Andrew of his royal duties, his HRH styling in official contexts, and his military patronages. The Duke lives at Royal Lodge, a Grace and Favour property in Windsor Great Park, in what has been described as a gilded exile — present at family events but absent from official life.</p>

<p>The expansion of the criminal investigation creates pressure that cannot be managed with the tools the Palace has used so far. Stripping titles and reducing his public role was a reputational and institutional response to a public relations crisis. A criminal investigation — and potentially criminal charges — requires a different kind of response, one the Palace has not had to navigate for a senior royal in modern times.</p>

<p>Sources within royal circles describe deep anxiety about the investigation's expansion, not least because Andrew's consistent posture — that he has done nothing criminal and that the allegations against him are false — has not changed even as the legal environment around him has shifted significantly. His 2019 BBC Newsnight interview, in which he defended his relationship with Epstein and expressed no sympathy for Epstein's victims, is widely regarded as one of the worst self-inflicted public relations disasters in recent British history. It also established, on the record, a set of claims that investigators can test against the evidence they have gathered.</p>

<h2>The Survivors Are Watching</h2>

<p>For the women who have accused Andrew of abuse, the expansion of the investigation is both welcome and insufficient. Giuffre's civil case was settled before it could produce a verdict or a full public airing of the evidence. Other accusers have spoken through advocacy organizations and in media interviews, but have not yet had their allegations formally tested in any proceeding.</p>

<p>The criminal investigation — even if it ultimately does not result in charges — forces the evidence into an official process. Documents can be compelled. Witnesses can be interviewed under caution. The architecture of deniability that Andrew has constructed over years of non-cooperation with accountability efforts becomes harder to maintain when investigators have legal tools rather than just journalistic ones.</p>

<p>Whether those tools will be used — and used aggressively enough to produce results — is the question that survivors and accountability advocates are holding in careful, skeptical suspension. The British establishment's track record on holding its most powerful members accountable is not one that inspires confidence. But the investigation exists, it is expanding, and for the first time in this case, that counts for something.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein2-suicidenote-${Date.now()}-4`,
      title: "Epstein Left a Suicide Note. It's Been Sealed for Years. The New York Times Says It Exists.",
      slug: 'epstein-suicide-note-sealed-court-documents',
      excerpt: "A sealed document that may be Epstein's suicide note has been sitting in a federal court file for years. His cellmate found it. Its contents remain unknown. The question of whether the public will ever see it is now very much alive.",
      content: `<p>Among the many sealed documents in the federal court proceedings surrounding Jeffrey Epstein, one has taken on particular significance: a note, discovered by his cellmate in the aftermath of what was initially reported as a suicide attempt on July 23, 2019, that may contain Epstein's own account of what was happening to him and what he feared.</p>

<p>The New York Times reported this week that the note exists, that it has remained sealed in the court record, and that its contents are unknown to the public and to most of the individuals involved in the litigation surrounding Epstein's estate and his victims' claims. The report has renewed calls from survivors, their attorneys, and members of Congress for the document to be unsealed.</p>

<h2>The Timeline Around the Note</h2>

<p>To understand the significance of this document, it is necessary to reconstruct the sequence of events in July and August of 2019 with precision.</p>

<p>Epstein was arrested on July 6, 2019 and brought to the Metropolitan Correctional Center in New York. On July 23, he was found in his cell in a semi-conscious state with marks on his neck. The Bureau of Prisons initially classified the incident as a possible suicide attempt. His cellmate at the time, Nicholas Tartaglione, a former police officer awaiting trial on murder charges, told investigators he discovered Epstein and called for help.</p>

<p>It was in the aftermath of this July 23 incident that the note in question was reportedly found. The exact circumstances of its discovery — who found it, where it was located, and how it came to be sealed in the court record — have not been fully reported. What the Times' reporting establishes is that the document was entered into the court file and has remained sealed since.</p>

<p>On August 10, 2019, Epstein was found dead in his cell. He had been removed from suicide watch. His two assigned guards were both asleep and had falsified their monitoring logs, according to federal investigators. The official cause of death was ruled suicide by hanging. The circumstances of his death have been disputed by his estate, by some forensic experts, and by numerous public figures who have suggested the official account is incomplete.</p>

<h2>What the Note Might Contain</h2>

<p>No one outside a small circle of investigators and legal officials has reportedly seen the note. Speculation about its contents is therefore precisely that — speculation. But the context in which it was written is significant.</p>

<p>If it was written in late July 2019, Epstein had been in federal custody for approximately two weeks. He had seen the charges against him, understood that the government was pursuing him aggressively in ways that the 2008 agreement had led him to believe would never happen, and was facing the prospect of serious prison time for the first time. He had access to counsel. He was reportedly frightened.</p>

<p>What a man in that position would write — who he might name, what he might claim about his own culpability or the culpability of others, what he might say about threats he feared or deals he hoped to make — is the subject of obvious interest to investigators, to survivors, and to the public.</p>

<p>Attorneys for Epstein's victims have argued in filings that the sealed documents in his case, including any communications he made while in custody, are directly relevant to the claims of his estate and to the ongoing civil proceedings. They have sought access to sealed materials repeatedly. Those motions have largely been denied.</p>

<h2>The Sealing Question</h2>

<p>There is a routine legal logic to sealing documents in active criminal proceedings — protecting the integrity of investigations, shielding witnesses, preserving the rights of defendants. But Epstein is dead. The criminal case against him was terminated by his death. The reasons that typically justify sealing court documents have substantially eroded in the years since August 2019.</p>

<p>What remains is a set of interests that continue to push toward non-disclosure. If the note names individuals who have not been charged, their attorneys would argue strenuously against its release. If it contains statements that contradict the official account of his death, those with an interest in maintaining that account would resist disclosure. If it discusses relationships with living powerful individuals in ways that are damaging, those individuals would seek to keep it sealed.</p>

<p>The question of who has standing to seek unsealing — survivors, media organizations, congressional investigators — is one that courts have not yet resolved in this specific context. The House Oversight Committee has requested access to sealed Epstein documents as part of its investigation. Whether courts will grant that request, and whether executive branch agencies will comply if courts do, remains to be seen.</p>

<h2>The Broader Pattern of Concealment</h2>

<p>The sealed suicide note sits within a broader pattern of official concealment that has defined the Epstein case from its earliest stages. The 2008 non-prosecution agreement was kept secret for years after it was signed. The identities of co-conspirators protected by that agreement were never disclosed. The full client list from Epstein's operations has never been made public. FBI files related to the investigation have been released only partially and in heavily redacted form.</p>

<p>Each element of that pattern has a legal justification. Taken together, they describe a system that has consistently prioritized the interests of the powerful over the rights of victims and the public's interest in knowing what happened.</p>

<p>A sealed note from a dead man — whatever it contains — is one more piece of a puzzle that the official record has been constructed, piece by piece, to keep incomplete. The renewed reporting about its existence is a reminder that the puzzle is still being worked, and that some of those pieces, despite years of effort to keep them hidden, have a way of eventually surfacing.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein2-lutnick-${Date.now()}-5`,
      title: "Howard Lutnick Lied About Epstein. The Transcript Proves It.",
      slug: 'howard-lutnick-epstein-lies-house-oversight-transcript',
      excerpt: "The Commerce Secretary told the House Oversight Committee he barely knew Epstein. The released transcript tells a different story. This is what happens when powerful men assume no one will bother to check.",
      content: `<p>Howard Lutnick, the Commerce Secretary of the United States and former CEO of the financial firm Cantor Fitzgerald, appeared before the House Oversight Committee to discuss his contacts with Jeffrey Epstein. He downplayed those contacts. He suggested his relationship with Epstein was minimal — the kind of arm's-length acquaintance that a prominent New York financier might have with many people in his orbit.</p>

<p>Then the committee released the transcript.</p>

<p>What the transcript shows — according to reporting from multiple outlets that have reviewed it — is that Lutnick's characterization of his contact with Epstein does not match the actual record. The discrepancy between what he told the committee and what the documentary evidence shows is substantial enough that multiple committee members have called for a referral to the Justice Department for investigation of potential false statements.</p>

<h2>What Lutnick Said</h2>

<p>In his committee appearance, Lutnick described his relationship with Epstein as limited. He acknowledged knowing him — it would have been implausible to deny it, given the overlap between their social and professional worlds — but characterized the relationship in terms that suggested infrequent contact and no substantive connection to Epstein's activities.</p>

<p>The precise language Lutnick used is important. In sworn congressional testimony, precise language is often the battlefield on which perjury cases are won or lost. Lutnick's attorneys have reportedly reviewed the transcript and maintain that his statements were accurate and not misleading. Committee members who have reviewed the same transcript disagree.</p>

<h2>What the Record Shows</h2>

<p>The documentary record of Lutnick's contact with Epstein is more extensive than his testimony suggested. Financial records, flight logs, and communications reviewed by the committee indicate a relationship that involved more than occasional social contact. The specific details of what those records show have not been fully made public, but sources familiar with the committee's work describe them as inconsistent with the portrait Lutnick painted of himself as a peripheral figure in Epstein's world.</p>

<p>Cantor Fitzgerald, the firm Lutnick led for decades, operated in the same financial circles Epstein inhabited. Epstein managed money for extraordinarily wealthy clients and cultivated relationships with financial institutions and their principals as a professional matter. The idea that a senior figure in New York finance would have no meaningful contact with him during the years of his peak influence is not, on its face, plausible — which is precisely why Lutnick's minimization of their relationship raised immediate questions for investigators who had reviewed the underlying records before the interview.</p>

<h2>The Pattern of Powerful Men and Their Epstein Denials</h2>

<p>Lutnick is not the first powerful man to sit before investigators and describe his Epstein relationship in terms more flattering than the evidence supports. It has become a recognizable genre: the prominent figure who insists his contact with Epstein was trivial, social, and unknowing — who positions himself as someone who knew a man without knowing what that man was.</p>

<p>Some of those characterizations have been credible. Epstein cultivated relationships under false pretenses, presented himself as a legitimate financial manager and philanthropist, and kept the details of his actual operations hidden even from many of the people who attended his dinners and flew on his planes. It is genuinely possible to have had contact with Epstein without knowing the full scope of what he was doing.</p>

<p>But the claim of ignorance becomes harder to sustain the more extensive the contact was, the longer it continued, and the more senior and sophisticated the person making it. A Commerce Secretary and former Wall Street CEO is not a naive young person who can plausibly claim to have been charmed without understanding what was happening. The question is not just what Lutnick knew about Epstein's crimes, but whether what he told the committee about what he knew was accurate.</p>

<h2>The False Statements Question</h2>

<p>Making materially false statements to Congress is a federal crime. It is, on paper, one of the most straightforward accountability mechanisms available — you lie to a congressional committee under circumstances where the lie is documented and contradicted by evidence, you face prosecution. In practice, prosecutions for false statements to Congress are relatively rare, reserved for cases where the false statements are unambiguous and the political will to pursue them exists.</p>

<p>Whether either condition is met in Lutnick's case is not yet clear. The committee has the power to make a criminal referral; it does not control whether DOJ acts on it. And the current Justice Department, led by officials appointed by an administration in which Lutnick serves as a Cabinet secretary, faces obvious institutional pressures around how aggressively it would pursue such a referral.</p>

<p>The release of the transcript is itself a pressure tactic. By making the discrepancy between Lutnick's testimony and the underlying record a matter of public record, committee members are raising the cost of inaction. If DOJ declines to investigate, it becomes a documented choice — one that will follow any future attorney general who made it.</p>

<h2>What This Means for the Broader Investigation</h2>

<p>The Lutnick situation is significant beyond his individual case. It suggests that the House Oversight Committee's investigation is producing real evidence, not just political theater — that the committee has access to records that can be used to test the accuracy of what powerful people say when they appear before it.</p>

<p>That is precisely the dynamic that makes these investigations meaningful. The value of a congressional investigation into something like the Epstein network is not primarily in the legislation it might produce. It is in the creation of a record — a documented, official, public record — of who said what, who was asked what, and where the official account conflicts with the evidence. That record exists independently of whether any individual faces legal consequences.</p>

<p>Howard Lutnick sat before the committee. The transcript was released. The discrepancy is now part of the public record. Whatever happens next, that is not nothing.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
      category: 'Epstein Files',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#7C3AED',
    },
    {
      id: `epstein2-blanche-${Date.now()}-6`,
      title: "Todd Blanche Before the Senate: Epstein, Weaponization, and the Questions He Wouldn't Answer",
      slug: 'todd-blanche-senate-testimony-epstein-doj',
      excerpt: "The Deputy Attorney General faced the Senate this week and was pressed on the Epstein investigation, the DOJ's weaponization fund, and Trump-era prosecutions. His answers — and his non-answers — revealed a department under political pressure from every direction.",
      content: `<p>Deputy Attorney General Todd Blanche's appearance before the Senate Judiciary Committee this week was billed as an oversight hearing on the Justice Department's priorities and operations. What it became was something rawer: a multi-front confrontation about the politicization of federal law enforcement, the status of the Epstein investigation, and whether the most powerful prosecutorial institution in the world is functioning as an independent instrument of justice or as something else.</p>

<p>Blanche, who before his appointment served as Donald Trump's personal defense attorney in the New York hush money case, came to the hearing with a profile that made his position structurally unusual. He is now the second-ranking official at the department that prosecuted his former client. That history hovered over every exchange.</p>

<h2>On Epstein: Careful Non-Answers</h2>

<p>The questions about the Epstein investigation were the most anticipated of the hearing. Several senators — Democrats and at least two Republicans — pressed Blanche on the status of the DOJ's investigation into Epstein's network, on whether the department intended to pursue charges against living co-conspirators, and on the release of FBI files that had been promised and only partially delivered.</p>

<p>Blanche's answers were carefully hedged. He affirmed that the investigation is ongoing. He declined to provide specifics about its scope, its targets, or its timeline. He said the department takes its obligations to victims seriously. He declined to comment on specific individuals or on the adequacy of the 2008 non-prosecution agreement. When pressed on why the FBI file releases have been so heavily redacted, he deferred to ongoing investigative sensitivities.</p>

<p>The hedging was legally defensible. Discussing active investigations in open congressional hearings creates genuine problems for prosecutors — it can compromise grand jury secrecy, alert potential targets, and prejudice future proceedings. Blanche's caution was framed in those terms.</p>

<p>Senators who have been pressing for accountability in the Epstein case were not satisfied. Several noted that the investigation has been described as "ongoing" for years without producing charges against anyone in Epstein's network beyond Ghislaine Maxwell, who was convicted in 2021 and sentenced to twenty years. An ongoing investigation that has produced one conviction in more than fifteen years, they argued, is not a functioning investigation — it is a way of keeping the question open without actually answering it.</p>

<h2>The Weaponization Fund</h2>

<p>A second major line of questioning concerned what senators described as a "weaponization fund" — a pool of resources and personnel that critics allege has been used to pursue politically motivated investigations and to review and potentially reverse the outcomes of prior prosecutions. Blanche defended the department's review processes as legitimate exercises of prosecutorial discretion, consistent with the new administration's priorities and within the department's legal authority.</p>

<p>Democrats on the committee pressed him on specific cases where they argued the weaponization apparatus had been used to benefit Trump allies or punish perceived enemies. Blanche declined to discuss individual cases in ways he said would compromise prosecutorial independence. The exchange became circular: senators arguing that independence requires transparency about how decisions are made, Blanche arguing that transparency in specific cases undermines the independence it is supposed to protect.</p>

<p>The weaponization question intersects with the Epstein investigation in ways that senators made explicit. If the department has developed internal review mechanisms for politically sensitive cases, the question of whether those mechanisms have touched the Epstein investigation — which involves individuals connected to both political parties, to both the Trump and Clinton orbits, and to powerful institutional interests — is an obvious one. Blanche declined to answer it directly.</p>

<h2>The Trump Prosecutions Question</h2>

<p>The third major area of questioning concerned the department's handling of the prosecutions that were initiated against Trump during the Biden administration. Blanche's position here was structurally awkward: as Trump's former personal attorney, he had argued in court that many of those prosecutions were legally defective or politically motivated. As Deputy Attorney General, he has been involved in decisions about how to proceed with the cases.</p>

<p>He has recused himself from some aspects of those decisions. The scope and nature of those recusals has not been fully disclosed. Several senators pressed him on whether his recusals were adequate given the depth of his prior personal and professional involvement in the cases, and on who within the department is making decisions about the Trump prosecutions in areas where he is recused.</p>

<p>The answers he gave were general. The recusal process is handled through the department's career ethics officials. The specific matters from which he is recused are not publicly disclosed. He is confident in the integrity of the process.</p>

<h2>What the Hearing Revealed</h2>

<p>Congressional hearings of this kind rarely produce dramatic disclosures. Their value is in what they reveal about institutional posture — about the stance a department takes toward oversight, about the questions officials are and are not willing to answer, about the gaps between what they claim and what the public record shows.</p>

<p>What Blanche's hearing revealed is a Justice Department under pressure from multiple directions simultaneously. It is being pressed by Epstein survivors and their allies for more aggressive accountability in a case that has implicated powerful people across ideological lines. It is being pressed by Democratic senators who believe it has been captured by political considerations that benefit the administration. It is being pressed by some Republicans who want it to move aggressively against perceived enemies of the administration while protecting its allies.</p>

<p>In that environment, careful non-answers are a rational institutional strategy. They create no new targets. They make no commitments that can later be used as evidence of bad faith. They allow the department to maintain the posture of impartiality while declining to demonstrate it in any specific case.</p>

<p>The Epstein survivors watching the hearing were watching for something different: evidence that the people with the power to produce accountability are actually going to use it. On that question, Todd Blanche's careful, hedged, legally defensible testimony did not offer much comfort.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-26').toISOString(),
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
