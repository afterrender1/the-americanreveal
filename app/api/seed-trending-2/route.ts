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
      id: `trending2-doj-trump-epstein-${Date.now()}-1`,
      title: "The DOJ Hid Pages From the Epstein Files That Named Trump. NPR Found Them.",
      slug: 'doj-withheld-epstein-pages-trump-allegations-npr-investigation',
      excerpt: "Despite a legal order requiring unredacted release of Epstein files, NPR's investigation found the DOJ quietly removed pages tied to allegations involving the President. The FBI interviewed a complainant multiple times. Those interviews are nowhere in the released files.",
      content: `<p>The promise was unredacted. The reality was something else.</p>

<p>When the Justice Department announced it would release the Epstein files in full, the language used was sweeping — complete transparency, no more redactions, the public record restored. Survivors and accountability advocates expressed cautious hope. Congressional investigators said they would be watching. And then the files came out, and NPR's investigative team started comparing what was released against what the documentary record suggested should be there.</p>

<p>What they found was a gap. Pages that should have been in the release were not. Specifically, pages related to allegations involving the President of the United States — Donald Trump — had been withheld or removed from the files that were made publicly available.</p>

<p>The FBI, according to NPR's reporting, had interviewed at least one complainant about those allegations multiple times. Those interviews are not in the released files. They were conducted. They were documented. And the documentation is not there.</p>

<h2>What the Legal Order Required</h2>

<p>The release of the Epstein files was not a voluntary act of executive branch transparency. It was compelled — the result of litigation, congressional pressure, and ultimately legal orders requiring the DOJ and FBI to produce records that had been withheld for years. The Epstein Files Transparency Act, passed with bipartisan support, imposed specific obligations on the executive branch about what must be released and when.</p>

<p>The DOJ's compliance with those obligations has been contested from the beginning. Early releases were heavily redacted. Subsequent releases were more complete in some areas and less complete in others. The specific question of whether pages related to Trump allegations were selectively removed — whether the compliance effort was engineered to be complete everywhere except in the places that matter most — is the question NPR's investigation has now placed squarely on the public record.</p>

<p>The answer, based on the reporting, appears to be yes. The DOJ released what it released. What it did not release includes material that is specifically relevant to the sitting president. The legal order required release. The release did not happen. Those three sentences, taken together, describe something that has a word: non-compliance.</p>

<h2>The FBI Interviews</h2>

<p>The existence of FBI interviews with a complainant about Trump-related allegations is the most significant specific disclosure in NPR's reporting. FBI interviews are formal records. They are documented in 302 forms — the standard bureau record of an interview with a witness or subject. Those forms exist somewhere in the FBI's files. Their absence from the released documents is not a clerical error or an oversight. It is a decision.</p>

<p>Who made that decision, at what level of the Justice Department, and on what basis is not yet publicly known. The possibilities range from career officials following established procedures for protecting materials related to ongoing investigations, to political officials making a deliberate choice to keep damaging material away from the public record. These possibilities are not mutually exclusive — the same outcome can be produced by bureaucratic instinct and political direction simultaneously.</p>

<p>What the decision means, in practical terms, is that the public record of the Epstein investigation is incomplete in a specific and significant way. The FBI interviewed someone who made allegations about the President. That interview happened. It is documented. You cannot read the documentation. The person who decided you cannot read it works for an administration led by the person the documentation concerns.</p>

<h2>The Pattern of Selective Release</h2>

<p>NPR's finding fits a pattern that accountability advocates have been documenting since the first Epstein file releases. The releases have been most complete where they are least politically sensitive and most incomplete where they are most sensitive. Names that implicate individuals connected to Democratic politics have appeared in released documents. Names and records connected to the current administration and its allies have been more consistently absent or redacted.</p>

<p>This pattern does not prove deliberate political manipulation. Bureaucratic decisions about what to release and what to withhold are made by many people at many levels, and not all of them are politically motivated. But the pattern is consistent enough, and the specific omissions significant enough, that the explanation of innocent bureaucratic coincidence is increasingly difficult to sustain.</p>

<p>Congressional Democrats on the House Oversight Committee have demanded a full accounting of which pages were withheld and why. The DOJ has not responded to those demands publicly. The committee's ability to compel a response depends on whether it is willing to pursue contempt proceedings against an executive branch that has demonstrated its willingness to assert broad privilege claims against congressional oversight.</p>

<h2>The Accountability Question</h2>

<p>The situation NPR's reporting describes is, in constitutional terms, serious. A federal court or legal order required release of documents. The executive branch did not comply with that requirement in full. The non-compliance specifically concerned documents related to the person who leads the executive branch. The institutional mechanism designed to ensure compliance — the courts, Congress, the press — are now engaged in the familiar slow grind of trying to force accountability from a branch of government that controls the documents, the investigators, and the enforcement mechanism simultaneously.</p>

<p>For Epstein's survivors, this is a familiar story told with a new cast. The 2008 immunity deal was secret. The FBI investigation moved slowly. The FOIA releases were redacted. The court documents were sealed. Now the legal order requiring full release has produced a release that is not full. The specific content that is missing is the content most relevant to the most powerful person currently involved.</p>

<p>The press found it anyway. That is worth noting. NPR's investigation is the kind of accountability journalism that the threat of $10 billion defamation suits is designed to discourage. It happened. The finding is on the record. What happens next depends on whether the institutions designed to respond to this kind of finding — courts, Congress, prosecutors — decide to do their jobs.</p>`,
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
      id: `trending2-leonblack-${Date.now()}-2`,
      title: "Leon Black Paid Epstein Millions. The Senate Wants to Know Why — and the White House Is Blocking the Answer.",
      slug: 'leon-black-epstein-payments-senate-finance-probe-wyden-2026',
      excerpt: "Senate Finance Committee Ranking Member Ron Wyden is pressing Apollo Global Management's Leon Black over massive unexplained payments to Epstein, evidence of Epstein surveilling women on Black's behalf, and abusive tax schemes — while blasting the Trump administration for illegally withholding Epstein documents.",
      content: `<p>Leon Black paid Jeffrey Epstein somewhere between $50 million and $158 million. That range — the uncertainty itself — tells you something about how opaque the financial relationship between these two men was, and about how hard investigators have had to work to reconstruct it from documents that were never designed to be examined by the public.</p>

<p>Apollo Global Management, the private equity giant Black co-founded, has described the payments as fees for estate planning and tax advice. Senator Ron Wyden, the ranking Democrat on the Senate Finance Committee, has a different characterization. He wants to know why a man who was managing hundreds of billions in private capital needed the specific financial services of a convicted sex trafficker. He wants to know what the payments actually purchased. And he wants to know why the Trump administration is blocking the release of documents that would help answer those questions.</p>

<h2>The Payments and What They Were For</h2>

<p>The financial relationship between Black and Epstein is one of the most significant unresolved questions in the broader Epstein accountability investigation. The scale of the payments — even at the low end of the estimated range — is extraordinary. Epstein charged wealthy clients fees for financial management and advice, but those fees, in virtually every other documented case, were far smaller. The payments Black made to Epstein dwarf anything else in the documented record.</p>

<p>Black's explanation — estate planning and tax optimization — has been treated skeptically by investigators for several reasons. First, the specific tax strategies that Epstein allegedly helped implement have been characterized by Wyden's investigation as "abusive tax schemes" — arrangements that pushed the boundaries of legality and that the senator has suggested may themselves warrant investigation. Second, the ongoing nature of the payments, which continued over years and through Epstein's 2008 conviction, raises questions about what value Black believed he was continuing to receive.</p>

<p>Third, and most disturbing, is the surveillance question. Wyden's probe has produced evidence suggesting that Epstein conducted surveillance of women on Black's behalf — monitoring individuals in ways that raise serious legal and ethical questions about the nature of the services Epstein was providing and what Black knew about his methods. The characterization of this as "estate planning" becomes increasingly difficult to sustain when the estate planner is also apparently running surveillance operations.</p>

<h2>The Senate Probe and Its Limits</h2>

<p>Wyden's investigation operates under significant constraints. As the ranking minority member — not the chair — of the Finance Committee, he does not control the committee's subpoena power or its official investigative agenda. His probe is conducted with the tools available to minority members: document requests, public letters, hearings where he controls his own question time, and the ability to put findings into the public record even when he cannot compel production.</p>

<p>Those tools have limits, but they are not nothing. Wyden has consistently used them aggressively in the Epstein accountability space, and his public letters documenting specific allegations — the surveillance evidence, the tax scheme characterizations, the specific payment amounts — have created a public record that is harder to ignore than private correspondence.</p>

<p>His specific blast at the Trump administration for violating the Epstein Files Transparency Act — withholding documents it is legally required to release — connects the Leon Black investigation to the broader pattern of executive branch non-compliance that NPR's reporting also identified. The documents that would help investigators understand the full scope of the Black-Epstein financial relationship are among the materials that have not been fully released. The administration that controls those documents is led by a man whose own name appears in the withheld pages.</p>

<h2>What Apollo Has Said</h2>

<p>Apollo Global Management has maintained that Leon Black's relationship with Epstein was a personal matter that did not involve the firm, that the payments were for legitimate services, and that Black's eventual departure from Apollo's leadership — which he announced in early 2021 after an independent review of his Epstein ties — reflected his desire to avoid distraction to the firm rather than any finding of wrongdoing.</p>

<p>That position is legally defensible. It has not satisfied investigators, activists, or the significant number of Apollo investors and institutional partners who have continued to ask questions about the firm's culture and its former leader's conduct. The independent review that preceded Black's departure was commissioned by Apollo's board and conducted by a law firm. Its full findings were not made public. The summary that was released described the payments as having been for legitimate services while noting that Black had "exercised poor judgment" in the relationship.</p>

<p>"Poor judgment" is the phrase that gets attached to Epstein associations when the institution involved wants to acknowledge a problem without conceding legal liability. It appeared in Harvard's statements about its Epstein donations. It appeared in MIT's post-Ito analysis. It appears in Apollo's summary. The phrase functions as a settlement — an acknowledgment calibrated to close the conversation rather than open the record.</p>

<h2>The Tax Scheme Question</h2>

<p>Wyden's characterization of the tax arrangements as "abusive" carries specific legal weight. The Senate Finance Committee has jurisdiction over tax policy and the Internal Revenue Code. A ranking member of that committee using the word "abusive" about a specific financial arrangement is not rhetorical inflation — it is a signal that the arrangements in question may have crossed lines that the tax code draws.</p>

<p>The specific nature of those arrangements has not been fully made public. What has been disclosed is enough to suggest that the financial relationship between Black and Epstein involved sophisticated structures designed to minimize tax liability in ways that Wyden's investigation believes went beyond what the law permits. If that characterization is accurate, the investigation is no longer just about what services Epstein provided — it is about whether Black committed tax crimes in the course of paying for them.</p>

<p>That question, and all the questions that surround the Black-Epstein financial relationship, remains open. The documents that would answer them are in the DOJ's files. The DOJ is not releasing them. And the senator who most wants answers controls neither the committee's subpoena power nor the executive branch that holds the documents he needs.</p>`,
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
      id: `trending2-summers-${Date.now()}-3`,
      title: "Harvard Forced Out Lawrence Summers Over Epstein. The Emails Are Worse Than Anyone Reported.",
      slug: 'lawrence-summers-harvard-forced-out-epstein-dating-advice-emails',
      excerpt: "Emails from 2017–2019 show former Treasury Secretary Lawrence Summers asked Jeffrey Epstein for dating advice about a young female mentee. Harvard announced he would resign all roles by year's end. His wife's PBS show was canceled when it emerged Epstein had funded it. This is the full story.",
      content: `<p>Lawrence Summers has spent his career at the intersection of power and prestige — Treasury Secretary under Clinton, president of Harvard, director of the National Economic Council under Obama, one of the most prominent economists in the world. His name has appeared in the Epstein orbit before, but always at what seemed a plausible distance: the kind of tangential connection that a man of his prominence and social world might have with a wealthy figure who collected relationships across elite institutions.</p>

<p>The emails changed that.</p>

<p>Emails from 2017 through 2019 — after Epstein's 2008 conviction, after the non-prosecution agreement, after the period when any plausible claim of ignorance about who Epstein was had expired — show Summers in correspondence with Epstein that is not tangential and not institutional. It is personal. Summers asked Epstein for dating advice about a young female mentee.</p>

<p>Harvard has announced that Summers will resign from all academic and faculty roles by the end of the school year. His wife's PBS program has been canceled after it emerged that Epstein had funded it. The career built over decades has collapsed in the span of months. The emails are why.</p>

<h2>The Nature of the Emails</h2>

<p>The specific content of the emails — the language Summers used, the nature of the "dating advice" he sought, the details of who the young female mentee was — has not been fully reported. What has been disclosed is enough to establish the basic character of the exchange: a man of enormous institutional power seeking counsel from a convicted sex trafficker about his relationship with a younger woman in his professional sphere.</p>

<p>The implications of that exchange accumulate quickly. Summers knew, by 2017, exactly who Epstein was. The 2008 conviction was public record. The Palm Beach investigation, the plea deal, the terms of Epstein's sex offender registration — all of it was documented and available. A man of Summers's sophistication, with his access to legal counsel and his professional immersion in institutional governance, cannot plausibly claim ignorance of what Epstein had been convicted of when he was writing those emails.</p>

<p>He asked him for dating advice about a young female mentee anyway. The question of what that reveals about Summers's judgment, his values, and his understanding of the power dynamics involved in a senior academic's relationship with a young mentee is one that Harvard has now answered in institutional terms: he no longer works there.</p>

<h2>The PBS Connection and the Funding Question</h2>

<p>The cancellation of his wife's PBS program introduces a second thread that raises its own questions. The program was funded, at least in part, by Epstein. The specific amount of Epstein's contribution, the mechanism through which it was made, and whether the Summers household was aware of the source of the funding are questions that have not been fully answered in public reporting.</p>

<p>What the funding connection establishes is that the Summers-Epstein relationship was not a single-direction professional correspondence. It extended to the financial support of projects connected to Summers's family. Epstein, characteristically, used money not just to access individuals but to create webs of obligation and mutual interest that made those relationships more durable and more difficult to cleanly exit.</p>

<p>Whether Summers understood the nature of the web he was in — whether the PBS funding created a sense of obligation that shaped his willingness to maintain the correspondence, to seek advice, to sustain a relationship with a man whose crimes were already public — is unknowable from the outside. What is knowable is that the relationship persisted and deepened after the moment when it should, at minimum, have been severed.</p>

<h2>Harvard's Response and What It Means</h2>

<p>Harvard's decision to require Summers's resignation is significant both for what it does and what it doesn't do. It removes him from his institutional positions. It sends a clear signal about what the university considers compatible with its standards for faculty conduct. It is the most concrete institutional accountability action to result from the Epstein emails involving a named senior figure at a major university.</p>

<p>It is not, however, a legal accountability action. Summers has not been charged with any crime. The emails do not establish that he participated in Epstein's abuse — they establish that he maintained a relationship with Epstein after his conviction and sought his advice in ways that reflect, at minimum, catastrophically poor judgment. Harvard's response is calibrated to that finding: it is institutional, not criminal.</p>

<p>The distinction matters for understanding what kind of accountability the Epstein reckoning is producing at the university level. MIT lost Joi Ito. Harvard has now lost Summers. The Epstein document releases are producing resignations and institutional consequences for senior figures who maintained relationships with him after his conviction. They are producing far fewer criminal consequences for the people who participated in or enabled his actual crimes.</p>

<h2>The Broader University Accountability Problem</h2>

<p>Summers is the most prominent in a line of university-affiliated figures whose Epstein connections have produced institutional consequences. The pattern at Harvard, MIT, and other institutions is consistent: donations accepted after the 2008 conviction, relationships maintained in ways that allowed Epstein to present himself as a respected figure in academic and intellectual life, and oversight systems that failed to catch what was happening until the post-2019 document releases made it visible.</p>

<p>What has not happened — at Harvard, at MIT, or elsewhere — is a serious institutional examination of why those oversight systems failed. What procedures allowed a convicted sex offender to donate to university programs, fund faculty research, attend campus events, and cultivate personal relationships with senior academics for a decade after his conviction? What changes have been made to ensure it cannot happen again? What accountability exists for the officials who maintained those relationships and who, in some cases, worked actively to conceal Epstein's donations from university leadership?</p>

<p>The resignations answer the question of what happens to the individuals most directly implicated. They do not answer the systemic question. Lawrence Summers is leaving Harvard. The conditions that allowed his Epstein correspondence to continue for years, and allowed Epstein's money to fund his wife's PBS program, remain largely unexamined.</p>`,
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
      id: `trending2-lutnick-island-${Date.now()}-4`,
      title: "The Epstein Files Show Commerce Secretary Lutnick Planned to Visit the Island. He Already Lied to Congress Once.",
      slug: 'lutnick-epstein-island-visit-planned-commerce-secretary-files',
      excerpt: "Howard Lutnick told Congress he barely knew Epstein. Then a transcript contradicted him. Now the files show he had a planned visit to Epstein's private island in 2012. The question is no longer whether Lutnick misled investigators — it's whether anyone will hold him accountable for it.",
      content: `<p>It gets worse.</p>

<p>Commerce Secretary Howard Lutnick already faces questions about false statements he made to the House Oversight Committee — testimony that minimized his relationship with Jeffrey Epstein in ways a released transcript showed did not match the actual record. That was last week. This week, the Epstein files have added a specific, concrete detail to the picture of his relationship with Epstein that cannot be explained away as a matter of characterization or framing.</p>

<p>The documents show that Lutnick had a planned visit to Epstein's private island — Little Saint James in the U.S. Virgin Islands — in 2012. The island that survivors have described as the primary location of Epstein's most serious abuse. The island that flight logs and financial records have established as the destination of some of the most significant figures in the Epstein network's inner circle. The island that Lutnick, in his congressional appearance, gave no indication he had any plans to visit.</p>

<h2>What the Documents Show</h2>

<p>The specific nature of the documentation — whether it is a flight log entry, an email confirming travel arrangements, a calendar notation, or some other form of record — has not been fully detailed in reporting. What has been established is that the documents place Lutnick in connection with a planned trip to Little Saint James in 2012, four years after Epstein's conviction on sex offender charges.</p>

<p>The 2012 date is significant. It falls squarely within the post-conviction period when Epstein was operating under the terms of his sex offender registration requirements and when his Palm Beach conviction was public record. Anyone planning to visit his island in 2012 was not doing so in ignorance of who he was or what he had been convicted of. The 2008 conviction was four years in the past. The plea deal and its extraordinary terms had been reported. The nature of Epstein's offenses was publicly documented.</p>

<p>Whether the planned visit actually happened — whether Lutnick made it to the island or whether the plans were canceled for some reason — is a detail that the documents apparently do not fully resolve. But the existence of planned travel is itself significant. It establishes a level of relationship with Epstein that extends beyond the social contact that Lutnick described to Congress. Planning a trip to a man's private island is not how you treat a peripheral acquaintance.</p>

<h2>The Prior Contradiction</h2>

<p>This disclosure lands on top of the already-existing problem of Lutnick's congressional testimony. The House Oversight Committee released a transcript of his interview that showed his characterization of his Epstein relationship did not match the documentary record available to committee members. He had described limited contact and minimal connection. The record showed something more extensive.</p>

<p>At the time of that initial contradiction, committee members called for a referral to the DOJ for investigation of potential false statements. The island visit documentation strengthens that case considerably. The pattern is no longer a single instance of characterization that could be argued as a matter of interpretation. It is a pattern — repeated minimization of a relationship that the documentary record consistently shows was more substantial than Lutnick has acknowledged.</p>

<p>False statements to Congress are a federal crime. The statute — 18 U.S.C. § 1001 — covers material false statements in any matter within the jurisdiction of the legislative branch. A cabinet secretary who minimizes his relationship with a convicted sex trafficker while testifying before a congressional committee investigating that sex trafficker's network is providing testimony that falls squarely within that statute's scope, if the false characterizations were knowing and material.</p>

<h2>The Institutional Problem</h2>

<p>Lutnick is a sitting cabinet secretary. He serves at the pleasure of a president who has his own Epstein exposure. The DOJ that would investigate false statement allegations against him is led by officials appointed by that same president. The structural incentives toward non-investigation, at every level of the system that would normally be responsible for accountability in this situation, point in the same direction: away from Lutnick and away from the island documentation.</p>

<p>What exists in this situation is a public record. The transcript contradicts his testimony. The documents show planned travel to the island. Both facts are now on the record in ways that will survive regardless of whether any formal investigation occurs. Congressional Democrats have put them there. Journalists have reported them. The accountability record, whatever its formal legal consequences, is accumulating.</p>

<p>History will have to decide what it means that a cabinet secretary of the United States lied about his relationship with Jeffrey Epstein, that the documentation contradicting him was sitting in the Epstein files, and that the institutional mechanisms designed to respond to that situation either could not or would not function. We are living in the period before that historical judgment is rendered. The facts are being established now. The consequences, such as they are, will come later — if they come at all.</p>`,
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
      id: `trending2-paxton-wins-${Date.now()}-5`,
      title: "Ken Paxton Wins. Trump's Bet Paid Off — But the Real Fight Starts Now.",
      slug: 'ken-paxton-wins-texas-senate-primary-cornyn-ousted-2026',
      excerpt: "The impeached, indicted, FBI-investigated Attorney General of Texas just defeated a five-term U.S. Senator with the most powerful endorsement in Republican politics. John Cornyn is done. Paxton is the nominee. And Democrats are already sharpening their knives for November.",
      content: `<p>Donald Trump bet on Ken Paxton. The bet paid off.</p>

<p>In the Texas GOP Senate primary runoff on May 26, 2026, Paxton defeated five-term incumbent John Cornyn — the man who had been Senate Majority Whip, who had raised tens of millions for the Republican Party, who had voted with Trump more than ninety percent of the time. The margin was decisive. The message from Texas Republican primary voters was unambiguous: loyalty to Trump matters more than a record of service. The most scandal-plagued politician in Texas history is now the Republican nominee for the United States Senate.</p>

<p>Cornyn called Paxton to concede. Cornyn's career in the Senate is over. Texas will have a new Republican senator — or, for the first time since 1988, a Democratic one.</p>

<h2>How Paxton Won</h2>

<p>The win was built on a single foundation: Trump's endorsement. Paxton entered the runoff already having received Trump's backing, and the endorsement activated a base that in Texas Republican primaries is decisive. Voters who cited Trump as their most important factor broke overwhelmingly for Paxton. Voters who cited Cornyn's Senate record, his seniority, his effectiveness as a legislator — those voters were outnumbered.</p>

<p>The specific argument Trump made for Paxton — that he is a "True MAGA warrior" who supports eliminating the filibuster, while Cornyn was not loyal "when times were tough" — resonated with a primary electorate that has internalized Trump's framework for evaluating Republicans. The framework is not ideological in the traditional sense. It is relational. Were you with him? Did you stand by him when standing by him was costly? The answer to those questions, in Trump's political universe, matters more than any policy position or legislative achievement.</p>

<p>Cornyn's answer to those questions, assessed by that framework, was insufficient. His hesitation in 2016, his institutional conservatism about filibuster reform, his occasional public distancing from Trump on specific issues — all of it was disqualifying to a primary electorate that has been trained to evaluate Republicans by a single criterion.</p>

<h2>Paxton's Baggage Enters the General</h2>

<p>The Republican primary electorate that chose Paxton is not the November electorate that will decide the Senate race. The general election in Texas will include the suburban voters, the independents, the soft Republicans who have been drifting toward Democrats in statewide races for the better part of a decade. These voters did not choose Paxton. They will now be asked to.</p>

<p>The opposition research file on Ken Paxton is one of the most extensive in American politics. The 2015 securities fraud indictment. The FBI investigation that has continued through his entire tenure as attorney general. The 2023 impeachment by the Republican-controlled Texas House on twenty articles of misconduct, including bribery and abuse of office. The acquittal by the Texas Senate that critics characterized as politically engineered. The divorce filing by his wife on "biblical grounds" amid revelations about an extramarital affair that was itself the subject of the whistleblower complaints that preceded the impeachment.</p>

<p>Texas Democrats are running a candidate who will have unlimited material for contrast. The question of whether Texas has moved enough toward competitiveness to produce a Democratic Senate victory is the central question of the race. In 2018, Beto O'Rourke lost to Ted Cruz by 2.6 points. In 2020, John Cornyn — the man Paxton just defeated — won by about 10 points. The spread between those outcomes reflects the difference between a wave environment with an exceptional Democratic candidate and a normal environment with a standard one.</p>

<p>What 2026 looks like depends on factors that are not yet fully determined: the state of the national environment, the quality of the Democratic nominee, the degree to which Paxton's scandals penetrate beyond the voters who already know about them. But the structural opportunity is real in a way that it was not when Cornyn was the Republican candidate.</p>

<h2>What This Means for the Senate</h2>

<p>Senate Republican leadership is processing a result they worked hard to prevent. Majority Leader John Thune made personal calls urging Trump to stay out of the race. The NRSC invested in Cornyn. The institutional party apparatus, with minor exceptions, aligned against the outcome that just occurred.</p>

<p>The practical consequence is a Senate seat that should be a reliable Republican hold now sitting in a category of genuine uncertainty. The broader consequence is a demonstration of Trump's ability and willingness to override Republican institutional preferences in service of personal loyalty demands — and the party apparatus's inability to stop him when he does.</p>

<p>Every Republican senator running for re-election in 2026 and 2028 has now watched a five-term colleague with an impeccable conservative record get ousted because he was insufficiently loyal a decade ago. The lesson is clear and it will reshape behavior. No Republican in a Trump-adjacent primary will risk the distance from him that Cornyn maintained. The Senate Republican caucus will, as a result of this race, become more uniformly Trumpist and less institutionalist — whether or not Paxton himself ever takes a Senate seat.</p>`,
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
      id: `trending2-gabbard-${Date.now()}-6`,
      title: "Tulsi Gabbard Resigned as DNI After Being Shut Out of Trump's Biggest Decisions. Here's the Inside Story.",
      slug: 'tulsi-gabbard-resigned-dni-sidelined-iran-venezuela-trump',
      excerpt: "The Director of National Intelligence is supposed to be America's top intelligence official. In Tulsi Gabbard's case, she was repeatedly cut out of decisions on Iran and Venezuela, didn't trust her own CIA security detail, and built walls around herself that left her isolated. The inside story of how it fell apart.",
      content: `<p>The Director of National Intelligence is, on paper, the most senior intelligence official in the United States — the person who coordinates the seventeen agencies of the intelligence community, who briefs the president on the most sensitive threats facing the country, who sits at the intersection of everything the government knows about what is happening in the world. It is a position of extraordinary access and, in theory, extraordinary influence.</p>

<p>Tulsi Gabbard held that position. And according to reporting from multiple sources familiar with her tenure, she was repeatedly cut out of the decisions that mattered most — sidelined on Iran, excluded from the inner circle on Venezuela, managing an office that had become as much a bunker as a headquarters. Her resignation was, by the time it came, something that people inside the national security apparatus had seen coming for months.</p>

<h2>The Iran and Venezuela Exclusions</h2>

<p>The specific decisions from which Gabbard was excluded — the Iran nuclear negotiations and the administration's Venezuela policy deliberations — represent some of the most consequential foreign policy choices of Trump's second term. Both involved significant intelligence equities: questions about what the U.S. knew about Iranian nuclear capabilities, about the reliability of intelligence on Venezuelan government actions, about the operational picture that should inform diplomatic and potentially military decisions.</p>

<p>The DNI's role in these processes is not optional. The director is supposed to provide the intelligence community's assessment — the aggregated, coordinated view of what the agencies know and believe — to the policymakers making the decisions. When the DNI is excluded from that process, those decisions are being made without the structured intelligence input the system was designed to provide.</p>

<p>Why Gabbard was excluded depends on who you ask. Administration officials have suggested, in background conversations, that her assessments were not always aligned with what principals wanted to hear — that her office's intelligence products created friction with policy preferences rather than supporting them. Critics of the administration have a more pointed explanation: that Gabbard was cut out specifically because an independent intelligence voice was inconvenient for decisions that had already been made on other grounds.</p>

<h2>The CIA Security Detail Problem</h2>

<p>Perhaps the most revealing detail in the reporting about Gabbard's tenure is the security detail question. She reportedly refused CIA officers assigned to her protective detail because she did not trust the agency. The DNI — the official nominally responsible for coordinating the intelligence community — did not trust the CIA officers assigned to protect her.</p>

<p>This detail captures something fundamental about the dysfunction of her tenure. The Director of National Intelligence's effectiveness depends almost entirely on relationships — on the trust and cooperation of the agencies she is supposed to coordinate, on her ability to aggregate their products and perspectives into a coherent national intelligence picture. An official who does not trust CIA officers assigned to protect her is an official who almost certainly does not have the working relationships with agency leadership that the position requires.</p>

<p>The CIA has a complicated institutional history and legitimate criticisms have been made of its culture and its conduct. But an intelligence director who begins from a position of institutional distrust toward one of the community's central agencies is not in a position to do the job the position requires. Gabbard's reported attitude toward the CIA is consistent with her public statements over her career, which have often been skeptical of agency assessments and critical of the intelligence community's role in American foreign policy. Those views are defensible as political positions. They are debilitating as an administrative posture for the person who is supposed to lead the community she distrusts.</p>

<h2>The Isolation Spiral</h2>

<p>Reporting describes Gabbard surrounding herself with a small circle of personal advisers who were not career intelligence officers — people whose loyalty was to her personally rather than to the institutional mission of the intelligence community. This is not an unprecedented management choice for political appointees who enter environments they view as potentially hostile. It is, however, a choice with consequences.</p>

<p>An intelligence director who has walled herself off from the career professionals in her own office and in the agencies she coordinates receives a filtered, curated version of what the intelligence community knows. The career officers who have spent decades developing expertise and relationships are not in the room. The institutional memory and the professional networks that make intelligence assessments reliable are not accessible. What reaches the director is what the small circle of personal advisers chooses to pass through.</p>

<p>In that environment, exclusion from major policy decisions becomes something closer to a natural outcome. If the DNI is not producing intelligence assessments that principals find useful or trustworthy — because the assessments are not grounded in the full depth of what the community knows — principals will find other sources of intelligence input. The DNI becomes advisory rather than essential. And an advisory DNI can be cut out of meetings without institutional consequence.</p>

<h2>The Resignation and What Comes Next</h2>

<p>Gabbard's departure leaves the DNI position vacant at a moment when the intelligence community's relationship with political leadership is, by most accounts, under significant strain. The pattern of sidelining career professionals, of treating institutional intelligence products with suspicion, of building personal loyalty structures that bypass normal processes — that pattern does not resolve when a single official departs. It reflects the administration's broader posture toward the institutions it nominally leads.</p>

<p>Who Trump nominates to replace Gabbard will signal whether that posture is changing or intensifying. A nominee with intelligence community credibility and relationships would suggest a recalibration. A nominee chosen primarily for personal loyalty and ideological alignment with the administration's view of the "deep state" would suggest the opposite. The intelligence community, and the country's national security decisions, will be shaped by that choice in ways that are not always visible but are consequential.</p>`,
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
      id: `trending2-retaliatory-${Date.now()}-7`,
      title: "The List Is Growing: Trump's DOJ Has Built an Architecture for Prosecuting His Political Opponents",
      slug: 'trump-doj-retaliatory-prosecutions-tracker-2026-update',
      excerpt: "It started with protesters. Then political candidates. Then critics. The DOJ has been quietly constructing the legal and bureaucratic infrastructure to prosecute Americans based on political viewpoint. This is the 2026 tracker — who has been targeted, what happened to the cases, and what it means.",
      content: `<p>The architecture was built incrementally. That is how these things are always built — not with a single dramatic announcement, but through a series of individual decisions that each seem defensible in isolation and that together constitute something that should alarm anyone who has studied how democracies erode.</p>

<p>The Justice Department, according to reporting from multiple outlets, has developed internal processes for identifying, building cases against, and prosecuting individuals based on their political activities and viewpoints. The targeting has focused primarily on protesters with left-leaning views, political candidates who have opposed Trump or his allies, and critics of the administration who have significant public platforms. Some charges have been dropped. Others have resulted in convictions. The bureaucratic infrastructure that produced both the prosecutions and the dismissals is still in place.</p>

<h2>The Protest Prosecutions</h2>

<p>The earliest and most extensive category of retaliatory prosecution has involved protesters — individuals arrested at demonstrations against administration policies and subsequently charged under federal statutes that carry significantly heavier penalties than the state charges that would normally apply to protest-related conduct. The federal involvement in cases that would ordinarily be handled by local law enforcement is itself the tell. It signals that the prosecutorial decision is being made at a level above the local — that these cases are being selected for federal treatment based on criteria that have nothing to do with the severity of the underlying conduct.</p>

<p>The specific charges used — seditious conspiracy, civil disorder, obstruction of law enforcement — are statutes that carry potential sentences of years in federal prison for conduct that in prior administrations would have resulted, if charges were brought at all, in misdemeanor convictions with minimal penalties. The disproportion between the conduct and the charges is consistent across cases in ways that suggest it is systematic rather than coincidental.</p>

<p>Courts have been uneven in their response. Some judges have dismissed charges as overreaching. Others have allowed cases to proceed to trial. The inconsistency reflects the genuine legal ambiguity around some of the statutes being used and the variation in how individual judges assess the government's conduct. It does not reflect a systemic judicial check on the prosecutorial pattern.</p>

<h2>The Political Candidate Cases</h2>

<p>More alarming than the protest prosecutions — because of what they represent for electoral democracy — are cases involving political candidates who have opposed Trump or his allies. The specific cases in the tracker involve candidates at various levels, from state legislative races to federal contests, who have faced federal investigations or charges that opened shortly after they emerged as opponents of Trump-backed incumbents or policies.</p>

<p>The timing of these investigations — the proximity between the candidates' political activities and the opening of federal inquiries — is the source of the "retaliatory" characterization. In each case, federal officials have maintained that the investigations were triggered by legitimate evidence of criminal conduct unrelated to the targets' political activities. Critics, including the targets' legal teams and civil liberties organizations, have argued that the evidence cited as triggering the investigations would not have received federal attention absent the targets' political profiles.</p>

<p>Proving retaliatory motive in a federal investigation is extraordinarily difficult. The DOJ controls the evidence about how its investigations are opened, what triggers them, and who makes the decisions. That evidence is protected by prosecutorial privilege and grand jury secrecy. The cases that have been charged are defended on their merits — whatever the motivation behind opening the investigation, the specific conduct alleged is characterized as criminal. Courts evaluating these cases generally cannot look behind the charging decision to examine why it was made.</p>

<h2>The Internal Architecture</h2>

<p>The most significant disclosure in the reporting about this pattern is the description of internal DOJ processes — units, procedures, or review mechanisms — specifically designed to identify and develop cases against individuals based on their political activities. The existence of such infrastructure, if accurately reported, represents a qualitative shift from individual prosecutorial overreach to institutionalized political targeting.</p>

<p>Individual prosecutors making bad decisions in individual cases is a problem that the system has mechanisms to address: appellate review, bar discipline, civil rights litigation. Institutionalized targeting — processes that systematically route political opponents into criminal jeopardy — is a different kind of problem. It corrupts the system rather than producing aberrations within it. The corrections mechanisms that work for individual misconduct do not function the same way against institutional design.</p>

<p>The DOJ has denied the characterization of its activities as politically targeted. The attorney general's office has maintained that prosecutorial decisions are made on the merits, that political viewpoint plays no role in charging decisions, and that the pattern identified by critics reflects legitimate law enforcement responses to criminal conduct that happened to involve political actors.</p>

<h2>What the Tracker Shows</h2>

<p>The tracker maintained by civil liberties organizations and journalists covering this pattern documents dozens of cases. Of those, a significant number have been dismissed — sometimes by courts finding insufficient evidence, sometimes by the DOJ itself dropping charges that proved difficult to sustain. The dismissals do not eliminate the harm: investigated, arrested, and charged individuals face reputational damage, legal costs, and the consuming disruption of federal prosecution regardless of whether they are ultimately convicted.</p>

<p>Several cases have proceeded to conviction. In those cases, the individuals involved are serving sentences for conduct that would not have received federal attention absent their political activities. They are in prison because they protested, or ran for office, or criticized the administration. The legal mechanism was real — the charges have survived judicial review — but the selection mechanism that chose these individuals for federal prosecution was political.</p>

<p>That is the definition of political prosecution: the use of legitimate legal tools to target individuals chosen on the basis of political criteria. The tools are real. The crimes are real in some cases. The targeting is also real. All three things can be true simultaneously. That is what makes this pattern so difficult to address through normal accountability channels — and so dangerous to the democratic norms that distinguish a republic from something else.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Politics',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#B91C1C',
    },
    {
      id: `trending2-cia-gold-${Date.now()}-8`,
      title: "A Senior CIA Officer Stole $40 Million in Gold Bars From the Agency. This Story Has Everything.",
      slug: 'cia-officer-david-rush-stole-40-million-gold-bars-arrested',
      excerpt: "Former senior CIA officer David Rush told the agency he needed tens of millions in gold bars for 'work-related expenses.' They gave it to him. Then FBI agents searched his home and found 300 gold bars, $2 million in cash, and 35 luxury Rolex watches. The most brazen theft in CIA history.",
      content: `<p>The request was unusual. A senior CIA officer asked the agency for tens of millions of dollars in gold bars, characterizing the request as necessary for work-related operational expenses. The CIA, which has a long history of funding operations through unconventional means, apparently provided them.</p>

<p>The gold was not for operations. It was for David Rush's house.</p>

<p>When FBI agents executed a search warrant at Rush's residence, they found 300 gold bars worth approximately $40 million, $2 million in cash, and 35 luxury Rolex watches. The man the CIA had trusted with senior responsibilities — responsibilities that apparently included the authority to request large sums of operational funds — had stolen from the agency on a scale that is, in the recorded history of American intelligence, without precedent.</p>

<h2>How He Got Away With It</h2>

<p>The most important question is not what Rush did. It is how he was able to do it — how a senior CIA officer was able to repeatedly request tens of millions in gold bars and receive them without the requests triggering oversight mechanisms that should have caught the problem long before 300 bars ended up in his home.</p>

<p>The CIA's handling of operational funds is subject to oversight — internal audit functions, inspector general review, congressional oversight through the intelligence committees. That oversight is necessarily constrained by the operational security requirements of clandestine work: you cannot have standard audit procedures that would expose ongoing operations to discovery. But the constraints that protect legitimate operations also create spaces that can be exploited by someone who understands where the oversight gaps are.</p>

<p>Rush, as a senior officer, understood those gaps better than almost anyone. He knew what justifications would be accepted without detailed scrutiny. He knew which oversight mechanisms could be bypassed through the appropriate invocation of operational sensitivity. He knew, in other words, exactly how to steal from an agency whose internal controls he had spent a career learning.</p>

<p>The gold specifically was presumably chosen because it is difficult to trace in ways that cash transactions, wire transfers, and asset purchases are not. Gold bars are fungible, portable, and in large enough quantities can be stored without creating the financial paper trail that would trigger Bank Secrecy Act reporting requirements. The 300 bars found in his home represent a significant logistics challenge — acquiring, transporting, and storing that quantity of gold without attracting attention requires planning and resources. That planning was happening while Rush was holding a position of trust at one of the world's most secretive intelligence agencies.</p>

<h2>The Rolex Question</h2>

<p>The 35 luxury Rolex watches found alongside the gold are a detail that seems almost too on-the-nose — the kind of specific, concrete evidence of corruption that normally appears in financial crime narratives as a symbol of how completely a person lost sight of the limits of their position. But the watches are also practically significant. They represent an additional $1-2 million in assets, purchased with stolen funds, in a form that Rush apparently did not convert to harder-to-trace gold. They are the evidence of carelessness — the place where the logistics of maintaining the theft's concealment apparently broke down.</p>

<p>In financial crime investigations, these tangible asset discoveries serve a dual purpose. They establish the scale and reality of the theft in concrete terms that a jury can understand. And they provide forensic threads — purchase records, insurance documents, appraisals — that investigators can use to reconstruct the financial history of how the assets were acquired.</p>

<h2>What the CIA Is Not Saying</h2>

<p>The CIA has provided minimal public comment on the Rush case. The agency's characterization of what happened, the specific positions Rush held, the oversight failures that allowed the theft to continue, and the changes being made to prevent recurrence are not in the public record. The FBI, which conducted the investigation and made the arrest, has provided the factual outline of the case. The CIA's internal reckoning is happening, if it is happening, outside public view.</p>

<p>This opacity is consistent with how the intelligence community handles internal corruption cases. The instinct is to manage them as tightly as possible — to limit disclosure to what criminal proceedings require, to avoid the kind of detailed public accounting that would illuminate the specific vulnerabilities that were exploited. The argument for this approach is that detailed public disclosure of how Rush gamed the oversight system would provide a roadmap for the next person who wants to try something similar. The argument against it is that the public, which funds the CIA, has an interest in knowing how $40 million in its money ended up in a senior officer's basement.</p>

<h2>The Broader Implications</h2>

<p>The Rush case raises questions that extend beyond the specific theft. It raises questions about what the CIA's oversight of operational fund requests actually looks like, about whether the inspector general function within the intelligence community is adequately resourced and empowered, and about the degree to which the cultural norms around operational secrecy have created environments where senior officers can exploit oversight gaps without detection for extended periods.</p>

<p>These are not comfortable questions for an agency that presents its professionalism and internal discipline as central to its institutional identity. They are, however, necessary ones. A theft of this scale, by an officer at this level, over what appears to have been an extended period, suggests systemic vulnerabilities that a single criminal prosecution does not address. The gold bars have been recovered. The conditions that allowed them to be taken in the first place remain to be examined.</p>`,
      author: 'The American Reveal Investigative Staff',
      publishedAt: new Date('2026-05-27').toISOString(),
      category: 'Investigations',
      published: false,
      featured: false,
      coverImage: '',
      excerpt2: '',
      accentColor: '#1D4ED8',
    },
    {
      id: `trending2-250bill-${Date.now()}-9`,
      title: "Trump Wants His Face on a $250 Bill. The First Living President on American Currency — Ever.",
      slug: 'trump-250-bill-living-president-currency-bureau-engraving',
      excerpt: "Trump administration officials have pressed the Bureau of Engraving and Printing to design a $250 bill featuring Trump's portrait — which would shatter a 150-year tradition of never putting a living person on U.S. currency. Here's what that tradition means, and what breaking it would signal.",
      content: `<p>The tradition has held for 150 years. Since the post-Civil War era, the United States has not put a living person on its currency. The faces that appear on American money are the faces of the dead — Washington, Lincoln, Hamilton, Jackson, Grant, Franklin. The rule is not written in statute. It is a norm, a tradition, a deliberate signal about the relationship between the American republic and its leaders: that power is temporary, that institutions outlast individuals, that no living person's image belongs on money that will circulate for decades after they are gone from office.</p>

<p>The Trump administration is pressing to break it.</p>

<p>Officials have pushed the Bureau of Engraving and Printing to design a $250 bill featuring Donald Trump's portrait. The denomination does not currently exist in American currency — its creation would itself require congressional action. But the design effort, according to reporting, is underway. The administration wants Trump's face on American money while he is still president.</p>

<h2>The 150-Year Tradition and Why It Exists</h2>

<p>The prohibition on living persons appearing on American currency was formalized in the late nineteenth century, though its origins trace to the founding era's deep suspicion of personalist politics — of the tendency in monarchies and dictatorships to use currency as a vehicle for personality cult, to put the ruler's face in every wallet and on every transaction as a reminder of who holds power.</p>

<p>The founders were acutely aware of this tradition and its implications. George Washington, to whom the offer of putting his image on the new republic's currency was apparently made in various forms, rejected it. The explicit reasoning was that monarchs put their faces on coins. A republic should not behave like a monarchy. The symbolism of currency matters because currency is the most ubiquitous artifact of economic life — the thing that passes through every hand, that appears in every transaction, that is present in the daily material existence of every citizen regardless of their political views or affiliations.</p>

<p>Putting a living president on currency is an assertion that his image belongs in that space — that his face is an appropriate symbol for the republic's economic transactions, that his likeness represents something worth carrying in every American wallet. The tradition that has prevented this for 150 years reflects the judgment that no living person's claim on that symbolism is legitimate in a democratic republic.</p>

<h2>The $250 Denomination</h2>

<p>The choice of a $250 denomination — a denomination that does not exist and would need to be created — is interesting in several respects. It is high enough that the bill would not circulate in ordinary daily transactions the way a $20 does. It would be more likely to appear in large cash transactions, in savings, in the kind of contexts where wealthy individuals and institutions deal in significant amounts of cash.</p>

<p>It would also be novel enough that its existence would itself be a news event — that the creation of the $250 bill would generate its own coverage, its own cultural moment, its own circulation in the media landscape regardless of how widely the physical bills actually circulate. The denomination is, in part, a publicity architecture. A Trump face on a $250 bill would be photographed, shared, discussed, and exist as a cultural artifact in ways that a replacement for an existing denomination would not.</p>

<p>Whether Congress would authorize a new denomination for this purpose is uncertain. The creation of new currency denominations has historically required congressional action, and the specific purpose — creating a new bill to feature the sitting president's portrait — would face opposition from members who would characterize it as an inappropriate use of the legislative process for political self-promotion.</p>

<h2>What This Signals</h2>

<p>The currency initiative sits within a broader pattern of norm erosion that has characterized Trump's political career and his presidencies. Norms that are not written in statute — that exist as traditions, conventions, and shared understandings about how power should be exercised in a democratic republic — have been systematically tested and, in many cases, breached. Some of those breaches have produced formal legal challenges. Others have simply become part of the new baseline, normalized through repetition.</p>

<p>The currency tradition is in the second category. There is no law that explicitly prohibits a living person's image on American money. There is a 150-year practice that has been treated as binding because the reasons for it remain valid. Breaking that practice would not violate a statute. It would violate a norm — a norm about the appropriate relationship between a democratic leader and the symbols of the republic he leads.</p>

<p>That is precisely why it matters. The norms that distinguish democratic governance from authoritarian governance are, in many cases, not legal requirements. They are traditions — things that democratic systems maintain not because the law compels them but because the people who hold power understand why they exist and choose to respect them. When those norms are broken, what is lost is not a legal constraint but a cultural one. And cultural constraints, once broken, are harder to restore than legal ones.</p>

<p>A president who puts his living face on American currency is telling you something about how he understands his relationship to the republic. He is telling you that his image belongs on money that will circulate after he is gone, that his face represents something permanent about the country rather than temporary about his tenure, that the tradition of keeping power's image off the republic's money was a convention that applied to other presidents but not to him.</p>

<p>The Bureau of Engraving and Printing is working on the design. The tradition has held for 150 years. It may not hold much longer.</p>`,
      author: 'The American Reveal Political Desk',
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
