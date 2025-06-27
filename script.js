// =========================================
// 台湾観光ガイド - メインJavaScript
// =========================================

// Leaflet地図とポリゴン
let map;
let regionPolygons = {};

// 台湾地域の座標データ
const taiwanRegionsGeoData = {
    north: {
        name: '台北エリア',
        color: '#4F46E5',
        coordinates: [
            [25.3, 121.3], [25.3, 121.8], [25.0, 121.8], 
            [24.8, 121.6], [24.8, 121.3], [25.3, 121.3]
        ],
        center: [25.05, 121.55],
        description: '台湾の政治・経済・文化の中心地'
    },
    central: {
        name: '台中エリア',
        color: '#059669',
        coordinates: [
            [24.5, 120.4], [24.5, 121.0], [23.8, 121.0],
            [23.8, 120.4], [24.5, 120.4]
        ],
        center: [24.15, 120.7],
        description: '文化と芸術が息づく創造的な地域'
    },
    south: {
        name: '高雄エリア',
        color: '#DC2626',
        coordinates: [
            [23.5, 120.0], [23.5, 120.8], [22.4, 120.8],
            [22.4, 120.0], [23.5, 120.0]
        ],
        center: [22.95, 120.4],
        description: '港湾都市として栄える南部の玄関口'
    },
    east: {
        name: '花蓮・台東エリア',
        color: '#F59E0B',
        coordinates: [
            [24.5, 121.0], [24.5, 121.8], [22.4, 121.8],
            [22.4, 121.0], [24.5, 121.0]
        ],
        center: [23.45, 121.4],
        description: '大自然と先住民文化が残る美しい東海岸'
    }
};

// 地域データ
const regionsData = {
    north: {
        name: '台北エリア',
        color: '#4F46E5',
        description: '台湾の政治・経済・文化の中心地',
        attractions: [
            {
                id: 1,
                name: '台北101',
                description: '台湾のシンボルタワー。地上101階、高さ508mの超高層ビルで、台北市内を一望できます。展望台からの眺めは圧巻。',
                image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90',
                tags: ['culture', 'landmark'],
                rating: 4.8,
                reviewCount: 2543,
                type: 'landmark'
            },
            {
                id: 2,
                name: '九份老街',
                description: 'ジブリ映画「千と千尋の神隠し」のモデルとされる美しい山間の街。夜の赤提灯が幻想的な光景を演出します。',
                image: 'https://images.unsplash.com/photo-1582001368542-d0b8e9c9529a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90',
                tags: ['culture', 'historic'],
                rating: 4.7,
                reviewCount: 1892,
                type: 'historic'
            },
            {
                id: 3,
                name: '士林夜市',
                description: '台北最大の夜市。台湾グルメの宝庫で、小籠包、牛肉麵、臭豆腐など本場の味を楽しめます。',
                image: 'https://images.unsplash.com/photo-1549887534-88ad96d7e219?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=90',
                tags: ['food', 'night'],
                rating: 4.6,
                reviewCount: 3241,
                type: 'food'
            },
            {
                id: 4,
                name: '淡水老街',
                description: '台湾のベニスと呼ばれる夕日で有名な港町。レトロな街並みと台湾海峡に沈む美しい夕景が魅力です。',
                image: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'historic'],
                rating: 4.5,
                type: 'nature'
            },
            {
                id: 5,
                name: '故宮博物院',
                description: '世界四大博物館の一つ。中国文化の至宝を収蔵し、翠玉白菜や肉形石などの名品を展示する博物館。',
                image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'museum'],
                rating: 4.8,
                type: 'culture'
            },
            {
                id: 6,
                name: '陽明山国家公園',
                description: '台北近郊の自然豊かな国家公園。温泉、美しい花々、そして台北市街を見下ろす絶景で知られています。',
                image: 'https://images.unsplash.com/photo-1559379091-919120cf5a0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'hot-spring'],
                rating: 4.4,
                type: 'nature'
            },
            {
                id: 7,
                name: '象山',
                description: '台北101を正面に望む絶好の撮影スポット。ハイキングコースとしても人気で、台北の夜景を一望できます。',
                image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'scenic'],
                rating: 4.6,
                type: 'nature'
            },
            {
                id: 8,
                name: '猫空',
                description: 'ゴンドラで行く茶畑の里。台北市街を見下ろしながら本格的な台湾茶を楽しめる茶芸館が点在します。',
                image: 'https://images.unsplash.com/photo-1515595967223-69cb3a2f2875?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'culture'],
                rating: 4.3,
                type: 'culture'
            }
        ]
    },
    central: {
        name: '中部エリア',
        color: '#059669',
        description: '文化と芸術が息づく創造的な地域',
        attractions: [
            {
                id: 9,
                name: '日月潭',
                description: '台湾最大の湖。ターコイズブルーの湖水と山々に囲まれた絶景が魅力。サイクリングコースとしても世界的に有名。',
                image: 'https://images.unsplash.com/photo-1509003433451-deb8bb0e2893?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'lake'],
                rating: 4.8,
                type: 'nature'
            },
            {
                id: 10,
                name: '彩虹眷村',
                description: 'レインボービレッジ。おじいさんが一人で描いたカラフルな壁画で村全体が芸術作品に変身した奇跡の村。',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'art'],
                rating: 4.3,
                type: 'culture'
            },
            {
                id: 11,
                name: '宮原眼科',
                description: '日本統治時代の眼科医院を改装したアイスクリーム店。レトロでモダンな内装と絶品アイスクリームが人気。',
                image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['food', 'historic'],
                rating: 4.4,
                type: 'food'
            },
            {
                id: 12,
                name: '逢甲夜市',
                description: '台中最大の夜市。学生街にあり活気にあふれ、台湾B級グルメの発祥地として多くの新メニューが生まれる場所。',
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['food', 'night'],
                rating: 4.5,
                type: 'food'
            },
            {
                id: 13,
                name: '高美湿地',
                description: '台湾のウユニ塩湖と呼ばれる絶景スポット。夕日時には空と水面が一体となる美しい光景が見られます。',
                image: 'https://images.unsplash.com/photo-1559847844-9db42d85a02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'scenic'],
                rating: 4.6,
                type: 'nature'
            },
            {
                id: 14,
                name: '台中公園',
                description: '台中市の中心部にある歴史ある公園。美しい湖心亭は台中のシンボルで、地元市民の憩いの場です。',
                image: 'https://images.unsplash.com/photo-1624447152728-1c1b2ee47e9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'park'],
                rating: 4.2,
                type: 'nature'
            },
            {
                id: 15,
                name: '清境農場',
                description: '台湾のスイスと呼ばれる高原リゾート。羊の牧場と美しい山岳風景、涼しい気候が魅力の避暑地。',
                image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'farm'],
                rating: 4.5,
                type: 'nature'
            }
        ]
    },
    south: {
        name: '南部エリア',
        color: '#DC2626',
        description: '歴史と港町文化が融合する魅力的なエリア',
        attractions: [
            {
                id: 16,
                name: '美麗島駅',
                description: '世界で2番目に美しい地下鉄駅。直径30mの光のドーム「光之穹頂」は人間の歴史を描いた圧巻のアート作品。',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'art'],
                rating: 4.7,
                type: 'culture'
            },
            {
                id: 17,
                name: '蓮池潭',
                description: '高雄を代表する観光スポット。龍の口から入り虎の口から出る龍虎塔と、蓮の花が咲く美しい湖。',
                image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'temple'],
                rating: 4.4,
                type: 'culture'
            },
            {
                id: 18,
                name: '打狗英国領事館',
                description: '台湾に現存する最古の西洋式建築。英国統治時代の領事館で、高雄港と市街を見下ろす絶景スポット。',
                image: 'https://images.unsplash.com/photo-1635947208241-3b4a2a8db8bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'historic'],
                rating: 4.3,
                type: 'culture'
            },
            {
                id: 19,
                name: '六合夜市',
                description: '高雄を代表する夜市。約300mの通りに100を超える屋台が並び、新鮮な海鮮料理や南部の郷土料理を堪能。',
                image: 'https://images.unsplash.com/photo-1516123458095-f9ad8b8fbb1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['food', 'night'],
                rating: 4.4,
                type: 'food'
            },
            {
                id: 20,
                name: '赤崁楼',
                description: 'オランダ統治時代に建設された台南の象徴的な歴史建造物。台湾の京都と呼ばれる古都台南の代表的観光地。',
                image: 'https://images.unsplash.com/photo-1564114071-7b636b12b46b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'historic'],
                rating: 4.6,
                type: 'culture'
            },
            {
                id: 21,
                name: '墾丁国家公園',
                description: '台湾最南端のリゾート地。台湾最大の国立海洋生物博物館があり、美しい海岸線と熱帯の自然が魅力。',
                image: 'https://images.unsplash.com/photo-1609592067928-f51e7da00ae9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'beach'],
                rating: 4.5,
                type: 'nature'
            },
            {
                id: 22,
                name: '駁二芸術特区',
                description: '廃虚の倉庫群をリノベーションしたアートスペース。才能豊かなアーティストの作品が展示される創造の場。',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['culture', 'art'],
                rating: 4.4,
                type: 'culture'
            }
        ]
    },
    east: {
        name: '東部エリア',
        color: '#F59E0B',
        description: '大自然の宝庫、山と海の絶景',
        attractions: [
            {
                id: 23,
                name: '太魯閣国家公園',
                description: '台湾の絶景峡谷。立霧渓が大理石の岩盤を侵食して形成された大渓谷で、台湾自然の美しさを代表する国立公園。',
                image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'park'],
                rating: 4.9,
                type: 'nature'
            },
            {
                id: 24,
                name: '清水断崖',
                description: '太平洋に面した壮大な断崖絶壁。高さ1,000m以上、約21kmに渡って続く台湾東海岸を代表する絶景。',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'scenic'],
                rating: 4.8,
                type: 'nature'
            },
            {
                id: 25,
                name: '七星潭',
                description: '花蓮の美しい石の海岸。弧を描く美しい海岸線と満天の星空で知られる風景区指定の人気スポット。',
                image: 'https://images.unsplash.com/photo-1559847844-9db42d85a02a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'beach'],
                rating: 4.5,
                type: 'nature'
            },
            {
                id: 26,
                name: '花東縦谷',
                description: '海岸山脈と中央山脈に挟まれた美しい渓谷。のどかな田園風景と先住民文化が織りなす自然の楽園。',
                image: 'https://images.unsplash.com/photo-1563379091919-12cd3de11d17?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'culture'],
                rating: 4.7,
                type: 'nature'
            },
            {
                id: 27,
                name: '台東海岸',
                description: '176kmに達する美しい太平洋の海岸線。サーフィン、ホエールウォッチング、ドライブに最適な絶景ルート。',
                image: 'https://images.unsplash.com/photo-1609592067928-f51e7da00ae9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'beach'],
                rating: 4.6,
                type: 'nature'
            },
            {
                id: 28,
                name: '燕子口',
                description: '太魯閣峡谷の見どころの一つ。岩壁に無数の小さな洞穴があり、ツバメが巣を作ることから名付けられた景勝地。',
                image: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'scenic'],
                rating: 4.6,
                type: 'nature'
            },
            {
                id: 29,
                name: '知本温泉',
                description: '台東の代表的な温泉地。美しい自然に囲まれた温泉リゾートで、台湾東部観光の拠点としても人気。',
                image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=90',
                tags: ['nature', 'hot-spring'],
                rating: 4.4,
                type: 'nature'
            }
        ]
    }
};

// 現在選択されている地域
// React風状態管理システム
class TaiwanTourismState {
    constructor() {
        this.state = {
            currentRegion: null,
            currentFilter: 'all',
            selectedAttraction: null,
            isModalOpen: false,
            mapZoomed: false
        };
        this.listeners = {};
    }

    // useState風のAPIを実装
    useState(key, initialValue) {
        if (this.state[key] === undefined) {
            this.state[key] = initialValue;
        }
        
        const setState = (newValue) => {
            const oldValue = this.state[key];
            this.state[key] = typeof newValue === 'function' ? newValue(oldValue) : newValue;
            this.notifyListeners(key, this.state[key], oldValue);
        };
        
        return [this.state[key], setState];
    }

    // useEffect風のAPIを実装
    useEffect(key, callback, dependencies = []) {
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push({ callback, dependencies });
    }

    // リスナーに変更を通知
    notifyListeners(key, newValue, oldValue) {
        if (this.listeners[key]) {
            this.listeners[key].forEach(({ callback, dependencies }) => {
                const shouldUpdate = dependencies.length === 0 || 
                    dependencies.some(dep => this.state[dep] !== oldValue);
                if (shouldUpdate) {
                    callback(newValue, oldValue);
                }
            });
        }
    }

    // 状態を取得
    getState(key) {
        return this.state[key];
    }

    // 状態を直接設定
    setState(key, value) {
        const oldValue = this.state[key];
        this.state[key] = value;
        this.notifyListeners(key, value, oldValue);
    }
}

// グローバル状態管理インスタンス
const appState = new TaiwanTourismState();

// 後方互換性のための変数
let currentRegion = null;
let currentFilter = 'all';

// DOM要素
let regionAreas, regionButtons, attractionsGrid, attractionsDefault;
let selectedRegionName, attractionsTitle;

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeEventListeners();
    initializeTimers();
    initializeHeroSlideshow();
    initializeScrollAnimations();
    initializeFooterLinks();
    initializePopularSpotHandlers();
});

// DOM要素の初期化
function initializeElements() {
    regionButtons = document.querySelectorAll('.region-select-btn');
    attractionsGrid = document.getElementById('attractions-grid');
    attractionsDefault = document.getElementById('attractions-default');
    selectedRegionName = document.getElementById('selected-region-name');
    attractionsTitle = document.getElementById('attractions-title');
    
    // Leaflet地図を初期化
    initializeLeafletMap();
}

// Leaflet地図の初期化
function initializeLeafletMap() {
    // 台湾の中心座標で地図を初期化
    map = L.map('taiwan-map', {
        center: [23.8, 121.0],
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        maxBounds: [[21.5, 119.5], [26.0, 122.5]],
        maxBoundsViscosity: 1.0
    });

    // カスタムタイルレイヤーを追加（明るい地図スタイル）
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // 各地域のポリゴンを追加
    Object.keys(taiwanRegionsGeoData).forEach(regionId => {
        const regionData = taiwanRegionsGeoData[regionId];
        
        const polygon = L.polygon(regionData.coordinates, {
            color: regionData.color,
            fillColor: regionData.color,
            fillOpacity: 0.3,
            weight: 2,
            className: `region-polygon region-${regionId}`
        }).addTo(map);
        
        // ポリゴンにイベントリスナーを追加
        polygon.on('click', () => selectRegion(regionId));
        polygon.on('mouseover', () => {
            polygon.setStyle({
                fillOpacity: 0.6,
                weight: 3
            });
        });
        polygon.on('mouseout', () => {
            if (currentRegion !== regionId) {
                polygon.setStyle({
                    fillOpacity: 0.3,
                    weight: 2
                });
            }
        });
        
        // ポップアップを追加
        polygon.bindPopup(`
            <div style="text-align: center; padding: 0.5rem;">
                <h4 style="margin: 0 0 0.5rem 0; color: ${regionData.color};">${regionData.name}</h4>
                <p style="margin: 0; font-size: 0.875rem;">${regionData.description}</p>
            </div>
        `);
        
        regionPolygons[regionId] = polygon;
    });
}

// イベントリスナーの初期化
function initializeEventListeners() {
    // 地域ボタンクリック
    regionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const regionId = button.getAttribute('data-region');
            selectRegion(regionId);
        });
    });

    // フィルターボタン
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            setFilter(filter);
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // スクロールイベント
    window.addEventListener('scroll', handleScroll);
    
    // リサイズイベント
    window.addEventListener('resize', handleResize);
    
    // ナビゲーションリンクの処理
    initializeNavigation();
}

// 地域選択機能（React風状態管理対応）
function selectRegion(regionId) {
    // 状態を更新
    appState.setState('currentRegion', regionId);
    currentRegion = regionId; // 後方互換性
    
    const regionData = regionsData[regionId];
    if (!regionData) return;

    // 地図の選択状態を更新
    updateMapSelection(regionId);
    
    // ボタンの選択状態を更新
    updateButtonSelection(regionId);
    
    // 地域名を更新
    updateRegionName(regionData.name);
    
    // 観光地を表示
    displayAttractions(regionData.attractions);
    
    // スムーズなアニメーション
    animateRegionChange();
    
    // 選択されたエリアの詳細をコンソールに表示（デバッグ用）
    console.log(`Selected region: ${regionData.name} with ${regionData.attractions.length} attractions`);
}

// 地図の選択状態更新
function updateMapSelection(regionId) {
    // すべてのポリゴンをリセット
    Object.keys(regionPolygons).forEach(id => {
        const polygon = regionPolygons[id];
        const regionData = taiwanRegionsGeoData[id];
        polygon.setStyle({
            fillOpacity: 0.3,
            weight: 2,
            color: regionData.color,
            fillColor: regionData.color
        });
    });
    
    // 選択されたポリゴンをハイライト
    if (regionPolygons[regionId]) {
        const selectedPolygon = regionPolygons[regionId];
        const regionData = taiwanRegionsGeoData[regionId];
        
        selectedPolygon.setStyle({
            fillOpacity: 0.7,
            weight: 4,
            color: regionData.color,
            fillColor: regionData.color,
            dashArray: '10, 5'
        });
        
        // 地図の表示を選択された地域に調整
        map.fitBounds(selectedPolygon.getBounds(), {
            padding: [20, 20],
            maxZoom: 10
        });
    }
}

// ボタンの選択状態更新
function updateButtonSelection(regionId) {
    regionButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    const selectedButton = document.querySelector(`.region-select-btn[data-region="${regionId}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// 地域名更新
function updateRegionName(name) {
    selectedRegionName.textContent = name;
    attractionsTitle.textContent = `${name}の観光スポット`;
}

// 観光地表示
function displayAttractions(attractions) {
    // デフォルト表示を隠す
    attractionsDefault.style.display = 'none';
    attractionsGrid.style.display = 'grid';
    
    // フィルター適用
    const filteredAttractions = filterAttractions(attractions);
    
    // カードを生成
    attractionsGrid.innerHTML = '';
    filteredAttractions.forEach((attraction, index) => {
        const card = createAttractionCard(attraction);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        attractionsGrid.appendChild(card);
        
        // スタガードアニメーション
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// フィルター機能
function filterAttractions(attractions) {
    if (currentFilter === 'all') {
        return attractions;
    }
    
    return attractions.filter(attraction => 
        attraction.tags.includes(currentFilter) || 
        attraction.type === currentFilter
    );
}

// フィルター設定（React風状態管理対応）
function setFilter(filter) {
    appState.setState('currentFilter', filter);
    currentFilter = filter; // 後方互換性
    
    const currentRegionState = appState.getState('currentRegion');
    if (currentRegionState) {
        const regionData = regionsData[currentRegionState];
        displayAttractions(regionData.attractions);
    }
    
    console.log(`Filter changed to: ${filter}`);
}

// 観光地カード作成
function createAttractionCard(attraction) {
    const card = document.createElement('div');
    card.className = 'attraction-card';
    card.onclick = () => showAttractionDetail(attraction);
    
    const tags = attraction.tags.map(tag => 
        `<span class="attraction-tag ${tag}">${getTagText(tag)}</span>`
    ).join('');
    
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="fas fa-star${i < Math.floor(attraction.rating) ? '' : '-o'}"></i>`
    ).join('');
    
    card.innerHTML = `
        <div class="attraction-image-container">
            <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
            <div class="attraction-image-overlay"></div>
        </div>
        <div class="attraction-card-content">
            <h4>${attraction.name}</h4>
            <p>${attraction.description}</p>
            <div class="attraction-tags">
                ${tags}
            </div>
            <div class="attraction-rating">
                <div class="rating-stars">${stars}</div>
                <div class="rating-info">
                    <span class="rating-score">${attraction.rating}</span>
                    <span class="rating-count">(${attraction.reviewCount || 0}件)</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// タグテキスト取得
function getTagText(tag) {
    const tagTexts = {
        'nature': '自然',
        'culture': '文化',
        'food': 'グルメ',
        'historic': '歴史',
        'art': 'アート',
        'temple': '寺院',
        'night': '夜市',
        'park': '公園',
        'beach': 'ビーチ',
        'lake': '湖',
        'landmark': 'ランドマーク',
        'museum': '博物館',
        'hot-spring': '温泉',
        'scenic': '絶景',
        'farm': '牧場'
    };
    return tagTexts[tag] || tag;
}

// 観光地詳細表示
// 強化された観光地詳細表示（React風状態管理対応）
function showAttractionDetail(attraction) {
    // 状態を更新
    appState.setState('selectedAttraction', attraction);
    appState.setState('isModalOpen', true);
    
    // 既存のモーダルを削除
    const existingModal = document.querySelector('.attraction-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = createAttractionModal(attraction);
    document.body.appendChild(modal);
    
    // ボディのスクロールを無効化
    document.body.style.overflow = 'hidden';
    
    // ESCキーで閉じる
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeAttractionModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    console.log(`Opened detailed view for: ${attraction.name}`);
}

// モーダルを作成する関数
function createAttractionModal(attraction) {
    const modal = document.createElement('div');
    modal.className = 'attraction-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'modal-title');
    modal.setAttribute('aria-modal', 'true');
    modal.tabIndex = -1;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(25px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        animation: modalFadeIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        overflow-y: auto;
    `;
    
    const content = document.createElement('div');
    content.className = 'modal-content';
    content.style.cssText = `
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9));
        border-radius: 24px;
        max-width: 700px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.6);
        box-shadow: 0 32px 80px rgba(0, 0, 0, 0.3);
        transform: scale(0.9) translateY(50px);
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
    `;
    
    const tags = attraction.tags.map(tag => 
        `<span class="attraction-tag ${tag}">${getTagText(tag)}</span>`
    ).join('');
    
    const stars = Array(5).fill(0).map((_, i) => 
        `<i class="fas fa-star${i < Math.floor(attraction.rating) ? '' : '-o'}"></i>`
    ).join('');
    
    content.innerHTML = `
        <div class="modal-header" style="position: relative; height: 300px; overflow: hidden; border-radius: 20px 20px 0 0;">
            <img src="${attraction.image}" alt="${attraction.name}" 
                 style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.9);">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; 
                        background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.4) 100%);"></div>
            <button onclick="closeAttractionModal()" 
                    style="position: absolute; top: 1rem; right: 1rem; 
                           background: rgba(255, 255, 255, 0.9); 
                           border: none; border-radius: 50%; width: 40px; height: 40px;
                           cursor: pointer; backdrop-filter: blur(10px);
                           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                           transition: all 0.3s ease;"
                    onmouseover="this.style.background='rgba(255, 255, 255, 1)'; this.style.transform='scale(1.1)'"
                    onmouseout="this.style.background='rgba(255, 255, 255, 0.9)'; this.style.transform='scale(1)'">
                <i class="fas fa-times" style="color: #64748B; font-size: 1rem;"></i>
            </button>
            <div style="position: absolute; bottom: 2rem; left: 2rem; color: white;">
                <h2 id="modal-title" style="margin: 0 0 0.5rem 0; font-size: 2rem; font-weight: 700; 
                                          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);">${attraction.name}</h2>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="display: flex; gap: 0.125rem;">${stars}</div>
                    <span style="font-weight: 600; font-size: 1.125rem; text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);">
                        ${attraction.rating}
                    </span>
                    <span style="opacity: 0.9; font-size: 0.875rem;">(${attraction.reviewCount || 0}件のレビュー)</span>
                </div>
            </div>
        </div>
        
        <div style="padding: 2rem;">
            <div style="margin-bottom: 1.5rem;">
                ${tags}
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: var(--text-primary); font-size: 1.25rem;">詳細情報</h3>
                <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1rem;">
                    ${attraction.description}
                </p>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                <div style="background: rgba(79, 70, 229, 0.1); padding: 1rem; border-radius: 12px; text-align: center;">
                    <div style="color: var(--primary-color); font-size: 1.5rem; font-weight: 700;">${attraction.rating}</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">評価</div>
                </div>
                <div style="background: rgba(5, 150, 105, 0.1); padding: 1rem; border-radius: 12px; text-align: center;">
                    <div style="color: #059669; font-size: 1.5rem; font-weight: 700;">${attraction.reviewCount || 0}</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">レビュー数</div>
                </div>
                <div style="background: rgba(245, 158, 11, 0.1); padding: 1rem; border-radius: 12px; text-align: center;">
                    <div style="color: #F59E0B; font-size: 1.5rem; font-weight: 700;">${getTagText(attraction.type)}</div>
                    <div style="color: var(--text-secondary); font-size: 0.875rem;">カテゴリー</div>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <button onclick="closeAttractionModal()" 
                        style="flex: 1; min-width: 150px;
                               background: linear-gradient(135deg, #6B7280, #9CA3AF);
                               color: white; border: none; padding: 1rem 2rem;
                               border-radius: 25px; font-weight: 600; cursor: pointer;
                               transition: all 0.3s ease; font-size: 1rem;">
                    閉じる
                </button>
                <button onclick="shareAttraction('${attraction.name}')"
                        style="flex: 1; min-width: 150px;
                               background: linear-gradient(135deg, #4F46E5, #7C3AED);
                               color: white; border: none; padding: 1rem 2rem;
                               border-radius: 25px; font-weight: 600; cursor: pointer;
                               transition: all 0.3s ease; font-size: 1rem;">
                    <i class="fas fa-share-alt" style="margin-right: 0.5rem;"></i>
                    シェア
                </button>
            </div>
        </div>
    `;
    
    modal.appendChild(content);
    
    // アニメーション開始
    setTimeout(() => {
        content.style.transform = 'scale(1) translateY(0)';
    }, 10);
    
    // モーダル外クリックで閉じる
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeAttractionModal();
        }
    });
    
    return modal;
}

// モーダルを閉じる関数
function closeAttractionModal() {
    appState.setState('selectedAttraction', null);
    appState.setState('isModalOpen', false);
    
    const modal = document.querySelector('.attraction-modal');
    if (modal) {
        const content = modal.querySelector('.modal-content');
        content.style.transform = 'scale(0.9) translateY(50px)';
        content.style.opacity = '0';
        
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = ''; // スクロールを復元
        }, 300);
    }
}

// シェア機能
function shareAttraction(attractionName) {
    if (navigator.share) {
        navigator.share({
            title: `台湾観光: ${attractionName}`,
            text: `${attractionName}の詳細をチェック！`,
            url: window.location.href
        });
    } else {
        // フォールバック: クリップボードにコピー
        navigator.clipboard.writeText(`${attractionName} - ${window.location.href}`)
            .then(() => alert('リンクがクリップボードにコピーされました！'));
    }
}

// 地域変更アニメーション
function animateRegionChange() {
    // パルスエフェクト
    const selectedArea = document.querySelector('.region-area.selected');
    if (selectedArea) {
        selectedArea.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
            selectedArea.style.animation = '';
        }, 600);
    }
}

// カウントダウンタイマー
function initializeTimers() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    
    function updateTimer() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            
            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            
            if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 60000); // 1分ごとに更新
}

// ヒーロースライドショー
function initializeHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 5000); // 5秒ごとに切り替え
}

// スクロールアニメーション
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素を監視
    document.querySelectorAll('.popular-card, .section-header').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// スクロール処理
function handleScroll() {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// リサイズ処理
function handleResize() {
    // レスポンシブ調整
    const mapContainer = document.querySelector('.map-attractions-container');
    if (window.innerWidth <= 1024) {
        mapContainer.style.gridTemplateColumns = '1fr';
    } else {
        mapContainer.style.gridTemplateColumns = '1fr 1fr';
    }
}

// ナビゲーション初期化
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // ナビゲーション状態を更新
                    updateActiveNavLink(href);
                    
                    // スムーズスクロール
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    console.log(`Navigated to section: ${targetId}`);
                }
            }
        });
    });
    
    // スクロール時のアクティブリンク更新
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

// アクティブナビゲーションリンク更新
function updateActiveNavLink(activeHref) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// スクロール時のアクティブナビゲーション更新
function updateActiveNavOnScroll() {
    const sections = ['map', 'regions', 'attractions'];
    const scrollPosition = window.scrollY + 100; // オフセット調整
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                updateActiveNavLink(`#${sectionId}`);
            }
        }
    });
}

// スムーズスクロール
function scrollToMap() {
    document.getElementById('map').scrollIntoView({
        behavior: 'smooth'
    });
}

// グローバル関数として公開
window.selectRegion = selectRegion;
window.scrollToMap = scrollToMap;

// パフォーマンス最適化
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// エラーハンドリング
window.addEventListener('error', (e) => {
    console.warn('エラーが発生しました:', e.error);
});

// 初期設定完了後の処理
document.addEventListener('DOMContentLoaded', () => {
    optimizeImages();
    
    // 初期状態でデフォルト表示
    if (attractionsDefault) {
        attractionsDefault.style.display = 'block';
    }
    if (attractionsGrid) {
        attractionsGrid.style.display = 'none';
    }
    
    console.log('台湾観光ガイドが正常に初期化されました');
});

// フッターリンクの初期化
function initializeFooterLinks() {
    // フッターのエリア選択リンクは既にonclick属性で設定されているため、
    // 追加の処理は不要。selectRegion関数が既に定義されている。
    
    // 人気スポットリンクにクリックハンドラーを追加
    const popularSpotLinks = document.querySelectorAll('.popular-spot-link');
    popularSpotLinks.forEach(link => {
        const spotName = link.textContent.trim();
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showAttractionByName(spotName);
        });
    });
}

// 人気スポットカードのハンドラー初期化
function initializePopularSpotHandlers() {
    const popularCards = document.querySelectorAll('.popular-card');
    popularCards.forEach(card => {
        card.addEventListener('click', () => {
            const spotName = card.querySelector('h4').textContent.trim();
            showAttractionByName(spotName);
        });
    });
}

// 観光地名から詳細を表示する関数
function showAttractionByName(spotName) {
    // 全地域のデータから該当する観光地を検索
    for (const regionId in regionsData) {
        const region = regionsData[regionId];
        const attraction = region.attractions.find(attr => attr.name === spotName);
        
        if (attraction) {
            // 該当地域を選択
            selectRegion(regionId);
            
            // 少し遅延してから詳細モーダルを表示
            setTimeout(() => {
                showAttractionDetail(attraction);
            }, 500);
            
            // 地図セクションにスクロール
            document.getElementById('map').scrollIntoView({
                behavior: 'smooth'
            });
            break;
        }
    }
}

// Service Worker登録（PWA対応）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registered'))
            .catch(() => console.log('Service Worker registration failed'));
    });
}