// CarTalk Pro - REINS-Style Application v3
document.addEventListener('DOMContentLoaded', () => {
    // === 重複除去 ===
    const lastIndex = new Map();
    CAR_DATABASE.forEach((car, idx) => {
        const key = car.maker + '|' + car.name;
        lastIndex.set(key, idx);
    });
    const uniqueIndices = new Set(lastIndex.values());
    const uniqueDB = CAR_DATABASE.filter((_, idx) => uniqueIndices.has(idx));
    CAR_DATABASE.length = 0;
    uniqueDB.forEach(car => CAR_DATABASE.push(car));

    // === DOM Elements ===
    const totalCarsCount = document.getElementById('totalCarsCount');
    const hitCount = document.getElementById('hitCount');
    const hitNumber = document.getElementById('hitNumber');
    const keywordInput = document.getElementById('keywordInput');
    const makerChips = document.getElementById('makerChips');
    const typeChips = document.getElementById('typeChips');
    const fuelChips = document.getElementById('fuelChips');
    const seatsChips = document.getElementById('seatsChips');
    const driveChips = document.getElementById('driveChips');
    const fuelEcoMinInput = document.getElementById('fuelEcoMinInput');
    const fuelEcoMaxInput = document.getElementById('fuelEcoMaxInput');
    const widthMinInput = document.getElementById('widthMinInput');
    const widthMaxInput = document.getElementById('widthMaxInput');
    const lengthMinInput = document.getElementById('lengthMinInput');
    const lengthMaxInput = document.getElementById('lengthMaxInput');
    const heightMinInput = document.getElementById('heightMinInput');
    const heightMaxInput = document.getElementById('heightMaxInput');
    const yearMinInput = document.getElementById('yearMinInput');
    const yearMaxInput = document.getElementById('yearMaxInput');
    const budgetMinInput = document.getElementById('budgetMinInput');
    const budgetMaxInput = document.getElementById('budgetMaxInput');
    const budgetFilterGroup = document.getElementById('budgetFilterGroup');
    const executeSearch = document.getElementById('executeSearch');
    const resetFilters = document.getElementById('resetFilters');
    const resultsTableBody = document.getElementById('resultsTableBody');
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsTableWrap = document.getElementById('resultsTableWrap');
    const noResults = document.getElementById('noResults');
    const qsCount = document.getElementById('qsCount');
    const sortSelect = document.getElementById('sortSelect');
    const viewTable = document.getElementById('viewTable');
    const viewGrid = document.getElementById('viewGrid');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');
    const mobileFilterToggle = document.getElementById('mobileFilterToggle');
    const filterSidebar = document.getElementById('filterSidebar');

    totalCarsCount.querySelector('.stat-number').textContent = CAR_DATABASE.length;

    const domesticMakers = ['トヨタ','ホンダ','日産','マツダ','スバル','スズキ','ダイハツ','三菱','レクサス','光岡'];

    // === Backdrop Overlay ===
    const backdrop = document.createElement('div');
    backdrop.className = 'cs-backdrop';
    document.body.appendChild(backdrop);

    function showBackdrop() { backdrop.classList.add('active'); }
    function hideBackdrop() { backdrop.classList.remove('active'); }
    function closeAllPanels() {
        document.querySelectorAll('.cs-panel.open').forEach(p => p.classList.remove('open'));
        document.querySelectorAll('.cs-toggle.open').forEach(t => t.classList.remove('open'));
        hideBackdrop();
    }

    // Clicking backdrop = close panels only (don't pass click to results)
    backdrop.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeAllPanels();
    });

    // === Chip-Select Controller ===
    function initChipGrid(container, defaultLabel, onChange) {
        const toggle = container.querySelector('.cs-toggle');
        const panel = container.querySelector('.cs-panel');
        const textEl = toggle.querySelector('.cs-text');
        const chips = container.querySelectorAll('.chip');
        const isWide = panel.classList.contains('cs-panel-wide');

        // For wide panels, move to body to escape sidebar backdrop-filter
        if (isWide) {
            document.body.appendChild(panel);
        }

        function updateLabel() {
            const active = [...chips].filter(c => c.classList.contains('active'));
            if (active.length === 0) {
                textEl.textContent = defaultLabel;
            } else if (active.length <= 3) {
                textEl.textContent = active.map(c => c.textContent.trim()).join(', ');
            } else {
                textEl.textContent = active.length + '件選択中';
            }
        }

        function closePanel() {
            panel.classList.remove('open');
            toggle.classList.remove('open');
            hideBackdrop();
        }

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other chip-selects first
            document.querySelectorAll('.cs-panel.open').forEach(p => {
                if (p !== panel) p.classList.remove('open');
            });
            document.querySelectorAll('.cs-toggle.open').forEach(t => {
                if (t !== toggle) t.classList.remove('open');
            });

            // Position wide panel below the toggle
            if (isWide) {
                const rect = toggle.getBoundingClientRect();
                panel.style.top = (rect.bottom + 4) + 'px';
            }

            const willOpen = !panel.classList.contains('open');
            panel.classList.toggle('open');
            toggle.classList.toggle('open');

            // Show/hide backdrop
            if (willOpen) {
                showBackdrop();
            } else {
                hideBackdrop();
            }
        });

        panel.addEventListener('click', (e) => e.stopPropagation());

        chips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                e.stopPropagation();
                chip.classList.toggle('active');
                updateLabel();
                if (onChange) onChange();
            });
        });

        container._getChecked = () => [...chips].filter(c => c.classList.contains('active')).map(c => c.dataset.value);
        container._reset = () => {
            chips.forEach(c => c.classList.remove('active'));
            updateLabel();
        };
        container._close = closePanel;
    }

    // === Size Panel Controller ===
    function initSizePanel() {
        const container = document.getElementById('sizeToggleGroup');
        if (!container) return;
        const toggle = container.querySelector('.cs-toggle');
        const panel = container.querySelector('.cs-panel');
        const textEl = toggle.querySelector('.cs-text');

        // Move to body like other wide panels
        document.body.appendChild(panel);

        // Prevent panel clicks from bubbling
        panel.addEventListener('click', (e) => e.stopPropagation());
        // Also prevent mousedown on sliders from closing panel
        panel.addEventListener('mousedown', (e) => e.stopPropagation());

        function updateSizeLabel() {
            const parts = [];
            const wMin = document.getElementById('widthMinInput');
            const wMax = document.getElementById('widthMaxInput');
            const lMin = document.getElementById('lengthMinInput');
            const lMax = document.getElementById('lengthMaxInput');
            const hMin = document.getElementById('heightMinInput');
            const hMax = document.getElementById('heightMaxInput');

            if (wMin && wMax && (wMin.value || wMax.value)) parts.push('幅');
            if (lMin && lMax && (lMin.value || lMax.value)) parts.push('長');
            if (hMin && hMax && (hMin.value || hMax.value)) parts.push('高');

            textEl.textContent = parts.length > 0 ? parts.join('・') + ' 指定中' : '指定なし';
        }

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other panels
            document.querySelectorAll('.cs-panel.open').forEach(p => {
                if (p !== panel) p.classList.remove('open');
            });
            document.querySelectorAll('.cs-toggle.open').forEach(t => {
                if (t !== toggle) t.classList.remove('open');
            });

            const rect = toggle.getBoundingClientRect();
            // Open ABOVE the toggle (pull-up style)
            panel.style.top = 'auto';
            panel.style.bottom = (window.innerHeight - rect.top + 4) + 'px';

            const willOpen = !panel.classList.contains('open');
            panel.classList.toggle('open');
            toggle.classList.toggle('open');
            if (willOpen) showBackdrop(); else hideBackdrop();
        });

        container._updateLabel = updateSizeLabel;
        container._reset = () => { textEl.textContent = '指定なし'; };
        container._close = () => {
            panel.classList.remove('open');
            toggle.classList.remove('open');
            hideBackdrop();
        };

        // Listen to slider changes to update label
        panel.querySelectorAll('.dr-text').forEach(input => {
            input.addEventListener('change', updateSizeLabel);
            input.addEventListener('input', updateSizeLabel);
        });
    }

    // Close all chip-selects on outside click (fallback)
    document.addEventListener('click', () => {
        closeAllPanels();
    });

    let currentView = 'table';
    let currentResults = [];

    // === localStorage helpers ===
    function getUserData() { try { return JSON.parse(localStorage.getItem('carTalkUserData') || '{}'); } catch { return {}; } }
    function setUserData(data) { localStorage.setItem('carTalkUserData', JSON.stringify(data)); }
    function getCarEdits(carId) { const d = getUserData(); return d[carId] || {}; }
    function saveCarEdits(carId, edits) { const d = getUserData(); d[carId] = { ...(d[carId] || {}), ...edits }; setUserData(d); }
    function getVal(car, field) { const edits = getCarEdits(car.id); return edits[field] !== undefined ? edits[field] : car[field]; }

    // === Export / Import ===
    window.exportUserData = function() {
        const data = getUserData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'cartalk_userdata_' + new Date().toISOString().slice(0,10) + '.json';
        a.click(); URL.revokeObjectURL(a.href);
    };
    window.importUserData = function() {
        const input = document.createElement('input');
        input.type = 'file'; input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0]; if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                try { setUserData(JSON.parse(ev.target.result)); alert('データをインポートしました！'); } catch { alert('ファイルの読み込みに失敗しました'); }
            };
            reader.readAsText(file);
        };
        input.click();
    };

    // === Parse Helpers ===
    function parseMM(str) {
        if (!str) return 0;
        const m = str.replace(/,/g, '').match(/(\d[\d,.]*)/);
        return m ? parseFloat(m[1]) : 0;
    }
    function parseFuelEco(str) {
        if (!str) return 0;
        // Extract numeric range like "28.6〜32.6" or single "13.6"
        const nums = str.match(/(\d+\.?\d*)/g);
        if (!nums || !nums.length) return 0;
        // Return the first (lowest) number as comparable value
        return parseFloat(nums[0]);
    }
    function parseFuelEcoMax(str) {
        if (!str) return 0;
        const nums = str.match(/(\d+\.?\d*)/g);
        if (!nums || !nums.length) return 0;
        return parseFloat(nums[nums.length > 1 ? 1 : 0]);
    }

    // === Fuel Badge ===
    function fuelBadge(fuelStr) {
        if (!fuelStr) return '<span class="fuel-badge gas">不明</span>';
        const f = fuelStr.toLowerCase();
        if (f.includes('ev') || f.includes('電気')) return '<span class="fuel-badge ev">EV</span>';
        if (f.includes('phev') || f.includes('プラグイン')) return '<span class="fuel-badge phev">PHEV</span>';
        if (f.includes('e-power')) return '<span class="fuel-badge hv">e-POWER</span>';
        if (f.includes('ハイブリッド') || f.includes('hv') || f.includes('hev')) return '<span class="fuel-badge hv">HV</span>';
        if (f.includes('ディーゼル') || f.includes('軽油')) return '<span class="fuel-badge diesel">ディーゼル</span>';
        return '<span class="fuel-badge gas">ガソリン</span>';
    }

    // === Type Matching ===
    function matchesType(carType, filterType) {
        const t = carType.toLowerCase();
        switch(filterType) {
            case '軽自動車': return t.includes('軽');
            case 'コンパクト': return t.includes('コンパクト') || t.includes('マイクロ');
            case 'セダン': return t.includes('セダン') && !t.includes('suv');
            case 'SUV': return t.includes('suv') || t.includes('クロスオーバー') || t.includes('クロス');
            case 'ミニバン': return t.includes('ミニバン') || t.includes('ワゴン') && t.includes('軽');
            case 'ワゴン': return t.includes('ワゴン') || t.includes('ツーリング');
            case 'クーペ': return t.includes('クーペ') || t.includes('スポーツ') || t.includes('オープン') || t.includes('ロードスター');
            case 'トラック': return t.includes('トラック') || t.includes('商用') || t.includes('バン') || t.includes('バス');
            default: return false;
        }
    }

    // === Fuel Matching ===
    function matchesFuel(car, filterFuel) {
        const f = (car.fuel || '').toLowerCase();
        const e = (car.fuelEco || '').toLowerCase();
        switch(filterFuel) {
            case 'ガソリン': return (f.includes('ガソリン') || f.includes('レギュラー') || f.includes('ハイオク')) && !f.includes('ハイブリッド') && !f.includes('hv') && !f.includes('ev') && !f.includes('phev') && !f.includes('e-power');
            case 'ハイブリッド': return f.includes('ハイブリッド') || f.includes('hv') || f.includes('hev') || f.includes('e:hev') || f.includes('e-boxer');
            case 'ディーゼル': return f.includes('ディーゼル') || f.includes('軽油');
            case 'EV': return f.includes('ev') || f.includes('電気');
            case 'PHEV': return f.includes('phev') || f.includes('プラグイン');
            case 'e-POWER': return f.includes('e-power');
            default: return true;
        }
    }

    // === Drive Matching ===
    function matchesDrive(driveStr, filterDrive) {
        const d = (driveStr || '').toUpperCase();
        switch(filterDrive) {
            case 'FF': return d.includes('FF');
            case 'FR': return d.includes('FR') && !d.includes('E-FOUR');
            case '4WD': return d.includes('4WD') || d.includes('AWD') || d.includes('4ORCE') || d.includes('E-FOUR') || d.includes('QUATTRO');
            case 'MR': return d.includes('MR') || d.includes('ミッドシップ');
            default: return true;
        }
    }

    // === Filter Logic ===
    function executeFilter() {
        const keyword = keywordInput.value.trim().toLowerCase();
        const checkedMakers = makerChips._getChecked();
        const checkedTypes = typeChips._getChecked();
        const checkedFuels = fuelChips._getChecked();
        const checkedSeats = seatsChips._getChecked();
        const checkedDrives = driveChips._getChecked();
        const fuelMin = fuelEcoMinInput.value ? parseFloat(fuelEcoMinInput.value) : 0;
        const fuelMax = fuelEcoMaxInput.value ? parseFloat(fuelEcoMaxInput.value) : Infinity;
        const wMin = widthMinInput.value ? parseInt(widthMinInput.value) : 0;
        const wMax = widthMaxInput.value ? parseInt(widthMaxInput.value) : Infinity;
        const lMin = lengthMinInput.value ? parseInt(lengthMinInput.value) : 0;
        const lMax = lengthMaxInput.value ? parseInt(lengthMaxInput.value) : Infinity;
        const hMin = heightMinInput.value ? parseInt(heightMinInput.value) : 0;
        const hMax = heightMaxInput.value ? parseInt(heightMaxInput.value) : Infinity;
        const yMin = yearMinInput.value ? parseInt(yearMinInput.value) : 0;
        const yMax = yearMaxInput.value ? parseInt(yearMaxInput.value) : Infinity;
        const bMin = budgetMinInput && budgetMinInput.value ? parseFloat(budgetMinInput.value) : 0;
        const bMax = budgetMaxInput && budgetMaxInput.value ? parseFloat(budgetMaxInput.value) : Infinity;

        // Pre-check: does __import__ exist in makers?
        const importAll = checkedMakers.includes('__import__');
        const specificMakers = checkedMakers.filter(m => m !== '__import__');

        let results = (window._inventoryFilterActive ? window._inventoryMatchedCars || [] : CAR_DATABASE).filter(car => {
            // Keyword
            if (keyword) {
                const searchStr = (car.name + car.maker + (car.type || '') + (car.fuel || '') + (car._invGrade || '')).toLowerCase();
                if (!searchStr.includes(keyword)) return false;
            }

            // Maker (multi)
            if (checkedMakers.length > 0) {
                let makerMatch = false;
                if (specificMakers.length > 0 && specificMakers.includes(car.maker)) makerMatch = true;
                if (importAll && !domesticMakers.includes(car.maker)) makerMatch = true;
                if (!makerMatch) return false;
            }

            // Type (multi)
            if (checkedTypes.length > 0) {
                const matched = checkedTypes.some(ft => matchesType(car.type || '', ft));
                if (!matched) return false;
            }

            // Fuel (multi)
            if (checkedFuels.length > 0) {
                const matched = checkedFuels.some(f => matchesFuel(car, f));
                if (!matched) return false;
            }

            // Seats (multi)
            if (checkedSeats.length > 0) {
                const seatMatch = checkedSeats.some(sv => {
                    const s = parseInt(sv);
                    if (s === 8) return car.seats >= 8;
                    if (s === 7) return car.seats === 7;
                    return car.seats === s;
                });
                if (!seatMatch) return false;
            }

            // Drive (multi)
            if (checkedDrives.length > 0) {
                const driveMatch = checkedDrives.some(d => matchesDrive(getVal(car, 'drive'), d));
                if (!driveMatch) return false;
            }

            // Fuel Economy Range
            if (fuelMin > 0 || fuelMax < Infinity) {
                const eco = parseFuelEcoMax(getVal(car, 'fuelEco'));
                if (eco === 0) return false;
                if (fuelMin > 0 && eco < fuelMin) return false;
                if (fuelMax < Infinity && eco > fuelMax) return false;
            }

            // Width Range
            if (wMin > 0 || wMax < Infinity) {
                const w = parseMM(getVal(car, 'width'));
                if (w === 0) return false;
                if (wMin > 0 && w < wMin) return false;
                if (wMax < Infinity && w > wMax) return false;
            }

            // Length Range
            if (lMin > 0 || lMax < Infinity) {
                const l = parseMM(getVal(car, 'length'));
                if (l === 0) return false;
                if (lMin > 0 && l < lMin) return false;
                if (lMax < Infinity && l > lMax) return false;
            }

            // Height Range
            if (hMin > 0 || hMax < Infinity) {
                const h = parseMM(getVal(car, 'height'));
                if (h === 0) return false;
                if (hMin > 0 && h < hMin) return false;
                if (hMax < Infinity && h > hMax) return false;
            }

            // Year Range
            if (yMin > 0 || yMax < Infinity) {
                // Inventory mode: car._invYear is a numeric year
                if (car._invYear) {
                    if (yMin > 0 && car._invYear < yMin) return false;
                    if (yMax < Infinity && car._invYear > yMax) return false;
                } else {
                    const yearStr = car.years || '';
                    const yearMatch = yearStr.match(/(\d{4})/);
                    if (!yearMatch) return false;
                    const carYear = parseInt(yearMatch[1]);
                    if (yMin > 0 && carYear < yMin) return false;
                    if (yMax < Infinity && carYear > yMax) return false;
                }
            }

            // Budget filter (inventory mode only)
            if (window._inventoryFilterActive && (bMin > 0 || bMax < Infinity)) {
                const inv = car._inv || {};
                const priceStr = inv.price || '';
                const priceMatch = priceStr.match(/([\d.]+)/);
                if (!priceMatch) return false;
                const priceVal = parseFloat(priceMatch[1]);
                if (bMin > 0 && priceVal < bMin) return false;
                if (bMax < Infinity && priceVal > bMax) return false;
            }

            return true;
        });

        // Sort
        results = sortResults(results, sortSelect.value);

        currentResults = results;

        // Inventory mode uses special rendering
        if (window._inventoryFilterActive) {
            renderInventoryResults(results);
        } else {
            renderResults(results);
        }
    }

    // === Sort ===
    function sortResults(cars, sortBy) {
        return [...cars].sort((a, b) => {
            switch(sortBy) {
                case 'maker': return a.maker.localeCompare(b.maker) || a.name.localeCompare(b.name);
                case 'name': return a.name.localeCompare(b.name);
                case 'seats': return b.seats - a.seats;
                case 'fuelEco': return parseFuelEcoMax(getVal(b, 'fuelEco')) - parseFuelEcoMax(getVal(a, 'fuelEco'));
                case 'width': return parseMM(getVal(a, 'width')) - parseMM(getVal(b, 'width'));
                case 'length': return parseMM(getVal(a, 'length')) - parseMM(getVal(b, 'length'));
                default: return 0;
            }
        });
    }

    // === Render Results ===
    function renderResults(cars) {
        qsCount.textContent = cars.length;
        hitCount.style.display = 'flex';
        hitNumber.textContent = cars.length;

        if (!cars.length) {
            resultsTableWrap.style.display = 'none';
            resultsGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        if (currentView === 'table') {
            resultsTableWrap.style.display = 'block';
            resultsGrid.style.display = 'none';
            renderTable(cars);
        } else {
            resultsTableWrap.style.display = 'none';
            resultsGrid.style.display = 'grid';
            renderGrid(cars);
        }
    }

    // === Render Inventory Results (filtered) ===
    function renderInventoryResults(cars) {
        qsCount.textContent = cars.length;
        hitCount.style.display = 'flex';
        hitNumber.textContent = cars.length;

        if (!cars.length) {
            resultsTableWrap.style.display = 'none';
            resultsGrid.style.display = 'none';
            noResults.style.display = 'block';
            return;
        }
        noResults.style.display = 'none';

        // Always table view for inventory
        resultsTableWrap.style.display = 'block';
        resultsGrid.style.display = 'none';

        // Set inventory header
        const headerRow = resultsTableWrap.querySelector('thead tr');
        if (headerRow) {
            headerRow.innerHTML = `
                <th></th>
                <th>メーカー</th>
                <th>車種名</th>
                <th>グレード</th>
                <th>タイプ</th>
                <th>年式</th>
                <th>本体価格</th>
                <th>支払総額</th>
                <th>走行距離</th>
                <th>色</th>
                <th>車検</th>
                <th>詳細</th>
            `;
        }

        // Store for modal access
        window._lastInventoryResults = cars;

        // Render rows
        resultsTableBody.innerHTML = cars.map((car, idx) => {
            const invData = car._inv || {};
            const imgUrl = invData.image || '';
            const imgHtml = imgUrl
                ? `<img src="${esc(imgUrl)}" alt="${esc(car.name)}" class="inv-thumb" loading="lazy">`
                : '<span class="inv-thumb-empty">🚗</span>';
            return `<tr class="inventory-row" data-inv-idx="${idx}">
                <td class="inv-image">${imgHtml}</td>
                <td class="inv-maker">${esc(car.maker)}</td>
                <td class="inv-name"><strong>${esc(car.name)}</strong></td>
                <td class="inv-grade">${truncateStr(esc(invData.grade || ''), 30)}</td>
                <td class="td-type">${esc(car.type || '')}</td>
                <td class="inv-year">${esc(invData.year || '---')}年</td>
                <td class="inv-price">${esc(invData.price || '---')}</td>
                <td class="inv-total">${esc(invData.totalPrice || '---')}</td>
                <td class="inv-mileage">${esc(invData.mileage || '---')}</td>
                <td class="inv-color"><span class="color-chip" style="background:${invColorCSS(invData.color)}"></span>${esc(invData.color || '---')}</td>
                <td class="inv-inspection">${esc(invData.inspection || '---')}</td>
                <td class="inv-link"><a href="${esc(invData.url || '#')}" target="_blank" onclick="event.stopPropagation()">🔗</a></td>
            </tr>`;
        }).join('');

        resultsTableBody.querySelectorAll('.inventory-row').forEach(row => {
            row.addEventListener('click', () => {
                const idx = parseInt(row.dataset.invIdx);
                const car = window._lastInventoryResults[idx];
                if (car) openInventoryModal(car);
            });
        });
    }

    function esc(s) {
        const d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }
    function truncateStr(s, n) {
        return s.length > n ? s.substring(0, n) + '…' : s;
    }
    function invColorCSS(c) {
        if (!c) return 'transparent';
        c = c.toLowerCase();
        if (c.includes('黒')) return '#333';
        if (c.includes('白') || c.includes('真珠') || c.includes('パール')) return '#f0f0f0';
        if (c.includes('銀') || c.includes('灰') || c.includes('グレー')) return '#999';
        if (c.includes('赤')) return '#e74c3c';
        if (c.includes('青') || c.includes('ブルー')) return '#3498db';
        if (c.includes('紺')) return '#2c3e7a';
        if (c.includes('紫')) return '#8e44ad';
        if (c.includes('茶')) return '#8B4513';
        if (c.includes('緑')) return '#27ae60';
        if (c.includes('黄')) return '#f1c40f';
        if (c.includes('オレンジ') || c.includes('橙')) return '#e67e22';
        return 'transparent';
    }

    function renderTable(cars) {
        resultsTableBody.innerHTML = cars.map(car => {
            const fuelEco = getVal(car, 'fuelEco') || '-';
            const fuelEcoShort = fuelEco.split('(')[0].split('km')[0];
            return `<tr data-id="${car.id}">
                <td class="td-maker">${car.maker}</td>
                <td class="td-name">${car.name}</td>
                <td class="td-type">${car.type}</td>
                <td class="td-fuel">${fuelBadge(car.fuel)}</td>
                <td class="td-fueleco">${fuelEcoShort}</td>
                <td class="td-seats">${car.seats}人</td>
                <td class="td-size">${getVal(car,'length') || '-'}</td>
                <td class="td-size">${getVal(car,'width') || '-'}</td>
                <td class="td-size">${getVal(car,'height') || '-'}</td>
                <td class="td-price">${getVal(car,'newPrice') || '-'}</td>
            </tr>`;
        }).join('');

        resultsTableBody.querySelectorAll('tr').forEach(row => {
            row.addEventListener('click', () => openModal(parseInt(row.dataset.id)));
        });
    }

    function renderGrid(cars) {
        resultsGrid.innerHTML = cars.map((car, i) => `
            <div class="car-card" data-id="${car.id}" style="animation-delay:${i * 0.03}s">
                <div class="car-card-image">
                    <span class="car-emoji">${car.emoji}</span>
                    <span class="car-card-type-badge">${car.type}</span>
                </div>
                <div class="car-card-body">
                    <div class="car-card-maker">${car.maker}</div>
                    <div class="car-card-name">${car.name}</div>
                    <div class="car-card-specs">
                        <span class="car-card-spec"><span class="car-card-spec-icon">⛽</span>${(getVal(car,'fuelEco')||'').split('(')[0]}</span>
                        <span class="car-card-spec"><span class="car-card-spec-icon">👥</span>${car.seats}人</span>
                    </div>
                    <div class="car-card-price">
                        <span class="car-card-price-label">新車価格</span>${getVal(car,'newPrice') || '-'}
                    </div>
                </div>
            </div>
        `).join('');
        resultsGrid.querySelectorAll('.car-card').forEach(card => {
            card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
        });
    }

    // === Init Chip Grids ===
    initChipGrid(makerChips, 'すべてのメーカー', executeFilter);
    initChipGrid(typeChips, 'すべて', executeFilter);
    initChipGrid(fuelChips, 'すべて', executeFilter);
    initChipGrid(seatsChips, 'すべて', executeFilter);
    initChipGrid(driveChips, 'すべて', executeFilter);

    // === Dual Range Slider Controller ===
    function initDualRange(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const sliderMin = container.querySelector('.dr-min');
        const sliderMax = container.querySelector('.dr-max');
        const textMin = container.querySelector('.dr-text:first-child') || container.querySelectorAll('.dr-text')[0];
        const textMax = container.querySelectorAll('.dr-text')[1];
        const highlight = container.querySelector('.dr-highlight');
        const absMin = parseFloat(container.dataset.min);
        const absMax = parseFloat(container.dataset.max);

        function updateHighlight() {
            const minVal = parseFloat(sliderMin.value);
            const maxVal = parseFloat(sliderMax.value);
            const range = absMax - absMin;
            const leftPct = ((minVal - absMin) / range) * 100;
            const rightPct = ((maxVal - absMin) / range) * 100;
            highlight.style.left = leftPct + '%';
            highlight.style.width = (rightPct - leftPct) + '%';
        }

        function syncFromSliders() {
            let minV = parseFloat(sliderMin.value);
            let maxV = parseFloat(sliderMax.value);
            if (minV > maxV) { sliderMin.value = maxV; minV = maxV; }
            textMin.value = minV <= absMin ? '' : minV;
            textMax.value = maxV >= absMax ? '' : maxV;
            updateHighlight();
        }

        function syncFromTextMin() {
            const v = textMin.value ? parseFloat(textMin.value) : absMin;
            const clamped = Math.max(absMin, Math.min(v, parseFloat(sliderMax.value)));
            sliderMin.value = clamped;
            updateHighlight();
        }

        function syncFromTextMax() {
            const v = textMax.value ? parseFloat(textMax.value) : absMax;
            const clamped = Math.min(absMax, Math.max(v, parseFloat(sliderMin.value)));
            sliderMax.value = clamped;
            updateHighlight();
        }

        let drTimer = null;
        function debouncedFilter() {
            clearTimeout(drTimer);
            drTimer = setTimeout(executeFilter, 300);
        }

        sliderMin.addEventListener('input', () => { syncFromSliders(); debouncedFilter(); });
        sliderMax.addEventListener('input', () => { syncFromSliders(); debouncedFilter(); });
        textMin.addEventListener('input', () => { syncFromTextMin(); debouncedFilter(); });
        textMax.addEventListener('input', () => { syncFromTextMax(); debouncedFilter(); });

        updateHighlight();

        // Track click: move nearest thumb to click position
        const track = container.querySelector('.dual-range-track');
        track.addEventListener('click', (e) => {
            const rect = track.getBoundingClientRect();
            const pct = (e.clientX - rect.left) / rect.width;
            const clickVal = absMin + pct * (absMax - absMin);
            const curMin = parseFloat(sliderMin.value);
            const curMax = parseFloat(sliderMax.value);
            const distMin = Math.abs(clickVal - curMin);
            const distMax = Math.abs(clickVal - curMax);
            if (distMin <= distMax) {
                sliderMin.value = Math.min(clickVal, curMax);
            } else {
                sliderMax.value = Math.max(clickVal, curMin);
            }
            syncFromSliders();
            debouncedFilter();
        });

        container._reset = () => {
            sliderMin.value = absMin;
            sliderMax.value = absMax;
            textMin.value = '';
            textMax.value = '';
            updateHighlight();
        };
    }

    initDualRange('dualFuelEco');
    initDualRange('dualWidth');
    initDualRange('dualLength');
    initDualRange('dualHeight');
    initDualRange('dualYear');
    initDualRange('dualBudget');
    initSizePanel();

    // === Event Listeners ===
    executeSearch.addEventListener('click', () => {
        executeFilter();
        filterSidebar.classList.remove('open');
        document.querySelector('.sidebar-overlay')?.classList.remove('active');
    });

    keywordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') executeFilter();
    });

    sortSelect.addEventListener('change', () => {
        if (currentResults.length) {
            currentResults = sortResults(currentResults, sortSelect.value);
            renderResults(currentResults);
        }
    });

    resetFilters.addEventListener('click', () => {
        keywordInput.value = '';
        makerChips._reset();
        typeChips._reset();
        fuelChips._reset();
        seatsChips._reset();
        driveChips._reset();
        document.getElementById('dualFuelEco')._reset();
        document.getElementById('dualWidth')._reset();
        document.getElementById('dualLength')._reset();
        document.getElementById('dualHeight')._reset();
        document.getElementById('dualYear')._reset();
        const dualBudget = document.getElementById('dualBudget');
        if (dualBudget && dualBudget._reset) dualBudget._reset();
        executeFilter();
    });

    // View Toggle (removed - always table view)

    // Mobile Filter Toggle
    let overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    document.body.appendChild(overlay);

    mobileFilterToggle.addEventListener('click', () => {
        filterSidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });
    overlay.addEventListener('click', () => {
        filterSidebar.classList.remove('open');
        overlay.classList.remove('active');
    });

    // === MAKER URLs ===
    const MAKER_URLS = {
        'トヨタ': 'https://toyota.jp/', 'ホンダ': 'https://www.honda.co.jp/auto/',
        '日産': 'https://www.nissan.co.jp/', 'マツダ': 'https://www.mazda.co.jp/',
        'スバル': 'https://www.subaru.jp/', 'スズキ': 'https://www.suzuki.co.jp/car/',
        'ダイハツ': 'https://www.daihatsu.co.jp/', '三菱': 'https://www.mitsubishi-motors.co.jp/',
        'レクサス': 'https://lexus.jp/', '光岡': 'https://www.mitsuoka-motor.com/',
        'メルセデス・ベンツ': 'https://www.mercedes-benz.co.jp/', 'BMW': 'https://www.bmw.co.jp/',
        'アウディ': 'https://www.audi.co.jp/', 'フォルクスワーゲン': 'https://www.volkswagen.co.jp/',
        'ボルボ': 'https://www.volvocars.com/jp/', 'ポルシェ': 'https://www.porsche.com/japan/',
        'MINI': 'https://www.mini.jp/', 'テスラ': 'https://www.tesla.com/ja_jp/',
        'ジープ': 'https://www.jeep-japan.com/', 'プジョー': 'https://www.peugeot.co.jp/',
        'ルノー': 'https://www.renault.jp/', 'フィアット': 'https://www.fiat.co.jp/',
        'アバルト': 'https://www.abarth.co.jp/', 'アルファロメオ': 'https://www.alfaromeo.co.jp/',
        'ランドローバー': 'https://www.landrover.co.jp/', 'ジャガー': 'https://www.jaguar.co.jp/',
        'フェラーリ': 'https://www.ferrari.com/ja-JP/', 'ランボルギーニ': 'https://www.lamborghini.com/jp-en/',
        'ヒョンデ': 'https://www.hyundai.com/jp/', 'BYD': 'https://byd.co.jp/'
    };
    function getMakerUrl(maker) { return MAKER_URLS[maker] || `https://www.google.com/search?q=${encodeURIComponent(maker + ' 公式サイト')}`; }
    function getSpecSearchUrl(maker, name) { return `https://www.google.com/search?q=${encodeURIComponent(maker + ' ' + name + ' 主要諸元 スペック')}`; }
    function imgSearchUrl(maker, name, type) { return `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(maker + ' ' + name + ' ' + type)}`; }

    // === Variants Table ===
    function renderVariants(car) {
        if (!car.variants || !car.variants.length) return '';
        let rows = car.variants.map(v => `
            <tr>
                <td style="font-weight:600;color:var(--accent-cyan)">${v.name}</td>
                <td>${v.length || '-'}</td><td>${v.width || '-'}</td><td>${v.height || '-'}</td>
                <td>${v.fuelEco || '-'}</td><td>${v.price || '-'}</td>
            </tr>`).join('');
        return `<div class="specs-section">
                <div class="specs-title">🔀 ボディタイプ別スペック</div>
                <div style="overflow-x:auto">
                <table class="specs-table variants-table">
                    <thead><tr style="border-bottom:2px solid var(--border-hover)">
                        <th>タイプ</th><th>全長</th><th>全幅</th><th>全高</th><th>燃費</th><th>価格</th>
                    </tr></thead>
                    <tbody>${rows}</tbody>
                </table></div></div>`;
    }

    // === Modal ===
    function openModal(carId, genIndex) {
        const car = CAR_DATABASE.find(c => c.id === carId);
        if (!car) return;
        // Store for compare system
        window._currentModalCar = {
            id: car.id, maker: car.maker, name: car.name, type: car.type, emoji: car.emoji,
            price: getVal(car,'newPrice'), fuelEco: getVal(car,'fuelEco'), engine: getVal(car,'engine'),
            fuel: getVal(car,'fuel'), drive: getVal(car,'drive'), seats: car.seats,
            length: getVal(car,'length'), width: getVal(car,'width'), height: getVal(car,'height'),
            weight: getVal(car,'weight'), years: car.years, isInventory: false
        };
        const memo = getCarEdits(carId).memo || '';
        const gens = car.generations || [];
        const activeGenIdx = (genIndex !== undefined) ? genIndex : -1;
        let displayData;
        if (activeGenIdx >= 0 && gens[activeGenIdx]) {
            const g = gens[activeGenIdx];
            displayData = { years: g.years, newPrice: g.newPrice, engine: g.engine, fuel: g.fuel,
                fuelEco: g.fuelEco, drive: g.drive, length: g.length, width: g.width,
                height: g.height, weight: g.weight || car.weight, talkPoints: g.talkPoints || car.talkPoints };
        } else {
            displayData = { years: car.years, newPrice: getVal(car,'newPrice'), engine: getVal(car,'engine'),
                fuel: getVal(car,'fuel'), fuelEco: getVal(car,'fuelEco'), drive: getVal(car,'drive'),
                length: getVal(car,'length'), width: getVal(car,'width'), height: getVal(car,'height'),
                weight: getVal(car,'weight'), talkPoints: getVal(car,'talkPoints') || car.talkPoints };
        }

        let genTabsHtml = '';
        if (gens.length > 0) {
            genTabsHtml = `<div class="gen-tabs">`;
            gens.forEach((g, i) => { genTabsHtml += `<button class="gen-tab ${activeGenIdx === i ? 'active' : ''}" data-gen="${i}">${g.genName}</button>`; });
            genTabsHtml += `<button class="gen-tab ${activeGenIdx === -1 ? 'active' : ''}" data-gen="-1">現行モデル</button></div>`;
        }

        const searchQ = encodeURIComponent(car.maker + ' ' + car.name + (activeGenIdx >= 0 ? ' ' + gens[activeGenIdx].genName : ''));

        modalContent.innerHTML = `
            <div class="modal-hero">
                <span class="car-emoji-large">${car.emoji}</span>
                <span class="modal-hero-badge">${car.type}</span>
            </div>
            <div class="modal-body">
                <div class="modal-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
                    <div>
                        <div class="modal-maker">${car.maker}</div>
                        <h2 class="modal-car-name">${car.name}</h2>
                        <div class="modal-car-sub">${displayData.years}</div>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap">
                        <button class="action-btn compare-add-btn" onclick="window._addToCompare()">🔀 比較に追加</button>
                    </div>
                </div>
                ${genTabsHtml}
                <div class="image-links-section">
                    <a href="${imgSearchUrl(car.maker, car.name + (activeGenIdx >= 0 ? ' ' + gens[activeGenIdx].genName : ''), '外装 エクステリア')}" target="_blank" class="img-link-btn">📸 外装写真</a>
                    <a href="${imgSearchUrl(car.maker, car.name + (activeGenIdx >= 0 ? ' ' + gens[activeGenIdx].genName : ''), '内装 インテリア')}" target="_blank" class="img-link-btn">🛋️ 内装写真</a>
                    <a href="https://www.google.com/search?q=${searchQ}+カタログ+PDF" target="_blank" class="img-link-btn">📄 カタログ</a>
                    <a href="${getMakerUrl(car.maker)}" target="_blank" class="img-link-btn" style="background:rgba(46,204,113,0.15);border-color:rgba(46,204,113,0.3)">🏭 公式サイト</a>
                    <a href="${getSpecSearchUrl(car.maker, car.name)}" target="_blank" class="img-link-btn" style="background:rgba(52,152,219,0.15);border-color:rgba(52,152,219,0.3)">📋 公式スペック</a>
                </div>
                <div class="info-grid">
                    <div class="info-card"><div class="info-card-icon">💰</div><div class="info-card-label">新車価格</div><div class="info-card-value price" data-field="newPrice">${displayData.newPrice}</div></div>
                    <div class="info-card"><div class="info-card-icon">⛽</div><div class="info-card-label">燃費</div><div class="info-card-value fuel-good" data-field="fuelEco">${displayData.fuelEco}</div></div>
                    <div class="info-card"><div class="info-card-icon">🔧</div><div class="info-card-label">エンジン</div><div class="info-card-value" data-field="engine">${displayData.engine}</div></div>
                    <div class="info-card"><div class="info-card-icon">⛽</div><div class="info-card-label">燃料</div><div class="info-card-value" data-field="fuel">${displayData.fuel}</div></div>
                    <div class="info-card"><div class="info-card-icon">👥</div><div class="info-card-label">乗車定員</div><div class="info-card-value">${car.seats}人</div></div>
                    <div class="info-card"><div class="info-card-icon">🚗</div><div class="info-card-label">駆動方式</div><div class="info-card-value" data-field="drive">${displayData.drive}</div></div>
                </div>
                <div class="specs-section">
                    <div class="specs-title">📐 ボディサイズ</div>
                    <table class="specs-table">
                        <tr><td>全長</td><td data-field="length">${displayData.length}</td></tr>
                        <tr><td>全幅</td><td data-field="width">${displayData.width}</td></tr>
                        <tr><td>全高</td><td data-field="height">${displayData.height}</td></tr>
                        <tr><td>車両重量</td><td data-field="weight">${displayData.weight}</td></tr>
                        <tr><td>荷室容量</td><td data-field="trunk">${getVal(car,'trunk')}</td></tr>
                    </table>
                    <div style="margin-top:8px;padding:8px 12px;background:rgba(241,196,15,0.08);border:1px solid rgba(241,196,15,0.2);border-radius:8px;font-size:11px;color:rgba(255,255,255,0.5);line-height:1.6">
                        ⚠️ スペック値はグレード・オプションにより異なります。正確な数値は<a href="${getSpecSearchUrl(car.maker, car.name)}" target="_blank" style="color:rgba(100,180,255,0.8);text-decoration:underline">メーカー公式 主要諸元表</a>をご確認ください。
                    </div>
                </div>
                ${renderVariants(car)}
                <div class="specs-section">
                    <div class="specs-title">✨ 主な特徴</div>
                    <table class="specs-table">
                        ${car.features.map(f => `<tr><td colspan="2" style="color:var(--text-primary)">• ${f}</td></tr>`).join('')}
                    </table>
                </div>
                <div class="talk-section">
                    <div class="talk-title">⭐ おすすめポイント</div>
                    <div class="talk-points" id="talkPointsList">
                        ${displayData.talkPoints.map(tp => `<div class="talk-point"><span class="talk-point-icon">💡</span><span class="talk-point-text">${tp}</span></div>`).join('')}
                    </div>
                </div>
                <div class="memo-section">
                    <div class="memo-title">📝 自分用メモ</div>
                    <textarea class="memo-textarea" id="memoTextarea" placeholder="お客様の反応、中古相場、自分用の覚え書きなどを記入...">${memo}</textarea>
                    <button class="memo-save-btn" id="memoSaveBtn">💾 メモを保存</button>
                </div>
                <div class="rivals-section">
                    <div class="rivals-title">🔄 ライバル車種</div>
                    <div class="rivals-grid">
                        ${car.rivals.map(r => {
                            const rival = CAR_DATABASE.find(c => r.includes(c.name));
                            return `<div class="rival-card" ${rival ? `data-id="${rival.id}"` : ''}>
                                <div class="rival-emoji">${rival ? rival.emoji : '🚗'}</div>
                                <div class="rival-name">${r}</div>
                            </div>`;
                        }).join('')}
                    </div>
                </div>
            </div>`;

        document.getElementById('memoSaveBtn').addEventListener('click', () => {
            saveCarEdits(carId, { memo: document.getElementById('memoTextarea').value });
            document.getElementById('memoSaveBtn').textContent = '✅ 保存しました！';
            setTimeout(() => { document.getElementById('memoSaveBtn').textContent = '💾 メモを保存'; }, 1500);
        });

        modalContent.querySelectorAll('.gen-tab').forEach(tab => {
            tab.addEventListener('click', () => openModal(carId, parseInt(tab.dataset.gen)));
        });

        modalContent.querySelectorAll('.rival-card[data-id]').forEach(rc => {
            rc.addEventListener('click', () => openModal(parseInt(rc.dataset.id)));
        });

        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalContent.scrollTop = 0;
    }

    // === Edit Mode ===
    window._startEdit = function(carId) {
        const car = CAR_DATABASE.find(c => c.id === carId);
        if (!car) return;
        const editableFields = ['newPrice','fuelEco','engine','fuel','drive','length','width','height','weight','trunk'];
        modalContent.querySelectorAll('[data-field]').forEach(cell => {
            const field = cell.dataset.field;
            if (!editableFields.includes(field)) return;
            cell.innerHTML = `<input type="text" class="edit-input" value="${cell.textContent}" data-edit-field="${field}">`;
        });
        const editBtn = modalContent.querySelector('.edit-btn');
        editBtn.textContent = '💾 保存';
        editBtn.onclick = () => {
            const edits = {};
            modalContent.querySelectorAll('.edit-input').forEach(inp => { edits[inp.dataset.editField] = inp.value; });
            saveCarEdits(carId, edits);
            openModal(carId);
        };
    };

    function closeModal() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const compModal = document.getElementById('compareModal');
            if (compModal && compModal.style.display === 'flex') { compModal.style.display = 'none'; return; }
            closeModal();
        }
    });

    // === Inventory Detail Modal ===
    function openInventoryModal(car) {
        const inv = car._inv || {};
        // Flexible matching: exact -> partial (inventory name contains DB name) -> reverse
        const dbCar = CAR_DATABASE.find(c => c.maker === car.maker && c.name === car.name)
            || CAR_DATABASE.find(c => c.maker === car.maker && car.name.includes(c.name))
            || CAR_DATABASE.find(c => c.maker === car.maker && c.name && c.name.includes(car.name))
            || null;
        const fuel = inv.fuelType || car.fuel || '';
        const fuelEco = car.fuelEco || (dbCar ? getVal(dbCar, 'fuelEco') : '') || '';
        const engine = inv.engineType || (dbCar ? getVal(dbCar, 'engine') : '') || '';
        const drive = inv.driveType || car.drive || '';
        const seats = inv.seats || car.seats || 0;
        const cLength = inv.length || car.length || '';
        const cWidth = inv.width || car.width || '';
        const cHeight = inv.height || car.height || '';
        const weight = inv.weight || (dbCar ? getVal(dbCar, 'weight') : '') || '';
        const trunk = (dbCar ? getVal(dbCar, 'trunk') : '') || '';
        const transmission = inv.transmission || '';
        const doors = inv.doors || '';
        const seatRows = inv.seatRows || '';
        const bodyType = inv.bodyType || '';
        const features = dbCar ? dbCar.features || [] : [];
        const talkPoints = dbCar ? (getVal(dbCar, 'talkPoints') || dbCar.talkPoints || []) : [];
        const emoji = car.emoji || '🚗';
        const type = car.type || '';

        // Store for compare
        window._currentModalCar = {
            id: car.id, maker: car.maker, name: car.name, type: type, emoji: emoji,
            price: inv.price || '', totalPrice: inv.totalPrice || '',
            fuelEco: fuelEco, engine: engine, fuel: fuel, drive: drive, seats: seats,
            length: cLength, width: cWidth, height: cHeight, weight: weight,
            years: inv.year ? inv.year + '年' : '', mileage: inv.mileage || '',
            color: inv.color || '', inspection: inv.inspection || '',
            displacement: inv.displacement || '', repairHistory: inv.repairHistory || '',
            invUrl: inv.url || '', isInventory: true
        };

        const searchQ = encodeURIComponent(car.maker + ' ' + car.name);

        modalContent.innerHTML = `
            <div class="modal-hero inventory-hero">
                ${inv.image ? `<img src="${inv.image}" class="inv-modal-image" alt="${car.name}" onerror="this.style.display='none';this.nextElementSibling.style.display=''">` : ''}
                <span class="car-emoji-large" ${inv.image ? 'style="display:none"' : ''}>${emoji}</span>
                <span class="modal-hero-badge">${type}</span>
            </div>
            <div class="modal-body">
                <div class="modal-header" style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
                    <div>
                        <div class="modal-maker">${car.maker}</div>
                        <h2 class="modal-car-name">${car.name}</h2>
                        <div class="modal-car-sub" style="font-size:12px;color:var(--text-muted);max-width:400px;line-height:1.5">${inv.grade || ''}</div>
                    </div>
                    <div style="display:flex;gap:8px;flex-wrap:wrap">
                        <button class="action-btn compare-add-btn" onclick="window._addToCompare()">🔀 比較に追加</button>
                        <a href="${inv.url || '#'}" target="_blank" class="action-btn carsensor-link-btn">🔗 カーセンサーで見る</a>
                    </div>
                </div>

                <div class="info-grid inv-info-grid">
                    <div class="info-card inv-price-card"><div class="info-card-icon">💰</div><div class="info-card-label">本体価格</div><div class="info-card-value price">${inv.price || '---'}</div></div>
                    <div class="info-card inv-total-card"><div class="info-card-icon">💳</div><div class="info-card-label">支払総額</div><div class="info-card-value price">${inv.totalPrice || '---'}</div></div>
                    <div class="info-card"><div class="info-card-icon">📅</div><div class="info-card-label">年式</div><div class="info-card-value">${inv.year || '---'}年</div></div>
                    <div class="info-card"><div class="info-card-icon">🛣️</div><div class="info-card-label">走行距離</div><div class="info-card-value">${inv.mileage || '---'}</div></div>
                    <div class="info-card"><div class="info-card-icon">🎨</div><div class="info-card-label">ボディカラー</div><div class="info-card-value"><span class="color-chip" style="background:${invColorCSS(inv.color)};display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:6px;vertical-align:middle;border:1px solid rgba(255,255,255,0.2)"></span>${inv.color || '---'}</div></div>
                    <div class="info-card"><div class="info-card-icon">📋</div><div class="info-card-label">車検</div><div class="info-card-value">${inv.inspection || '---'}</div></div>
                    <div class="info-card"><div class="info-card-icon">🔧</div><div class="info-card-label">修復歴</div><div class="info-card-value">${inv.repairHistory || '---'}</div></div>
                    <div class="info-card"><div class="info-card-icon">🏎️</div><div class="info-card-label">排気量</div><div class="info-card-value">${inv.displacement || '---'}</div></div>
                </div>

                <div class="image-links-section">
                    <a href="${imgSearchUrl(car.maker, car.name, '外装 エクステリア')}" target="_blank" class="img-link-btn">📸 外装写真</a>
                    <a href="${imgSearchUrl(car.maker, car.name, '内装 インテリア')}" target="_blank" class="img-link-btn">🛋️ 内装写真</a>
                    <a href="https://www.google.com/search?q=${searchQ}+カタログ+PDF" target="_blank" class="img-link-btn">📄 カタログ</a>
                    <a href="${getMakerUrl(car.maker)}" target="_blank" class="img-link-btn" style="background:rgba(46,204,113,0.15);border-color:rgba(46,204,113,0.3)">🏭 公式サイト</a>
                </div>

                ${fuelEco || engine || fuel || transmission || bodyType ? `
                <div class="specs-section">
                    <div class="specs-title">📊 車両スペック</div>
                    <table class="specs-table">
                        ${bodyType ? `<tr><td>ボディタイプ</td><td>${bodyType}</td></tr>` : ''}
                        ${fuelEco ? `<tr><td>燃費 (WLTC)</td><td>${fuelEco}</td></tr>` : ''}
                        ${engine ? `<tr><td>エンジン</td><td>${engine}</td></tr>` : ''}
                        ${fuel ? `<tr><td>燃料</td><td>${fuel}</td></tr>` : ''}
                        ${seats ? `<tr><td>乗車定員</td><td>${typeof seats === 'number' ? seats + '人' : seats}</td></tr>` : ''}
                        ${seatRows ? `<tr><td>シート列数</td><td>${seatRows}</td></tr>` : ''}
                        ${drive ? `<tr><td>駆動方式</td><td>${drive}</td></tr>` : ''}
                        ${transmission ? `<tr><td>ミッション</td><td>${transmission}</td></tr>` : ''}
                        ${doors ? `<tr><td>ドア数</td><td>${doors}ドア</td></tr>` : ''}
                    </table>
                </div>` : ''}

                ${cLength || cWidth || cHeight ? `
                <div class="specs-section">
                    <div class="specs-title">📐 ボディサイズ</div>
                    <table class="specs-table">
                        ${cLength ? `<tr><td>全長</td><td>${typeof cLength === 'number' ? cLength + 'mm' : cLength}</td></tr>` : ''}
                        ${cWidth ? `<tr><td>全幅</td><td>${typeof cWidth === 'number' ? cWidth + 'mm' : cWidth}</td></tr>` : ''}
                        ${cHeight ? `<tr><td>全高</td><td>${typeof cHeight === 'number' ? cHeight + 'mm' : cHeight}</td></tr>` : ''}
                        ${weight ? `<tr><td>車両重量</td><td>${typeof weight === 'number' ? weight + 'kg' : weight}</td></tr>` : ''}
                        ${trunk ? `<tr><td>荷室容量</td><td>${trunk}</td></tr>` : ''}
                    </table>
                </div>` : ''}

                ${features.length ? `
                <div class="specs-section">
                    <div class="specs-title">✨ 主な特徴</div>
                    <table class="specs-table">
                        ${features.map(f => `<tr><td colspan="2" style="color:var(--text-primary)">• ${f}</td></tr>`).join('')}
                    </table>
                </div>` : ''}

                ${talkPoints && talkPoints.length ? `
                <div class="talk-section">
                    <div class="talk-title">⭐ おすすめポイント</div>
                    <div class="talk-points">
                        ${talkPoints.map(tp => `<div class="talk-point"><span class="talk-point-icon">💡</span><span class="talk-point-text">${tp}</span></div>`).join('')}
                    </div>
                </div>` : ''}
            </div>
        `;

        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        modalContent.scrollTop = 0;
    }

    // === Compare System ===
    window._compareList = [];
    const comparePanel = document.getElementById('comparePanel');
    const compareCount = document.getElementById('compareCount');
    const compareSlots = document.getElementById('compareSlots');

    window._addToCompare = function() {
        const car = window._currentModalCar;
        if (!car) return;
        // Duplicate check
        const key = car.maker + '|' + car.name + '|' + (car.isInventory ? car.price : car.id);
        if (window._compareList.some(c => (c.maker + '|' + c.name + '|' + (c.isInventory ? c.price : c.id)) === key)) {
            alert('この車は既に比較リストに追加されています。');
            return;
        }
        window._compareList.push({...car});
        updateComparePanel();
        // Visual feedback on button
        const btn = document.querySelector('.compare-add-btn');
        if (btn) { btn.textContent = '✅ 追加済み'; btn.disabled = true; setTimeout(() => { btn.textContent = '🔀 比較に追加'; btn.disabled = false; }, 1200); }
    };

    window._removeFromCompare = function(idx) {
        window._compareList.splice(idx, 1);
        updateComparePanel();
    };

    function updateComparePanel() {
        if (!comparePanel) return;
        const list = window._compareList;
        if (list.length === 0) {
            comparePanel.classList.remove('visible');
            return;
        }
        comparePanel.classList.add('visible');
        if (compareCount) compareCount.textContent = list.length;

        compareSlots.innerHTML = list.map((car, i) => `
            <div class="compare-slot">
                <span class="compare-slot-emoji">${car.emoji || '🚗'}</span>
                <div class="compare-slot-info">
                    <div class="compare-slot-maker">${car.maker}</div>
                    <div class="compare-slot-name">${car.name}</div>
                </div>
                <button class="compare-slot-remove" onclick="window._removeFromCompare(${i})">×</button>
            </div>
        `).join('');
    }

    // Compare button handler
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', openCompareModal);
    }

    function openCompareModal() {
        const list = window._compareList;
        if (list.length < 2) { alert('比較するには2台以上追加してください。'); return; }

        const compareModal = document.getElementById('compareModal');
        const compareContent = document.getElementById('compareContent');
        if (!compareModal || !compareContent) return;

        const cols = list.length;
        const colW = cols === 2 ? '50%' : '33.33%';

        // Define comparison rows
        const rows = [
            { label: '', render: c => `<span style="font-size:32px">${c.emoji || '🚗'}</span>` },
            { label: '', render: c => `<strong style="font-size:16px;color:var(--accent-cyan)">${c.maker}</strong><br><strong style="font-size:18px">${c.name}</strong>` },
            { label: 'タイプ', render: c => c.type || '-' },
            { label: '価格', render: c => c.isInventory ? (c.price || '-') : (c.price || '-'), cls: 'price' },
            { label: '支払総額', render: c => c.totalPrice || '-', hideNormal: true },
            { label: '年式', render: c => c.years || '-' },
            { label: '走行距離', render: c => c.mileage || '-', hideNormal: true },
            { label: '色', render: c => c.color || '-', hideNormal: true },
            { label: '車検', render: c => c.inspection || '-', hideNormal: true },
            { label: '燃費', render: c => c.fuelEco || '-' },
            { label: 'エンジン', render: c => c.engine || '-' },
            { label: '燃料', render: c => c.fuel || '-' },
            { label: '駆動方式', render: c => c.drive || '-' },
            { label: '乗車定員', render: c => c.seats ? c.seats + '人' : '-' },
            { label: '全長', render: c => c.length || '-' },
            { label: '全幅', render: c => c.width || '-' },
            { label: '全高', render: c => c.height || '-' },
            { label: '車両重量', render: c => c.weight || '-' },
        ];

        // Check if any car is inventory
        const hasInventory = list.some(c => c.isInventory);

        compareContent.innerHTML = `
            <div class="compare-grid" style="grid-template-columns: 120px repeat(${cols}, 1fr)">
                ${rows.filter(r => !r.hideNormal || hasInventory).map(row => `
                    <div class="compare-label">${row.label}</div>
                    ${list.map(c => `<div class="compare-cell ${row.cls || ''}">${row.render(c)}</div>`).join('')}
                `).join('')}
            </div>
            ${hasInventory ? `<div style="text-align:center;margin-top:16px">
                ${list.filter(c => c.isInventory && c.invUrl).map(c => `<a href="${c.invUrl}" target="_blank" class="action-btn carsensor-link-btn" style="margin:0 8px">🔗 ${c.name} をカーセンサーで見る</a>`).join('')}
            </div>` : ''}
        `;

        compareModal.style.display = 'flex';
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
    }

    // Compare modal close
    const compareModalClose = document.getElementById('compareModalClose');
    const compareModal = document.getElementById('compareModal');
    if (compareModalClose) compareModalClose.addEventListener('click', () => { compareModal.style.display = 'none'; document.body.style.overflow = ''; });
    if (compareModal) compareModal.addEventListener('click', (e) => { if (e.target === compareModal) { compareModal.style.display = 'none'; document.body.style.overflow = ''; } });

    // === Initial Load: Show all cars ===
    executeFilter();
});
