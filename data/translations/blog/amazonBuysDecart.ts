import { BlogTranslation } from "../blog";
import { Locale } from "@/lib/i18n";

export const amazonBuysDecartTranslation: Record<Locale, Partial<BlogTranslation>> = {
  fa: {},
  en: {
    title: "Amazon Is Buying Decart's AI Chip Software for a Reported $7.5B: The Chip War Moves Into Software",
    excerpt: "Per GeekWire (Nov 2026), Amazon is acquiring Decart's chip-optimization technology for a reported ~$7.5B (Bloomberg). What Decart sells, why the deal targets Nvidia's software moat, and what it means for enterprise AI costs.",
    categoryName: "AI Trends & Insights",
    readTime: "13 min read",
    tags: [
      "Amazon",
      "Decart",
      "AI chips",
      "Trainium",
      "Nvidia",
      "AI Trends",
      "DigiNoron"
    ],
    faq: [
      {
        question: "How much is Amazon paying for Decart?",
        answer: "Amazon has not disclosed the terms. Bloomberg reported the price at about $7.5 billion, citing a person familiar with the matter, and Globes reported that the payout is tied to performance targets over five years. The deal is subject to regulatory clearance."
      },
      {
        question: "What is Decart?",
        answer: "Decart is a startup that builds AI chip-optimization software — software that squeezes more performance out of every chip. Its AI models, such as Lucy (real-time live video editing) and Oasis (interactive virtual worlds), are not part of the Amazon deal, and its three co-founders are joining Amazon."
      },
      {
        question: "Why is Amazon buying Decart?",
        answer: "Because Amazon plans to sell its Trainium and Inferentia chips directly to other companies and compete with Nvidia; optimization software that boosts the output of every chip is Amazon's strongest selling point for winning external customers. Decart already ran real-time video four times faster on Trainium at half the GPU cost."
      },
      {
        question: "Does Decart's software run on other chips?",
        answer: "It has also run on Nvidia and Google chips, but Amazon has not said whether that compatibility will continue. The deal runs through Amazon's chip unit, Annapurna Labs, and the technology will be used to improve Trainium and Inferentia."
      },
      {
        question: "What does the deal mean for enterprise AI costs?",
        answer: "More competition between Nvidia and Amazon usually means more options and sharper pricing for training and running models. The key lesson for any organization: software optimization can multiply hardware returns — exactly what Decart demonstrated with real-time video on Trainium."
      }
    ],
    content: `<div class="space-y-8 text-slate-800 leading-relaxed">

  <!-- Hero Answer -->
  <div class="p-6 bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl shadow-sm">
    <h3 class="text-lg font-bold text-sky-900 mb-2">Quick Answer:</h3>
    <p class="text-sm text-slate-700 leading-relaxed font-medium">
      <strong>Amazon is buying Decart's AI chip-optimization software for a reported ~$7.5 billion.</strong> Per GeekWire (November 23, 2026), Amazon did not disclose the terms, but Bloomberg reported the price at about $7.5B, and Globes reported the payout is tied to five-year performance targets. Decart builds software that gets more performance out of every chip — exactly what Amazon needs to pitch its Trainium chips against Nvidia. Decart's three co-founders are joining Amazon, its AI models (Lucy and Oasis) are not part of the deal, and closing is subject to regulatory clearance.
    </p>
  </div>

  <!-- CTA 1 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">AI infrastructure news affects your costs and your strategy. The DigiNoron specialist team is your guide.</p>
    <a href="/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      Request Expert Consultation
    </a>
  </div>

  <!-- Section 1 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">The Amazon–Decart Deal: What Exactly Happened?</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    Amazon is buying Decart's chip-optimization technology and team; Bloomberg reported the price at about $7.5B, and Globes reported the payout is tied to five-year performance targets. The announcement landed the same day Nvidia's board reinstated Jensen Huang as CEO.
  </p>
  <p>
    According to <a href="https://www.geekwire.com/2026/amazon-is-buying-decarts-ai-chip-software-for-a-reported-7-5b-and-bringing-its-founders-aboard/" target="_blank" rel="noopener noreferrer" class="text-sky-700 underline font-semibold">GeekWire</a>, Amazon did not disclose the financial terms; Bloomberg reported the ~$7.5B figure citing a person familiar with the matter. The timing is telling: Amazon announced the deal the same day Nvidia's board reinstated Jensen Huang as CEO after a leadership shakeup that had put CFO Colette Kress in the interim role — the two giants of chips and cloud lifting the curtain on their long-term plans simultaneously.
  </p>

  <!-- Section 2 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">What Is Decart, and What Exactly Is Amazon Buying?</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    Decart is a startup whose software gets more performance out of every chip. Amazon is buying that technology and the team behind it — but not Decart's AI models: Lucy, which edits live video in real time, and Oasis, which generates interactive virtual worlds, are not part of the deal.
  </p>
  <p>
    Decart's three co-founders — CEO Dean Leitersdorf, his brother Orian Leitersdorf, and Moshe Shalev — are joining Amazon. Per Globes, the founders, who own about 64% of Decart, have committed to staying five years and could receive about $4.8 billion collectively. One market nuance: Decart's software has also run on Nvidia and Google chips, but Amazon has not said whether that compatibility continues. Peter DeSantis, Amazon's SVP of foundational AI models and custom silicon, wrote in the announcement: "Every leap forward in AI starts with getting more out of every chip."
  </p>

  <!-- Section 3 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">Why the AI Chip War Will Be Won in Software</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    Nvidia holds most of the AI chip market not only because of hardware but because of its mature software — the exact moat Amazon is now attacking with last month's TorchNeuron tool and now the Decart acquisition. Optimization software means the same hardware delivers more output at lower cost.
  </p>
  <p>
    Last month Amazon released <strong>TorchNeuron</strong>, a tool that runs common AI code on Trainium with minimal changes. Buying Decart is the next step of the same strategy: removing the scariest part of migrating off Nvidia — the fear of losing software performance. The partnership history proves the point: Decart was among the first customers on Trainium3, and Amazon said last December that Decart ran real-time video four times faster on Trainium at half the cost of GPUs. For enterprise technical teams, the message is clear: software optimization is the fastest route to cutting AI costs.
  </p>

  <!-- Section 4 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">Amazon's Bigger Plan: Selling AI Chips Beyond AWS</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    Amazon builds its custom Trainium and Inferentia chips through its Annapurna Labs unit and is now signaling a serious push to sell them directly to other companies. CEO Andy Jassy said on last month's earnings call: "We believe we're going to have a very significant business selling chips externally."
  </p>
  <p>
    The deal runs through <strong>Annapurna Labs</strong>, which Amazon bought in 2015 for a reported $350 million; its engineers went on to design Trainium and Amazon's other custom chips. Per Globes, Annapurna co-founder Nafea Bshara led the negotiations, and Decart's technology will be used to improve performance on Trainium and Inferentia. The competitive picture is just as clear: Microsoft builds Maia chips mainly for its own AI services and Google has its TPUs — Amazon wants to be the one player that sells "chips plus efficiency" as a product.
  </p>

  <!-- Section 5 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">Compared: Buy More Chips vs. Get More From Every Chip</h2>
  <p>
    The lesson of this deal is not just for tech giants; every organization with an AI budget chooses between two routes:
  </p>
  <div class="overflow-x-auto my-4">
    <table class="w-full text-sm border border-slate-200 rounded-xl">
      <thead>
        <tr class="bg-slate-100 text-slate-900">
          <th class="p-3 text-left font-bold border-b border-slate-200">Criterion</th>
          <th class="p-3 text-left font-bold border-b border-slate-200">Traditional route: more hardware</th>
          <th class="p-3 text-left font-bold border-b border-slate-200">Amazon–Decart route: software optimization</th>
        </tr>
      </thead>
      <tbody class="text-slate-700">
        <tr><td class="p-3 border-b border-slate-100 font-medium">Capital cost</td><td class="p-3 border-b border-slate-100">Buying new GPUs/servers — billions of dollars</td><td class="p-3 border-b border-slate-100">One-time purchase of optimizer technology</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">Time to results</td><td class="p-3 border-b border-slate-100">Long delivery and installation cycles</td><td class="p-3 border-b border-slate-100">Immediate effect on existing workloads</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">Return per dollar</td><td class="p-3 border-b border-slate-100">Linear growth with chip count</td><td class="p-3 border-b border-slate-100">A multiplier: up to 4x speed at half the cost in Decart's case</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">Dependency</td><td class="p-3 border-b border-slate-100">Deep vendor lock-in</td><td class="p-3 border-b border-slate-100">Less lock-in through more options</td></tr>
        <tr><td class="p-3 font-medium">Risk</td><td class="p-3">Idle capacity in low-traffic periods</td><td class="p-3">Requires a team fluent in optimization</td></tr>
      </tbody>
    </table>
  </div>

  <!-- CTA 2 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">To pick the right architecture and cut your organization's AI costs, talk to the DigiNoron consulting team.</p>
    <a href="/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      Request Expert Consultation
    </a>
  </div>

  <!-- Section 6 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">5 Common Mistakes When Reading the Decart Deal</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    This should not be read like an ordinary M&A headline; the details matter. Know these five common mistakes so your organizational analysis stays sharp: assuming the price is certain, ignoring regulatory clearance, assuming the models came along, expecting an instant impact, and missing the core lesson.
  </p>
  <ul class="list-disc pl-6 space-y-2 text-slate-700">
    <li><strong>Assuming the price is certain:</strong> Amazon did not disclose the amount; $7.5B is Bloomberg's report, and Globes says the payout is tied to five-year performance targets — the final number may differ.</li>
    <li><strong>Ignoring regulatory clearance:</strong> the deal is subject to regulatory approval; nothing is final until then.</li>
    <li><strong>Assuming the AI models came along:</strong> Lucy and Oasis are not part of the purchase, and Amazon has not said what happens to existing customers such as eBay.</li>
    <li><strong>Expecting an instant impact:</strong> integrating technology and teams takes time; the real market effect will show up later.</li>
    <li><strong>Missing the core lesson:</strong> for your organization too, the return per hardware unit matters more than the volume of hardware — take software optimization seriously.</li>
  </ul>

  <!-- Voice Search -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">Voice Search Questions, Answered</h2>
  <div class="space-y-4 text-slate-700">
    <p><strong>How much did Amazon pay for Decart?</strong><br>Amazon did not disclose the terms; Bloomberg reported about $7.5 billion, and Globes reported the payout is tied to five-year performance targets.</p>
    <p><strong>What is Decart?</strong><br>A startup that builds chip-optimization software — getting more output from every chip. Its models like Lucy and Oasis are not part of the deal, and its co-founders are joining Amazon.</p>
    <p><strong>Why did Amazon buy Decart?</strong><br>To compete with Nvidia: Amazon plans to sell its Trainium chips to other companies, and optimization software is its strongest selling point.</p>
    <p><strong>Does Decart's software run on Nvidia chips?</strong><br>It has so far, but Amazon has not said whether that compatibility will continue after the deal.</p>
  </div>

  <!-- Section 7 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">The Lesson for Organizations: Return per Resource Beats Resource Volume</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-l-4 border-sky-600">
    When the world's largest cloud company pays $7.5B just to "get more out of the chips it already has," the message for every manager is clear: the return per compute resource matters more than the volume of that resource. At organizational scale, that means optimizing processes before buying more hardware and tools.
  </p>
  <p>
    Dean Leitersdorf, Decart's CEO, said in the announcement: "From day one, our mission has been to redefine the boundaries of what AI can do and to make it dramatically more efficient along the way. Joining Amazon gives our team the scale, the customers, and the infrastructure to pursue that mission faster than we could on our own." At DigiNoron we apply the same logic in <a href="/services/enterprise-ai" class="text-sky-700 underline font-semibold">enterprise AI transformation projects</a>: return first, volume second. For more context on next-generation AI infrastructure, read our coverage of <a href="/blog/google-project-suncatcher-ai-in-space" class="text-sky-700 underline font-semibold">Google's Project Suncatcher to put data centers in space</a>.
  </p>

  <!-- CTA 3 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">Want to optimize your organization's AI architecture and costs? Get expert consultation today.</p>
    <a href="/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      Request Expert Consultation
    </a>
  </div>

  <!-- FAQ -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">Frequently Asked Questions</h2>
  <div class="space-y-4 text-slate-700">
    <p><strong>How much is Amazon paying for Decart?</strong><br>Amazon has not disclosed the terms. Bloomberg reported the price at about $7.5 billion, citing a person familiar with the matter, and Globes reported that the payout is tied to performance targets over five years. The deal is subject to regulatory clearance.</p>
    <p><strong>What is Decart?</strong><br>Decart is a startup that builds AI chip-optimization software — software that squeezes more performance out of every chip. Its AI models, such as Lucy (real-time live video editing) and Oasis (interactive virtual worlds), are not part of the Amazon deal, and its three co-founders are joining Amazon.</p>
    <p><strong>Why is Amazon buying Decart?</strong><br>Because Amazon plans to sell its Trainium and Inferentia chips directly to other companies and compete with Nvidia; optimization software that boosts the output of every chip is Amazon's strongest selling point for winning external customers. Decart already ran real-time video four times faster on Trainium at half the GPU cost.</p>
    <p><strong>Does Decart's software run on other chips?</strong><br>It has also run on Nvidia and Google chips, but Amazon has not said whether that compatibility will continue. The deal runs through Amazon's chip unit, Annapurna Labs, and the technology will be used to improve Trainium and Inferentia.</p>
    <p><strong>What does the deal mean for enterprise AI costs?</strong><br>More competition between Nvidia and Amazon usually means more options and sharper pricing for training and running models. The key lesson for any organization: software optimization can multiply hardware returns — exactly what Decart demonstrated with real-time video on Trainium.</p>
  </div>

  <!-- Author Box -->
  <div class="p-6 bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl shadow-sm mt-8">
    <div class="flex items-center gap-4">
      <img src="/images/instructors/karimi.jpg" alt="DigiNoron Specialist Team" class="w-14 h-14 rounded-full object-cover" />
      <div>
        <h3 class="text-base font-bold text-slate-900">DigiNoron Specialist Team</h3>
        <p class="text-sm text-slate-600">5+ years of hands-on AI project experience</p>
      </div>
    </div>
    <p class="text-sm text-slate-700 leading-relaxed mt-4">
      The DigiNoron Specialist Team draws on 5+ years of enterprise AI project experience to publish articles and courses that grow digital skills for managers, teams, and enthusiasts.
    </p>
    <div class="mt-5 p-4 bg-white/70 border border-sky-200 rounded-xl">
      <img src="/images/blog/diginoron-logo.png" alt="DigiNoron Specialist Team logo" class="w-full max-w-md mx-auto rounded-lg" />
    </div>
  </div>

</div>`,
  },
  ar: {
    title: "أمازون تشتري برنامج شرائح الذكاء الاصطناعي من Decart بنحو ٧.٥ مليار دولار: حرب الرقائق تنتقل إلى عالم البرمجيات",
    excerpt: "وفق GeekWire (نوفمبر ٢٠٢٦)، تستحوذ أمازون على تقنية تحسين الشرائح من Decart بنحو ٧.٥ مليار دولار وفق بلومبرغ. ما الذي تبيعه Decart، ولماذا يستهدف الصفقة خندق Nvidia البرمجي، وماذا تعني لتكاليف الذكاء الاصطناعي المؤسسي.",
    categoryName: "أخبار واتجاهات الذكاء الاصطناعي",
    readTime: "١٣ دقيقة قراءة",
    tags: [
      "أمازون",
      "Decart",
      "رقائق الذكاء الاصطناعي",
      "Trainium",
      "Nvidia",
      "اتجاهات الذكاء الاصطناعي",
      "ديجي نورون"
    ],
    faq: [
      {
        question: "كم تدفع أمازون لشراء Decart؟",
        answer: "لم تكشف أمازون الشروط رسمياً؛ لكن بلومبرغ أوردت المبلغ بنحو ٧.٥ مليار دولار نقلاً عن مصدر مطلع على الأمر، وأفادت Globes بأن الدفع مرتبط بأهداف أدائية على مدى خمس سنوات. وإتمام الصفقة رهن موافقة الجهات الرقابية."
      },
      {
        question: "ما هي شركة Decart؟",
        answer: "Decart شركة ناشئة تبني برمجيات لتحسين أداء الرقائق؛ أي برمجيات تستخرج مخرجاً أكبر من كل رقاقة. نماذجها من الذكاء الاصطناعي مثل Lucy (تدوين الفيديو الحي) وOasis (العوالم الافتراضية التفاعلية) ليست جزءاً من الصفقة، وينضم مؤسسوها الثلاثة إلى أمازون."
      },
      {
        question: "لماذا اشترت أمازون Decart؟",
        answer: "لأن أمازون تخطط لبيع رقائق Trainium وInferentia مباشرة إلى شركات أخرى والتنافس مع Nvidia؛ فالبرمجيات التي ترفع مردود كل رقاقة هي أقوى ورقة تفاوضية لدى أمازون لجذب العملاء الخارجيين. سبق أن شغّلت Decart الفيديو الفوري أسرع بأربع مرات على Trainium بنصف تكلفة GPU."
      },
      {
        question: "هل يعمل برنامج Decart على رقائق أخرى؟",
        answer: "سبق أن عمل على رقائق Nvidia وGoogle أيضاً، لكن أمازون لم تكشف إن كان هذا التوافق سيستمر بعد الاستحواذ. تسير الصفقة عبر وحدة الرقائق في أمازون (Annapurna Labs)، وستُستخدم تقنية Decart لتحسين Trainium وInferentia."
      },
      {
        question: "ماذا تعني الصفقة لتكاليف الذكاء الاصطناعي في المؤسسات؟",
        answer: "المزيد من المنافسة بين Nvidia وأمازون يعني عادةً خيارات أكثر وأسعاراً أكثر تنافسية لتدريب النماذج وتشغيلها. والدرس الأساسي لأي مؤسسة أن التحسين البرمجي يمكنه مضاعفة مردود العتاد — وهو ما أثبتته Decart مع الفيديو الفوري على Trainium."
      }
    ],
    content: `<div dir="rtl" class="space-y-8 text-slate-800 leading-relaxed">

  <!-- Hero Answer -->
  <div class="p-6 bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl shadow-sm">
    <h3 class="text-lg font-bold text-sky-900 mb-2">الإجابة السريعة:</h3>
    <p class="text-sm text-slate-700 leading-relaxed font-medium">
      <strong>تشتري أمازون برمجيات تحسين رقائق الذكاء الاصطناعي من شركة Decart بنحو ٧.٥ مليار دولار وفق المبلغ المُبلَّغ.</strong> وفق تقرير GeekWire (٢٣ نوفمبر ٢٠٢٦)، لم تكشف أمازون الشروط، لكن بلومبرغ أوردت المبلغ بنحو ٧.٥ مليار دولار، وأفادت Globes بأن الدفع مرتبط بأهداف أدائية على مدى خمس سنوات. تبني Decart برمجيات تستخرج أداءً أكبر من كل رقاقة — وهي بالضبط ما تحتاجه خطة أمازون لتقديم رقائق Trainium بديلاً عن Nvidia. ينضم المؤسسون الثلاثة إلى أمازون، ولا تدخل نماذج الذكاء الاصطناعي للشركة (Lucy وOasis) في الصفقة، وإتمام الشراء رهن موافقة الجهات الرقابية.
    </p>
  </div>

  <!-- CTA 1 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">أخبار البنية التحتية للذكاء الاصطناعي تؤثر في تكاليف مؤسستك واستراتيجيتها. فريق ديجي نورون المتخصص هو دليلك.</p>
    <a href="/ar/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      احصل على استشارة متخصصة
    </a>
  </div>

  <!-- Section 1 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">صفقة أمازون وDecart: ما الذي حدث بالضبط؟</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    تشتري أمازون تقنية تحسين الرقائق وفريق Decart؛ أوردت بلومبرغ المبلغ بنحو ٧.٥ مليار دولار، وأفادت Globes بأن الدفع مرتبط بأهداف أدائية على مدى خمس سنوات. وجاء إعلان الصفقة في اليوم نفسه الذي أعادت فيه مجلس إدارة Nvidia المدير التنفيذي جنسن هوانغ إلى منصبه.
  </p>
  <p>
    وفق تقرير <a href="https://www.geekwire.com/2026/amazon-is-buying-decarts-ai-chip-software-for-a-reported-7-5b-and-bringing-its-founders-aboard/" target="_blank" rel="noopener noreferrer" class="text-sky-700 underline font-semibold">GeekWire</a>، لم تكشف أمازون الشروط المالية؛ لكن بلومبرغ أوردت مبلغ ~٧.٥ مليار دولار نقلاً عن مصدر مطلع. والتوقيت دالّ: أعلنت أمازون الصفقة في اليوم نفسه الذي أعادت فيه Nvidia جنسن هوانغ إلى منصب المدير التنفيذي بعد أزمة قيادة تولى خلالها المديرة المالية كوليت كريس المنصب مؤقتاً — أي أن عملاقي الرقائق والسحابة كشفا خططهما طويلة الأمد في وقت واحد.
  </p>

  <!-- Section 2 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">ما هي Decart وما الذي تشتريه أمازون بالضبط؟</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    Decart شركة ناشئة تبني برمجيات تستخرج مخرجاً أكبر من كل رقاقة. تشتري أمازون هذه التقنية والفريق خلفها — لكن دون نماذج الذكاء الاصطناعي للشركة: Lucy التي تدوّن الفيديو الحي فوراً وOasis التي تولّد عوالم افتراضية تفاعلية ليست جزءاً من الصفقة.
  </p>
  <p>
    ينضم المؤسسون الثلاثة — المدير التنفيذي دين لايترسدورف وشقيقه أوريان لايترسدورف وموشه شاليف — إلى أمازون. وفق Globes، المؤسسون الذين يملكون نحو ٦٤٪ من Decart التزموا بالبقاء خمس سنوات وقد يحصلون مجتمعين على نحو ٤.٨ مليار دولار. وهناك لطيفة سوقية: عملت برمجيات Decart سابقاً على رقائق Nvidia وGoogle أيضاً، لكن أمازون لم تكشف إن كان هذا التوافق سيستمر. كتب بيتر دي سانتيس، نائب رئيس أمازون الأول للنماذج الأساسية والسيليكون المخصص، في إعلان الصفقة: «كل قفزة في الذكاء الاصطناعي تبدأ بالحصول على المزيد من كل رقاقة.»
  </p>

  <!-- Section 3 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">لماذا تُحسم حرب رقائق الذكاء الاصطناعي في ميدان البرمجيات؟</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    تسيطر Nvidia على معظم سوق رقائق الذكاء الاصطناعي ليس بسبب العتاد وحده بل بسبب نضج برمجياتها — وهو الخندق الذي تستهدفه أمازون مباشرة بأداة TorchNeuron الشهر الماضي والآن بصفقة Decart. فالبرمجيات المحسِّنة تعني العتاد نفسه بمخرج أكبر وتكلفة أقل.
  </p>
  <p>
    أصدرت أمازون الشهر الماضي أداة <strong>TorchNeuron</strong> التي تشغّل شيفرات الذكاء الاصطناعي الشائعة على Trainium بأدنى تعديلات. وشراء Decart هو الخطوة التالية للإستراتيجية نفسها: إزالة أكثر أجزاء الانتقال بعيداً عن Nvidia رعباً — أي الخوف من خسارة الأداء البرمجي. وتؤكد سجل الشراكة ذلك: كانت Decart من أول عملاء Trainium3، وقالت أمازون ديسمبر الماضي إن Decart شغّلت الفيديو الفوري على Trainium أسرع بأربع مرات وبنصف تكلفة GPU. وللفرق التقنية في المؤسسات الرسالة واضحة: التحسين البرمجي هو أسرع طريق لخفض تكاليف الذكاء الاصطناعي.
  </p>

  <!-- Section 4 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">الخطة الأكبر لأمازون: بيع رقائق الذكاء الاصطناعي خارج AWS</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    تصنع أمازون رقائقها المخصصة Trainium وInferentia عبر وحدة Annapurna Labs، وتحاول الآن البيع بها مباشرة إلى شركات أخرى. قال المدير التنفيذي أندي جاسي في مكالمة الأرباح الشهر الماضي: «نعتقد أننا سنمتلك عملاً تجارياً كبيراً جداً في بيع الرقائق خارجياً.»
  </p>
  <p>
    تسير الصفقة عبر <strong>Annapurna Labs</strong> التي اشترتها أمازون عام ٢٠١٥ بنحو ٣٥٠ مليون دولار مُبلَّغ؛ وصمّم مهندسوها لاحقاً Trainium وسائر رقائق أمازون المخصصة. ووفق Globes، قاد مؤسس Annapurna نافع بشارا المفاوضات لأمازون، وستُستخدم تقنية Decart لتحسين أداء Trainium وInferentia. والصورة التنافسية واضحة أيضاً: تبني Microsoft رقائق Maia لخدماتها أساساً وتمتلك Google وحدات TPU — بينما تريد أمازون أن تكون اللاعب الوحيد الذي يبيع «الرقاقة مع الكفاءة» كمنتج واحد.
  </p>

  <!-- Section 5 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">مقارنة: نشتري رقائق أكثر أم نستخرج المزيد من كل رقاقة؟</h2>
  <p>
    درس هذه الصفقة ليس لعمالقة التقنية وحدهم؛ فكل مؤسسة لديها ميزانية ذكاء اصطناعي تقف أمام خيارين:
  </p>
  <div class="overflow-x-auto my-4">
    <table class="w-full text-sm border border-slate-200 rounded-xl">
      <thead>
        <tr class="bg-slate-100 text-slate-900">
          <th class="p-3 text-right font-bold border-b border-slate-200">المعيار</th>
          <th class="p-3 text-right font-bold border-b border-slate-200">الطريق التقليدي: عتاد أكثر</th>
          <th class="p-3 text-right font-bold border-b border-slate-200">طريق أمازون-Decart: التحسين البرمجي</th>
        </tr>
      </thead>
      <tbody class="text-slate-700">
        <tr><td class="p-3 border-b border-slate-100 font-medium">التكلفة الرأسمالية</td><td class="p-3 border-b border-slate-100">شراء GPU/خوادم جديدة بمليارات الدولارات</td><td class="p-3 border-b border-slate-100">شراء تقنية محسِّنة مرة واحدة</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">سرعة النتيجة</td><td class="p-3 border-b border-slate-100">دورات توريد وتركيب طويلة</td><td class="p-3 border-b border-slate-100">أثر فوري على الأعباء الحالية</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">العائد لكل دولار</td><td class="p-3 border-b border-slate-100">نمو خطي مع عدد الرقائق</td><td class="p-3 border-b border-slate-100">مضاعف: حتى ٤ أضعاف السرعة بنصف التكلفة في حالة Decart</td></tr>
        <tr><td class="p-3 border-b border-slate-100 font-medium">التبعية</td><td class="p-3 border-b border-slate-100">ارتباط عميق بالمورّد</td><td class="p-3 border-b border-slate-100">ارتباط أقل بخيارات أكثر</td></tr>
        <tr><td class="p-3 font-medium">المخاطر</td><td class="p-3">طاقة خاملة في فترات الانخفاض</td><td class="p-3">تتطلب فريقاً متمرساً في التحسين</td></tr>
      </tbody>
    </table>
  </div>

  <!-- CTA 2 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">لاختيار المعمارية الأمثل وخفض تكاليف الذكاء الاصطناعي في مؤسستك، تواصل مع فريق استشارات ديجي نورون.</p>
    <a href="/ar/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      احصل على استشارة متخصصة
    </a>
  </div>

  <!-- Section 6 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">٥ أخطاء شائعة عند قراءة خبر شراء Decart</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    لا ينبغي قراءة هذا الخبر كعنوان استحواذ عادي؛ فالتفاصيل مهمة. تعرّف على الأخطاء الخمسة الشائعة ليبقى تحليلك المؤسسي دقيقاً: افتراض أن المبلغ مؤكد، تجاهل الموافقة الرقابية، الظن بأن النماذج جاءت مع الصفقة، توقع أثر فوري، وإغفال الدرس الأساسي.
  </p>
  <ul class="list-disc pr-6 space-y-2 text-slate-700">
    <li><strong>افتراض أن المبلغ مؤكد:</strong> أمازون لم تعلن المبلغ؛ مبلغ ٧.٥ مليار دولار هو تقرير بلومبرغ، وتقول Globes إن الدفع مرتبط بأهداف أدائية خمسية — فقد يختلف الرقم النهائي.</li>
    <li><strong>تجاهل الموافقة الرقابية:</strong> الصفقة رهن موافقة الجهات الرقابية؛ لا شيء نهائي حتى ذلك الحين.</li>
    <li><strong>الظن بأن النماذج دخلت في الصفقة:</strong> Lucy وOasis ليسا جزءاً من الشراء، وأمازون لم تقل ماذا سيحدث للعملاء الحاليين مثل eBay.</li>
    <li><strong>توقع أثر فوري:</strong> دمج التقنية والفرق يستغرق وقتاً؛ الأثر السوقي الحقيقي سيظهر لاحقاً.</li>
    <li><strong>إغفال الدرس الأساسي:</strong> لمؤسستك أيضاً العائد لكل وحدة عتاد أهم من حجم العتاد — خذ التحسين البرمجي على محمل الجد.</li>
  </ul>

  <!-- Voice Search -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">إجابات عن أسئلة البحث الصوتي</h2>
  <div class="space-y-4 text-slate-700">
    <p><strong>كم دفعت أمازون لشراء Decart؟</strong><br>لم تكشف أمازون الشروط؛ أوردت بلومبرغ نحو ٧.٥ مليار دولار، وأفادت Globes بأن الدفع مرتبط بأهداف أدائية على مدى خمس سنوات.</p>
    <p><strong>ما هي Decart؟</strong><br>شركة ناشئة تبني برمجيات تحسين الرقائق — تستخرج مخرجاً أكبر من كل رقاقة. نماذجها مثل Lucy وOasis ليست جزءاً من الصفقة، وينضم مؤسسوها إلى أمازون.</p>
    <p><strong>لماذا اشترت أمازون Decart؟</strong><br>للتنافس مع Nvidia: تخطط أمازون لبيع رقائق Trainium لشركات أخرى، والبرمجيات المحسِّنة هي أقوى ميزة بيع لديها.</p>
    <p><strong>هل يعمل برنامج Decart على رقائق Nvidia؟</strong><br>سبق أن عمل عليها، لكن أمازون لم تكشف إن كان هذا التوافق سيستمر بعد الصفقة.</p>
  </div>

  <!-- Section 7 -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">درس الصفقة للمؤسسات: العائد لكل مورد أهم من حجم المورد</h2>
  <p class="font-semibold text-slate-900 bg-slate-100 p-4 rounded-xl border-r-4 border-sky-600">
    حين تدفع أكبر شركة سحابة في العالم ٧.٥ مليار دولار فقط «للحصول على المزيد من رقائقها الحالية»، تكون الرسالة واضحة لكل مدير: العائد لكل مورد حوسبة أهم من حجم ذلك المورد. وعلى مستوى المؤسسة، يعني ذلك تحسين العمليات قبل شراء عتاد وأدوات أكثر.
  </p>
  <p>
    قال دين لايترسدورف، المدير التنفيذي لـ Decart، في إعلان الصفقة: «من اليوم الأول، كانت مهمتنا إعادة رسم حدود ما يستطيع الذكاء الاصطناعي فعله وجعله أكثر كفاءة بشكل كبير. الانضمام إلى أمازون يمنح فريقنا النطاق والعملاء والبنية التحتية لمتابعة هذه المهمة أسرع مما كنا نستطيع بمفردنا.» في ديجي نورون نطبق المنطق نفسه في مشاريع <a href="/ar/services/enterprise-ai" class="text-sky-700 underline font-semibold">التحول المؤسسي بالذكاء الاصطناعي</a>: العائد أولاً ثم الحجم. ولمزيد من السياق حول البنية التحتية للجيل القادم، اقرأوا تغطيتنا لـ <a href="/ar/blog/google-project-suncatcher-ai-in-space" class="text-sky-700 underline font-semibold">مشروع Suncatcher من Google لوضع مراكز البيانات في الفضاء</a>.
  </p>

  <!-- CTA 3 -->
  <div style="text-align: center; margin: 2.5rem 0; padding: 1.8rem; background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%); border-radius: 12px; border: 1px solid #d0e3f7;">
    <p style="font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem; color: #1a365d;">تريد تحسين معمارية الذكاء الاصطناعي وتكاليفه في مؤسستك؟ احصل على استشارة متخصصة اليوم.</p>
    <a href="/ar/contact" style="padding: 0.9rem 2.5rem; font-size: 1.15rem; display: inline-block; text-decoration: none; background-color: #0066cc; color: #ffffff; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 12px rgba(0,102,204,0.25);">
      احصل على استشارة متخصصة
    </a>
  </div>

  <!-- FAQ -->
  <h2 class="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4">الأسئلة الشائعة</h2>
  <div class="space-y-4 text-slate-700">
    <p><strong>كم تدفع أمازون لشراء Decart؟</strong><br>لم تكشف أمازون الشروط رسمياً؛ لكن بلومبرغ أوردت المبلغ بنحو ٧.٥ مليار دولار نقلاً عن مصدر مطلع على الأمر، وأفادت Globes بأن الدفع مرتبط بأهداف أدائية على مدى خمس سنوات. وإتمام الصفقة رهن موافقة الجهات الرقابية.</p>
    <p><strong>ما هي شركة Decart؟</strong><br>Decart شركة ناشئة تبني برمجيات لتحسين أداء الرقائق؛ أي برمجيات تستخرج مخرجاً أكبر من كل رقاقة. نماذجها من الذكاء الاصطناعي مثل Lucy (تدوين الفيديو الحي) وOasis (العوالم الافتراضية التفاعلية) ليست جزءاً من الصفقة، وينضم مؤسسوها الثلاثة إلى أمازون.</p>
    <p><strong>لماذا اشترت أمازون Decart؟</strong><br>لأن أمازون تخطط لبيع رقائق Trainium وInferentia مباشرة إلى شركات أخرى والتنافس مع Nvidia؛ فالبرمجيات التي ترفع مردود كل رقاقة هي أقوى ورقة لدى أمازون لجذب العملاء الخارجيين. سبق أن شغّلت Decart الفيديو الفوري أسرع بأربع مرات على Trainium بنصف تكلفة GPU.</p>
    <p><strong>هل يعمل برنامج Decart على رقائق أخرى؟</strong><br>سبق أن عمل على رقائق Nvidia وGoogle أيضاً، لكن أمازون لم تكشف إن كان هذا التوافق سيستمر بعد الاستحواذ. تسير الصفقة عبر وحدة الرقائق في أمازون (Annapurna Labs)، وستُستخدم تقنية Decart لتحسين Trainium وInferentia.</p>
    <p><strong>ماذا تعني الصفقة لتكاليف الذكاء الاصطناعي في المؤسسات؟</strong><br>المزيد من المنافسة بين Nvidia وأمازون يعني عادةً خيارات أكثر وأسعاراً أكثر تنافسية لتدريب النماذج وتشغيلها. والدرس الأساسي لأي مؤسسة أن التحسين البرمجي يمكنه مضاعفة مردود العتاد — وهو ما أثبتته Decart مع الفيديو الفوري على Trainium.</p>
  </div>

  <!-- Author Box -->
  <div class="p-6 bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-2xl shadow-sm mt-8">
    <div class="flex items-center gap-4">
      <img src="/images/instructors/karimi.jpg" alt="فريق ديجي نورون المتخصص" class="w-14 h-14 rounded-full object-cover" />
      <div>
        <h3 class="text-base font-bold text-slate-900">فريق ديجي نورون المتخصص</h3>
        <p class="text-sm text-slate-600">أكثر من ٥ سنوات خبرة في مشاريع الذكاء الاصطناعي</p>
      </div>
    </div>
    <p class="text-sm text-slate-700 leading-relaxed mt-4">
      يقدم فريق ديجي نورون المتخصص، بخبرة تتجاوز ٥ سنوات في مشاريع الذكاء الاصطناعي المؤسسي، مقالات ودورات تنمّي المهارات الرقمية للمديرين والفرق والمهتمين.
    </p>
    <div class="mt-5 p-4 bg-white/70 border border-sky-200 rounded-xl">
      <img src="/images/blog/diginoron-logo.png" alt="شعار فريق ديجي نورون المتخصص" class="w-full max-w-md mx-auto rounded-lg" />
    </div>
  </div>

</div>`,
  },
};
