const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'northline');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Fintech Platform Modernization Architecture Diagram (800 x 500)
const fintechArchSvg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d"/>
      <stop offset="50%" stop-color="#050811"/>
      <stop offset="100%" stop-color="#020409"/>
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="12" fill="url(#bg)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Background blueprint grid -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.3" stroke-dasharray="4 4">
    <line x1="0" y1="125" x2="800" y2="125"/>
    <line x1="0" y1="250" x2="800" y2="250"/>
    <line x1="0" y1="375" x2="800" y2="375"/>
    <line x1="200" y1="0" x2="200" y2="500"/>
    <line x1="400" y1="0" x2="400" y2="500"/>
    <line x1="600" y1="0" x2="600" y2="500"/>
  </g>

  <!-- Title bar -->
  <rect x="0" y="0" width="800" height="40" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="25" cy="20" r="5" fill="#ef4444"/>
  <circle cx="42" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="59" cy="20" r="5" fill="#10b981"/>
  <text x="400" y="25" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">architecture.k8s.fintech-cluster.internal</text>

  <!-- Architecture Nodes & Connecting Paths -->
  <!-- Connecting lines -->
  <g stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.7">
    <!-- API Gateway to Microservices -->
    <path d="M 230 250 L 370 170"/>
    <path d="M 230 250 L 370 330"/>
    <!-- Microservices to Event Bus & DB -->
    <path d="M 490 170 L 610 170"/>
    <path d="M 490 330 L 610 330"/>
    <path d="M 430 220 L 430 280" stroke-dasharray="4 4"/>
  </g>

  <!-- Node 1: API Gateway (Left) -->
  <g transform="translate(100, 200)" filter="url(#shadow)">
    <rect width="130" height="100" rx="10" fill="#0f172a" stroke="#3b82f6" stroke-width="2"/>
    <rect x="15" y="15" width="36" height="36" rx="8" fill="#1e3a8a"/>
    <!-- Cloud Gateway Icon -->
    <path d="M 24 35 C 22 35 20 33 20 30 C 20 28 22 26 25 26 C 26 23 29 21 33 21 C 37 21 40 24 40 27 C 43 27 45 29 45 32 C 45 35 43 35 41 35 Z" fill="#60a5fa"/>
    <text x="15" y="70" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff">AWS ALB</text>
    <text x="15" y="86" font-family="monospace" font-size="9" fill="#94a3b8">Gateway / WAF</text>
  </g>

  <!-- Node 2: Auth & Transaction Microservice (Top Center) -->
  <g transform="translate(370, 120)" filter="url(#shadow)">
    <rect width="130" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="15" width="36" height="36" rx="8" fill="#0369a1"/>
    <!-- K8s Wheel Icon -->
    <circle cx="33" cy="33" r="10" fill="none" stroke="#7dd3fc" stroke-width="2"/>
    <circle cx="33" cy="33" r="4" fill="#ffffff"/>
    <text x="15" y="70" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff">Tx Service</text>
    <text x="15" y="86" font-family="monospace" font-size="9" fill="#38bdf8">K8s Pods (x12)</text>
  </g>

  <!-- Node 3: Settlement Microservice (Bottom Center) -->
  <g transform="translate(370, 280)" filter="url(#shadow)">
    <rect width="130" height="100" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="15" y="15" width="36" height="36" rx="8" fill="#0369a1"/>
    <!-- Ledger Icon -->
    <rect x="25" y="24" width="16" height="18" rx="2" fill="none" stroke="#7dd3fc" stroke-width="2"/>
    <line x1="28" y1="29" x2="37" y2="29" stroke="#7dd3fc" stroke-width="1.5"/>
    <line x1="28" y1="34" x2="35" y2="34" stroke="#7dd3fc" stroke-width="1.5"/>
    <text x="15" y="70" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff">Settlement</text>
    <text x="15" y="86" font-family="monospace" font-size="9" fill="#38bdf8">Idempotent Bus</text>
  </g>

  <!-- Node 4: Event Broker (Top Right) -->
  <g transform="translate(610, 120)" filter="url(#shadow)">
    <rect width="130" height="100" rx="10" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>
    <rect x="15" y="15" width="36" height="36" rx="8" fill="#78350f"/>
    <!-- Kafka Network Nodes -->
    <circle cx="28" cy="27" r="4" fill="#fbbf24"/>
    <circle cx="38" cy="38" r="4" fill="#fbbf24"/>
    <circle cx="28" cy="38" r="3" fill="#fbbf24"/>
    <line x1="28" y1="27" x2="38" y2="38" stroke="#fef3c7" stroke-width="1.5"/>
    <text x="15" y="70" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff">Kafka Bus</text>
    <text x="15" y="86" font-family="monospace" font-size="9" fill="#fbbf24">3-Node Cluster</text>
  </g>

  <!-- Node 5: Aurora PostgreSQL DB (Bottom Right) -->
  <g transform="translate(610, 280)" filter="url(#shadow)">
    <rect width="130" height="100" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
    <rect x="15" y="15" width="36" height="36" rx="8" fill="#064e3b"/>
    <!-- Database Cylinder -->
    <ellipse cx="33" cy="27" rx="9" ry="3" fill="#34d399"/>
    <path d="M 24 27 L 24 37 C 24 39 28 41 33 41 C 38 41 42 39 42 37 L 42 27" fill="none" stroke="#34d399" stroke-width="1.5"/>
    <text x="15" y="70" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff">Aurora DB</text>
    <text x="15" y="86" font-family="monospace" font-size="9" fill="#34d399">Multi-AZ Sharded</text>
  </g>

  <!-- Bottom Metric Bar -->
  <g transform="translate(100, 420)">
    <rect width="640" height="45" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="27" font-family="monospace" font-size="11" fill="#3b82f6" font-weight="700">99.999% SLA</text>
    <text x="175" y="27" font-family="monospace" font-size="11" fill="#94a3b8">LATENCY: &lt; 8ms</text>
    <text x="350" y="27" font-family="monospace" font-size="11" fill="#94a3b8">PEAK: 45K TPS</text>
    <text x="520" y="27" font-family="monospace" font-size="11" fill="#10b981">ZERO DOWNTIME</text>
  </g>
</svg>
`;

// 2. Real-Time Analytics Engine Dashboard (800 x 500)
const analyticsEngineSvg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="an-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090e1a"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
    <linearGradient id="spark" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#60a5fa"/>
      <stop offset="100%" stop-color="#93c5fd"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" rx="12" fill="url(#an-bg)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="40" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="25" cy="20" r="5" fill="#ef4444"/>
  <circle cx="42" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="59" cy="20" r="5" fill="#10b981"/>
  <text x="400" y="25" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">telemetry.stream.engine.v2.internal</text>

  <!-- Left Sidebar Nav -->
  <g transform="translate(15, 55)">
    <rect width="50" height="430" rx="8" fill="#091122" stroke="#1e293b" stroke-width="1"/>
    <!-- Nav Icons -->
    <rect x="15" y="20" width="20" height="20" rx="4" fill="#3b82f6"/>
    <rect x="15" y="60" width="20" height="20" rx="4" fill="#1e293b"/>
    <rect x="15" y="100" width="20" height="20" rx="4" fill="#1e293b"/>
    <rect x="15" y="140" width="20" height="20" rx="4" fill="#1e293b"/>
  </g>

  <!-- Top Metric Cards Row -->
  <g transform="translate(80, 55)">
    <!-- Card 1: Live Ingestion -->
    <g transform="translate(0, 0)">
      <rect width="215" height="90" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
      <text x="15" y="25" font-family="monospace" font-size="10" fill="#94a3b8">INGESTION RATE</text>
      <text x="15" y="58" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" fill="#ffffff">1.42 GB/s</text>
      <text x="15" y="78" font-family="monospace" font-size="10" fill="#10b981">▲ 14.8% vs last hr</text>
    </g>

    <!-- Card 2: Mean Pipeline Latency -->
    <g transform="translate(235, 0)">
      <rect width="215" height="90" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
      <text x="15" y="25" font-family="monospace" font-size="10" fill="#94a3b8">END-TO-END LATENCY</text>
      <text x="15" y="58" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="700" fill="#60a5fa">4.2 ms</text>
      <text x="15" y="78" font-family="monospace" font-size="10" fill="#10b981">● Normal Threshold</text>
    </g>

    <!-- Card 3: Donut Cluster Health -->
    <g transform="translate(470, 0)">
      <rect width="235" height="90" rx="8" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
      <text x="15" y="25" font-family="monospace" font-size="10" fill="#94a3b8">CLUSTER HEALTH</text>
      
      <!-- Mini Donut chart -->
      <g transform="translate(180, 45)">
        <circle cx="0" cy="0" r="24" fill="none" stroke="#1e293b" stroke-width="6"/>
        <circle cx="0" cy="0" r="24" fill="none" stroke="#3b82f6" stroke-width="6" stroke-dasharray="120 40"/>
        <text x="0" y="4" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="middle">98%</text>
      </g>
      <text x="15" y="55" font-family="'Space Grotesk', sans-serif" font-size="16" font-weight="700" fill="#ffffff">32 Nodes</text>
      <text x="15" y="75" font-family="monospace" font-size="10" fill="#38bdf8">Kafka + ClickHouse</text>
    </g>
  </g>

  <!-- Main Chart: Live Bar Histogram (Bottom Left) -->
  <g transform="translate(80, 165)">
    <rect width="450" height="315" rx="10" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
    <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#ffffff">Throughput Volume Histogram</text>
    <text x="20" y="48" font-family="monospace" font-size="10" fill="#64748b">Aggregated per 5-second epoch</text>

    <!-- Histogram Bars -->
    <g transform="translate(25, 260)">
      <!-- Axis line -->
      <line x1="0" y1="0" x2="400" y2="0" stroke="#1e293b" stroke-width="1"/>
      
      <!-- Bars -->
      <rect x="10" y="-80" width="16" height="80" rx="3" fill="#1e3a8a"/>
      <rect x="35" y="-120" width="16" height="120" rx="3" fill="#1e40af"/>
      <rect x="60" y="-100" width="16" height="100" rx="3" fill="#1d4ed8"/>
      <rect x="85" y="-160" width="16" height="160" rx="3" fill="#2563eb"/>
      <rect x="110" y="-140" width="16" height="140" rx="3" fill="#3b82f6"/>
      <rect x="135" y="-190" width="16" height="190" rx="3" fill="#60a5fa"/>
      <rect x="160" y="-170" width="16" height="170" rx="3" fill="#3b82f6"/>
      <rect x="185" y="-130" width="16" height="130" rx="3" fill="#2563eb"/>
      <rect x="210" y="-150" width="16" height="150" rx="3" fill="#3b82f6"/>
      <rect x="235" y="-210" width="16" height="210" rx="3" fill="#60a5fa"/>
      <rect x="260" y="-180" width="16" height="180" rx="3" fill="#3b82f6"/>
      <rect x="285" y="-140" width="16" height="140" rx="3" fill="#2563eb"/>
      <rect x="310" y="-170" width="16" height="170" rx="3" fill="#3b82f6"/>
      <rect x="335" y="-190" width="16" height="190" rx="3" fill="#60a5fa"/>
      <rect x="360" y="-160" width="16" height="160" rx="3" fill="#3b82f6"/>
    </g>
  </g>

  <!-- Line Chart: P99 Latency Curve (Bottom Right) -->
  <g transform="translate(545, 165)">
    <rect width="240" height="315" rx="10" fill="#0b1324" stroke="#1e293b" stroke-width="1"/>
    <text x="18" y="30" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#ffffff">P99 Stream Jitter</text>
    <text x="18" y="48" font-family="monospace" font-size="10" fill="#64748b">Sub-millisecond variation</text>

    <!-- Sparkline -->
    <g transform="translate(18, 160)">
      <path d="M 0 60 Q 25 10, 50 40 T 100 20 T 150 50 T 200 15" fill="none" stroke="url(#spark)" stroke-width="2.5"/>
      <circle cx="200" cy="15" r="4" fill="#60a5fa"/>
    </g>

    <!-- Stat table -->
    <g transform="translate(18, 210)">
      <rect width="204" height="85" rx="6" fill="#080f1e" stroke="#1e293b" stroke-width="1"/>
      <text x="12" y="24" font-family="monospace" font-size="9" fill="#94a3b8">CONSUMER LAG</text>
      <text x="190" y="24" font-family="monospace" font-size="9" fill="#10b981" text-anchor="end">0 msgs</text>

      <text x="12" y="48" font-family="monospace" font-size="9" fill="#94a3b8">ACTIVE STREAMS</text>
      <text x="190" y="48" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="end">1,024</text>

      <text x="12" y="72" font-family="monospace" font-size="9" fill="#94a3b8">ERROR RATE</text>
      <text x="190" y="72" font-family="monospace" font-size="9" fill="#10b981" text-anchor="end">0.0001%</text>
    </g>
  </g>
</svg>
`;

// 3. E-Commerce API Code Editor Mockup (800 x 500)
const ecommerceApiSvg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="code-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1120"/>
      <stop offset="100%" stop-color="#030712"/>
    </linearGradient>
  </defs>

  <rect width="800" height="500" rx="12" fill="url(#code-bg)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Top bar -->
  <rect x="0" y="0" width="800" height="40" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="25" cy="20" r="5" fill="#ef4444"/>
  <circle cx="42" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="59" cy="20" r="5" fill="#10b981"/>
  
  <!-- Active Tab -->
  <rect x="85" y="8" width="190" height="32" rx="6" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  <text x="100" y="28" font-family="monospace" font-size="11" fill="#38bdf8">TS checkout.resolver.ts</text>
  <text x="290" y="28" font-family="monospace" font-size="11" fill="#64748b">schema.graphql</text>

  <!-- Line Numbers & Code Content -->
  <g transform="translate(30, 65)" font-family="monospace" font-size="12">
    <!-- Line numbers -->
    <g fill="#475569" text-anchor="end">
      <text x="25" y="20">1</text>
      <text x="25" y="42">2</text>
      <text x="25" y="64">3</text>
      <text x="25" y="86">4</text>
      <text x="25" y="108">5</text>
      <text x="25" y="130">6</text>
      <text x="25" y="152">7</text>
      <text x="25" y="174">8</text>
      <text x="25" y="196">9</text>
      <text x="25" y="218">10</text>
      <text x="25" y="240">11</text>
      <text x="25" y="262">12</text>
      <text x="25" y="284">13</text>
      <text x="25" y="306">14</text>
      <text x="25" y="328">15</text>
      <text x="25" y="350">16</text>
      <text x="25" y="372">17</text>
    </g>

    <!-- Code lines with syntax highlighting -->
    <g transform="translate(45, 0)">
      <!-- Line 1 -->
      <text x="0" y="20">
        <tspan fill="#c084fc">import</tspan>
        <tspan fill="#f8fafc"> { Resolver, Mutation, Arg, Ctx } </tspan>
        <tspan fill="#c084fc">from</tspan>
        <tspan fill="#34d399"> "type-graphql"</tspan>
        <tspan fill="#94a3b8">;</tspan>
      </text>

      <!-- Line 2 -->
      <text x="0" y="42">
        <tspan fill="#c084fc">import</tspan>
        <tspan fill="#f8fafc"> { PaymentService, CartSession } </tspan>
        <tspan fill="#c084fc">from</tspan>
        <tspan fill="#34d399"> "../services"</tspan>
        <tspan fill="#94a3b8">;</tspan>
      </text>

      <!-- Line 3 -->
      <text x="0" y="64">
        <tspan fill="#64748b">// High-throughput idempotent checkout handler</tspan>
      </text>

      <!-- Line 4 -->
      <text x="0" y="86">
        <tspan fill="#38bdf8">@Resolver</tspan>
        <tspan fill="#f8fafc">()</tspan>
      </text>

      <!-- Line 5 -->
      <text x="0" y="108">
        <tspan fill="#c084fc">export class</tspan>
        <tspan fill="#f59e0b"> CheckoutResolver </tspan>
        <tspan fill="#f8fafc">{</tspan>
      </text>

      <!-- Line 6 -->
      <text x="20" y="130">
        <tspan fill="#38bdf8">@Mutation</tspan>
        <tspan fill="#f8fafc">(() =&gt; </tspan>
        <tspan fill="#f59e0b">OrderConfirmation</tspan>
        <tspan fill="#f8fafc">)</tspan>
      </text>

      <!-- Line 7 -->
      <text x="20" y="152">
        <tspan fill="#c084fc">async</tspan>
        <tspan fill="#60a5fa"> executeOrder</tspan>
        <tspan fill="#f8fafc">(</tspan>
      </text>

      <!-- Line 8 -->
      <text x="40" y="174">
        <tspan fill="#38bdf8">@Arg</tspan>
        <tspan fill="#f8fafc">(</tspan>
        <tspan fill="#34d399">"input"</tspan>
        <tspan fill="#f8fafc">) input: </tspan>
        <tspan fill="#f59e0b">CheckoutPayloadInput</tspan>
        <tspan fill="#94a3b8">,</tspan>
      </text>

      <!-- Line 9 -->
      <text x="40" y="196">
        <tspan fill="#38bdf8">@Ctx</tspan>
        <tspan fill="#f8fafc">() ctx: </tspan>
        <tspan fill="#f59e0b">RequestContext</tspan>
      </text>

      <!-- Line 10 -->
      <text x="20" y="218">
        <tspan fill="#f8fafc">): </tspan>
        <tspan fill="#f59e0b">Promise</tspan>
        <tspan fill="#f8fafc">&lt;</tspan>
        <tspan fill="#f59e0b">OrderConfirmation</tspan>
        <tspan fill="#f8fafc">&gt; {</tspan>
      </text>

      <!-- Line 11 -->
      <text x="40" y="240">
        <tspan fill="#c084fc">const</tspan>
        <tspan fill="#f8fafc"> order = </tspan>
        <tspan fill="#c084fc">await</tspan>
        <tspan fill="#f8fafc"> ctx.db.</tspan>
        <tspan fill="#60a5fa">transaction</tspan>
        <tspan fill="#f8fafc">(</tspan>
        <tspan fill="#c084fc">async</tspan>
        <tspan fill="#f8fafc"> (tx) =&gt; {</tspan>
      </text>

      <!-- Line 12 -->
      <text x="60" y="262">
        <tspan fill="#c084fc">await</tspan>
        <tspan fill="#f8fafc"> tx.inventory.</tspan>
        <tspan fill="#60a5fa">decrementAtomic</tspan>
        <tspan fill="#f8fafc">(input.items);</tspan>
      </text>

      <!-- Line 13 -->
      <text x="60" y="284">
        <tspan fill="#c084fc">return</tspan>
        <tspan fill="#f8fafc"> tx.orders.</tspan>
        <tspan fill="#60a5fa">createWithReceipt</tspan>
        <tspan fill="#f8fafc">(input);</tspan>
      </text>

      <!-- Line 14 -->
      <text x="40" y="306">
        <tspan fill="#f8fafc">});</tspan>
      </text>

      <!-- Line 15 -->
      <text x="40" y="328">
        <tspan fill="#c084fc">await</tspan>
        <tspan fill="#f8fafc"> ctx.kafka.</tspan>
        <tspan fill="#60a5fa">publish</tspan>
        <tspan fill="#f8fafc">(</tspan>
        <tspan fill="#34d399">"orders.created"</tspan>
        <tspan fill="#f8fafc">, order);</tspan>
      </text>

      <!-- Line 16 -->
      <text x="40" y="350">
        <tspan fill="#c084fc">return</tspan>
        <tspan fill="#f8fafc"> order;</tspan>
      </text>

      <!-- Line 17 -->
      <text x="20" y="372">
        <tspan fill="#f8fafc">}</tspan>
      </text>
    </g>
  </g>
</svg>
`;

async function generateAll() {
  console.log('Generating Northline assets...');

  await sharp(Buffer.from(fintechArchSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'fintech-architecture.webp'));
  console.log('✔ fintech-architecture.webp generated');

  await sharp(Buffer.from(analyticsEngineSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'analytics-engine.webp'));
  console.log('✔ analytics-engine.webp generated');

  await sharp(Buffer.from(ecommerceApiSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'ecommerce-api.webp'));
  console.log('✔ ecommerce-api.webp generated');

  console.log('All Northline Developer assets generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
