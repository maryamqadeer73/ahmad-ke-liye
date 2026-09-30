/* ==========================================================================
   SAARI KAHANI YAHAN HAI — all website text + settings live in this file.
   --------------------------------------------------------------------------
   - Edit only the text inside the quotes '...'.
   - Always use "aap" (never "tum").
   - A line can be a plain string, or an object with a style:
       { t: '...', k: 'big' }    -> bigger, softer line
       { t: '...', k: 'soft' }   -> quieter, lighter line
       { t: '...', k: 'pause' }  -> appears a moment later, with space above
       { t: '...', k: 'hand' }   -> handwritten line
   - If a line contains an apostrophe ( ' ), write it as \'
   ========================================================================== */

export const config = {
  // Name shown at the very end under the letter
  fromName: 'Maryam',

  // MUSIC (optional, never autoplays): put an mp3 in public/audio/ and write
  // 'audio/soft.mp3' (no slash at the start, so it also works on GitHub Pages).
  musicSrc: '',

  // YOUR OWN BUBU / DUDU IMAGES (optional)
  // Put images you are allowed to use in public/bubu/ and write the path next to
  // the scene, e.g.  'late-night': 'bubu/late-night.webp'   (no slash at the start)
  // Leave null to keep the built-in original illustration.
  sceneImages: {
    'holding-letter': null,
    'late-night': null,
    'waiting-phone': null,
    curtain: null,
    'ghost-chase': null,
    'sit-quiet': null,
    'apart-quiet': null,
    hug: null,
    future: null,
    'alone-letter': null,
  },
}

/* Alt text for the pictures (for screen readers) */
export const sceneLabels = {
  'holding-letter': 'Bubu zameen par baithi hai, haath mein tah kiya hua khat hai, Dudu paas hi hai',
  'late-night': 'raat ko dono bistar mein phone par baatein kar rahe hain, khirki mein chaand hai',
  'waiting-phone': 'Bubu akeli phone haath mein liye reply ka intezar kar rahi hai',
  curtain: 'Bubu parde ke peeche se jhaank rahi hai, Dudu aankhein ghuma raha hai',
  'ghost-chase': 'Bubu chadar orh kar AaaTma bani Dudu ke peeche peeche chal rahi hai',
  'sit-quiet': 'Bubu chup chaap baith gayi hai',
  'apart-quiet': 'dono chup chaap ek dosre se door baithe hain',
  hug: 'dono ek dosre ke qareeb baithe hain',
  future: 'dono sath baithe ek chote se garam ghar ki taraf dekh rahe hain',
  'alone-letter': 'Bubu akeli baithi hai, haath mein khat hai',
  paths: 'do raaste hain, Bubu dono ko chhor kar ek khat ki taraf chal rahi hai',
  handover: 'Bubu Dudu ko ek chota sa khat de rahi hai',
}

export const labels = {
  close: 'theek hai',
  music: 'soft music',
}

/* ---------- Opening ---------- */
export const intro = {
  ariaLabel: 'Ahmad ke liye',
  lines: ['Ahmad...', 'aap ek minute?', 'meri baat poori sun lena...', 'phir chahe mujhse gussa rehna.'],
  button: 'andar aayen?',
}

/* ---------- Scene 01: the letter ---------- */
export const letter = {
  lines: ['yeh koi perfect sorry nahi hai...', 'bas meri taraf se ek sach hai.'],
  hint: 'bas aahista aahista neeche aate jayen',
}

/* ---------- Scene 02: first memory (scroll story) ----------
   Each "beat" is one block of text. range = [start, end] of the scroll (0 to 1). */
export const firstMemory = {
  beats: [
    {
      range: [0, 0.34],
      lines: [
        { t: 'sab se pehli yaad...', k: 'title' },
        'hamari late night baatein...',
        'jab hamara rishta bilkul naya naya tha.',
        { t: 'us waqt lagta tha raat khatam hi na ho.', k: 'hand' },
      ],
    },
    {
      range: [0.34, 0.66],
      lines: [
        'aapse baat karte karte pata hi nahi chalta tha kitna waqt guzar gaya.',
        { t: 'aur ab...', k: 'pause' },
        'kabhi kabhi lagta hai aapke paas mere messages seen karne ka bhi waqt nahi.',
        'calls receive karne ka bhi nahi.',
      ],
    },
    {
      range: [0.66, 1],
      lines: [
        'main aapke career ke against nahi hoon.',
        'main chahti hoon aap bohat aage jayen.',
        { t: 'bas kabhi kabhi dil karta hai...', k: 'pause' },
        { t: 'aapki busy life mein thori si jagah meri bhi reh jaye.', k: 'big' },
      ],
    },
  ],
  // little handwritten words that float around the late-night scene
  floaters: ['so gaye? 🙈', '5 minute aur...', 'hahaha', 'acha good night', 'nahi abhi nahi 😭'],
  waitingNote: 'delivered ✓',
}

/* ---------- Scene 03: DRAMA ---------- */
export const drama = {
  title: 'phir aap mujhe kya kehte thay?',
  big: 'DRAMA 😭',
  sign: 'mujhe attention chahiye thi 😭',
  tapHint: 'Bubu ko chhoo kar dekhein',
  reactions: ['hmph. main drama nahi hoon 😤', '...acha thori si hoon 🙈'],
  lines: [
    'haan... main thori si drama thi.',
    'lekin aapko pata hai na?',
    'mere har drama ke peeche asal mein ek hi cheez hoti thi...',
    { t: 'aapki attention.', k: 'big' },
    { t: 'mujhe aapse larna nahi hota tha...', k: 'pause' },
    { t: 'mujhe bas aap chahiye hotay thay.', k: 'hand' },
  ],
}

/* ---------- Scene 04: AaaTma (scroll story) ---------- */
export const aatma = {
  beats: [
    {
      range: [0, 0.26],
      lines: [
        { t: 'aur phir... AaaTma 👻', k: 'title' },
        'aap mujhe AaaTma kehte thay.',
        'aur honestly...',
        'mujhe abhi tak samajh nahi aaya k main AaaTma kab bani.',
      ],
    },
    {
      range: [0.26, 0.56],
      lines: [
        { t: 'message.', k: 'hand' },
        { t: 'call.', k: 'hand' },
        { t: 'phir message.', k: 'hand' },
        { t: 'phir: aap kahan hain?', k: 'hand' },
        { t: 'phir: aap mujhe ignore kyun kar rahe hain?', k: 'hand' },
        'aur agar phir bhi reply na aaye...',
      ],
    },
    {
      range: [0.56, 0.78],
      lines: [{ t: 'AAAATMA DOBARA HAAZIR 👻😭', k: 'shout' }],
    },
    {
      range: [0.78, 1],
      lines: ['lekin sach bataun?', { t: 'woh AaaTma bhi sirf aapka time maangti thi.', k: 'big' }],
    },
  ],
}

/* ---------- Scene 05: the mood changes ---------- */
export const moodShift = {
  id: 'mazak-side-pe',
  tone: 'hush',
  scene: 'sit-quiet',
  lines: [{ t: 'acha... ab mazak side pe.', k: 'hand' }, { t: 'ab mujhe aapse ek serious baat kehni hai.', k: 'pause' }],
}

/* ---------- Scene 06: my mistake ---------- */
export const mistake = {
  id: 'meri-ghalti',
  tone: 'hush',
  title: 'meri ghalti',
  lines: [
    'mujhe pata hai jo maine kiya woh ghalat tha.',
    'mujhe pata hai maine aapko hurt kiya.',
    'main apni ghalti justify nahi karungi.',
    'main yeh nahi kahungi k meri situation ne mujhe majboor kiya.',
    { t: 'meri loneliness shayad yeh samjha de k main weak kyun hui...', k: 'pause' },
    { t: 'lekin woh meri ghalti ko sahi nahi bana sakti.', k: 'big' },
  ],
  note: { text: 'meri ghalti thi.', message: 'aur main isay kisi aur ke sar nahi daal rahi.' },
}

/* ---------- Scene 07: Ali (scroll story) ---------- */
export const ali = {
  beats: [
    {
      range: [0, 0.3],
      lines: [
        { t: 'Ali ke bare mein bhi sach...', k: 'title' },
        'Ali us waqt meri life mein aaya jab aap mere sath nahi thay.',
        'main confused thi.',
      ],
    },
    {
      range: [0.3, 0.6],
      lines: [
        'main aapse bhi mil rahi thi aur us se bhi.',
        'main compare kar rahi thi k meri life kis ke sath honi chahiye.',
      ],
    },
    {
      range: [0.6, 1],
      lines: [
        'aaj mujhe pata hai k yeh ghalat tha.',
        'kisi ko kisi aur ke against tolna, aur dono ko ek emotional uljhan mein rakhna, insaaf nahi tha.',
        { t: 'faisle mere thay. ghalti bhi meri thi.', k: 'big' },
      ],
    },
  ],
}

/* ---------- Scene 08: what I should have done ---------- */
export const shouldHave = {
  title: 'mujhe kya karna chahiye tha?',
  cards: [
    { icon: 'talk', text: 'aapse baat karni chahiye thi.' },
    { icon: 'clock', text: 'aapko batana chahiye tha k mujhe aapka waqt chahiye.' },
    { icon: 'sign', text: 'agar main unhappy thi, to mujhe apne rishte ke bare mein honestly faisla lena chahiye tha.' },
  ],
  closing: 'kisi aur ko beech mein nahi lana chahiye tha.',
  note: {
    text: 'kaash main pehle samajh jati.',
    message: 'kaash yeh sab main us waqt aapse keh deti,\njab keh sakti thi.',
  },
}

/* ---------- Scene 09: what I still feel ---------- */
export const stillFeel = {
  id: 'phir-bhi',
  tone: 'warm',
  scene: 'hug',
  title: 'phir bhi...',
  lines: [
    'main aaj bhi aapko apni life se nikalna nahi chahti.',
    'main aaj bhi hamari shaadi ko serious leti hoon.',
    'agar aap mujhe ek genuine chance dein, main is rishte ko genuinely rakhna chahti hoon.',
    { t: 'lekin sirf sulah nahi.', k: 'big' },
    'main chahti hoon k hum dono kuch cheezen genuinely change karein.',
  ],
}

/* ---------- Scene 10: kal ---------- */
export const kal = {
  id: 'kal',
  tone: 'dusk',
  scene: 'apart-quiet',
  title: 'aur kal...',
  lines: [
    'kal main jis Ahmad se mili...',
    { t: 'mujhe laga shayad woh woh Ahmad nahi tha jise main jaanti hoon.', k: 'pause' },
    'mujhe pata hai aap bohat hurt thay. aapko gussa hone ka haq tha. maine aapko hurt kiya tha.',
    'lekin kal aapka jo rawayya tha... usne mujhe bhi bohat hurt kiya.',
    { t: 'main aapki feelings ko invalidate nahi kar rahi. bas apni feelings bhi chhupa nahi rahi.', k: 'soft' },
    { t: 'maine aapko hurt kiya. aur kal aapki kuch baaton ne mujhe hurt kiya.', k: 'pause' },
    { t: 'dono baatein ek saath sach ho sakti hain.', k: 'big' },
  ],
}

/* ---------- Scene 11: trust ---------- */
export const trust = {
  title: 'agar hum dobara start karein...',
  notes: ['sach', 'communication', 'consistency'],
  lines: [
    'main sirf words se nahi, apne actions se trust dobara build karna chahti hoon.',
    'WhatsApp Business wali jo baat aapko uncomfortable karti hai, main usay khatam kar sakti hoon.',
    'agar kisi reasonable transparency se aapko trust dobara build karne mein help milegi, to main us par baat karungi.',
    { t: 'lekin main nahi chahti k hamara future sirf checking aur passwords par depend kare.', k: 'soft' },
    { t: 'aakhir mein trust actions se hi wapas aata hai.', k: 'big' },
  ],
}

/* ---------- Scene 12: the marriage ---------- */
export const marriage = {
  id: 'hamari-shaadi',
  tone: 'glow',
  scene: 'future',
  title: 'hamari shaadi...',
  lines: [
    'mere liye koi choti baat nahi hai.',
    'main is rishte ko khona nahi chahti.',
    'agar aap mujhe chance dein, to main isay rakhna chahti hoon.',
    { t: 'lekin main chahti hoon k hum sirf wapas na aayein...', k: 'pause' },
    { t: 'hum better bhi banein.', k: 'big' },
  ],
  note: {
    text: 'sach mein sorry.',
    message: 'yeh sorry jaldi mein nahi likha.\nbohat soch kar, poore dil se likha hai.',
  },
}

/* ---------- Scene 13: final apology ---------- */
export const finalApology = {
  id: 'aakhri-baat',
  tone: 'plain',
  scene: 'alone-letter',
  sceneSize: 'sm',
  title: 'bas ek aakhri baat...',
  lines: [
    'mujhe pata hai sirf sorry kehne se jo hua woh undo nahi ho jayega.',
    'lekin mujhe apni ghalti ka ehsaas hai.',
    'main aapse forgiveness force nahi karungi.',
    'agar aapko waqt chahiye, main samjhungi.',
    'agar aap mujhe maaf nahi kar sakte, main aapka faisla samjhungi.',
    { t: 'lekin agar aap mujhe maaf karna chahte hain...', k: 'pause' },
    { t: 'to meri yeh aakhri sorry accept kar lena.', k: 'big' },
    { t: 'baaki faisla aapka hai.', k: 'pause' },
  ],
}

/* ---------- Final visual ---------- */
export const handover = {
  button: 'yeh khat aapke liye',
  lines: ['main yahin hoon.', 'jab aap ready hon.'],
}
