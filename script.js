const causeCatalog = {
  1: {
    title: 'Bant yay yapmış (kavis almış) olabilir.',
    solution:
      'Bant rodadayken yanlara kayıp “teleskop” yapmasına izin vermeyin ve nemli ortamlarda depolamayın. Yeni bir bant, devreye alındıktan sonra kısa sürede düzgün hale gelmelidir; düzgünleşmiyorsa bant değiştirilmelidir.',
  },
  2: {
    title: 'Bant eki hatalı yapılmış veya yanlış mekanik ek kullanılmış olabilir.',
    solution:
      'Bandınıza uygun mekanik ek kullanın ve bandı kısa süre çalıştırdıktan sonra bağlantıları tekrar sıkın. Ek hatalı yapıldıysa çıkarıp yeni ek yapın, ardından düzenli kontrol için bir periyodik denetim planı oluşturun.',
  },
  3: { title: 'Bant çok hızlı olabilir.', solution: 'Bant çalışma hızını düşürün.' },
  4: {
    title: 'Bant tek taraftan uzamış olabilir.',
    solution:
      'Bant yeniyse bir süre çalışıp oturmasını bekleyin. Tek taraflı uzama devam ediyorsa (veya bant yeni değilse), uzayan kısmı kesip çıkarın ve yerine yeni bir parça ek yapın.',
  },
  5: {
    title: 'Breaker strip missing or inadequate',
    solution: 'When service is lost, install a belt with the proper breaker strip.',
  },
  6: {
    title: 'Gerdirme ağırlığı gereğinden fazla olabilir.',
    solution:
      'Gerekli ağırlığı yeniden hesaplayın ve ayarlayın. Gerdirme gerilimini, kayma başlayacak noktaya gelene kadar azaltın; sonra çok az artırarak güvenli seviyede bırakın.',
  },
  7: {
    title: 'Counterweight too light',
    solution: 'Recalculate required weight and adjust counterweight or screw takeup as needed.',
  },
  8: {
    title: 'Damage by abrasives, acid, chemicals, heat, mildew, oil',
    solution:
      'Use a belt designed for the specific condition. Patch cuts, seal metal fasteners, consider vulcanized splices, and protect the belt from weather. Avoid over-lubrication.',
  },
  9: { title: 'Differential speed wrong on dual pulleys', solution: 'Make the necessary adjustment.' },
  10: {
    title: 'Drive under-belted',
    solution:
      'Recalculate maximum belt tensions and choose the correct belt. For over-extended lines, consider two-flight systems. Install a belt with proper flexibility if the carcass is too rigid.',
  },
  11: {
    title: 'Edge worn or broken',
    solution: 'Repair the belt edge, or remove the worn section and splice in a new piece.',
  },
  12: {
    title: 'Excessive impact of material on belt or fasteners',
    solution:
      'Use correctly designed chutes and baffles, make vulcanized splices, install impact idlers, load fines first when possible, and adjust skirts or install cushioning idlers.',
  },
  13: { title: 'Excessive tension', solution: 'Recalculate and adjust tension. Use vulcanized splices within recommended limits.' },
  14: { title: 'Frozen idlers', solution: 'Free and lubricate idlers, and improve maintenance while avoiding over-lubrication.' },
  15: { title: 'Idlers or pulleys out-of-square with center line of conveyor', solution: 'Realign components and consider limit switches for safety.' },
  16: { title: 'Idlers improperly placed', solution: 'Relocate idlers or add additional ones to support the belt.' },
  17: {
    title: 'Improper loading or spillage',
    solution: 'Load in the direction of belt travel at belt speed, centered on the belt. Control flow with feeders, chutes, and skirtboards.',
  },
  18: { title: 'Improper storage or handling', solution: 'Follow manufacturer guidance for storage and handling.' },
  19: {
    title: 'Insufficient traction between belt and pulley',
    solution:
      'Increase wrap with snub pulleys, lag the drive pulley (use grooved lagging when wet), and install proper cleaning devices. See also counterweight settings.',
  },
  20: { title: 'Bant ve tambur arasına malzeme giriyor olabilir.', solution: 'Şut eteklerini doğru ayarlayın, biriken malzemeyi temizleyin ve bakım düzenini sıklaştırın.' },
  21: { title: 'Malzeme birikiyor olabilir.', solution: 'Biriken malzemeyi ortadan kaldırın. Geri dönüş tarafında malzeme birikmesini azaltmak için sıyırıcılar ekleyin. Saha temizliği ve düzenini iyileştirin.' },
  22: { title: 'Tambur kaplamaları aşınmış olabilir.', solution: 'Aşınmış tambur kaplamalarını değiştirin. Islak koşullarda yivli tambur kaplaması kullanın.' },
  23: { title: 'Tambur çapları olması gerekenden küçük olabilir.', solution: 'Daha büyük çaplı tamburlar kullanın.' },
  24: { title: 'Konveks dikey geçiş yarıçapı gereğinden küçük olabilir.', solution: 'Kenar gerilimini azaltmak için ruloların düşey hizasını yeniden düzenleyerek geçiş yarıçapını büyütün.' },
  25: { title: 'Bağıl besleme hızı gereğinden yüksek veya düşük olabilir.', solution: 'Şutları ayarlayın veya bant hızını doğru seviyeye getirin. Gerekirse besleme bölgesinde darbe ruloları kullanmayı değerlendirin. },
  26: { title: 'Malzeme bant merkezine beslenmiyor olabilir.', solution: 'Malzemeyi bantın gidiş yönünde ve bant merkezine gelecek şekilde yükleyin.' },
  27: { title: 'Etek lastikleri yanlış konumlandırılmış veya bakımı yapılmamış olabilir.', solution: 'Bandı aşındırmayacak tipte etek lastikleri kullanın ve belli aralıklarla bakımlarını gerçekleştirin.' },
  28: { title: 'Aşınma plakaları kullanılmıyor olabilir. Kullanılıyorsa yıpranmış veya hatalı monte edilmiş olabilir.', solution: 'Aşınma plakalarını, bantın gidiş yönünde kenarları kademeli geçiş yapacak ve düzgün hizalanacak şekilde yenileyin.' },
  29: { title: 'Bant kapasitesinin üzerinde yükleniyor olabilir.', solution: 'Beslemeyi dizayn kapasitesinde veya daha düşük kapasitede çalıştırın.' },
  30: { title: 'Bantta normalden fazla sarkma olabilir.', solution: 'Gerdirme (take-up) gerilimini yeniden hesaplayıp ayarlayın. Sarkmayı azaltmak için ilave bant destek elemanları kullanın veya rulo istasyonu aralıklarını düşürün.' },
  31: { title: 'Konveyör durduktan sonra bant geri kaçıyor olabilir.', solution: 'Geri kaçırmayı önleyen tutucu (holdback) veya fren sistemi kullanın; mevcutsa bakımlarını gerçekleştirin.' },
  32: { title: 'Sıyırıcı sayısı yetersiz olabilir ya da sıyırıcı bakımı aksıyor olabilir.', solution: 'İlave sıyırıcı ekleyin veya bakım sıklığını artırın.' },
  33: { title: 'Yığın malzeme özellikleri değişmiş olabilir.', solution: 'Değişiklik kalıcıysa şutları ve sıyırıcıları yeni koşullara göre yeniden düzenleyin. Ayrıca konveyör hızını, bant gergisini ve bant tipini (kaplama/karkas) yeniden değerlendirin.' },
  34: { title: 'Acil geçici çözümler uygulanmış olabilir.', solution: 'Geçici çözümler yerine kalıcı onarımlara başvurun. Mümkün olan noktalarda ekipmanları/aksesuarları otomatik hale getirin. Ekipmanlara ısı vererek ya da çekiçle vurarak müdahale etmeyin.' },
  35: { title: 'Bant izleme cihazları çalışmıyor veya işlevlerini yerine getirmiyor olabilir.', solution: 'Bant izleme cihazlarını aktif edin; gerekiyorsa tamir edin.' },
};

const problems = [
  { title: 'Bant kuyruk tamburunda merkezden kayıyor.', codes: [7, 15, 14, 17, 21, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tail-1-2.png' },
  { title: 'Bant konveyörün her noktasında merkezden kayıyor.', codes: [26, 17, 15, 21, 4, 16], image: '' },
  { title: 'Bantın belli bir bölümü konveyörün her noktasında merkezden kayıyor.', codes: [2, 11, 1, 34], image: '' },
  { title: 'Bant kafa tamburunda merkezden kayıyor.', codes: [15, 22, 21, 16, 34], image: '' },
  { title: 'Bant, belirli rulolarda merkezden kayıyor; kayma tüm bant boyunca görülüyor.', codes: [15, 16, 21, 34], image: '' },
  { title: 'Bant patinaj yapıyor.', codes: [19, 7, 21, 14, 22], image: '' },
  { title: 'Bant ilk kalkışta patinaj yapıyor.', codes: [19, 7, 22, 10], image: '' },
  { title: 'Bant gereğinden fazla uzama yapıyor.', codes: [13, 10, 21, 6, 9], image: '' },
  { title: 'Mekanik ek bölgesinde (veya hemen arkasında) bant yırtılıyor/kopuyor; mekanik ek yerinden sökülüp çıkıyor.', codes: [2, 23, 13, 22, 20, 10], image: '' },
  { title: 'Vulkanize ek yerinde ayrılma meydana geliyor.', codes: [13, 23, 10, 20, 2, 9], image: '' },
  { title: 'Bant kaplamasında yırtık, yarılma, kopma ve kesikler gibi ciddi problemler oluşuyor.', codes: [12, 25, 17, 21, 8, 5], image: '' },
  { title: 'Bant alt kaplaması normalden fazla aşınıyor.', codes: [21, 14, 5, 19, 20, 22], image: '' },
  { title: 'Bant kenarlarında normalden fazla aşınma oluşuyor.', codes: [26, 4, 17, 8, 1, 21], image: '' },
  { title: 'Kaplamada nokta nokta veya çizgi halinde şişmeler oluşuyor.', codes: [8], image: '' },
  { title: 'Bant sertleşme veya çatlama yapıyor.', codes: [8, 23, 22, 18], image: '' },
  { title: 'Bant kaplamasında gevrekleşme ve kılcal çatlamalar meydana geliyor.', codes: [8, 18], image: '' },
  { title: 'Bant üst kaplamasında boylamasına oyuklar veya çatlamalar meydana geliyor.', codes: [27, 14, 21, 12], image: '' },
  { title: 'Bant alt kaplamasında uzunlamasına oluklaşma veya çatlaklar oluşuyor.', codes: [14, 21, 22], image: '' },
  { title: 'Bant karkasında bozunma, çatlak, yırtılma/kopma gibi hasarlı noktalar oluşuyor.', codes: [12, 20, 5, 10, 8, 24], image: '' },
  { title: 'Bant katmanlarında ayrılma yaşanıyor.', codes: [13, 23, 11, 8, 3], image: '' },
  { title: 'Saptırma tamburlarında ve dönüş rulolarında malzeme birikiyor.', codes: [32, 33, 8, 22], image: '' },
  { title: 'Besleme bölgesinde ince malzeme dökülüyor.', codes: [27, 28, 17, 12, 30], image: '' },
  { title: 'Konveyör boyunca iri malzeme parçaları dökülüyor.', codes: [15, 29, 30, 31, 35], image: '' },
  { title: 'Şutlarda tıkanma gerçekleşiyor.', codes: [35, 33, 34, 31], image: '' },
  { title: 'Bant ile temas sağlayan diğer konveyör bileşenleri hasar görüyor.', codes: [31, 2, 11], image: '' },
];

const problemGrid = document.getElementById('problem-grid');
const selectedProblemNode = document.getElementById('selected-problem');
const causeClouds = document.getElementById('cause-clouds');
const solutionPanel = document.getElementById('solution-panel');

function renderProblems() {
  if (!problemGrid) return;
  problemGrid.innerHTML = '';
  problems.forEach((problem, index) => {
    const button = document.createElement('button');
    button.className = 'problem-chip';
    button.type = 'button';
    const hasImage = Boolean(problem.image);
    const photoContent = hasImage
      ? `<img src="${problem.image}" alt="${problem.title} için görsel" class="problem-img" loading="lazy">`
      : '<span class="photo-placeholder">Görsel</span>';

    button.innerHTML = `
      <div class="problem-photo ${hasImage ? 'has-image' : ''}" aria-hidden="true">
        ${photoContent}
      </div>
      <div class="problem-title">${problem.title}</div>
    `;
    button.setAttribute('aria-label', problem.title);
    button.addEventListener('click', () => selectProblem(index));
    problemGrid.appendChild(button);
  });
}

function selectProblem(index) {
  const allChips = problemGrid.querySelectorAll('.problem-chip');
  allChips.forEach((chip) => chip.classList.remove('active'));
  const activeChip = allChips[index];
  activeChip?.classList.add('active');

  const problem = problems[index];
  selectedProblemNode.textContent = problem.title;

  renderCauses(problem.codes);
  resetSolution();
}

function renderCauses(codes) {
  causeClouds.innerHTML = '';
  codes.forEach((code, index) => {
    const cause = causeCatalog[code];
    const cloud = document.createElement('button');
    cloud.type = 'button';
    cloud.className = 'cause-cloud';
    cloud.dataset.rank = index + 1;
    cloud.dataset.code = code;
    cloud.style.setProperty('--order', index);
    cloud.innerHTML = `
      <span class="cause-rank-chip" aria-hidden="true">${index + 1}</span>
      <div class="cause-text">
        <span class="cause-title">${cause.title}</span>
      </div>
    `;
    cloud.addEventListener('click', () => selectCause(code, cloud));
    causeClouds.appendChild(cloud);
  });
}

function selectCause(code, cloud) {
  causeClouds.querySelectorAll('.cause-cloud').forEach((node) => node.classList.remove('active'));
  cloud.classList.add('active');

  const cause = causeCatalog[code];
  solutionPanel.innerHTML = '';
  solutionPanel.classList.remove('active-card');
  const title = document.createElement('h5');
  title.textContent = `Kök Neden #${cloud.dataset.rank} · ${cause.title}`;
  const body = document.createElement('p');
  body.className = 'solution-body';
  body.textContent = cause.solution;

  solutionPanel.appendChild(title);
  solutionPanel.appendChild(body);

  void solutionPanel.offsetWidth;
  solutionPanel.classList.add('active-card');
}

function resetSolution() {
  solutionPanel.classList.remove('active-card');
  solutionPanel.innerHTML = '<p class="placeholder">Choose a cause to see recommended actions.</p>';
}

function bindProblemListNavigation() {
  problemGrid?.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

    const chips = [...problemGrid.querySelectorAll('.problem-chip')];
    if (!chips.length) return;

    const focusIndex = chips.indexOf(document.activeElement);
    const delta = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex = focusIndex === -1 ? 0 : Math.min(chips.length - 1, Math.max(0, focusIndex + delta));

    event.preventDefault();
    const nextChip = chips[nextIndex];
    nextChip.focus({ preventScroll: true });
    nextChip.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}

renderProblems();
bindProblemListNavigation();
