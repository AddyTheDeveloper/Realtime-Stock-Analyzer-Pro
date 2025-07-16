// Stock data from the provided JSON
const stocksData = {
    "stocks": [
        {
            "symbol": "AAPL",
            "name": "Apple Inc",
            "current_price": 210.64,
            "change": 1.53,
            "change_percent": 0.73,
            "max_span": 248,
            "avg_span": 10.61,
            "volatility": 2.45,
            "market_cap": 3146076912000,
            "pe_ratio": 29.71,
            "dividend_yield": 0.48
        },
        {
            "symbol": "TSLA",
            "name": "Tesla Inc",
            "current_price": 248.50,
            "change": 2.35,
            "change_percent": 0.95,
            "max_span": 8,
            "avg_span": 1.83,
            "volatility": 6.14,
            "market_cap": 792000000000,
            "pe_ratio": 85.4,
            "dividend_yield": 0.0
        },
        {
            "symbol": "MSFT",
            "name": "Microsoft Corporation",
            "current_price": 445.87,
            "change": -1.25,
            "change_percent": -0.28,
            "max_span": 11,
            "avg_span": 2.27,
            "volatility": 9.57,
            "market_cap": 3312000000000,
            "pe_ratio": 34.2,
            "dividend_yield": 0.72
        },
        {
            "symbol": "GOOGL",
            "name": "Alphabet Inc",
            "current_price": 180.34,
            "change": 3.41,
            "change_percent": 1.93,
            "max_span": 12,
            "avg_span": 2.6,
            "volatility": 4.87,
            "market_cap": 2234000000000,
            "pe_ratio": 25.8,
            "dividend_yield": 0.0
        },
        {
            "symbol": "AMZN",
            "name": "Amazon.com Inc",
            "current_price": 185.23,
            "change": 0.87,
            "change_percent": 0.47,
            "max_span": 14,
            "avg_span": 3.73,
            "volatility": 6.21,
            "market_cap": 1923000000000,
            "pe_ratio": 54.1,
            "dividend_yield": 0.0
        },
        {
            "symbol": "META",
            "name": "Meta Platforms Inc",
            "current_price": 528.12,
            "change": -2.14,
            "change_percent": -0.40,
            "max_span": 25,
            "avg_span": 3.57,
            "volatility": 3.62,
            "market_cap": 1340000000000,
            "pe_ratio": 28.9,
            "dividend_yield": 0.0
        },
        {
            "symbol": "NVDA",
            "name": "NVIDIA Corporation",
            "current_price": 125.61,
            "change": 4.23,
            "change_percent": 3.48,
            "max_span": 7,
            "avg_span": 1.93,
            "volatility": 8.12,
            "market_cap": 3089000000000,
            "pe_ratio": 75.3,
            "dividend_yield": 0.03
        },
        {
            "symbol": "NFLX",
            "name": "Netflix Inc",
            "current_price": 654.33,
            "change": 7.89,
            "change_percent": 1.22,
            "max_span": 30,
            "avg_span": 11.3,
            "volatility": 7.2,
            "market_cap": 283000000000,
            "pe_ratio": 41.7,
            "dividend_yield": 0.0
        },
        {
            "symbol": "UBER",
            "name": "Uber Technologies Inc",
            "current_price": 72.15,
            "change": -0.34,
            "change_percent": -0.47,
            "max_span": 15,
            "avg_span": 3.33,
            "volatility": 2.85,
            "market_cap": 145000000000,
            "pe_ratio": 32.1,
            "dividend_yield": 0.0
        }
    ],
    "market_overview": {
        "indices": [
            {
                "name": "S&P 500",
                "symbol": "SPX",
                "value": 5505.85,
                "change": 0.38,
                "change_percent": 0.69
            },
            {
                "name": "Dow Jones",
                "symbol": "DJI",
                "value": 40003.59,
                "change": 201.91,
                "change_percent": 0.51
            },
            {
                "name": "NASDAQ",
                "symbol": "IXIC",
                "value": 18398.45,
                "change": 21.32,
                "change_percent": 0.12
            },
            {
                "name": "Russell 2000",
                "symbol": "RUT",
                "value": 2184.35,
                "change": -5.67,
                "change_percent": -0.26
            }
        ],
        "sectors": [
            {
                "name": "Technology",
                "change_percent": 1.23
            },
            {
                "name": "Healthcare",
                "change_percent": 0.87
            },
            {
                "name": "Finance",
                "change_percent": -0.34
            },
            {
                "name": "Energy",
                "change_percent": 2.14
            },
            {
                "name": "Consumer Discretionary",
                "change_percent": 0.65
            },
            {
                "name": "Utilities",
                "change_percent": -0.12
            }
        ],
        "market_stats": {
            "total_volume": 4532000000,
            "advancing_stocks": 1847,
            "declining_stocks": 1253,
            "unchanged_stocks": 234,
            "new_highs": 127,
            "new_lows": 23
        }
    },
    "technical_indicators": {
        "RSI": {
            "value": 65.3,
            "signal": "Neutral",
            "description": "Relative Strength Index"
        },
        "MACD": {
            "value": 2.41,
            "signal": "Buy",
            "description": "Moving Average Convergence Divergence"
        },
        "SMA_50": {
            "value": 208.45,
            "signal": "Bullish",
            "description": "50-Day Simple Moving Average"
        },
        "SMA_200": {
            "value": 185.23,
            "signal": "Bullish",
            "description": "200-Day Simple Moving Average"
        },
        "Bollinger_Upper": {
            "value": 215.67,
            "signal": "Resistance",
            "description": "Bollinger Bands Upper"
        },
        "Bollinger_Lower": {
            "value": 201.34,
            "signal": "Support",
            "description": "Bollinger Bands Lower"
        },
        "Volume_SMA": {
            "value": 45234567,
            "signal": "Normal",
            "description": "Average Volume"
        },
        "ATR": {
            "value": 3.42,
            "signal": "Medium",
            "description": "Average True Range"
        }
    },
    "news": [
        {
            "headline": "Tech Stocks Rally as Market Sentiment Improves",
            "summary": "Major technology stocks showing strong performance amid positive earnings reports.",
            "time": "2 hours ago",
            "source": "Financial Times"
        },
        {
            "headline": "Federal Reserve Maintains Interest Rates",
            "summary": "Central bank keeps rates steady as inflation concerns ease.",
            "time": "4 hours ago",
            "source": "Wall Street Journal"
        },
        {
            "headline": "AI Sector Drives Market Growth",
            "summary": "Artificial intelligence companies leading the market surge.",
            "time": "6 hours ago",
            "source": "Bloomberg"
        }
    ]
};

// Global variables
let stockChart;
let alerts = [];
let isDarkMode = true;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeClock();
    initializeMarketOverview();
    initializeStocks();
    initializeChart();
    initializeCalculator();
    initializeTechnicalAnalysis();
    initializeNews();
    initializeModal();
    initializeSearch();
    initializeAlerts();
    initializeThemeToggle();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Clock functionality
function initializeClock() {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const clockElement = document.getElementById('liveClock');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

// Market overview initialization
function initializeMarketOverview() {
    const indicesGrid = document.getElementById('indicesGrid');
    const sectorsGrid = document.getElementById('sectorsGrid');
    const statsGrid = document.getElementById('statsGrid');
    
    // Populate indices
    stocksData.market_overview.indices.forEach(index => {
        const indexItem = document.createElement('div');
        indexItem.className = 'index-item';
        indexItem.innerHTML = `
            <div>
                <div style="font-weight: 600;">${index.name}</div>
                <div style="font-size: 12px; opacity: 0.7;">${index.symbol}</div>
            </div>
            <div style="text-align: right;">
                <div>${index.value.toLocaleString()}</div>
                <div class="${index.change_percent >= 0 ? 'positive' : 'negative'}">
                    ${index.change_percent >= 0 ? '+' : ''}${index.change_percent.toFixed(2)}%
                </div>
            </div>
        `;
        indicesGrid.appendChild(indexItem);
    });
    
    // Populate sectors
    stocksData.market_overview.sectors.forEach(sector => {
        const sectorItem = document.createElement('div');
        sectorItem.className = 'sector-item';
        sectorItem.innerHTML = `
            <div>${sector.name}</div>
            <div class="${sector.change_percent >= 0 ? 'positive' : 'negative'}">
                ${sector.change_percent >= 0 ? '+' : ''}${sector.change_percent.toFixed(2)}%
            </div>
        `;
        sectorsGrid.appendChild(sectorItem);
    });
    
    // Populate stats
    const stats = stocksData.market_overview.market_stats;
    const statsItems = [
        { label: 'Volume', value: formatNumber(stats.total_volume) },
        { label: 'Advancing', value: stats.advancing_stocks },
        { label: 'Declining', value: stats.declining_stocks },
        { label: 'Unchanged', value: stats.unchanged_stocks },
        { label: 'New Highs', value: stats.new_highs },
        { label: 'New Lows', value: stats.new_lows }
    ];
    
    statsItems.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <div>${stat.label}</div>
            <div>${stat.value}</div>
        `;
        statsGrid.appendChild(statItem);
    });
}

// Stocks initialization
function initializeStocks() {
    const stocksGrid = document.getElementById('stocksGrid');
    
    stocksData.stocks.forEach(stock => {
        const stockCard = document.createElement('div');
        stockCard.className = 'stock-card';
        stockCard.innerHTML = `
            <div class="stock-header">
                <div>
                    <div class="stock-symbol">${stock.symbol}</div>
                    <div class="stock-name">${stock.name}</div>
                </div>
                <div style="text-align: right;">
                    <div class="stock-price">$${stock.current_price.toFixed(2)}</div>
                    <div class="stock-change ${stock.change >= 0 ? 'positive' : 'negative'}">
                        ${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.change_percent.toFixed(2)}%)
                    </div>
                </div>
            </div>
            <div class="stock-metrics">
                <div class="metric">
                    <div class="metric-label">Max Span</div>
                    <div class="metric-value">${stock.max_span}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Avg Span</div>
                    <div class="metric-value">${stock.avg_span.toFixed(2)}</div>
                </div>
                <div class="metric">
                    <div class="metric-label">Volatility</div>
                    <div class="metric-value">${stock.volatility.toFixed(2)}%</div>
                </div>
                <div class="metric">
                    <div class="metric-label">P/E Ratio</div>
                    <div class="metric-value">${stock.pe_ratio.toFixed(1)}</div>
                </div>
            </div>
        `;
        
        // Add click event listener for modal
        stockCard.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openStockModal(stock);
        });
        
        stocksGrid.appendChild(stockCard);
    });
}

// Chart initialization
function initializeChart() {
    const ctx = document.getElementById('stockChart').getContext('2d');
    
    // Generate sample data for the chart
    const labels = [];
    const data = [];
    const spanData = [];
    
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        labels.push(date.toLocaleDateString());
        
        // Generate realistic price movement
        const basePrice = 210;
        const randomChange = (Math.random() - 0.5) * 10;
        const price = basePrice + randomChange + (Math.sin(i * 0.2) * 5);
        data.push(price.toFixed(2));
        
        // Generate span data
        spanData.push(Math.floor(Math.random() * 15) + 1);
    }
    
    stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price',
                data: data,
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.1
            }, {
                label: 'Span',
                data: spanData,
                borderColor: '#00ff88',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderWidth: 2,
                fill: false,
                yAxisID: 'y1'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                }
            }
        }
    });
    
    // Chart controls - fixed implementation
    document.querySelectorAll('.chart-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const chartType = this.dataset.type;
            updateChartType(chartType);
        });
    });
    
    // Stock selector for chart
    const chartStock = document.getElementById('chartStock');
    if (chartStock) {
        chartStock.addEventListener('change', (e) => {
            const selectedStock = e.target.value;
            updateChartData(selectedStock);
        });
    }
}

// Update chart type - fixed implementation
function updateChartType(type) {
    if (stockChart) {
        if (type === 'line') {
            stockChart.config.type = 'line';
            stockChart.config.data.datasets[0].fill = false;
        } else if (type === 'area') {
            stockChart.config.type = 'line';
            stockChart.config.data.datasets[0].fill = true;
        } else if (type === 'bar') {
            stockChart.config.type = 'bar';
            stockChart.config.data.datasets[0].fill = false;
        }
        stockChart.update();
    }
}

// Update chart data for selected stock
function updateChartData(symbol) {
    const stock = stocksData.stocks.find(s => s.symbol === symbol);
    if (stock && stockChart) {
        // Generate new data based on selected stock
        const newData = [];
        for (let i = 0; i < 30; i++) {
            const basePrice = stock.current_price;
            const randomChange = (Math.random() - 0.5) * (stock.volatility * 2);
            const price = basePrice + randomChange + (Math.sin(i * 0.2) * stock.volatility);
            newData.push(price.toFixed(2));
        }
        
        stockChart.data.datasets[0].data = newData;
        stockChart.data.datasets[0].label = `${symbol} Price`;
        stockChart.update();
    }
}

// Calculator initialization - fixed implementation
function initializeCalculator() {
    const calculateBtn = document.getElementById('calculateBtn');
    const priceInput = document.getElementById('priceInput');
    const resultsDiv = document.getElementById('spanResults');
    
    if (calculateBtn && priceInput && resultsDiv) {
        calculateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const pricesText = priceInput.value.trim();
            if (!pricesText) {
                resultsDiv.innerHTML = '<p style="color: #ff4444;">Please enter price data</p>';
                return;
            }
            
            try {
                const prices = pricesText.split(',').map(p => parseFloat(p.trim()));
                if (prices.some(isNaN)) {
                    throw new Error('Invalid price format');
                }
                
                const spans = calculateStockSpans(prices);
                displaySpanResults(prices, spans);
            } catch (error) {
                resultsDiv.innerHTML = '<p style="color: #ff4444;">Error: Invalid price format. Please use comma-separated numbers.</p>';
            }
        });
    }
}

// Calculate stock spans
function calculateStockSpans(prices) {
    const spans = [];
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }
        
        spans[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }
    
    return spans;
}

// Display span results - fixed implementation
function displaySpanResults(prices, spans) {
    const resultsDiv = document.getElementById('spanResults');
    
    if (!resultsDiv) return;
    
    let html = '<div style="margin-bottom: 20px;">';
    html += '<h5 style="color: #00d4ff; margin-bottom: 10px;">Calculation Results</h5>';
    html += '<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; font-family: monospace;">';
    html += '<div style="font-weight: 600; color: #ffffff;">Day</div>';
    html += '<div style="font-weight: 600; color: #ffffff;">Price</div>';
    html += '<div style="font-weight: 600; color: #ffffff;">Span</div>';
    
    for (let i = 0; i < prices.length; i++) {
        html += `<div>${i + 1}</div>`;
        html += `<div>$${prices[i].toFixed(2)}</div>`;
        html += `<div style="color: #00ff88;">${spans[i]}</div>`;
    }
    
    html += '</div></div>';
    
    // Add statistics
    const maxSpan = Math.max(...spans);
    const avgSpan = spans.reduce((a, b) => a + b, 0) / spans.length;
    
    html += '<div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">';
    html += '<h5 style="color: #00d4ff; margin-bottom: 10px;">Statistics</h5>';
    html += `<div>Maximum Span: <span style="color: #00ff88;">${maxSpan}</span></div>`;
    html += `<div>Average Span: <span style="color: #00ff88;">${avgSpan.toFixed(2)}</span></div>`;
    html += '</div>';
    
    resultsDiv.innerHTML = html;
}

// Technical analysis initialization
function initializeTechnicalAnalysis() {
    const technicalGrid = document.getElementById('technicalGrid');
    
    Object.entries(stocksData.technical_indicators).forEach(([key, indicator]) => {
        const technicalItem = document.createElement('div');
        technicalItem.className = 'technical-item';
        
        let signalClass = 'signal-neutral';
        if (indicator.signal === 'Buy' || indicator.signal === 'Bullish') {
            signalClass = 'signal-buy';
        } else if (indicator.signal === 'Sell' || indicator.signal === 'Bearish') {
            signalClass = 'signal-sell';
        }
        
        technicalItem.innerHTML = `
            <div class="technical-name">${indicator.description}</div>
            <div class="technical-value">${typeof indicator.value === 'number' ? indicator.value.toFixed(2) : indicator.value}</div>
            <div class="technical-signal ${signalClass}">${indicator.signal}</div>
        `;
        
        technicalGrid.appendChild(technicalItem);
    });
}

// News initialization
function initializeNews() {
    const newsFeed = document.getElementById('newsFeed');
    
    stocksData.news.forEach(newsItem => {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-item';
        newsDiv.innerHTML = `
            <div class="news-headline">${newsItem.headline}</div>
            <div class="news-summary">${newsItem.summary}</div>
            <div class="news-meta">${newsItem.time} • ${newsItem.source}</div>
        `;
        newsFeed.appendChild(newsDiv);
    });
}

// Modal functionality - fixed implementation
function initializeModal() {
    const modal = document.getElementById('stockModal');
    const closeBtn = document.getElementById('modalClose');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Prevent modal from closing when clicking modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}

// Close modal helper function
function closeModal() {
    const modal = document.getElementById('stockModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Open stock modal - fixed implementation
function openStockModal(stock) {
    const modal = document.getElementById('stockModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalBody) return;
    
    modalTitle.textContent = `${stock.name} (${stock.symbol})`;
    
    modalBody.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
            <div>
                <h4 style="color: #00d4ff; margin-bottom: 15px;">Price Information</h4>
                <div style="margin-bottom: 10px;">
                    <strong>Current Price:</strong> $${stock.current_price.toFixed(2)}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Change:</strong> 
                    <span class="${stock.change >= 0 ? 'positive' : 'negative'}">
                        ${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.change_percent.toFixed(2)}%)
                    </span>
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Market Cap:</strong> $${formatNumber(stock.market_cap)}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>P/E Ratio:</strong> ${stock.pe_ratio.toFixed(1)}
                </div>
                <div>
                    <strong>Dividend Yield:</strong> ${stock.dividend_yield.toFixed(2)}%
                </div>
            </div>
            <div>
                <h4 style="color: #00d4ff; margin-bottom: 15px;">Span Analysis</h4>
                <div style="margin-bottom: 10px;">
                    <strong>Maximum Span:</strong> ${stock.max_span}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Average Span:</strong> ${stock.avg_span.toFixed(2)}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>Volatility:</strong> ${stock.volatility.toFixed(2)}%
                </div>
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; margin-top: 15px;">
                    <strong>Analysis:</strong> ${generateAnalysis(stock)}
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Generate stock analysis
function generateAnalysis(stock) {
    let analysis = '';
    
    if (stock.max_span > 20) {
        analysis += 'High span indicates strong bullish momentum. ';
    } else if (stock.max_span > 10) {
        analysis += 'Moderate span suggests steady growth potential. ';
    } else {
        analysis += 'Low span indicates consolidation or bearish pressure. ';
    }
    
    if (stock.volatility > 7) {
        analysis += 'High volatility suggests increased risk and opportunity. ';
    } else if (stock.volatility > 3) {
        analysis += 'Moderate volatility indicates normal market behavior. ';
    } else {
        analysis += 'Low volatility suggests stable price movement. ';
    }
    
    if (stock.pe_ratio > 50) {
        analysis += 'High P/E ratio indicates growth expectations or overvaluation.';
    } else if (stock.pe_ratio > 20) {
        analysis += 'Moderate P/E ratio suggests reasonable valuation.';
    } else {
        analysis += 'Low P/E ratio may indicate undervaluation or slow growth.';
    }
    
    return analysis;
}

// Search functionality - fixed implementation
function initializeSearch() {
    const searchInput = document.getElementById('stockSearch');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim().toUpperCase();
        if (!query) {
            showNotification('Please enter a stock symbol', 'error');
            return;
        }
        
        const stock = stocksData.stocks.find(s => s.symbol === query);
        if (stock) {
            openStockModal(stock);
            searchInput.value = '';
            showNotification(`Found ${stock.name} (${stock.symbol})`, 'success');
        } else {
            showNotification(`Stock "${query}" not found. Available: ${stocksData.stocks.map(s => s.symbol).join(', ')}`, 'error');
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Alerts functionality
function initializeAlerts() {
    const setAlertBtn = document.getElementById('setAlertBtn');
    const alertStock = document.getElementById('alertStock');
    const alertPrice = document.getElementById('alertPrice');
    
    if (setAlertBtn && alertStock && alertPrice) {
        setAlertBtn.addEventListener('click', () => {
            const stock = alertStock.value;
            const price = parseFloat(alertPrice.value);
            
            if (stock && !isNaN(price) && price > 0) {
                const alert = {
                    id: Date.now(),
                    stock: stock,
                    price: price,
                    timestamp: new Date().toLocaleString()
                };
                
                alerts.push(alert);
                updateAlertsList();
                alertPrice.value = '';
                
                // Show confirmation
                showNotification(`Alert set for ${stock} at $${price.toFixed(2)}`, 'success');
            } else {
                showNotification('Please enter a valid stock and price', 'error');
            }
        });
    }
    
    updateAlertsList();
}

// Update alerts list
function updateAlertsList() {
    const alertsList = document.getElementById('alertsList');
    
    if (!alertsList) return;
    
    if (alerts.length === 0) {
        alertsList.innerHTML = '<div style="text-align: center; color: #e0e0e0; opacity: 0.7;">No alerts set</div>';
        return;
    }
    
    alertsList.innerHTML = alerts.map(alert => `
        <div class="alert-item">
            <div>
                <div style="font-weight: 600;">${alert.stock} - $${alert.price.toFixed(2)}</div>
                <div style="font-size: 12px; opacity: 0.7;">${alert.timestamp}</div>
            </div>
            <button class="alert-remove" onclick="removeAlert(${alert.id})">Remove</button>
        </div>
    `).join('');
}

// Remove alert
function removeAlert(id) {
    alerts = alerts.filter(alert => alert.id !== id);
    updateAlertsList();
    showNotification('Alert removed', 'success');
}

// Theme toggle - fixed implementation
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            isDarkMode = !isDarkMode;
            
            if (isDarkMode) {
                document.body.style.background = 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)';
                document.body.style.color = '#ffffff';
                themeIcon.textContent = '🌙';
                showNotification('Dark mode enabled', 'info');
            } else {
                document.body.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)';
                document.body.style.color = '#333333';
                themeIcon.textContent = '☀️';
                showNotification('Light mode enabled', 'info');
            }
        });
    }
}

// Utility functions
function formatNumber(num) {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(1) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(1) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(1) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(1) + 'K';
    }
    return num.toString();
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        backdrop-filter: blur(10px);
        animation: slideIn 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = 'rgba(0, 255, 136, 0.2)';
        notification.style.border = '1px solid #00ff88';
    } else if (type === 'error') {
        notification.style.background = 'rgba(255, 68, 68, 0.2)';
        notification.style.border = '1px solid #ff4444';
    } else {
        notification.style.background = 'rgba(0, 212, 255, 0.2)';
        notification.style.border = '1px solid #00d4ff';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Simulate real-time updates
setInterval(() => {
    // Simulate price updates
    stocksData.stocks.forEach(stock => {
        const change = (Math.random() - 0.5) * 0.5;
        stock.current_price += change;
        stock.change += change;
        stock.change_percent = (stock.change / (stock.current_price - stock.change)) * 100;
    });
    
    // Update stock cards if they exist
    const stockCards = document.querySelectorAll('.stock-card');
    stockCards.forEach((card, index) => {
        const stock = stocksData.stocks[index];
        if (stock) {
            const priceElement = card.querySelector('.stock-price');
            const changeElement = card.querySelector('.stock-change');
            
            if (priceElement && changeElement) {
                priceElement.textContent = `$${stock.current_price.toFixed(2)}`;
                changeElement.textContent = `${stock.change >= 0 ? '+' : ''}${stock.change.toFixed(2)} (${stock.change_percent.toFixed(2)}%)`;
                changeElement.className = `stock-change ${stock.change >= 0 ? 'positive' : 'negative'}`;
            }
        }
    });
}, 5000); // Update every 5 seconds