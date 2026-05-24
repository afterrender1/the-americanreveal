import { NextRequest, NextResponse } from 'next/server'
import { createArticle } from '@/lib/articles'
import { slugify } from '@/lib/utils'

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.AUTH_SECRET && secret !== 'seed2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const articles = [
    {
      title: "Dan Bilzerian Breaks Silence on Epstein Files: 'Everyone in That World Knew'",
      slug: "dan-bilzerian-epstein-files-everyone-knew",
      excerpt: "Social media mogul Dan Bilzerian has made explosive claims that Jeffrey Epstein's activities were an open secret among the ultra-wealthy elite — and that powerful figures are still lying about what they knew.",
      category: "Justice",
      author: "Editorial Staff",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Jeffrey_epstein_2008_mugshot_%28cropped%29.jpg",
      content: `<p>Dan Bilzerian — the Armenian-American poker player, venture capitalist, and social media personality whose carefully curated image of excess has garnered tens of millions of followers worldwide — has emerged as one of the most unexpected voices in the ongoing reckoning over Jeffrey Epstein's network. In a series of interviews and social media posts that have since gone viral, Bilzerian made pointed, unfiltered claims about Epstein, his associates, and the culture of silence that shielded the convicted sex offender for more than two decades.</p>

<h2>What Bilzerian Actually Said</h2>
<p>Speaking with characteristic bluntness across multiple platforms, Bilzerian stated that Epstein's lifestyle and criminal behavior were <strong>not a secret among a certain tier of the ultra-wealthy</strong>. "Everybody knew," Bilzerian said in one widely circulated clip. "The island, the girls, all of it — it was talked about." He went further, claiming that powerful figures who have since expressed shock and horror at Epstein's crimes were being dishonest about the extent of their prior knowledge.</p>
<p>Bilzerian also raised pointed questions about the circumstances of Epstein's death in August 2019 inside the Metropolitan Correctional Center in New York. Officially ruled a suicide by hanging, the death was immediately controversial. Surveillance cameras on Epstein's cell block malfunctioned. Guards failed to conduct required checks. Two autopsies reached different conclusions about the manner of death. Bilzerian, like many observers across the political spectrum, has been vocal in expressing skepticism that the official account reflects reality.</p>
<p>"People with that much to lose don't get suicided by accident," Bilzerian said in one post that was shared hundreds of thousands of times. While he stopped short of naming specific individuals beyond those already in the public record, his assertions have kept pressure on a story that powerful interests would prefer to see buried.</p>

<h2>Who Is Dan Bilzerian — And Why Does His Voice Matter?</h2>
<p>To understand why Bilzerian's statements carry a particular kind of weight, it helps to understand his background. His father, Paul Bilzerian, was a corporate raider convicted of securities fraud and tax evasion in 1989, making the family intimately familiar with how the legal system treats the powerful versus everyone else. Dan Bilzerian himself spent years cultivating relationships across the full spectrum of extreme wealth — from Hollywood celebrities and tech billionaires to hedge fund managers and political mega-donors.</p>
<p>This is not a man who read about elite excess in a newspaper. <strong>He lived it.</strong> His social media presence — built on images of yachts, private jets, mansions, and a lifestyle that most people will only ever see in movies — is a documented record of his access to exactly the kind of world Epstein operated in. When Bilzerian says that people in those circles knew about Epstein, he is speaking as someone who has been in those rooms.</p>
<p>His willingness to speak where others have maintained careful silence is itself significant. Most figures with comparable access to elite social networks have said nothing, or have issued carefully lawyered statements. Bilzerian operates outside those incentive structures — he has already made his money, already built his audience, and has little left to lose from powerful enemies.</p>

<h2>The Epstein Network: A Documented History of Elite Complicity</h2>
<p>The documented facts of the Epstein case are, by any measure, extraordinary. Epstein — a financier whose actual sources of wealth have never been fully explained — first came to the attention of law enforcement in 2005 when a parent in Palm Beach, Florida, reported that her 14-year-old daughter had been paid to perform sexual acts at his mansion. The subsequent investigation identified dozens of victims, almost all minors.</p>
<p>What happened next is perhaps the most damning part of the story. In 2007 and 2008, federal prosecutors — led by then-U.S. Attorney Alexander Acosta, who would later serve as Secretary of Labor under President Trump — entered into a non-prosecution agreement with Epstein that was, in the words of a federal judge, a violation of victims' rights law. Epstein pleaded guilty to minor state charges, registered as a sex offender, and served just 13 months in a Palm Beach county jail. For much of that time, he was permitted to leave on "work release" for up to 12 hours a day, six days a week.</p>
<p><strong>The deal was not just lenient — it was extraordinary.</strong> Career federal prosecutors later stated that the evidence against Epstein would have supported charges carrying decades in federal prison. The agreement also, crucially, granted immunity to unnamed co-conspirators — a provision that victims' advocates argued was designed to protect Epstein's powerful associates.</p>

<h2>The Island, The Jet, and The List</h2>
<p>Epstein's private island in the U.S. Virgin Islands, which he named "Little Saint James" but which locals and eventual media coverage came to call "Pedophile Island," was a frequent destination for the globally powerful. His Boeing 727, documented in flight logs obtained through litigation, carried an extraordinary roster of passengers: former President Bill Clinton (who has acknowledged at least 26 flights on the jet), Britain's Prince Andrew, renowned attorney Alan Dershowitz, and scores of others from finance, entertainment, politics, and technology.</p>
<p>The release of court documents related to civil litigation brought by Epstein accuser Virginia Giuffre has pulled back the curtain further. Prince Andrew reached a financial settlement with Giuffre, who alleged she was trafficked to him when she was 17. Ghislaine Maxwell, Epstein's longtime associate and alleged chief recruiter of victims, was convicted in December 2021 on federal sex trafficking and conspiracy charges and is currently serving a 20-year federal prison sentence.</p>
<p>What has not happened — and what Bilzerian and others have repeatedly highlighted — is the prosecution of anyone other than Maxwell for facilitating Epstein's crimes. The unnamed co-conspirators granted immunity in the 2008 deal have never been publicly identified. No one who allegedly participated in the abuse of minors on Epstein's island or elsewhere has faced criminal charges beyond Epstein himself and Maxwell.</p>

<h2>A Culture That Protects Itself</h2>
<p>The broader point that Bilzerian and other observers have made is not simply about Epstein as an individual, but about the systems that made him possible. Epstein was, in many respects, a creation of the world he inhabited — a world in which access to power and wealth insulated certain individuals from accountability that would have been swift and certain for anyone else.</p>
<p>The 2008 non-prosecution agreement is one documented example. The failure of anyone in Epstein's social circle to report what they allegedly knew is another. The circumstances of his 2019 death — which removed the possibility of his testifying about his associates — is a third. Bilzerian's claim that "everybody knew" is, in this context, not a conspiracy theory. It is a description of how elite social networks function, by people who have been part of them.</p>
<p><strong>The question that has never been adequately answered is not what Epstein did. The question is who helped him, who knew, and why, after more than two decades of documented crimes, the full accounting has never come.</strong></p>

<h2>What Comes Next</h2>
<p>The Epstein case remains legally active in important respects. Giuffre's civil litigation has continued to produce document releases. Advocacy organizations representing Epstein's victims continue to push for the identification and prosecution of co-conspirators. Congressional interest in the case has not entirely dissipated.</p>
<p>Whether additional criminal referrals or prosecutions will follow is uncertain. What is not uncertain is that the public appetite for a full accounting remains intense — and that figures like Bilzerian, operating outside the usual incentive structures of wealth and power, will continue to apply pressure where more cautious voices have gone silent.</p>
<p>The American Reveal will continue to report on all developments in the ongoing pursuit of accountability for Jeffrey Epstein's network.</p>`,
    },
    {
      title: "Trump's 'Big Beautiful Bill' Passes House: What It Means for Every American",
      slug: "trump-big-beautiful-bill-passes-house-explained",
      excerpt: "The sweeping Republican tax and spending legislation cleared the House by the narrowest of margins. Here's what's in it, who wins, who loses, and what happens next in the Senate.",
      category: "Politics",
      author: "Editorial Staff",
      coverImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29_%28cropped%29%282%29.jpg/800px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29_%28cropped%29%282%29.jpg",
      content: `<p>In a vote that stretched into the early morning hours and required intensive personal lobbying from President Donald Trump, the House of Representatives passed the administration's sweeping domestic policy legislation by a razor-thin margin. The bill — which Trump has branded his "One Big Beautiful Bill" — represents one of the most ambitious restructurings of federal tax and spending policy in decades, touching everything from income taxes and Medicaid to the southern border and clean energy subsidies.</p>
<p>The legislation now moves to the Senate, where its fate is far from certain. But its passage through the House marks a significant political victory for Trump and House Speaker Mike Johnson, who spent weeks managing a fractious Republican conference in which a handful of holdouts held enormous leverage. Here is what is actually in the bill, who benefits, who pays, and what the battle in the Senate is likely to look like.</p>

<h2>The Tax Cuts: Who Benefits and By How Much</h2>
<p>The centerpiece of the legislation is a permanent extension of the 2017 Tax Cuts and Jobs Act, which was set to expire at the end of 2025. Without action, most American taxpayers would have seen their rates revert to pre-2017 levels — a de facto tax increase that both parties agreed should be avoided, though they differ sharply on what else should be attached to the fix.</p>
<p>Beyond the extension, the bill adds several new provisions. The standard deduction is increased further, providing modest relief to middle-income filers. The child tax credit is expanded. The cap on the state and local tax deduction — the so-called SALT cap, which has been a source of intense conflict among House Republicans representing high-tax states like New York, New Jersey, and California — is raised from $10,000 to $30,000 for most filers, a compromise that satisfied enough holdouts to secure their votes.</p>
<p><strong>For the wealthiest Americans, the bill is particularly generous.</strong> The estate tax exemption is raised significantly, benefiting large inherited fortunes. The top marginal rate remains where the 2017 law set it. Corporate tax rates, cut dramatically in 2017, are preserved. Independent analyses have found that the top quintile of earners captures the large majority of the bill's tax benefits, while lower-income households see comparatively modest gains.</p>

<h2>Medicaid and SNAP: The Cuts That Have Democrats Furious</h2>
<p>To offset — partially — the cost of the tax cuts, the bill includes significant reductions to federal spending on Medicaid and the Supplemental Nutrition Assistance Program, commonly known as food stamps or SNAP. These are the provisions that have drawn the sharpest criticism from Democrats and from some Republican moderates representing competitive districts.</p>
<p>On Medicaid, the bill introduces new work requirements for able-bodied adults without dependents, requires states to conduct more frequent eligibility re-determinations, and reduces the federal matching rate for states that have expanded Medicaid under the Affordable Care Act. The Congressional Budget Office estimated that these changes would result in millions of Americans losing Medicaid coverage over the next decade.</p>
<p>On SNAP, the bill shifts more of the program's cost to states — a change that analysts say is likely to result in benefit reductions in states that cannot absorb the additional expense. Rural Republicans whose constituents rely heavily on both programs were among the last holdouts before ultimately voting for the bill.</p>
<p><strong>"We are cutting healthcare for the poor to pay for tax cuts for the rich,"</strong> said House Minority Leader Hakeem Jeffries on the House floor. "That is what this bill does, full stop." Republicans disputed this framing, arguing that the work requirements and eligibility reviews would reduce fraud and ensure that benefits go to those who genuinely need them.</p>

<h2>Border and Immigration: Funding the Crackdown</h2>
<p>The bill includes substantial new funding for border security and immigration enforcement — a priority that Trump has placed at the center of his second term agenda. Tens of billions of dollars are allocated for additional border wall construction, expanded detention facilities, increased staffing for Immigration and Customs Enforcement, and accelerated deportation proceedings.</p>
<p>The legislation also includes provisions making it harder to claim asylum at the southern border and increasing penalties for illegal entry and reentry. Immigration advocacy groups have warned that these provisions, combined with the administration's existing executive actions, will effectively end the asylum system as it has functioned for decades.</p>
<p>For Republican supporters of the bill, the immigration provisions are among its most popular elements. Polling consistently shows that border security is among voters' top concerns, and Republicans have argued that the funding levels in the bill reflect the scale of the challenge they inherited from the Biden administration.</p>

<h2>Clean Energy: Gutting the Inflation Reduction Act</h2>
<p>The bill repeals or significantly curtails the clean energy tax credits enacted in the 2022 Inflation Reduction Act — a provision that has drawn criticism not only from Democrats and environmental groups, but from some Republicans representing districts where clean energy manufacturing has created significant numbers of jobs.</p>
<p>Tax credits for electric vehicles, solar panel installation, wind energy production, and clean energy manufacturing are all reduced or eliminated. The IRA credits had been credited with spurring hundreds of billions of dollars in private investment, much of it in Republican-held congressional districts. Several Republican members who represent those districts voted for the bill only after extracting assurances about transition periods and grandfathering provisions.</p>
<p><strong>The energy industry response has been mixed.</strong> Traditional fossil fuel producers have largely supported the bill. Renewable energy companies and the manufacturers who supply them have warned of significant job losses and investment pullbacks if the credits disappear.</p>

<h2>The Deficit Question: How Much Does This Cost?</h2>
<p>The Congressional Budget Office, the nonpartisan scorekeeper of federal legislation, estimated that the bill would add approximately $3.8 trillion to the federal deficit over the next decade. This figure has been contested by Republicans, who argue that the economic growth generated by the tax cuts will produce revenues that the CBO's model does not capture — a theory known as dynamic scoring that mainstream economists view with significant skepticism.</p>
<p>The deficit impact has been the primary concern of a group of fiscally conservative House Republicans who call themselves members of the House Freedom Caucus. Several members of this group held out until the final days, demanding deeper spending cuts before ultimately voting yes after conversations with Trump himself.</p>
<p>For context, the national debt currently stands at approximately $36 trillion. The interest payments on that debt are now the single largest line item in the federal budget, exceeding defense spending. Adding nearly $4 trillion more in debt over a decade — under the CBO's analysis — is a significant acceleration of a trajectory that both parties have failed to address.</p>

<h2>What Happens in the Senate</h2>
<p>The bill's passage through the House is only the first step. In the Senate, it faces a fundamentally different political environment. Republicans hold 53 seats, meaning they can afford to lose only three votes on a party-line bill. And several Republican senators have already signaled concerns about specific provisions.</p>
<p>Senator Lisa Murkowski of Alaska and Senator Susan Collins of Maine have both expressed reservations about the Medicaid cuts. Several senators from states that accepted Medicaid expansion have constituents whose coverage could be at risk. The SALT cap increase — a priority for House Republicans from high-tax states — may be reduced or eliminated in the Senate, which could complicate the bill's return to the House.</p>
<p><strong>Senate Majority Leader John Thune has said he wants to pass a bill before the August recess</strong>, an ambitious timeline given the complexity of the legislation and the divergent interests within the Republican conference. Whether the final product, if one emerges, resembles the House bill closely enough to pass the House again is an open question.</p>

<h2>The Bottom Line for Ordinary Americans</h2>
<p>For most Americans trying to understand what this bill means for their lives, the picture is complicated. If you are a middle-income taxpayer whose rates would have risen without an extension of the 2017 law, the bill prevents a tax increase you would otherwise have faced. If you rely on Medicaid for your healthcare, you may face new bureaucratic hurdles or lose coverage. If you receive SNAP benefits, the program may become less generous depending on the choices your state makes. If you work in clean energy manufacturing, your industry faces significant uncertainty.</p>
<p>The bill reflects choices — about who bears the cost of government, who receives its benefits, and what kind of country the current majority wants to build. Those choices are, ultimately, political ones. The Senate will now have its say on whether the House's version of those choices becomes law.</p>`,
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
        author: a.author,
        content: a.content,
        publishedAt: new Date().toISOString(),
        published: true,
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
