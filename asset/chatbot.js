
  // --- Chat logic (ultra light, Bootstrap-friendly, light theme) ---
    const chat = document.getElementById('chat');
    const form = document.getElementById('form');
    const q = document.getElementById('q');

    // Core quick links reused in answers
    const CEMETERY_LINK = `<a class="link-primary" href="https://soma-demo.github.io/html/knowledge-graph.html?cem=http%3A%2F%2Fexample.org%2Fsoma%2FcemeteryC3" target="_blank">Cemetery at the South Bank of the Eridanos</a>`;
    const TOMB70_LINK   = `<a class="link-primary" href="https://soma-demo.github.io/html/knowledge-graph.html?cem=http%3A%2F%2Fexample.org%2Fsoma%2FcemeteryC3&tomb=http%3A%2F%2Fexample.org%2Fsoma%2Ftomb70" target="_blank">Tomb 70</a>`;

    // Helper: render a message bubble using Bootstrap utilities
    function add(role, html) {
      const wrap = document.createElement('div');
      wrap.className = 'd-flex';
      wrap.innerHTML = `
        <div class="p-2 rounded-3 ${role === 'user' ? 'bg-primary text-white ms-auto' : 'bg-white border'}" style="max-width: 70ch;">
          ${html}
        </div>`;
      chat.appendChild(wrap);
      chat.scrollTop = chat.scrollHeight;
    }

    // Helper: suggestion chips as small outline buttons
    function renderChips(list){
      if (!list || !list.length) return '';
      return `<div class="mt-2 d-flex flex-wrap gap-2">${list.map(s => `<button class="btn btn-outline-secondary btn-sm" data-chip="${s}">${s}</button>`).join('')}</div>`;
    }

    // Intents keep it friendly and focused
    const INTENTS = [
      {
        name: 'greeting',
        test: /^(hi|hello|hey|good\s+(morning|afternoon|evening))\b/i,
        answer: () => `Hi! I'm SOMA demo bot.<br><br>I'm not fully trained yet, but I can help you navigate our sample data on ancient Greek cemeteries. Write a question or click a suggestion below.`,
        suggestions: [
          'How does the knowledge graph work?',
          'Show me all cemeteries',
          'Open the map'
        ]
      },
      {
        name: 'knowledge-graph',
        // Accepts both correct and common misspelling "knownledge"
        test: /(knowledge|knownledge)\s*graph/i,
        answer: () => `The Knowledge Graph shows connections between cemeteries, tombs, and finds. Explore it here: <a class="link-primary" href="https://soma-demo.github.io/html/knowledge-graph.html" target="_blank">Knowledge Graph</a>.<br>For details, see the <a class="link-primary" href="https://soma-demo.github.io/html/documentation.html" target="_blank">Documentation</a>.`
      },
      {
        name: 'show-cemeteries',
        test: /show\s*me\s*all\s*cemeteries/i,
        answer: () => `Right now there's one cemetery in the demo: ${CEMETERY_LINK}.`
      },
      {
        name: 'map',
        test: /\bmap\b|open\s+the\s+map/i,
        answer: () => `Here's the interactive map: <a class="link-primary" href="https://soma-demo.github.io/html/map.html" target="_blank">Map</a>.<br>Tip: zoom and click a marker to open the site page.`
      },
      {
        name: 'docs',
        test: /(documentation|docs|what\s+can\s+i\s+do|how\s+to\s+use|help|guide)/i,
        answer: () => `For a walkthrough of features and data model, visit the <a class="link-primary" href="https://soma-demo.github.io/html/documentation.html" target="_blank">Documentation</a>.<br>If you want to browse right away, try the <a class="link-primary" href="https://soma-demo.github.io/html/knowledge-graph.html" target="_blank">Knowledge Graph</a>.`
      },
      {
        name: 'tomb-70',
        test: /(tomb\s*70|70th\s*tomb)/i,
        answer: () => `Here's Tomb 70 in the demo dataset: ${TOMB70_LINK}.<br>From there you can see its context within the cemetery.`
      },
      {
        name: 'default',
        test: /.*/i,
        answer: () => `Thanks for your question! I'm a lightweight demo bot and not fully trained yet. I can help you get around the demo content. Click a suggestion below.`,
        suggestions: [
          'What can I do here?',
          'What’s in Tomb 70?',
          'Where’s the documentation?'
        ]
      }
    ];

    function respond(text){
      for (const intent of INTENTS){
        if (intent.test.test(text)){
          let msg = intent.answer();
          if (intent.suggestions) msg += renderChips(intent.suggestions);
          add('bot', msg);
          return;
        }
      }
    }

    // Initial greeting with chips
    (function(){
      const greet = INTENTS.find(i => i.name === 'greeting');
      add('bot', greet.answer() + renderChips(greet.suggestions));
    })();

    // Form submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = q.value.trim();
      if (!text) return;
      add('user', text.replace(/</g,'&lt;'));
      q.value = '';
      respond(text);
    });

    // Chips click
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-chip]');
      if (!chip) return;
      const text = chip.getAttribute('data-chip');
      add('user', text.replace(/</g,'&lt;'));
      respond(text);
    });
 