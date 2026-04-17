// くるまれいんず - 在庫モード制御 v2
// フィルター連動版: サイドバーは表示のまま、在庫データに対してフィルタリング可能
(function() {
    'use strict';

    let inventoryData = null;
    let isInventoryMode = false;
    let originalHeaderHTML = '';

    // DOM Elements
    const toggle = document.getElementById('inventoryToggle');
    const inventoryBadge = document.getElementById('inventoryBadge');
    const inventoryInfo = document.getElementById('inventoryInfo');
    const shopNameEl = document.getElementById('shopNameText');
    const lastUpdatedEl = document.getElementById('lastUpdatedText');
    const resultsTableWrap = document.getElementById('resultsTableWrap');
    const hitCount = document.getElementById('hitCount');

    if (!toggle) return;

    // Save original table header
    const headerRow = resultsTableWrap ? resultsTableWrap.querySelector('thead tr') : null;
    if (headerRow) originalHeaderHTML = headerRow.innerHTML;

    // Load inventory data via <script> tag (file:// safe, no CORS)
    function loadInventory() {
        const script = document.createElement('script');
        script.src = './inventory/inventory.js';
        script.onload = function() {
            if (window.INVENTORY_DATA) {
                inventoryData = window.INVENTORY_DATA;
                if (inventoryBadge) {
                    inventoryBadge.textContent = inventoryData.totalCount + ' 台在庫';
                }
                toggle.disabled = false;
                toggle.title = 'フロンティアモータース在庫に切り替え';
            }
        };
        script.onerror = function() {
            fetch('./inventory/inventory.json')
                .then(r => r.json())
                .then(data => {
                    inventoryData = data;
                    if (inventoryBadge) {
                        inventoryBadge.textContent = data.totalCount + ' 台在庫';
                    }
                    toggle.disabled = false;
                })
                .catch(() => {
                    toggle.disabled = true;
                    toggle.title = '在庫データなし。scraper.py を実行してください。';
                    if (inventoryBadge) inventoryBadge.textContent = '在庫なし';
                });
        };
        document.head.appendChild(script);
    }

    // Map inventory items to CAR_DATABASE-compatible objects
    // Merges inventory-specific data (_inv) with vehicle spec data from CAR_DATABASE
    function buildMatchedCars() {
        if (!inventoryData || !inventoryData.inventory) return [];
        if (typeof CAR_DATABASE === 'undefined') return [];

        // Build lookup for flexible matching
        // Try exact match first, then partial match (inventory name contains DB name)
        function findDbCar(maker, name) {
            // Exact match
            let match = CAR_DATABASE.find(c => c.maker === maker && c.name === name);
            if (match) return match;
            // Inventory name contains DB name (e.g., クラウンクロスオーバー contains クラウン)
            match = CAR_DATABASE.find(c => c.maker === maker && name.includes(c.name));
            if (match) return match;
            // DB name contains inventory name
            match = CAR_DATABASE.find(c => c.maker === maker && c.name.includes(name));
            return match || null;
        }

        return inventoryData.inventory.map((inv, idx) => {
            const dbCar = findDbCar(inv.maker, inv.name);

            // Merge: use DB spec data for filter fields, add inventory-specific data
            const merged = {
                id: 90000 + idx, // unique ID for inventory items
                maker: inv.maker,
                name: inv.name,
                // From DB if available (for filtering)
                type: dbCar ? dbCar.type : '',
                fuel: dbCar ? dbCar.fuel : '',
                fuelEco: dbCar ? dbCar.fuelEco : '',
                seats: dbCar ? dbCar.seats : 0,
                drive: dbCar ? (dbCar.drive || '') : '',
                length: dbCar ? dbCar.length : '',
                width: dbCar ? dbCar.width : '',
                height: dbCar ? dbCar.height : '',
                years: dbCar ? dbCar.years : '',
                emoji: dbCar ? dbCar.emoji : '🚗',
                // Inventory year for year filter
                _invYear: inv.year ? parseInt(inv.year) : 0,
                _invGrade: inv.grade || '',
                // Full inventory data for rendering
                _inv: inv
            };

            return merged;
        });
    }

    // Toggle event
    toggle.addEventListener('change', function() {
        isInventoryMode = this.checked;
        document.body.classList.toggle('inventory-mode', isInventoryMode);

        if (isInventoryMode) {
            activateInventoryMode();
        } else {
            deactivateInventoryMode();
        }
    });

    function activateInventoryMode() {
        if (!inventoryData) return;

        // Show shop info bar
        if (inventoryInfo) inventoryInfo.classList.add('visible');
        if (shopNameEl) shopNameEl.textContent = inventoryData.shopName;
        if (lastUpdatedEl) lastUpdatedEl.textContent = '最終更新: ' + inventoryData.lastUpdated;

        // Show budget filter
        const budgetGroup = document.getElementById('budgetFilterGroup');
        if (budgetGroup) budgetGroup.style.display = '';

        // Build matched cars array and set filter flag
        window._inventoryMatchedCars = buildMatchedCars();
        window._inventoryFilterActive = true;

        // Update hit count badge style
        if (hitCount) hitCount.style.borderColor = '#f59e0b';

        // Trigger existing filter with inventory data
        const searchBtn = document.getElementById('executeSearch');
        if (searchBtn) searchBtn.click();
    }

    function deactivateInventoryMode() {
        // Hide shop info
        if (inventoryInfo) inventoryInfo.classList.remove('visible');

        // Hide & reset budget filter
        const budgetGroup = document.getElementById('budgetFilterGroup');
        if (budgetGroup) budgetGroup.style.display = 'none';
        const bMin = document.getElementById('budgetMinInput');
        const bMax = document.getElementById('budgetMaxInput');
        if (bMin) bMin.value = '';
        if (bMax) bMax.value = '';
        // Reset budget sliders too
        const dualBudget = document.getElementById('dualBudget');
        if (dualBudget) {
            const sliderMin = dualBudget.querySelector('.dr-min');
            const sliderMax = dualBudget.querySelector('.dr-max');
            if (sliderMin) sliderMin.value = sliderMin.min;
            if (sliderMax) sliderMax.value = sliderMax.max;
            const hl = dualBudget.querySelector('.dr-highlight');
            if (hl) { hl.style.left = '0%'; hl.style.right = '0%'; }
        }

        // Clear inventory filter flag
        window._inventoryFilterActive = false;
        window._inventoryMatchedCars = null;

        // Restore table header
        if (headerRow && originalHeaderHTML) {
            headerRow.innerHTML = originalHeaderHTML;
        }

        // Restore hit count style
        if (hitCount) hitCount.style.borderColor = '';

        // Re-trigger normal search
        const searchBtn = document.getElementById('executeSearch');
        if (searchBtn) searchBtn.click();
    }

    // Auto-load
    loadInventory();

    // Expose
    window.inventoryMode = {
        isActive: () => isInventoryMode,
        reload: loadInventory
    };
})();
