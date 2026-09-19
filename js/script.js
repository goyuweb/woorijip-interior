// 우리집인테리어 인터랙션 및 데이터 렌더링 (필터/모달/FAQ/폼/스크롤 애니메이션)

/* ===================== 데이터 ===================== */
// 이미지는 로컬 교체 시 /images/project-01.jpg 형태 경로로 바꾸면 됩니다.
const PORTFOLIO = [
  {
    title: 'Warm Minimal Apartment', category: 'Apartment', type: '아파트', size: '34평',
    region: '서울 강남구', style: '웜 미니멀', tall: true,
    tags: ['#미니멀', '#우드톤'],
    scope: '거실 · 주방 · 침실 · 욕실 전체 리모델링',
    request: '넓어 보이면서도 따뜻한 분위기의 미니멀한 거실을 원했습니다.',
    solution: '우드톤 바닥과 톤온톤 마감으로 시야를 정돈하고, 자연광을 살린 레이아웃으로 개방감을 확보했습니다.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Calm Beige House', category: 'House', type: '단독주택', size: '45평',
    region: '경기 용인', style: '내추럴 프리미엄', tall: false,
    tags: ['#베이지', '#내추럴'],
    scope: '단독주택 전체 리모델링 · 중정 설계',
    request: '가족이 오래 머물 수 있는 차분하고 고급스러운 주택을 원했습니다.',
    solution: '베이지 톤 마감과 중정을 통해 자연을 실내로 끌어들이고, 동선을 재정리해 생활 편의성을 높였습니다.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Modern Kitchen Renewal', category: 'Kitchen', type: '주방', size: '12평',
    region: '서울 서초구', style: '모던 클래식', tall: false,
    tags: ['#모던', '#세라믹'],
    scope: '주방 · 다이닝 리모델링',
    request: '수납과 동선이 편리하면서 호텔 같은 분위기의 주방을 원했습니다.',
    solution: '세라믹 상판과 히든 수납을 적용하고, 아일랜드 조명으로 다이닝 무드를 완성했습니다.',
    image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Soft Living Room', category: 'Living', type: '거실', size: '28평',
    region: '인천 연수구', style: '소프트 모던', tall: false,
    tags: ['#소프트', '#톤온톤'],
    scope: '거실 스타일링 · 조명 · 가구 배치',
    request: '전체 공사보다는 분위기 위주로 거실을 정돈하고 싶었습니다.',
    solution: '라운드 소파와 간접 조명, 패브릭 컬러를 통일해 부드럽고 편안한 거실 무드를 만들었습니다.',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Hotel Mood Bedroom', category: 'Bedroom', type: '침실', size: '20평',
    region: '서울 종로구', style: '호텔 무드', tall: false,
    tags: ['#호텔무드', '#우드'],
    scope: '침실 · 드레스룸 리모델링',
    request: '집에서도 호텔 같은 아늑함을 느끼고 싶었습니다.',
    solution: '헤드보드 조명과 웜톤 마감, 간접 조명으로 편안하면서 고급스러운 침실을 완성했습니다.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Premium Bath Space', category: 'Bath', type: '욕실', size: '5평',
    region: '서울 성동구', style: '프리미엄 스톤', tall: false,
    tags: ['#프리미엄', '#스톤'],
    scope: '욕실 전체 리모델링',
    request: '좁은 욕실을 호텔 욕실처럼 넓고 고급스럽게 바꾸고 싶었습니다.',
    solution: '스톤 타일과 히든 수납, 간접 조명으로 시야를 넓히고 프리미엄 욕실 무드를 구현했습니다.',
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    detail: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
             'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80']
  }
];

// SVG 아이콘 (아웃라인 스타일)
const ICONS = {
  apartment: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="10" y="8" width="16" height="34"/><rect x="26" y="18" width="12" height="24"/><path d="M14 14h4M14 20h4M14 26h4M14 32h4M30 24h4M30 30h4"/></svg>',
  house: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M8 22 24 9l16 13"/><path d="M12 20v20h24V20"/><rect x="20" y="28" width="8" height="12"/></svg>',
  kitchen: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="9" y="20" width="30" height="20"/><path d="M9 28h30M17 20v-6M24 20v-6M31 20v-6M15 34h2M23 34h2"/></svg>',
  bath: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M10 26h28v6a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6z"/><path d="M14 26v-9a4 4 0 0 1 8 0"/><path d="M18 15h4M14 40l-2 3M34 40l2 3"/></svg>',
  living: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 24v-3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v3"/><path d="M9 24a3 3 0 0 1 3 3v6h24v-6a3 3 0 0 1 3-3 3 3 0 0 1 0 6v6M9 24a3 3 0 0 0 0 6v6"/><path d="M13 39v3M35 39v3"/></svg>',
  partial: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="9" y="9" width="30" height="30"/><path d="M24 9v30M9 24h15"/><rect x="27" y="27" width="9" height="9" fill="currentColor" opacity="0.15"/></svg>'
};

const SERVICES = [
  { icon: 'apartment', title: '아파트 인테리어', target: '전체적인 분위기와 동선을 새롭게 정리하고 싶은 고객', desc: '거실, 주방, 침실, 욕실, 수납까지 주거 공간 전체의 완성도를 높입니다.' },
  { icon: 'house', title: '주택 인테리어', target: '단독주택이나 타운하우스를 고급스럽게 개선하고 싶은 고객', desc: '구조, 채광, 가족 구성, 생활 패턴을 고려해 공간을 설계합니다.' },
  { icon: 'kitchen', title: '주방 리모델링', target: '수납, 동선, 소재, 조명까지 고려한 주방을 원하는 고객', desc: '기능성과 분위기를 함께 만족시키는 주방 공간을 제안합니다.' },
  { icon: 'bath', title: '욕실 리모델링', target: '호텔 같은 고급 욕실 분위기를 원하는 고객', desc: '타일, 조명, 수전, 수납, 동선을 고려해 완성도 높은 욕실을 만듭니다.' },
  { icon: 'living', title: '거실/침실 스타일링', target: '전체 공사보다 분위기 개선을 원하는 고객', desc: '가구, 조명, 컬러, 패브릭을 활용해 공간의 무드를 정리합니다.' },
  { icon: 'partial', title: '부분 리모델링', target: '특정 공간만 개선하고 싶은 고객', desc: '필요한 공간만 선별해 효율적으로 리모델링 방향을 제안합니다.' }
];

const PROCESS = [
  { title: '문의 접수', desc: '홈페이지 문의폼을 통해 공간 정보와 상담 요청을 남깁니다.' },
  { title: '1차 상담', desc: '공간 유형, 평수, 예산, 원하는 분위기, 공사 범위를 확인합니다.' },
  { title: '공간 정보 확인', desc: '도면, 사진, 현장 상황, 필요한 공사 범위를 검토합니다.' },
  { title: '실측 및 방향 제안', desc: '현장 실측 후 공간에 맞는 디자인 방향을 제안합니다.' },
  { title: '디자인 및 견적 제안', desc: '자재, 공정, 마감 수준을 반영해 디자인과 견적을 안내합니다.' },
  { title: '계약 및 일정 확정', desc: '공사 범위와 일정을 확정하고 계약을 진행합니다.' },
  { title: '시공 진행', desc: '공정별로 진행 상황을 공유하며 시공을 진행합니다.' },
  { title: '마감 확인 및 사후 안내', desc: '마감 상태를 확인하고 사용 및 관리 안내를 제공합니다.' }
];

const FAQS = [
  { q: '상담 전 어떤 정보를 준비해야 하나요?', a: '공간 유형, 평수, 지역, 원하는 분위기, 예산 범위를 알려주시면 상담이 더 정확해집니다. 평면도나 현장 사진, 참고 이미지가 있다면 함께 준비해 주시면 좋습니다.' },
  { q: '견적은 어떻게 산정되나요?', a: '공간 범위, 자재, 공정, 마감 수준에 따라 달라지며 상담 후 구체적으로 안내드립니다.' },
  { q: '부분 리모델링도 가능한가요?', a: '주방, 욕실, 거실, 침실 등 공간별 부분 리모델링 상담도 가능합니다.' },
  { q: '공사 기간은 얼마나 걸리나요?', a: '공간 규모와 시공 범위에 따라 달라지며 상담 과정에서 예상 일정을 안내드립니다.' },
  { q: '상담은 어떻게 신청하나요?', a: '홈페이지 문의폼을 남겨주시면 확인 후 연락드립니다. 전화와 카카오톡 상담도 가능합니다.' }
];

/* ===================== 렌더링 ===================== */
function renderPortfolio(filter = 'all') {
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = PORTFOLIO
    .filter(p => filter === 'all' || p.category === filter)
    .map((p, i) => {
      const idx = PORTFOLIO.indexOf(p);
      return `
      <article class="pf-card reveal ${p.tall ? 'pf-card--tall' : ''}" data-index="${idx}">
        <div class="pf-card__img"><img src="${p.image}" alt="${p.title} - ${p.type} ${p.style} 인테리어" loading="lazy" /></div>
        <div class="pf-card__overlay"></div>
        <div class="pf-card__info">
          <h3 class="pf-card__title">${p.title} <span class="ar">&rarr;</span></h3>
          <p class="pf-card__meta">${p.type} ${p.size} &nbsp;|&nbsp; ${p.region}</p>
          <div class="pf-card__tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </article>`;
    }).join('');
  observeReveals();
}

function renderServices() {
  document.getElementById('serviceCards').innerHTML = SERVICES.map(s => `
    <div class="svc-card">
      <div class="svc-card__icon">${ICONS[s.icon]}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>`).join('');
}

function renderTimeline() {
  document.getElementById('timeline').innerHTML = PROCESS.map((p, i) => `
    <li class="tl-step reveal">
      <div class="tl-step__top">${p.desc}</div>
      <div class="tl-step__dot">${i + 1}</div>
      <div class="tl-step__title">${p.title}</div>
      <div class="tl-step__desc">${p.desc}</div>
    </li>`).join('');
  observeReveals();
}

function renderFaq() {
  document.getElementById('faqList').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item ${i === 0 ? 'open' : ''}">
      <button class="faq-item__q" aria-expanded="${i === 0}">${f.q}<span class="plus"></span></button>
      <div class="faq-item__a"><div class="faq-item__a-inner">${f.a}</div></div>
    </div>`).join('');

  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-item__q');
    const a = item.querySelector('.faq-item__a');
    if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-item__a').style.maxHeight = null;
        other.querySelector('.faq-item__q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
        q.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ===================== 필터 ===================== */
function initFilter() {
  document.getElementById('filter').addEventListener('click', e => {
    const btn = e.target.closest('.filter__btn');
    if (!btn) return;
    document.querySelectorAll('.filter__btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderPortfolio(btn.dataset.filter);
  });
}

/* ===================== 모달 ===================== */
function initModal() {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');

  document.getElementById('portfolioGrid').addEventListener('click', e => {
    const card = e.target.closest('.pf-card');
    if (!card) return;
    const p = PORTFOLIO[card.dataset.index];
    body.innerHTML = `
      <div class="modal__hero">
        <img src="${p.image}" alt="${p.title} 완성 이미지" />
        <span class="badge">${p.category} / ${p.style}</span>
      </div>
      <div class="modal__content">
        <h3>${p.title}</h3>
        <div class="modal__specs">
          <div><b>공간 유형</b>${p.type}</div>
          <div><b>평수</b>${p.size}</div>
          <div><b>지역</b>${p.region}</div>
          <div><b>스타일</b>${p.style}</div>
        </div>
        <div class="modal__block"><h4>시공 범위</h4><p>${p.scope}</p></div>
        <div class="modal__block"><h4>주요 요청 사항</h4><p>${p.request}</p></div>
        <div class="modal__block"><h4>해결 방향</h4><p>${p.solution}</p></div>
        <div class="modal__gallery">
          ${p.detail.map(d => `<div><img src="${d}" alt="${p.title} 디테일 이미지" /></div>`).join('')}
        </div>
        <div class="modal__cta">
          <a href="#contact" class="btn btn--gold" data-close>이런 분위기로 상담받기 <span>&rarr;</span></a>
        </div>
      </div>`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

  const close = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ===================== 헤더 / 모바일 메뉴 ===================== */
function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  });

  const toggleMenu = (open) => {
    hamburger.classList.toggle('active', open);
    mobileMenu.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  hamburger.addEventListener('click', () => toggleMenu(!mobileMenu.classList.contains('active')));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
}

/* ===================== 문의폼 validation ===================== */
function initForm() {
  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');

  const required = [
    { id: 'f-name', label: '이름' },
    { id: 'f-phone', label: '연락처' },
    { id: 'f-type', label: '공간 유형' },
    { id: 'f-region', label: '지역' },
    { id: 'f-message', label: '문의 내용' }
  ];

  form.addEventListener('submit', e => {
    e.preventDefault();
    let firstError = null;
    form.querySelectorAll('.field').forEach(f => f.classList.remove('error'));
    document.querySelector('.agree').classList.remove('error');

    for (const r of required) {
      const el = document.getElementById(r.id);
      if (!el.value.trim()) {
        el.closest('.field').classList.add('error');
        if (!firstError) firstError = { el, text: `${r.label}을(를) 입력해주세요.` };
      }
    }

    const agree = document.getElementById('f-agree');
    if (!agree.checked) {
      document.querySelector('.agree').classList.add('error');
      if (!firstError) firstError = { el: agree, text: '개인정보 수집 및 이용에 동의해주세요.' };
    }

    if (firstError) {
      msg.textContent = firstError.text;
      msg.className = 'cform__msg ng';
      firstError.el.focus();
      return;
    }

    // Supabase에 문의 저장
    const payload = {
      name: document.getElementById('f-name').value.trim(),
      phone: document.getElementById('f-phone').value.trim(),
      email: document.getElementById('f-email').value.trim() || null,
      space_type: document.getElementById('f-type').value || null,
      region: document.getElementById('f-region').value.trim() || null,
      size: document.getElementById('f-size').value.trim() || null,
      budget: document.getElementById('f-budget').value.trim() || null,
      message: document.getElementById('f-message').value.trim()
    };
    msg.textContent = '전송 중...';
    msg.className = 'cform__msg';
    fetch(window.SUPABASE_URL + '/rest/v1/inquiries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': window.SUPABASE_KEY,
        'Authorization': 'Bearer ' + window.SUPABASE_KEY,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    }).then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      form.reset();
      msg.textContent = '문의가 접수되었습니다. 확인 후 순차적으로 연락드리겠습니다.';
      msg.className = 'cform__msg ok';
    }).catch(err => {
      msg.textContent = '전송에 실패했습니다. 잠시 후 다시 시도해주세요.';
      msg.className = 'cform__msg ng';
      console.error(err);
    });
  });
}

/* ===================== 스크롤 애니메이션 ===================== */
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('in'); revealObserver.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  }
  document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

/* ===================== 초기화 ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderPortfolio();
  renderServices();
  renderTimeline();
  renderFaq();
  initFilter();
  initModal();
  initHeader();
  initForm();
  observeReveals();
});
