const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'northline');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. AI Inference Gateway & Vector Pipeline (800 x 500)
const aiGatewaySvg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090e1a"/>
      <stop offset="60%" stop-color="#030712"/>
      <stop offset="100%" stop-color="#020409"/>
    </linearGradient>
    <linearGradient id="ai-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <filter id="ai-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.7"/>
    </filter>
  </defs>

  <rect width="800" height="500" rx="12" fill="url(#ai-bg)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Top Window Bar -->
  <rect width="800" height="40" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="25" cy="20" r="5" fill="#ef4444"/>
  <circle cx="42" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="59" cy="20" r="5" fill="#10b981"/>
  <text x="400" y="25" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">ai-inference.cluster.northline.cloud</text>

  <!-- Left: Model Routing Matrix & Token Streamer -->
  <g transform="translate(30, 60)" filter="url(#ai-shadow)">
    <rect width="360" height="400" rx="10" fill="#0b1326" stroke="#1e293b" stroke-width="1.5"/>
    <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#ffffff">Adaptive Semantic Router</text>
    <text x="20" y="48" font-family="monospace" font-size="10" fill="#38bdf8">Embedding similarity + speculative decoding</text>

    <!-- Visual Router Flow -->
    <g transform="translate(20, 70)">
      <!-- Client Prompt Request -->
      <rect width="320" height="60" rx="8" fill="#080f1e" stroke="#3b82f6" stroke-width="1"/>
      <text x="15" y="24" font-family="monospace" font-size="10" fill="#94a3b8">INCOMING PROMPT PAYLOAD</text>
      <text x="15" y="44" font-family="'Space Grotesk', sans-serif" font-size="13" font-weight="600" fill="#ffffff">Semantic Cache Check (P99: 0.8ms)</text>
      <circle cx="295" cy="30" r="6" fill="#10b981"/>

      <!-- Downward arrow -->
      <path d="M 160 70 L 160 95" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3 3"/>

      <!-- LLM Tier Selection -->
      <g transform="translate(0, 105)">
        <rect width="320" height="135" rx="8" fill="#080f1e" stroke="#1e293b" stroke-width="1"/>
        <text x="15" y="22" font-family="monospace" font-size="9" fill="#94a3b8">DYNAMIC MODEL SELECTION</text>

        <!-- Model 1: Fast Speculative -->
        <rect x="15" y="32" width="290" height="28" rx="4" fill="#0f1f3d" stroke="#3b82f6" stroke-width="1"/>
        <text x="25" y="50" font-family="monospace" font-size="10" fill="#38bdf8">Tier 1: Mistral-Small (Draft)</text>
        <text x="290" y="50" font-family="monospace" font-size="9" fill="#10b981" text-anchor="end">120 tps</text>

        <!-- Model 2: Reasoning Core -->
        <rect x="15" y="65" width="290" height="28" rx="4" fill="#18132e" stroke="#8b5cf6" stroke-width="1"/>
        <text x="25" y="83" font-family="monospace" font-size="10" fill="#c084fc">Tier 2: DeepSeek-R1 (Verifier)</text>
        <text x="290" y="83" font-family="monospace" font-size="9" fill="#c084fc" text-anchor="end">48 tps</text>

        <!-- Model 3: Complex Fallback -->
        <rect x="15" y="98" width="290" height="28" rx="4" fill="#0d1b2a" stroke="#1e293b" stroke-width="1"/>
        <text x="25" y="116" font-family="monospace" font-size="10" fill="#94a3b8">Tier 3: Claude 3.5 Sonnet</text>
        <text x="290" y="116" font-family="monospace" font-size="9" fill="#64748b" text-anchor="end">Standby</text>
      </g>
    </g>

    <!-- Bottom summary -->
    <text x="20" y="380" font-family="monospace" font-size="11" fill="#10b981">● 64.2% Cache Hit Ratio (4x Cost Savings)</text>
  </g>

  <!-- Right: GPU Telemetry & VRAM Memory Allocation -->
  <g transform="translate(410, 60)" filter="url(#ai-shadow)">
    <rect width="360" height="400" rx="10" fill="#0b1326" stroke="#1e293b" stroke-width="1.5"/>
    <text x="20" y="30" font-family="'Space Grotesk', sans-serif" font-size="14" font-weight="700" fill="#ffffff">vLLM Cluster Telemetry</text>
    <text x="20" y="48" font-family="monospace" font-size="10" fill="#94a3b8">8x NVIDIA H100 SXM5 / NVLink 900 GB/s</text>

    <!-- GPU Utilization bars -->
    <g transform="translate(20, 75)">
      <!-- GPU 0-3 -->
      <text x="0" y="15" font-family="monospace" font-size="10" fill="#94a3b8">GPU CLUSTER LOAD (KV-CACHE)</text>
      
      <rect x="0" y="25" width="320" height="14" rx="3" fill="#1e293b"/>
      <rect x="0" y="25" width="280" height="14" rx="3" fill="#3b82f6"/>
      <text x="315" y="36" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="end">88%</text>

      <rect x="0" y="50" width="320" height="14" rx="3" fill="#1e293b"/>
      <rect x="0" y="50" width="295" height="14" rx="3" fill="#60a5fa"/>
      <text x="315" y="61" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="end">92%</text>

      <rect x="0" y="75" width="320" height="14" rx="3" fill="#1e293b"/>
      <rect x="0" y="75" width="260" height="14" rx="3" fill="#3b82f6"/>
      <text x="315" y="86" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="end">81%</text>

      <rect x="0" y="100" width="320" height="14" rx="3" fill="#1e293b"/>
      <rect x="0" y="100" width="270" height="14" rx="3" fill="#60a5fa"/>
      <text x="315" y="111" font-family="monospace" font-size="9" fill="#ffffff" text-anchor="end">84%</text>
    </g>

    <!-- Vector DB Connectivity -->
    <g transform="translate(20, 230)">
      <rect width="320" height="140" rx="8" fill="#080f1e" stroke="#1e293b" stroke-width="1"/>
      <text x="15" y="24" font-family="monospace" font-size="10" fill="#38bdf8">PINECONE / QDRANT VECTOR MESH</text>
      
      <text x="15" y="52" font-family="'Space Grotesk', sans-serif" font-size="18" font-weight="700" fill="#ffffff">12.4M Vectors</text>
      <text x="15" y="72" font-family="monospace" font-size="9" fill="#94a3b8">HNSW INDEX / COSINE SIMILARITY</text>

      <line x1="15" y1="88" x2="305" y2="88" stroke="#1e293b" stroke-width="1"/>

      <text x="15" y="112" font-family="monospace" font-size="10" fill="#10b981">Query Latency: 2.1ms (P95)</text>
      <text x="15" y="128" font-family="monospace" font-size="9" fill="#64748b">AUTO-PARTITIONED ACROSS 16 REPLICAS</text>
    </g>
  </g>
</svg>
`;

// 2. Global Cloud Infrastructure Topology Map (800 x 500)
const cloudMapSvg = `
<svg width="800" height="500" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050811"/>
      <stop offset="100%" stop-color="#0b1120"/>
    </linearGradient>
    <filter id="mp-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="800" height="500" rx="12" fill="url(#mp-bg)" stroke="#1e293b" stroke-width="1.5"/>

  <!-- Top bar -->
  <rect width="800" height="40" rx="12" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
  <circle cx="25" cy="20" r="5" fill="#ef4444"/>
  <circle cx="42" cy="20" r="5" fill="#f59e0b"/>
  <circle cx="59" cy="20" r="5" fill="#10b981"/>
  <text x="400" y="25" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">global-mesh.anycast.northline.network</text>

  <!-- World Grid Outline Lines -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.3">
    <ellipse cx="400" cy="260" rx="340" ry="160" fill="none"/>
    <ellipse cx="400" cy="260" rx="260" ry="120" fill="none"/>
    <line x1="60" y1="260" x2="740" y2="260"/>
    <line x1="400" y1="100" x2="400" y2="420"/>
    <line x1="200" y1="130" x2="200" y2="390"/>
    <line x1="600" y1="130" x2="600" y2="390"/>
  </g>

  <!-- Inter-Region Mesh Links -->
  <g stroke="#3b82f6" stroke-width="2" fill="none" opacity="0.6" filter="url(#mp-glow)">
    <!-- US West to US East -->
    <path d="M 180 230 Q 230 190, 290 220" stroke-dasharray="4 4"/>
    <!-- US East to EU Central -->
    <path d="M 290 220 Q 370 170, 450 210" stroke-dasharray="4 4"/>
    <!-- EU Central to AP South -->
    <path d="M 450 210 Q 530 230, 600 270" stroke-dasharray="4 4"/>
    <!-- AP South to AP East (Tokyo) -->
    <path d="M 600 270 Q 640 240, 670 230" stroke-dasharray="4 4"/>
    <!-- Transpacific link -->
    <path d="M 670 230 Q 420 370, 180 230" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.4"/>
  </g>

  <!-- Region 1: us-west-2 (Oregon) -->
  <g transform="translate(180, 230)">
    <circle cx="0" cy="0" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="0" cy="0" r="5" fill="#60a5fa"/>
    <text x="0" y="32" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">us-west-2</text>
    <text x="0" y="46" font-family="monospace" font-size="9" fill="#10b981" text-anchor="middle">12ms • Healthy</text>
  </g>

  <!-- Region 2: us-east-1 (N. Virginia Primary) -->
  <g transform="translate(290, 220)">
    <circle cx="0" cy="0" r="18" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2.5" filter="url(#mp-glow)"/>
    <circle cx="0" cy="0" r="7" fill="#ffffff"/>
    <text x="0" y="36" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">us-east-1 (HQ)</text>
    <text x="0" y="50" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">Active Leader • 42 K8s Nodes</text>
  </g>

  <!-- Region 3: eu-central-1 (Frankfurt) -->
  <g transform="translate(450, 210)">
    <circle cx="0" cy="0" r="16" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="0" cy="0" r="6" fill="#60a5fa"/>
    <text x="0" y="34" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">eu-central-1</text>
    <text x="0" y="48" font-family="monospace" font-size="9" fill="#10b981" text-anchor="middle">16ms • Healthy</text>
  </g>

  <!-- Region 4: ap-southeast-1 (Singapore) -->
  <g transform="translate(600, 270)">
    <circle cx="0" cy="0" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="0" cy="0" r="5" fill="#60a5fa"/>
    <text x="0" y="32" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">ap-southeast-1</text>
    <text x="0" y="46" font-family="monospace" font-size="9" fill="#10b981" text-anchor="middle">24ms • Healthy</text>
  </g>

  <!-- Region 5: ap-northeast-1 (Tokyo) -->
  <g transform="translate(670, 230)">
    <circle cx="0" cy="0" r="14" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2"/>
    <circle cx="0" cy="0" r="5" fill="#60a5fa"/>
    <text x="0" y="32" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">ap-northeast-1</text>
    <text x="0" y="46" font-family="monospace" font-size="9" fill="#10b981" text-anchor="middle">18ms • Healthy</text>
  </g>

  <!-- Bottom Metric summary ribbon -->
  <g transform="translate(40, 420)">
    <rect width="720" height="46" rx="8" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
    <text x="25" y="28" font-family="monospace" font-size="11" fill="#3b82f6" font-weight="700">GLOBAL ANYCAST ROUTING</text>
    <text x="240" y="28" font-family="monospace" font-size="11" fill="#94a3b8">BGP TUNNEL: AUTOMATIC FAILOVER</text>
    <text x="500" y="28" font-family="monospace" font-size="11" fill="#10b981">GLOBAL P95: &lt; 28ms</text>
  </g>
</svg>
`;

// 3. Client Avatar: Sarah Chen, CTO Innovate Inc. (500 x 500)
const clientSarahSvg = `
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sc-bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0d1b33"/>
      <stop offset="60%" stop-color="#060c18"/>
      <stop offset="100%" stop-color="#020409"/>
    </radialGradient>
    <linearGradient id="sc-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>

  <rect width="500" height="500" fill="url(#sc-bg)"/>

  <!-- Halo rings -->
  <circle cx="250" cy="220" r="150" fill="none" stroke="#2563eb" stroke-width="1" stroke-dasharray="4 4" opacity="0.4"/>
  <circle cx="250" cy="220" r="180" fill="none" stroke="#3b82f6" stroke-width="1" stroke-dasharray="6 6" opacity="0.2"/>

  <!-- Stylized Executive Tech Silhouette -->
  <g transform="translate(250, 220)">
    <!-- Navy blazer -->
    <path d="M -130 220 C -130 150, -80 110, -40 95 L 40 95 C 80 110, 130 150, 130 220 Z" fill="#0f172a"/>
    <!-- Collar & Blouse -->
    <polygon points="-35,95 0,145 35,95 15,95 0,120 -15,95" fill="#38bdf8" opacity="0.7"/>
    <!-- Neck -->
    <rect x="-20" y="55" width="40" height="50" fill="#f1d5c2"/>
    <!-- Face -->
    <ellipse cx="0" cy="15" rx="46" ry="58" fill="#f8dfcd"/>
    <!-- Sleek professional haircut -->
    <path d="M -52 -10 C -52 -60, -20 -75, 10 -75 C 45 -75, 58 -50, 58 -10 C 58 50, 48 110, 42 150 L 25 140 C 32 100, 45 50, 45 0 C 40 -35, 15 -55, -10 -55 C -35 -55, -45 -20, -45 30 C -45 80, -35 120, -30 150 L -48 140 C -52 100, -52 40, -52 -10 Z" fill="#1e1e24"/>
    <!-- Minimalist modern glasses -->
    <rect x="-36" y="5" width="28" height="18" rx="3" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <rect x="8" y="5" width="28" height="18" rx="3" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
    <line x1="-8" y1="13" x2="8" y2="13" stroke="#3b82f6" stroke-width="2"/>
  </g>

  <!-- Blue rim lighting -->
  <path d="M 120 440 C 120 370, 170 330, 210 315" fill="none" stroke="#3b82f6" stroke-width="3" filter="drop-shadow(0 0 8px #3b82f6)"/>
  <path d="M 380 440 C 380 370, 330 330, 290 315" fill="none" stroke="#60a5fa" stroke-width="3"/>

  <!-- Badge at bottom -->
  <rect x="110" y="440" width="280" height="40" rx="20" fill="#0b1324" stroke="#3b82f6" stroke-width="1"/>
  <text x="250" y="465" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">SARAH CHEN // CTO INNOVATE INC.</text>
</svg>
`;

// 4. Client Avatar: David Ross, VP of Infrastructure (500 x 500)
const clientDavidSvg = `
<svg width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="dr-bg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#0c192e"/>
      <stop offset="60%" stop-color="#060c16"/>
      <stop offset="100%" stop-color="#020408"/>
    </radialGradient>
  </defs>

  <rect width="500" height="500" fill="url(#dr-bg)"/>

  <circle cx="250" cy="220" r="150" fill="none" stroke="#0ea5e9" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  <circle cx="250" cy="220" r="180" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6 6" opacity="0.2"/>

  <!-- Executive Silhouette -->
  <g transform="translate(250, 220)">
    <!-- Charcoal jacket -->
    <path d="M -135 220 C -135 150, -85 110, -42 95 L 42 95 C 85 110, 135 150, 135 220 Z" fill="#0f172a"/>
    <polygon points="-38,95 0,140 38,95 18,95 0,118 -18,95" fill="#60a5fa" opacity="0.8"/>
    <!-- Neck -->
    <rect x="-20" y="55" width="40" height="50" fill="#e2e8f0"/>
    <!-- Head -->
    <ellipse cx="0" cy="15" rx="46" ry="58" fill="#cbd5e1"/>
    <!-- Short neat hair -->
    <path d="M -50 -10 C -50 -55, -25 -70, 10 -70 C 40 -70, 52 -50, 52 -15 C 48 -35, 25 -52, -10 -52 C -35 -52, -45 -30, -50 -10 Z" fill="#1e293b"/>
    <!-- Beard trim -->
    <path d="M -38 20 C -38 65, -18 78, 0 78 C 18 78, 38 65, 38 20 C 30 50, 12 62, 0 62 C -12 62, -30 50, -38 20 Z" fill="#334155" opacity="0.6"/>
  </g>

  <!-- Blue rim lighting -->
  <path d="M 115 440 C 115 370, 165 330, 208 315" fill="none" stroke="#0ea5e9" stroke-width="3"/>
  <path d="M 385 440 C 385 370, 335 330, 292 315" fill="none" stroke="#38bdf8" stroke-width="3"/>

  <!-- Badge at bottom -->
  <rect x="110" y="440" width="280" height="40" rx="20" fill="#0b1324" stroke="#0ea5e9" stroke-width="1"/>
  <text x="250" y="465" font-family="'Space Grotesk', sans-serif" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle">DAVID ROSS // VP NEXTGEN FINTECH</text>
</svg>
`;

async function generateAll() {
  console.log('Generating Northline v2 assets...');

  await sharp(Buffer.from(aiGatewaySvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'ai-inference-gateway.webp'));
  console.log('✔ ai-inference-gateway.webp generated');

  await sharp(Buffer.from(cloudMapSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'cloud-infrastructure-map.webp'));
  console.log('✔ cloud-infrastructure-map.webp generated');

  await sharp(Buffer.from(clientSarahSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'client-sarah-chen.webp'));
  console.log('✔ client-sarah-chen.webp generated');

  await sharp(Buffer.from(clientDavidSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'client-david-ross.webp'));
  console.log('✔ client-david-ross.webp generated');

  console.log('All Northline v2 assets generated successfully!');
}

generateAll().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
