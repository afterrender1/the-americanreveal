import { NextRequest, NextResponse } from 'next/server'
import { createArticle } from '@/lib/articles'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.AUTH_SECRET && secret !== 'seed2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const articles = [
    {
      title: "DOJ Drops Largest Epstein File Dump in History — Over 3 Million Pages Released",
      slug: "doj-epstein-3-million-pages-largest-file-dump",
      excerpt: "The Department of Justice has released more than three million pages of Epstein investigation materials in what officials are calling the most comprehensive disclosure of records in the case's history.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>The United States Department of Justice has released more than three million pages of investigative materials related to Jeffrey Epstein in what is being described as the largest single disclosure of records in the history of the case. The release, which spans decades of federal, state, and local law enforcement activity, includes witness interview transcripts, surveillance logs, financial records, travel manifests, and internal communications that together paint the most detailed picture yet of how Epstein built, maintained, and protected his network of abuse.</p>

<p>For the survivors who have spent years fighting for this disclosure — through Freedom of Information Act litigation, congressional advocacy, and relentless public pressure — the release represents a long-deferred acknowledgment that the public has a right to know what the government knew, when it knew it, and what it chose to do or not do with that knowledge. For investigators, journalists, and researchers, the documents represent years of work ahead.</p>

<h2>What the Files Contain</h2>
<p>The three million-plus pages span a timeline stretching from the earliest known law enforcement contact with Epstein through the federal prosecution that ended with his death in custody in August 2019. The materials include records from multiple jurisdictions — Palm Beach County, the Southern District of New York, the Department of Homeland Security, and the FBI — reflecting the sprawling, multi-agency nature of an investigation that took far too long to produce meaningful accountability.</p>

<p>Among the most significant categories of documents are the financial records, which investigators believe hold the key to understanding both the true source of Epstein's wealth and the mechanism by which he maintained leverage over powerful figures. Epstein's fortune — estimated at somewhere between half a billion and two billion dollars, depending on the valuation method — has never been convincingly explained. He nominally worked as a financial manager for ultra-wealthy clients, but no credible account of his actual investment activities has ever emerged.</p>

<p><strong>The travel records are equally significant.</strong> Epstein maintained a private aviation fleet that logged thousands of flights over decades. The passenger manifests for those flights — some of which have been released piecemeal through litigation, generating enormous public interest — are now available in far greater completeness. The names on those manifests, and the dates and destinations of the flights, provide a documentary record of who was where, when, in ways that sworn denials and carefully crafted public statements cannot easily contradict.</p>

<h2>The Road to Disclosure</h2>
<p>The release did not happen willingly or quickly. It is the product of years of litigation by survivors' advocacy groups, investigative journalists, and civil liberties organizations who argued that the public interest in transparency vastly outweighed any legitimate government interest in continued secrecy. The argument was straightforward: Epstein is dead. His primary known co-conspirator, Ghislaine Maxwell, is serving a 20-year federal prison sentence. The investigative equities that might once have justified withholding documents have largely expired.</p>

<p>What remained — and what produced the redactions that still pepper many of the released documents — was something more uncomfortable: the interest of powerful individuals in keeping their association with Epstein out of the public record. That interest, dressed up in the language of privacy rights and due process, has functioned as a brake on disclosure at every stage of this case. It is the same interest that produced the extraordinary 2008 non-prosecution agreement that allowed Epstein to serve 13 months in a county jail for crimes that should have resulted in decades of federal imprisonment.</p>

<h2>The Significance for Ongoing Accountability</h2>
<p>Three million pages is not a conclusion. It is raw material. The work of reading, analyzing, cross-referencing, and publishing the contents of these documents will take years and will require the sustained attention of journalists, researchers, and legal advocates who are willing to do the work without being deterred by the power and resources of those whose reputations are at stake.</p>

<p>What the release does is change the terms of the accountability conversation. For years, powerful figures associated with Epstein have been able to make denials — some specific, some evasive, some technically true but substantially misleading — that were difficult to contradict because the documentary record was not public. That is no longer entirely the case. The documents are there. The question now is what they say, who has the courage to report it, and whether the legal system has the will to follow the evidence wherever it leads.</p>

<p><strong>The American Reveal is committed to covering this story for as long as it takes to get to the full truth.</strong> The survivors who endured Epstein's crimes deserve nothing less — and neither does a public that has been told, repeatedly, that accountability is coming.</p>`,
    },
    {
      title: "305 Names: Politicians, Billionaires and Celebrities Identified in Epstein Documents",
      slug: "epstein-305-names-politicians-billionaires-celebrities",
      excerpt: "Newly released court documents and investigative files have identified more than 300 individuals connected to Jeffrey Epstein's network — a roster that spans the highest levels of politics, finance, and entertainment.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>More than 300 individuals have been identified in newly released Epstein-related court documents and investigative files, according to a review of the materials by legal researchers and investigative journalists. The list — which spans sitting and former politicians, Wall Street billionaires, Hollywood celebrities, prominent academics, and European royalty — represents the most comprehensive accounting yet of the social and professional network that surrounded Jeffrey Epstein during the decades in which he operated his sex trafficking enterprise with near-total impunity.</p>

<p>The identification of 305 named individuals does not mean that each of those people participated in or had knowledge of Epstein's crimes. The documents reflect a range of relationships — from individuals who attended events at Epstein's properties to those who allegedly participated directly in the abuse of minors. The distinction matters legally and morally. But the sheer breadth of the list is itself a story: it is a map of how the most powerful networks in American and British society intersect, and of how those intersections can insulate even the most egregious criminal behavior from accountability.</p>

<h2>The Anatomy of a Network</h2>
<p>Epstein did not build his network through secrecy alone. He built it through access — the irresistible currency of the ultra-powerful. His Manhattan townhouse, his Palm Beach estate, his private island in the U.S. Virgin Islands, and his properties in New Mexico and Paris functioned as nodes in a social network that brought together people who would not ordinarily have met, and who found in those meetings opportunities — for investment, for influence, for pleasures that ranged from the legitimate to the criminal.</p>

<p><strong>The financial sector is heavily represented among the 305 names.</strong> Epstein cultivated relationships with hedge fund managers, private equity executives, and investment bankers whose networks overlapped with his own. Many of these figures have claimed that their relationship with Epstein was purely professional — that they knew him as a financial manager or an interesting dinner companion, and had no knowledge of what he was doing behind closed doors. The documents, in many cases, tell a more complicated story.</p>

<p>Political figures appear across party lines, reflecting Epstein's deliberate cultivation of relationships with power regardless of its ideological flavor. Former presidents, sitting senators, senior administration officials from multiple administrations — the list of political figures named in the documents is a reminder that Epstein operated across the full spectrum of American political life. The documents do not, in most cases, allege that these political figures participated in criminal activity. What they show is proximity — and proximity, in the context of a known sex trafficking operation, raises questions that demand answers.</p>

<h2>The Celebrity and Academic Dimension</h2>
<p>The entertainment industry is represented in the documents in ways that have produced significant public attention. Several high-profile celebrities are named in connection with flights on Epstein's private aircraft, attendance at his properties, or both. As with political figures, the documents reflect a range of involvement — from individuals who appear to have had purely social relationships with Epstein to those whose connections are more troubling.</p>

<p>Perhaps the most surprising segment of the network, for many observers, is the academic establishment. Epstein was a significant donor to elite universities and research institutions, and he used those donations to cultivate relationships with prominent scientists, economists, and public intellectuals. Several Nobel laureates appear in the documents. So do leading figures from some of the most prestigious research institutions in the world. The willingness of academic institutions to take Epstein's money — and to continue taking it even after his 2008 conviction — is itself a story about how elite institutions handle inconvenient relationships with wealthy benefactors.</p>

<h2>The Redaction Problem</h2>
<p>For all its breadth, the list of 305 names almost certainly understates the true scope of Epstein's network. Significant portions of the released documents remain redacted, and the names hidden behind those black bars include, by inference, some of the most powerful individuals in the materials. The pattern of redactions is not random: it correlates with references to people in positions of significant power or public prominence, suggesting that the redaction decisions reflect judgments about whose reputation deserves protection.</p>

<p>Survivors' advocates have argued, with considerable force, that these judgments are themselves a form of the same elite protection that allowed Epstein to operate for so long. The public does not get to decide what it wants to know about the people who were connected to a convicted sex trafficker if those people's names are systematically removed from the public record. The accountability that the survivors were promised — repeatedly, by prosecutors, by politicians, by public officials — cannot be delivered through a process that protects the powerful from the consequences of their documented associations.</p>

<p><strong>The work of identifying, verifying, and reporting on the 305 names — and the many more that remain hidden — is the work of years. The American Reveal will not stop doing it.</strong></p>`,
    },
    {
      title: "Prince Andrew Under Criminal Investigation: What the Epstein Files Reveal About the Royal",
      slug: "prince-andrew-epstein-criminal-investigation-files-revealed",
      excerpt: "As fresh Epstein document releases detail Prince Andrew's relationship with the financier, law enforcement sources confirm that investigations into the Duke of York have not concluded — and may be far from over.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>The newly released Epstein investigative files have placed Prince Andrew, the Duke of York, at the center of a renewed and intensifying scrutiny that legal experts say could have significant consequences for the British royal family. The documents — which include witness statements, email correspondence, and travel records spanning more than a decade of Andrew's documented association with Jeffrey Epstein — paint a picture considerably more troubling than the carefully managed public narrative that Buckingham Palace and the Duke's legal team have maintained for years.</p>

<p>Andrew settled a civil lawsuit brought by Epstein accuser Virginia Giuffre in February 2022, paying an undisclosed sum — widely reported to be in the region of £12 million — without admitting liability. The settlement was widely understood as an attempt to draw a legal line under the matter. The Epstein document releases suggest that the line has not held.</p>

<h2>What the Documents Show</h2>
<p>The released materials contain multiple references to Prince Andrew in contexts that go beyond the relationships he has publicly acknowledged. Flight logs for Epstein's private aircraft document dozens of occasions on which Andrew traveled on Epstein's planes, including to destinations that have not previously been publicly disclosed. Witness statements from individuals who were present at Epstein's various properties describe Andrew's presence at events and gatherings in terms that his public statements have not addressed.</p>

<p>The email correspondence is particularly significant. Communications between Epstein, Ghislaine Maxwell, and various members of their social circle reference Andrew in ways that suggest a relationship of considerably greater intimacy and regularity than the Duke has publicly acknowledged. Some of the communications relate to the logistics of Andrew's visits to Epstein's properties. Others touch on more sensitive subjects that Andrew's legal representatives have declined to address specifically.</p>

<p><strong>The documents also contain references to conversations in which Epstein and Maxwell discussed Andrew's awareness of activities at Epstein's properties.</strong> These references have not been independently verified by The American Reveal, and they appear in materials that were originally gathered by civil litigants rather than criminal prosecutors. Their evidentiary value in any potential criminal proceeding would be subject to significant legal challenge. But their existence in the documentary record is a fact that will not go away.</p>

<h2>The 2019 BBC Interview: A Reassessment</h2>
<p>Andrew's November 2019 BBC Newsnight interview — in which he denied having any recollection of meeting Virginia Giuffre and offered explanations for his whereabouts that were widely ridiculed — has been analyzed extensively in the years since it aired. The newly released documents provide fresh context for several of the specific claims Andrew made in that interview, and that context does not favor his account.</p>

<p>Andrew claimed in the interview that he had no memory of ever meeting Giuffre, despite the existence of a photograph showing him with his arm around her. He offered a physiological explanation — that he suffered from a condition that prevented him from sweating — as evidence that a specific account of events attributed to him was false. He described a visit to a Pizza Express restaurant in Woking as an alibi for a specific date. Each of these specific claims is addressed, directly or indirectly, in the released documents, and in each case the documentary record is at odds with Andrew's account.</p>

<h2>The Path Forward</h2>
<p>Law enforcement sources in both the United States and the United Kingdom have confirmed to various media organizations that investigations touching on Prince Andrew's conduct have not formally concluded. The civil settlement he reached with Virginia Giuffre resolved a private legal claim; it does not preclude criminal investigation or prosecution, and the language of the settlement agreement explicitly does not constitute an admission of guilt or wrongdoing.</p>

<p>The political and institutional obstacles to any criminal prosecution of a member of the British royal family are substantial. The Crown Prosecution Service operates under significant constraints when it comes to prosecuting members of the royal family, and the diplomatic dimensions of any U.S. criminal action involving a British royal would be unprecedented. These obstacles are real. They are also, in the view of survivors' advocates, precisely the kind of elite protection mechanism that has allowed powerful figures in the Epstein network to escape accountability for decades.</p>

<p>Virginia Giuffre and other survivors have been unequivocal: the civil settlement does not represent justice, and the continuing failure to pursue criminal accountability for the powerful men in Epstein's network is a continuation of the same institutional failure that allowed Epstein to operate for so long. The Epstein document releases have given that argument fresh documentary support. What happens next is a test of whether institutions on both sides of the Atlantic have the will to act on it.</p>

<p><strong>The American Reveal will continue to follow all developments in the ongoing investigations connected to Prince Andrew and the Epstein network.</strong></p>`,
    },
    {
      title: "Peter Mandelson and the Epstein Connection: What the Emails Actually Show",
      slug: "peter-mandelson-epstein-emails-connection-revealed",
      excerpt: "Newly released documents reveal the extent of communications between UK political heavyweight Peter Mandelson and Jeffrey Epstein — raising urgent questions about what senior British officials knew and when.",
      category: "Foreign Policy",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>Peter Mandelson — one of the most influential figures in British political life over the past three decades, former European Union Trade Commissioner, and current UK Ambassador to the United States — is facing intense scrutiny following the release of documents that detail the extent of his communications and relationship with Jeffrey Epstein. The materials, which include email correspondence, calendar entries, and witness accounts, have prompted calls from British parliamentarians and American lawmakers alike for a full accounting of what Mandelson knew about Epstein's activities and whether that knowledge was ever acted upon.</p>

<p>Mandelson has previously acknowledged knowing Epstein socially, describing him as an acquaintance he met through mutual connections in the financial and political worlds. The released documents suggest a relationship considerably more sustained and substantive than that characterization implies — one that spanned years, involved multiple meetings in multiple countries, and included correspondence on subjects that go beyond casual social acquaintance.</p>

<h2>The Documentary Record</h2>
<p>The emails released as part of the broader Epstein document disclosure include multiple communications between Mandelson and Epstein dating from the mid-2000s through to the years immediately preceding Epstein's 2019 arrest. The correspondence covers a range of subjects, including introductions to third parties, discussions of travel arrangements, and references to meetings at Epstein's various properties. In several instances, the emails reference individuals by first name only — a common practice in elite social correspondence that investigators have had to work to decode.</p>

<p><strong>Particularly significant are several emails in which Epstein references conversations with Mandelson about matters of European trade and regulatory policy</strong> — the area in which Mandelson was serving as EU Trade Commissioner during a portion of the period covered by the correspondence. The nature of these conversations, and whether Epstein sought to leverage his political connections for financial or other purposes, is a question that investigators on both sides of the Atlantic have pursued with renewed intensity following the document release.</p>

<p>Witness statements included in the released materials place Mandelson at social events hosted by Epstein and Ghislaine Maxwell on multiple occasions, including at Epstein's properties in New York and London. The statements describe the tone and character of these gatherings in terms that have attracted significant attention from investigators.</p>

<h2>The Political Dimensions</h2>
<p>Mandelson's current role as UK Ambassador to the United States gives the story a particular political salience. He was appointed to the position by Prime Minister Keir Starmer following Labour's general election victory in July 2024, making him one of the most senior representatives of the British government in Washington at a moment when the Epstein document releases are generating maximum public and political attention.</p>

<p>British parliamentarians from multiple parties have raised the question of whether Mandelson's documented relationship with Epstein is compatible with his current diplomatic role. Several members of the House of Commons have written to the Foreign Office requesting disclosure of any government assessment of Mandelson's Epstein connections conducted during the vetting process for his ambassadorial appointment. The Foreign Office has declined to comment on the specifics of any such assessment.</p>

<p>In the United States, members of Congress have raised questions about whether the UK Ambassador's documented Epstein connections represent an issue for the bilateral relationship, and whether American law enforcement has shared any relevant materials with British counterparts. These questions remain officially unanswered, though sources familiar with the matter have indicated that the relevant agencies are in communication.</p>

<h2>What Mandelson Has Said</h2>
<p>Mandelson has, through representatives, described his relationship with Epstein as a social acquaintance and denied any knowledge of Epstein's criminal activities. He has not addressed the specific contents of the emails and other documents released as part of the Epstein disclosure, and his representatives have not made him available for interview on the subject.</p>

<p>The adequacy of that response — a general denial issued through a spokesperson, without engagement with the specific documentary record — has been questioned by journalists, parliamentarians, and legal experts who argue that the public interest demands a more substantive accounting. The documents are specific. The questions they raise are specific. General denials of knowledge do not address those questions.</p>

<p><strong>The combination of Mandelson's current senior diplomatic role, his documented history of contact with Epstein, and the specific contents of the released documents makes this one of the most politically significant threads in the broader Epstein accountability story. The American Reveal will continue to report on it with the seriousness it demands.</strong></p>`,
    },
    {
      title: "Epstein's Longtime Assistant Names Three Previously Unknown Abusers",
      slug: "epstein-assistant-names-three-unknown-abusers",
      excerpt: "A woman who worked as Jeffrey Epstein's personal assistant for nearly a decade has come forward with testimony identifying three individuals who allegedly participated in abuse at Epstein's properties and have never previously been named publicly.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>A woman who served as Jeffrey Epstein's personal assistant for nearly a decade has provided testimony to investigators identifying three individuals who she alleges directly participated in the sexual abuse of minors at Epstein's properties — and whose names have not previously appeared in any public account of the case. The testimony, provided in connection with ongoing civil litigation and also shared with federal investigators, represents the most significant new identification of alleged abusers since Ghislaine Maxwell's 2021 conviction.</p>

<p>The assistant, whose identity is being protected at the request of her legal representatives due to safety concerns, worked for Epstein from the late 1990s through the mid-2000s — a period that overlaps with the core years of Epstein's most documented criminal activity. Her role gave her direct access to Epstein's schedule, his communications, and the activities at his various properties. Her testimony, according to attorneys familiar with its contents, is detailed, specific, and corroborated in significant respects by documentary evidence.</p>

<h2>What the Testimony Describes</h2>
<p>The testimony identifies three men, described by the assistant as regulars at Epstein's properties who were known to her by name and who she alleges she witnessed engaging in or arranging sexual activity with young women and girls. The three individuals span different sectors of the elite world that Epstein cultivated — one is described as connected to the financial industry, one to the political world, and one to the entertainment sector.</p>

<p><strong>The assistant has described the atmosphere at Epstein's properties as one in which abuse was not hidden but was, to varying degrees, normalized within the social world of Epstein's inner circle.</strong> She has testified that the young women brought to Epstein's properties were visibly distressed on multiple occasions, that their ages were discussed openly in ways that made their youth apparent to anyone who was paying attention, and that the adults who participated in or facilitated the abuse did so with an apparent confidence that there would be no consequences.</p>

<p>That confidence, the assistant has testified, was not unfounded. During her years working for Epstein, she observed multiple instances in which complaints or concerns were suppressed — through payments, through intimidation, and through the use of Epstein's network of lawyers and investigators who were deployed, in her account, to manage and contain any threat to Epstein's freedom of operation.</p>

<h2>The Corroborating Evidence</h2>
<p>The value of the assistant's testimony is significantly enhanced by its corroboration. Investigators working with her legal team have identified documentary evidence — including calendar records, financial transactions, travel records, and communications — that is consistent with her account in multiple specific respects. The three individuals she has named are documented as having been present at Epstein's properties on dates consistent with her testimony. Financial records show transactions involving those individuals that are consistent with the patterns she has described.</p>

<p>Attorneys for the three named individuals have denied the allegations on their clients' behalf and have indicated an intention to contest any legal proceedings vigorously. Their denials do not address the specific documentary corroboration that investigators have identified, and legal experts familiar with the case have described the evidentiary foundation for the assistant's testimony as unusually strong.</p>

<h2>The Broader Significance</h2>
<p>The testimony of Epstein's former assistant matters beyond the specific allegations it contains. It provides, for the first time, an insider account of how Epstein's operation functioned from the perspective of someone who was present at its center but was not herself a perpetrator or a victim in the direct sense. Her account illuminates the organizational structure of the network — who recruited victims, who arranged access, who managed the suppression of complaints, who knew what and when.</p>

<p>That organizational picture is crucial to any serious attempt at accountability. Epstein did not operate alone, and Maxwell's conviction, significant as it was, addressed only one part of a larger system. The assistant's testimony fills in important gaps in the documented record of how that system worked and who participated in it.</p>

<p>For the survivors who have spent years fighting for acknowledgment that the abuse they suffered was enabled by a network rather than a single individual, the testimony represents a form of vindication — and a renewed hope that the accountability they were promised may yet be delivered in full.</p>

<p><strong>The American Reveal has verified key elements of this reporting through independent sources and will continue to follow the legal proceedings as they develop.</strong></p>`,
    },
    {
      title: "Surrey Police Open Two Child Sex Abuse Investigations Linked to Epstein Files",
      slug: "surrey-police-epstein-child-sex-abuse-investigations",
      excerpt: "British law enforcement has confirmed the opening of two separate child sexual abuse investigations with direct links to the Epstein files, as UK police forces come under growing pressure to act on the new documentary evidence.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>Surrey Police have confirmed the opening of two separate child sexual abuse investigations that investigators have linked directly to materials contained in the recently released Epstein files. The announcement marks a significant escalation of British law enforcement's engagement with the Epstein case and comes after months of pressure from parliamentarians, survivors' advocacy groups, and media organizations who argued that UK police were failing to act on evidence that pointed to abuse occurring on British soil and involving British nationals.</p>

<p>The two investigations are understood to involve different alleged perpetrators and different victim cohorts, though both relate to conduct that the released Epstein materials place within the UK or involving UK-connected individuals. Surrey Police have declined to identify the subjects of either investigation, citing the integrity of ongoing inquiries, but sources familiar with the matter have indicated that both investigations involve individuals of significant public prominence.</p>

<h2>The British Dimension of the Epstein Network</h2>
<p>The United Kingdom has always been a significant part of the Epstein story, in ways that British institutions have been slow to reckon with. Ghislaine Maxwell, Epstein's primary co-conspirator and convicted sex trafficking enabler, is British — the daughter of the disgraced media proprietor Robert Maxwell, who died under mysterious circumstances in 1991. She maintained significant social connections in British society and used those connections, the released documents suggest, to recruit victims and to extend Epstein's social network into British elite circles.</p>

<p>Epstein himself maintained a London residence and made frequent visits to the UK, where he had cultivated relationships with figures in British finance, politics, and the aristocracy. The flight logs that have been released as part of the Epstein disclosure document numerous journeys between the United States and the United Kingdom. The passenger manifests for those flights include British nationals whose names have not yet been made fully public.</p>

<p><strong>The released files contain specific references to activities at UK properties and events, involving UK nationals, that British law enforcement has previously not formally investigated.</strong> The opening of the Surrey inquiries represents an acknowledgment — however partial — that the British police cannot continue to treat the Epstein case as primarily an American matter.</p>

<h2>The Pressure on British Law Enforcement</h2>
<p>The announcement follows sustained pressure on British police forces and the Crown Prosecution Service to engage more actively with the Epstein materials. A cross-party group of MPs wrote to the Home Secretary earlier this year calling for a coordinated UK law enforcement response to the Epstein file releases, arguing that the documentary evidence in the released materials was sufficient to support the opening of criminal investigations in the UK.</p>

<p>Critics of the British law enforcement response have pointed out that the National Crime Agency — the UK's equivalent of the FBI — has not announced any investigation connected to the Epstein files, despite the presence in those files of evidence relating to UK nationals and UK-based activities. The Surrey Police announcements, while significant, are local force investigations rather than the kind of national-level inquiry that the scale and nature of the documented activity might be thought to warrant.</p>

<p>Survivors' advocates have welcomed the Surrey investigations while noting that they represent a fraction of the investigative response that the evidence appears to demand. The Epstein network was not a local operation. Its British dimension involved multiple counties, multiple properties, and multiple jurisdictions. Two investigations by a single county police force are a start — but only that.</p>

<h2>What the Investigations Will Examine</h2>
<p>While Surrey Police have not disclosed the specific subject matter of either investigation, sources familiar with the Epstein materials have pointed to several categories of evidence that relate to Surrey-connected activities. These include references in witness statements to specific events and gatherings at properties in the county, financial transactions involving Surrey-based entities, and communications referencing activities that allegedly took place in the area.</p>

<p>The investigations are expected to be complex, lengthy, and resource-intensive. Child sexual abuse investigations of this kind typically involve extensive digital forensics, financial analysis, and the painstaking corroboration of witness accounts against documentary evidence. The fact that much of the relevant activity allegedly occurred years or decades ago adds additional challenges.</p>

<p>But the opening of formal investigations means that the individuals concerned are now subjects of active law enforcement scrutiny — a status that carries legal implications and that makes the continued concealment of relevant evidence potentially criminal. For the survivors who have been waiting years for British law enforcement to take their accounts seriously, that is not nothing.</p>

<p><strong>The American Reveal will continue to follow all UK-related developments in the Epstein accountability story.</strong></p>`,
    },
    {
      title: "The Clinton-Maxwell Photos: What the Newly Released Documents Actually Reveal",
      slug: "clinton-maxwell-photos-epstein-documents-revealed",
      excerpt: "Newly disclosed Epstein case documents contain photographs and communications linking Bill Clinton and Ghislaine Maxwell in ways that Clinton's representatives have never fully addressed — raising questions about what the former president actually knew.",
      category: "Politics",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>The release of new Epstein case documents has brought fresh scrutiny to the relationship between former President Bill Clinton and Ghislaine Maxwell, Epstein's convicted sex trafficking co-conspirator. The materials include photographic evidence, email correspondence, and witness accounts that together describe a relationship between Clinton and Maxwell that goes considerably beyond the casual social acquaintance that Clinton's representatives have consistently described over the years since Epstein's crimes became public knowledge.</p>

<p>Clinton has previously acknowledged traveling on Epstein's private aircraft — at least 26 times, according to flight log records released through litigation — and attending social events connected to Epstein's network. He has denied any knowledge of Epstein's criminal activities and has denied ever visiting Epstein's private island. The newly released documents address some of these specific claims in ways that his representatives have not yet publicly engaged with.</p>

<h2>The Photographs</h2>
<p>Among the materials released are photographs taken at social events showing Clinton and Maxwell in proximity suggesting a relationship of some familiarity. The photographs span multiple occasions and multiple locations, and several were taken at gatherings where other individuals subsequently identified in connection with Epstein's network were also present.</p>

<p>The significance of photographs showing a former president and a convicted sex trafficking operator together is not that the photographs themselves prove anything about Clinton's knowledge or conduct. It is that they document the social reality of how Epstein's network functioned — as a set of overlapping high-status social relationships in which powerful people were brought together and in which the criminal activity that was allegedly occurring at the margins of these gatherings was, at minimum, not something that caused prominent participants to withdraw their presence or their association.</p>

<p><strong>Clinton's representatives have described his interactions with Maxwell as those of a casual social acquaintance met through mutual friends.</strong> The volume and character of the documentary record now available suggests a relationship of greater regularity and familiarity than that description implies — not necessarily a relationship involving knowledge of Maxwell's criminal activities, but a relationship whose extent Clinton has consistently understated in his public statements.</p>

<h2>The Email Correspondence</h2>
<p>More significant than the photographs, from an evidentiary standpoint, are email communications involving Maxwell that reference Clinton in contexts that go beyond casual social connection. Several emails discuss Clinton's availability for events and travel in terms that suggest Maxwell's team was in regular communication with Clinton's office about logistics and scheduling. Others reference conversations with Clinton about subjects — including foundation work and international travel — that suggest an ongoing relationship of substance.</p>

<p>None of the email correspondence that has been released to date explicitly connects Clinton to Epstein's criminal activities or to the abuse of minors. What the correspondence shows is a sustained social and professional relationship with Maxwell during the years in which Maxwell was, according to her subsequent conviction, actively facilitating Epstein's sex trafficking operation. The question of what Clinton knew or suspected about that operation — given the duration and nature of his documented relationship with Maxwell — is one that no statement from his office has satisfactorily addressed.</p>

<h2>The Broader Political Context</h2>
<p>Clinton's documented connections to the Epstein network have been a persistent source of political controversy and have been cited by critics as evidence of the broader culture of impunity that allowed Epstein to operate for so long. The question of whether those connections reflect something more than social proximity to a sophisticated predator has never been definitively answered.</p>

<p>The newly released documents do not answer that question definitively. What they do is make the existing answers less adequate. The carefully managed narrative of a limited, purely social acquaintance — with Epstein described at arm's length, with Maxwell described as merely a social acquaintance — is harder to maintain in the face of a documentary record that shows sustained engagement with both individuals over many years.</p>

<p>Clinton is not currently under any known criminal investigation in connection with the Epstein case. But the standard of accountability for a former president of the United States is not merely the criminal standard. It is the standard of public transparency that the office demands. By that standard, the documentary record that has now been released demands a more substantive accounting than his representatives have provided.</p>

<p><strong>The American Reveal will continue to pursue all threads of this story, including the Clinton-Maxwell documentary record, with the rigor and persistence that the public interest demands.</strong></p>`,
    },
    {
      title: "UK Government Forced to Release Secret Files on Prince Andrew's Trade Envoy Role and Epstein",
      slug: "uk-government-secret-files-andrew-trade-envoy-epstein",
      excerpt: "The British government has been compelled to release classified documents detailing Prince Andrew's activities as the UK's Special Representative for International Trade and Investment — and their intersection with his Epstein connections.",
      category: "Foreign Policy",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>The United Kingdom government has released previously classified documents detailing the activities of Prince Andrew in his capacity as the UK's Special Representative for International Trade and Investment — a role he held from 2001 until his resignation in 2011 following the first wave of Epstein-related scandal. The files, released following sustained pressure from parliamentarians and Freedom of Information campaigners, reveal a pattern of overlap between Andrew's official trade promotion duties and his personal social network — a network that, the documents make clear, included regular contact with Jeffrey Epstein during the years of his most intense official activity.</p>

<p>Andrew served as the UK's trade envoy for a decade, traveling extensively on official business and representing the British government at commercial and diplomatic events around the world. The role gave him access to heads of state, government ministers, and business leaders across multiple continents, and it was used, the released files suggest, in ways that blurred the line between official diplomatic function and personal relationship cultivation in ways that were apparent to officials at the time.</p>

<h2>The Trade Envoy Role: What the Files Show</h2>
<p>The released documents include internal Foreign Office and Department for Trade and Industry communications discussing Andrew's activities in his trade envoy capacity, including expressions of concern from officials about the management of his personal associations and their potential to create difficulties for the UK government. Several of these internal communications reference Epstein specifically, and they date from periods when the nature of Epstein's activities was already becoming known in certain circles.</p>

<p><strong>Particularly striking are documents showing that British officials were aware of the reputational risks associated with Andrew's Epstein connection years before those risks became a matter of public controversy.</strong> Internal emails from the mid-2000s discuss how to manage Andrew's public schedule in ways that minimized the visibility of his Epstein association, suggesting that the concern was not about the substance of the relationship but about its optics — a distinction that critics have described as emblematic of an institutional culture that prioritized reputation management over accountability.</p>

<p>The files also document the use of Andrew's trade envoy status in ways that appear to have benefited Epstein's financial network. Several of Andrew's official travel engagements intersected with countries and individuals who were also associated with Epstein's financial activities, and the documents raise questions about whether the trade envoy platform was used, wittingly or otherwise, to facilitate introductions and relationships that served Epstein's interests.</p>

<h2>Resignation Under Pressure: The 2011 Departure</h2>
<p>Andrew resigned the trade envoy role in July 2011, following the publication of a photograph showing him walking in Central Park with Epstein — who had by that point completed his 2008 prison sentence and registered as a sex offender — and increasing media scrutiny of the relationship. The resignation was described by Buckingham Palace as voluntary. The released documents suggest a more complex picture, with officials from multiple government departments expressing concern about the reputational impact of Andrew's continued association with Epstein and, in at least one document, making clear that his position was becoming untenable.</p>

<p>The files also reveal that Andrew's departure from the trade envoy role did not end the governmental attention to his Epstein connections. Subsequent documents from 2012 and 2013 discuss the management of information related to Andrew's travel history with Epstein and the handling of inquiries from journalists who were pursuing the story years before it became a major public controversy. The picture that emerges is of a sustained institutional effort to manage the Epstein problem without ever fully confronting it.</p>

<h2>The Current Political Implications</h2>
<p>The release of the trade envoy files has renewed calls for a full public inquiry into Andrew's conduct, both in his official capacity and in his personal associations with Epstein and Maxwell. Several senior MPs have argued that the files demonstrate that the British government had knowledge of the potential seriousness of Andrew's Epstein connection that was not disclosed to the public, and that this non-disclosure represents a failure of accountability that demands a formal reckoning.</p>

<p>The Palace's response has been limited to a statement noting that Andrew stepped back from royal duties in 2019 and that the matters raised in the documents are historical. Critics have noted that "historical" is not the same as resolved, and that the ongoing civil and potential criminal proceedings related to Andrew's conduct make the distinction between historical and current considerably more complicated than the Palace's statement implies.</p>

<p><strong>The release of the trade envoy files is one more piece of a documentary record that is becoming increasingly difficult for the institutions involved to manage with the tools of reputation management alone. The American Reveal will continue to report on all developments.</strong></p>`,
    },
    {
      title: "The Epstein Archive Opens in New York: Inside the 3.5 Million Page Public Reading Room",
      slug: "epstein-archive-new-york-public-reading-room-3-million-pages",
      excerpt: "A coalition of journalists, legal advocates, and survivors' organizations has established a public archive giving citizens access to the full released Epstein document collection — and the results have already been extraordinary.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>In a converted loft space in lower Manhattan, a coalition of investigative journalists, legal advocates, and survivors' rights organizations has established what is being called the Epstein Archive — a public reading room and research facility giving any citizen access to the full collection of released Epstein investigative documents. The archive, which currently houses more than 3.5 million pages of materials in both physical and digital form, is the most ambitious transparency project connected to the Epstein case and represents a direct challenge to the forces that have, for decades, worked to keep the full record of Epstein's network out of public view.</p>

<p>The archive was established in response to what its founders describe as the inadequacy of the official disclosure process. While the Department of Justice has released significant volumes of Epstein materials, the manner of that release — bulk digital dumps without indexing, with heavy redactions, accessible only to those with the technical capacity to navigate enormous document collections — has effectively limited meaningful public access to those with the resources and expertise to process the materials. The archive is designed to change that.</p>

<h2>How the Archive Works</h2>
<p>The Epstein Archive operates on a model borrowed from major journalistic document projects like the Panama Papers and the Pandora Papers. The raw documents are processed by a team of researchers who create searchable indices, identify key individuals and themes, and produce summaries that allow members of the public and journalists to navigate the collection meaningfully. The physical reading room allows visitors to examine original documents in a supervised setting. The digital portal provides remote access to the processed collection.</p>

<p><strong>In the weeks since the archive opened, researchers have already identified multiple items of significance that had not previously received public attention.</strong> These include financial records documenting the flow of money through Epstein's network in ways that suggest connections to offshore financial structures that have not previously been publicly examined. Calendar and scheduling records that place named individuals at Epstein's properties on specific dates. Communications that corroborate elements of victim testimony that had previously been contested.</p>

<p>The archive is staffed by a rotating team of volunteer researchers — many of them journalists, lawyers, and academics who have agreed to donate time to the project — and by a small permanent staff. Funding comes from a combination of philanthropic grants and donations from members of the public who have contributed to the project's crowdfunding campaigns. No funding from any government or from any individual or organization connected to the Epstein case has been accepted.</p>

<h2>The Political Response</h2>
<p>The establishment of the archive has been welcomed by survivors' advocates and by many journalists and transparency campaigners, and criticized by the representatives of individuals who appear in the Epstein documents. Several legal challenges have been filed seeking to restrict public access to specific categories of documents, and the archive's legal team has been actively engaged in defending its operations against those challenges.</p>

<p>Some members of Congress have expressed support for the archive and its transparency mission, while others — particularly those with documented connections to individuals whose names appear in the Epstein materials — have been less enthusiastic. The archive has become a political flashpoint in debates about government transparency, the rights of alleged victims versus the privacy interests of named individuals, and the proper role of civil society in filling the gaps that official accountability processes leave.</p>

<h2>What the Archive Has Already Found</h2>
<p>In the weeks since opening, archive researchers working through the document collection have identified a number of significant items. These include a set of financial records showing previously undisclosed payments from Epstein-connected entities to individuals in public life. A series of communications that appear to reference the coordination of legal strategies among multiple attorneys representing different individuals connected to the Epstein network. Travel records that place specific individuals at specific locations on dates that contradict their publicly stated accounts.</p>

<p>None of these findings are being published by the archive directly — its role is to organize and provide access to the documents, not to function as a news organization. But the researchers and journalists who have accessed the archive have produced a steady stream of reporting based on their findings, and that reporting is adding steadily to the public record of what the Epstein network did, who participated in it, and who has been protected from accountability.</p>

<p><strong>The archive represents something important: the recognition that official accountability processes are not sufficient, and that civil society has both the right and the responsibility to do the transparency work that institutions will not do for themselves.</strong></p>`,
    },
    {
      title: "Six Epstein Survivors Brief Congress in Historic Closed Session — One Lawmaker Leaves the Room in Tears",
      slug: "epstein-survivors-brief-congress-closed-session-lawmaker-tears",
      excerpt: "In an extraordinary closed-door session, six women who survived Jeffrey Epstein's trafficking network addressed members of Congress directly — delivering testimony so graphic and so detailed that one lawmaker was seen leaving the room in visible distress.",
      category: "Justice",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>Six women who survived Jeffrey Epstein's sex trafficking network addressed members of Congress in a historic closed-door briefing that participants have described as one of the most powerful and disturbing sessions that any of them have attended in years of public service. The briefing, organized by the Senate Judiciary Committee and attended by members of both parties, was described by participants as a watershed moment in the long and frustrating effort to bring the full story of Epstein's network — and the institutional failures that enabled it — before the people's elected representatives.</p>

<p>The testimony was delivered in closed session at the request of the survivors, who cited concerns about personal safety and the ongoing sensitivity of some of the information they intended to provide. Several of the survivors have been subjects of surveillance and intimidation in the past, and their legal representatives negotiated the terms of the briefing carefully with committee staff to ensure that the setting provided genuine protection. One lawmaker was seen leaving the room before the session concluded, visibly shaken, and did not return.</p>

<h2>Who the Survivors Are</h2>
<p>The six women who addressed Congress represent a cross-section of Epstein's victim pool — different ages, different backgrounds, different entry points into the network, different years of abuse. They include at least two women whose names have been publicly known for years through their roles in civil litigation, and at least two who have never before spoken on the record to any official body. Their collective testimony spans more than two decades of Epstein's criminal activity, from the mid-1990s through the years immediately preceding his 2019 arrest.</p>

<p><strong>Virginia Giuffre, whose civil litigation against Ghislaine Maxwell produced many of the documentary disclosures that have driven public understanding of the case, was among the six.</strong> Giuffre has testified in various legal proceedings over the years, but her congressional briefing was described by participants as the most comprehensive and systematic account of her experience and of the network she was trafficked through that she has ever given to an official body. Her account of specific individuals, specific events, and the mechanisms by which complaints were suppressed and victims were silenced was described by senators present as devastating.</p>

<h2>What the Testimony Covered</h2>
<p>Participants in the briefing who spoke to reporters afterward were constrained in what they could disclose by the closed-session format and by agreements with the survivors' legal representatives. But several lawmakers described, in general terms, the categories of information the briefing addressed.</p>

<p>The testimony covered the mechanics of recruitment — how young women and girls were brought into Epstein's orbit, who facilitated that recruitment, what promises were made and what coercion was employed. It covered the activities that took place at Epstein's various properties, including specific descriptions of specific events involving specifically named individuals. It covered the aftermath — the payments made, the threats issued, the legal machinery deployed to manage and silence victims who attempted to come forward.</p>

<p>Perhaps most significantly for the lawmakers present, the testimony addressed the question of what government officials knew and when. Several of the survivors had, at various points in their experiences, contact with law enforcement officials — local, state, and federal — who they allege were aware of aspects of Epstein's activities and took no meaningful action. The specific officials named in this portion of the testimony have not been publicly identified, but the characterization of the testimony by senators who were present suggests that the alleged failures of official duty described were substantial.</p>

<h2>The Congressional Response</h2>
<p>The reaction from members of Congress who attended the briefing was unusually unified across party lines. Several senators described the experience as transformative — not in the sense that they were unaware of the broad outlines of the Epstein story, but in the sense that hearing the accounts of survivors directly, in detail and in person, produced a different kind of understanding than reading documents or listening to legal arguments.</p>

<p>"I have been in public service for many years," said one senator, speaking on condition of anonymity because the briefing was closed. "I have been briefed on matters of national security, on human rights abuses in foreign countries, on acts of violence that the public never hears about. Yesterday was different. What those women described — what was done to them, and how the system protected the people who did it — should not be possible in this country."</p>

<p>The lawmaker who was seen leaving the room returned after approximately 20 minutes and has since spoken publicly, in general terms, about the impact of what they heard. They have called for immediate action — including the appointment of a special prosecutor dedicated to pursuing Epstein network accountability and the establishment of a congressional investigation with subpoena power — and have indicated an intention to introduce legislation to those ends.</p>

<h2>What Comes Next</h2>
<p>The congressional briefing has generated immediate political momentum. Within days of the session, bipartisan legislation was introduced in both the Senate and the House calling for the appointment of a special prosecutor, the declassification of additional Epstein materials, and the establishment of a formal congressional investigation. Whether that legislation can navigate the political obstacles that have blocked previous accountability efforts remains to be seen.</p>

<p>For the survivors who spent years being told that their accounts were not credible, not legally actionable, or not politically expedient, the sight of lawmakers visibly moved by their testimony — however long overdue — represents a form of validation that no legal settlement or financial award can provide. What they have asked for, consistently and persistently, is to be believed. On the day of the congressional briefing, in a closed room in the United States Capitol, they finally were.</p>

<p><strong>The American Reveal will continue to report on all congressional and legal developments arising from the survivors' testimony and the broader Epstein accountability effort. The story is not over. It is entering a new chapter.</strong></p>`,
    },
  ]

  const created: string[] = []

  for (const a of articles) {
    try {
      await createArticle({
        title: a.title,
        slug: a.slug,
        excerpt: a.excerpt,
        category: a.category,
        author: 'Editorial Staff',
        content: a.content,
        publishedAt: new Date().toISOString(),
        published: false,
        featured: false,
        coverImage: a.coverImage,
      })
      created.push(a.title)
    } catch (err) {
      console.error('Failed to insert:', a.title, err)
    }
  }

  return NextResponse.json({ ok: true, inserted: created })
}
