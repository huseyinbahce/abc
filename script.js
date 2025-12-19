const causeCatalog = {
  1: {
    title: 'Belt bowed',
    solution:
      'Avoid telescoping belt rolls or storing them in damp locations. A new belt should straighten out when broken in, otherwise replace it.',
  },
  2: {
    title: 'Belt improperly spliced or wrong fasteners',
    solution:
      'Use correct fasteners and re-tighten after a short run. If the splice is wrong, remove and redo it, then set up a regular inspection schedule.',
  },
  3: { title: 'Belt speed too fast', solution: 'Reduce belt speed.' },
  4: {
    title: 'Belt strained on one side',
    solution:
      'Allow time for a new belt to break in. If strain remains or the belt is not new, remove the strained section and splice in a new piece.',
  },
  5: {
    title: 'Breaker strip missing or inadequate',
    solution: 'When service is lost, install a belt with the proper breaker strip.',
  },
  6: {
    title: 'Counterweight too heavy',
    solution:
      'Recalculate required weight and adjust the counterweight. Reduce takeup tension until just before slip, then tighten slightly.',
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
  20: { title: 'Material between belt and pulley', solution: 'Use skirtboards properly, remove buildup, and improve maintenance.' },
  21: { title: 'Material build-up', solution: 'Remove accumulation. Install cleaning devices, scrapers, and inverted “V” decking. Improve housekeeping.' },
  22: { title: 'Pulley lagging worn', solution: 'Replace worn lagging, use grooved lagging for wet conditions, and tighten loose or protruding bolts.' },
  23: { title: 'Pulleys too small', solution: 'Use larger diameter pulleys.' },
  24: { title: 'Radius of convex vertical curve too small', solution: 'Increase the radius through vertical realignment of idlers to limit edge tension.' },
  25: { title: 'Relative loading velocity too high or too low', solution: 'Adjust chutes or correct belt speed; consider impact idlers.' },
  26: { title: 'Side loading', solution: 'Load in the direction of belt travel and centered on the conveyor.' },
  27: { title: 'Skirts improperly placed or not maintained', solution: 'Install skirtboards that do not rub the belt and maintain them regularly.' },
  28: { title: 'Wear liners missing, worn or improperly installed', solution: 'Replace wear liners with properly aligned, gradually relieving edges in the direction of travel.' },
  29: { title: 'Belt overloaded', solution: 'Operate the feed system at design capacity or below.' },
  30: { title: 'Excessive belt sag', solution: 'Recalculate takeup tension and add belt support systems or reduce idler spacing.' },
  31: { title: 'Belt rolls back after shutdown', solution: 'Install or repair a belt holdback or brake.' },
  32: { title: 'Insufficient number of belt cleaners or lack of maintenance', solution: 'Install more belt cleaners or increase maintenance frequency.' },
  33: { title: 'Bulk material properties have changed', solution: 'If change is permanent, redesign chutes and cleaners, and re-evaluate conveyor speed, tension, and belt type.' },
  34: { title: 'Emergency repairs or actions', solution: 'Replace temporary fixes with proper repairs and automate accessories where possible. Avoid heating or hammering components.' },
  35: { title: 'Monitoring devices inoperable', solution: 'Repair or activate monitoring devices.' },
};

const problems = [
  { title: 'Bant kuyruk tamburunda merkezden kayıyor.', codes: [7, 15, 14, 17, 21, 34], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tail-1-2.png' },
  { title: 'Bant konveyörün her noktasında merkezden kayıyor.', codes: [26, 17, 15, 21, 4, 16], image: 'https://www.konveyorbant.com/wp-content/uploads/2025/12/tail-1.png' },
  { title: 'Bantın belli bir bölümü konveyörün her noktasında merkezden kayıyor.', codes: [2, 11, 1, 34], image: '' },
  { title: 'Bant kafa tamburunda merkezden kayıyor.', codes: [15, 22, 21, 16, 34], image: '' },
  { title: 'Belt runs to one side throughout entire length at specific idlers', codes: [15, 16, 21, 34], image: '' },
  { title: 'Belt slip', codes: [19, 7, 21, 14, 22], image: '' },
  { title: 'Belt slip on starting', codes: [19, 7, 22, 10], image: '' },
  { title: 'Excessive belt stretch', codes: [13, 10, 21, 6, 9], image: '' },
  { title: 'Belt breaks at or behind fasteners or fasteners tear loose', codes: [2, 23, 13, 22, 20, 10], image: '' },
  { title: 'Vulcanized splice separation', codes: [13, 23, 10, 20, 2, 9], image: '' },
  { title: 'Excessive belt wear including rips, gouges, ruptures and tears', codes: [12, 25, 17, 21, 8, 5], image: '' },
  { title: 'Excessive belt bottom cover wear', codes: [21, 14, 5, 19, 20, 22], image: '' },
  { title: 'Excessive belt edge wear, broken edges', codes: [26, 4, 17, 8, 1, 21], image: '' },
  { title: 'Belt cover swells in spots or streaks', codes: [8], image: '' },
  { title: 'Belt hardens or cracks', codes: [8, 23, 22, 18], image: '' },
  { title: 'Belt covers become checked or brittle', codes: [8, 18], image: '' },
  { title: 'Longitudinal grooving or cracking of belt top cover', codes: [27, 14, 21, 12], image: '' },
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
  title.textContent = `Cause #${cloud.dataset.rank} · ${cause.title}`;
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
