import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog_/ai-automation-kenyan-businesses")({
  head: () => ({
    meta: [
      {
        title: "AI Automation for Kenyan Businesses: Save Time & Grow Faster | MetaMind",
      },
      {
        name: "description",
        content:
          "Discover how AI automation can help Kenyan businesses reduce repetitive work, improve customer support, capture more leads and scale operations.",
      },
      {
        property: "og:title",
        content: "AI Automation for Kenyan Businesses: Save Time & Grow Faster | MetaMind",
      },
      {
        property: "og:description",
        content:
          "Discover how AI automation can help Kenyan businesses reduce repetitive work, improve customer support, capture more leads and scale operations.",
      },
      {
        property: "og:url",
        content: "https://metamindlimited.co.ke/blog/ai-automation-kenyan-businesses",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://metamindlimited.co.ke/blog/ai-automation-kenyan-businesses",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "How AI Automation Is Helping Kenyan Businesses Save Time, Reduce Costs and Grow Faster",
          description:
            "Discover how AI automation can help Kenyan businesses reduce repetitive work, improve customer support, capture more leads and scale operations.",
          author: {
            "@type": "Organization",
            name: "MetaMind Limited",
          },
          publisher: {
            "@type": "Organization",
            name: "MetaMind Limited",
            url: "https://metamindlimited.co.ke/",
          },
          datePublished: "2026-08-25",
          dateModified: "2026-08-25",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://metamindlimited.co.ke/blog/ai-automation-kenyan-businesses",
          },
          image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=630&fit=crop",
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <SiteLayout>
      <article>
        <figure className="relative w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=700&fit=crop"
            alt="AI automation helping Kenyan businesses streamline operations"
            width={1600}
            height={700}
            loading="eager"
            fetchPriority="high"
            className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </figure>

        <header className="container-wide mx-auto max-w-3xl -mt-16 relative z-10 pb-4">
          <div className="surface-glass rounded-2xl p-6 sm:p-10">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <span className="text-brand">AI & Automation</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              How AI Automation Is Helping Kenyan Businesses Save Time, Reduce Costs and Grow Faster
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime="2026-08-25">Aug 25, 2026</time>
              <span aria-hidden="true">·</span>
              <span>12 min read</span>
              <span aria-hidden="true">·</span>
              <span>By MetaMind</span>
            </div>
          </div>
        </header>

        <section className="container-wide mx-auto max-w-3xl py-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Artificial intelligence is no longer something reserved for large technology companies.
            Businesses across Kenya are increasingly looking at{" "}
            <strong className="text-foreground">AI automation</strong> to reduce repetitive work,
            improve customer service, respond faster to leads and operate more efficiently.
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            For many businesses, the biggest opportunity is not replacing people with AI. It is
            using AI to remove repetitive tasks so employees can spend more time on work that
            requires judgment, creativity and human interaction.
          </p>

          <p className="mt-6 leading-relaxed text-muted-foreground">
            From customer support and lead follow-up to appointment booking and internal workflows,
            AI automation can help businesses save time while creating more consistent operations.
          </p>

          <hr className="my-12 border-border/60" />

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What Is AI Automation?
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI automation combines artificial intelligence with automated workflows to perform tasks
            that would traditionally require manual intervention.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Traditional automation follows predefined rules. For example:
          </p>

          <blockquote className="mt-4 border-l-4 border-brand/60 bg-card/40 p-5 italic text-foreground">
            "If a customer submits a form, send an email."
          </blockquote>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI-powered automation can go further. For example:
          </p>

          <blockquote className="mt-4 border-l-4 border-brand/60 bg-card/40 p-5 italic text-foreground">
            "When a customer sends a question, understand what they are asking, determine whether
            they are a potential customer, provide an appropriate response and notify a member of
            the sales team when human intervention is required."
          </blockquote>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI automation can therefore combine:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Artificial intelligence</li>
            <li>Large language models</li>
            <li>Workflow automation</li>
            <li>Business rules</li>
            <li>APIs</li>
            <li>Databases</li>
            <li>Communication platforms</li>
            <li>Human approval</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The result is a system capable of handling more complex business processes.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Why AI Automation Matters for Kenyan Businesses
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Many Kenyan businesses operate in environments where teams are expected to handle
            multiple responsibilities at the same time.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">Employees may spend hours:</p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Answering repetitive WhatsApp messages</li>
            <li>Responding to common customer questions</li>
            <li>Following up with leads</li>
            <li>Scheduling appointments</li>
            <li>Entering information into spreadsheets</li>
            <li>Preparing repetitive reports</li>
            <li>Sending customer notifications</li>
            <li>Moving information between different systems</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            These activities may appear small individually, but together they can consume a
            significant amount of working time.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI automation provides an opportunity to reduce this repetitive workload while allowing
            employees to remain involved where human judgment is important.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            7 Practical Ways Kenyan Businesses Can Use AI Automation
          </h2>

          <h3 className="mt-8 text-xl font-semibold">1. Customer Support Automation</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Businesses receive many questions repeatedly. Examples include:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>What are your prices?</li>
            <li>Where are you located?</li>
            <li>What are your opening hours?</li>
            <li>How do I book?</li>
            <li>What payment methods do you accept?</li>
            <li>When will my order arrive?</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            An AI customer-support assistant can answer common questions instantly and escalate more
            complicated requests to a human employee. This can improve response times while allowing
            customer-support teams to focus on more important conversations.
          </p>

          <h3 className="mt-8 text-xl font-semibold">2. Lead Generation and Follow-Up</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            One of the biggest problems businesses face is losing potential customers because leads
            are not followed up quickly enough.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI automation can help businesses:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Capture leads</li>
            <li>Qualify leads</li>
            <li>Ask initial questions</li>
            <li>Store customer information</li>
            <li>Send follow-up messages</li>
            <li>Notify sales representatives</li>
            <li>Track the lead journey</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Instead of relying entirely on someone remembering to follow up, businesses can create a
            structured automated process.
          </p>

          <h3 className="mt-8 text-xl font-semibold">3. Appointment and Booking Automation</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Businesses that rely on appointments can automate parts of the booking process.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            For example, an AI assistant can:
          </p>

          <ol className="mt-4 grid gap-2 pl-6 list-decimal text-muted-foreground marker:text-brand">
            <li>Ask what the customer needs.</li>
            <li>Determine the appropriate service.</li>
            <li>Check availability.</li>
            <li>Collect customer details.</li>
            <li>Confirm the appointment.</li>
            <li>Send reminders.</li>
          </ol>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            This can be useful for clinics, consultants, travel companies, beauty businesses,
            professional services and many other industries.
          </p>

          <h3 className="mt-8 text-xl font-semibold">4. Internal Workflow Automation</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI automation is not only for customer-facing activities.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Businesses can automate internal processes such as:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Approval workflows</li>
            <li>Notifications</li>
            <li>Data collection</li>
            <li>Document processing</li>
            <li>Task assignment</li>
            <li>Reporting</li>
            <li>Employee requests</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The objective is to reduce the number of repetitive manual steps required to complete
            everyday business processes.
          </p>

          <h3 className="mt-8 text-xl font-semibold">5. Document and Data Processing</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Businesses often deal with large amounts of information contained in documents, forms,
            emails and spreadsheets.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI can help extract and organize information from documents and transfer relevant
            information into business systems.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">Potential use cases include:</p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Invoice processing</li>
            <li>Application processing</li>
            <li>Customer onboarding</li>
            <li>Document classification</li>
            <li>Data extraction</li>
            <li>Report preparation</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            This can reduce manual data entry and improve consistency.
          </p>

          <h3 className="mt-8 text-xl font-semibold">6. Sales and Marketing Automation</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI can assist marketing and sales teams with activities such as:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Lead qualification</li>
            <li>Email personalization</li>
            <li>Customer segmentation</li>
            <li>Content creation</li>
            <li>Campaign analysis</li>
            <li>Follow-up sequences</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The goal should not simply be producing more content. The real value comes from using
            automation to help businesses communicate with the right customers at the right time.
          </p>

          <h3 className="mt-8 text-xl font-semibold">
            7. AI-Powered Business Assistants and Agents
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI agents can perform multiple steps within a business workflow.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            For example, an AI sales agent could:
          </p>

          <ol className="mt-4 grid gap-2 pl-6 list-decimal text-muted-foreground marker:text-brand">
            <li>Receive a customer enquiry</li>
            <li>Understand the request</li>
            <li>Search a product or service database</li>
            <li>Answer questions</li>
            <li>Collect customer information</li>
            <li>Create a lead</li>
            <li>Notify a sales representative</li>
            <li>Schedule a meeting</li>
          </ol>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            These systems can be designed with human approval where decisions require additional
            oversight.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            AI Automation vs Hiring More People
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI automation should not always be viewed as an alternative to hiring. A better approach
            is to determine which tasks should be automated and which require people.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="py-3 pr-4 font-semibold text-foreground">Task</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">Best Approach</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Repetitive FAQs</td>
                  <td className="py-3 pr-4">AI automation</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Complex customer complaints</td>
                  <td className="py-3 pr-4">Human support</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Lead qualification</td>
                  <td className="py-3 pr-4">AI + human</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Strategic decisions</td>
                  <td className="py-3 pr-4">Human</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Data entry</td>
                  <td className="py-3 pr-4">Automation</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Relationship management</td>
                  <td className="py-3 pr-4">Human</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Appointment reminders</td>
                  <td className="py-3 pr-4">Automation</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Business strategy</td>
                  <td className="py-3 pr-4">Human</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The strongest implementations combine technology with human expertise.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            What Should Kenyan Businesses Automate First?
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Businesses should start with processes that are:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Repetitive</li>
            <li>Time-consuming</li>
            <li>Rule-based</li>
            <li>High-volume</li>
            <li>Easy to measure</li>
            <li>Connected to clear business outcomes</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">Examples include:</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="py-3 pr-4 font-semibold text-foreground">Business Process</th>
                  <th className="py-3 pr-4 font-semibold text-foreground">
                    Automation Opportunity
                  </th>
                  <th className="py-3 font-semibold text-foreground">Potential Benefit</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Customer FAQs</td>
                  <td className="py-3 pr-4">AI assistant</td>
                  <td className="py-3">Faster responses</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Lead follow-up</td>
                  <td className="py-3 pr-4">Automated workflows</td>
                  <td className="py-3">Fewer missed leads</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Appointment booking</td>
                  <td className="py-3 pr-4">AI + scheduling</td>
                  <td className="py-3">Less administrative work</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Data entry</td>
                  <td className="py-3 pr-4">Workflow automation</td>
                  <td className="py-3">Reduced manual work</td>
                </tr>
                <tr className="border-b border-border/30">
                  <td className="py-3 pr-4">Reporting</td>
                  <td className="py-3 pr-4">Automated reports</td>
                  <td className="py-3">Faster decision-making</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Customer notifications</td>
                  <td className="py-3 pr-4">Automated messaging</td>
                  <td className="py-3">Better communication</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The best automation project is not necessarily the most technically impressive one. It
            is the one that solves a real business problem.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            How Much Does AI Automation Cost in Kenya?
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The cost of AI automation depends heavily on the complexity of the system.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            A simple chatbot or workflow may require significantly less investment than a custom AI
            agent integrated with multiple business systems.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Factors that influence cost include:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Number of workflows</li>
            <li>AI model usage</li>
            <li>Number of users</li>
            <li>Integrations</li>
            <li>Data requirements</li>
            <li>Security requirements</li>
            <li>Hosting</li>
            <li>Maintenance</li>
            <li>Monitoring</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Businesses should therefore evaluate automation based on return on investment rather
            than simply looking for the cheapest solution.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            For example, if an automated workflow saves a team several hours every week and prevents
            missed leads, the resulting business value may significantly exceed the cost of
            implementing it.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Common Mistakes Businesses Make When Implementing AI
          </h2>

          <h3 className="mt-8 text-xl font-semibold">Automating the wrong process</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Not every business problem needs AI. Start with the process and the business outcome,
            then determine whether automation is appropriate.
          </p>

          <h3 className="mt-8 text-xl font-semibold">Expecting AI to work without good data</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            AI systems depend on the quality of the information they receive. Poor documentation and
            inconsistent data can lead to unreliable results.
          </p>

          <h3 className="mt-8 text-xl font-semibold">Removing humans completely</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Some situations require human judgment. Well-designed systems should provide escalation
            and human oversight where necessary.
          </p>

          <h3 className="mt-8 text-xl font-semibold">Focusing only on the technology</h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A technically impressive system is not automatically a successful business solution.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            The system should improve measurable outcomes such as:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Response time</li>
            <li>Conversion rate</li>
            <li>Customer satisfaction</li>
            <li>Operational efficiency</li>
            <li>Cost</li>
            <li>Revenue</li>
          </ul>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Is AI Automation Right for Your Business?
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A business may be a strong candidate for AI automation if it regularly experiences:
          </p>

          <ul className="mt-4 grid gap-2 pl-6 list-disc text-muted-foreground marker:text-brand">
            <li>Large volumes of repetitive customer enquiries</li>
            <li>Slow lead follow-up</li>
            <li>Manual appointment scheduling</li>
            <li>Repetitive data entry</li>
            <li>Repetitive reporting</li>
            <li>Employees spending too much time on administrative tasks</li>
            <li>Information being moved manually between systems</li>
          </ul>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            If several of these problems exist, there may be opportunities to automate part of the
            workflow.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            The Future of AI Automation in Kenya
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            AI adoption in Kenya is likely to continue expanding as businesses become more
            comfortable with cloud platforms, digital payments, APIs, automation tools and AI
            systems.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            The most valuable implementations will not necessarily be the most complicated. They
            will be systems that solve practical problems.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Businesses that identify repetitive processes early and gradually automate them can
            potentially improve their operational efficiency while giving their teams more time to
            focus on customers and growth.
          </p>

          <h2 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
            Start Small, Automate What Matters
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Businesses do not need to automate everything at once.
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">A practical approach is:</p>

          <ol className="mt-4 grid gap-2 pl-6 list-decimal text-muted-foreground marker:text-brand">
            <li>Identify a repetitive business problem.</li>
            <li>Measure the current process.</li>
            <li>Determine whether automation is appropriate.</li>
            <li>Build a small pilot.</li>
            <li>Measure the results.</li>
            <li>Improve the workflow.</li>
            <li>Expand automation to other areas.</li>
          </ol>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Starting small reduces risk and makes it easier to demonstrate the value of automation.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            At MetaMind, our focus is on building practical AI agents and automation systems that
            solve real business problems.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            Whether the goal is improving customer support, capturing more leads, automating
            appointments or reducing repetitive operational work, the right automation strategy
            should start with the business problem rather than the technology.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            If your business has a repetitive process that could be automated,{" "}
            <Link
              to="/services/ai-automation"
              className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-accent"
            >
              explore our AI automation services
            </Link>
            . We can help you identify the opportunity and design a practical solution.
          </p>

          <p className="mt-5 leading-relaxed text-muted-foreground">
            To get started,{" "}
            <Link
              to="/consultation"
              className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-accent"
            >
              book a consultation
            </Link>{" "}
            with our team or{" "}
            <Link
              to="/contact"
              className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-accent"
            >
              contact MetaMind
            </Link>
            .
          </p>
        </section>

        <section className="container-wide py-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border/60 bg-card/40 p-8">
            <h2 className="text-base font-semibold text-foreground">Written by</h2>
            <div className="mt-4 flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-brand/10 text-lg font-bold text-brand ring-1 ring-brand/20">
                M
              </div>
              <div>
                <p className="font-medium text-foreground">MetaMind</p>
                <p className="text-sm text-muted-foreground">
                  AI Automation & Software Solutions in Kenya
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              MetaMind Limited helps businesses automate customer support, lead generation,
              appointment booking and repetitive operations using practical AI agents and software
              solutions.
            </p>
          </div>
        </section>

        <section className="container-wide py-16">
          <div className="mx-auto max-w-3xl surface-glass rounded-2xl p-8 text-center sm:p-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to automate the right things?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tell us about your business and we will map your highest-impact automation
              opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="brand" size="lg">
                <Link to="/consultation">Book a consultation</Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
