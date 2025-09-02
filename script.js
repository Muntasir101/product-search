const products = [
    { id: 1, name: "Gaming Laptop", description: "High-performance laptop", price: 999, category: "Electronics", sku: "LAP123" },
    { name: "Running Shoe", description: "Comfortable athletic shoe", price: 75, category: "Clothing", sku: "SHO456" },
    { name: "Wireless Mouse", description: "Ergonomic mouse", price: 25, category: "Electronics", sku: "MOU789" },
    { name: "T-Shirt", description: "Casual cotton shirt", price: 20, category: "Clothing", sku: "TSH012" },
    { "name": "Running Shoe", "description": "Comfortable athletic shoe", "price": 75, "category": "Clothing", "sku": "SHO456" },
    { "name": "Wireless Mouse", "description": "Ergonomic mouse", "price": 25, "category": "Electronics", "sku": "MOU789" },
    { "name": "T-Shirt", "description": "Casual cotton shirt", "price": 20, "category": "Clothing", "sku": "TSH012" },
    { "name": "Classic Hoodie", "description": "Warm and comfortable pullover hoodie", "price": 45, "category": "Clothing", "sku": "HOD456" },
    { "name": "Wireless Earbuds", "description": "Noise-cancelling Bluetooth earbuds", "price": 129, "category": "Electronics", "sku": "EAR789" },
    { "name": "Bluetooth Speaker", "description": "Portable waterproof speaker", "price": 75, "category": "Electronics", "sku": "SPK444" },
    { "name": "Knit Beanie", "description": "Soft acrylic winter hat", "price": 20, "category": "Clothing", "sku": "BEA159" },
    { "name": "Phone Case", "description": "Protective case with grip texture", "price": 25, "category": "Electronics", "sku": "CAS911" },
    { "name": "Alarm Clock", "description": "Digital clock with wireless charging pad", "price": 48, "category": "Electronics", "sku": "CLK842" },
    { "name": "Running Shoe", "description": "Comfortable athletic shoe", "price": 75, "category": "Clothing", "sku": "SHO456" },
  { "name": "Wireless Mouse", "description": "Ergonomic mouse", "price": 25, "category": "Electronics", "sku": "MOU789" },
  { "name": "T-Shirt", "description": "Casual cotton shirt", "price": 20, "category": "Clothing", "sku": "TSH012" },
  { "name": "Classic Hoodie", "description": "Warm and comfortable pullover hoodie", "price": 45, "category": "Clothing", "sku": "HOD456" },
  { "name": "Wireless Earbuds", "description": "Noise-cancelling Bluetooth earbuds", "price": 129, "category": "Electronics", "sku": "EAR789" },
  { "name": "Bluetooth Speaker", "description": "Portable waterproof speaker", "price": 75, "category": "Electronics", "sku": "SPK444" },
  { "name": "Knit Beanie", "description": "Soft acrylic winter hat", "price": 20, "category": "Clothing", "sku": "BEA159" },
  { "name": "Phone Case", "description": "Protective case with grip texture", "price": 25, "category": "Electronics", "sku": "CAS911" },
  { "name": "Alarm Clock", "description": "Digital clock with wireless charging pad", "price": 48, "category": "Electronics", "sku": "CLK842" },

  { "name": "Denim Jacket", "description": "Classic blue denim jacket", "price": 85, "category": "Clothing", "sku": "DEN123" },
  { "name": "Polo Shirt", "description": "Casual cotton polo with collar", "price": 30, "category": "Clothing", "sku": "POL456" },
  { "name": "Slim Jeans", "description": "Modern slim-fit denim jeans", "price": 60, "category": "Clothing", "sku": "JEA789" },
  { "name": "Wool Scarf", "description": "Soft wool scarf for winter", "price": 25, "category": "Clothing", "sku": "SCF101" },
  { "name": "Sports Jacket", "description": "Lightweight waterproof sports jacket", "price": 95, "category": "Clothing", "sku": "SJK202" },
  { "name": "Formal Shirt", "description": "White slim-fit formal shirt", "price": 40, "category": "Clothing", "sku": "FSH303" },
  { "name": "Cargo Pants", "description": "Comfortable cotton cargo pants", "price": 50, "category": "Clothing", "sku": "CAR404" },
  { "name": "Sneakers", "description": "Casual lace-up sneakers", "price": 70, "category": "Clothing", "sku": "SNK505" },
  { "name": "Leather Belt", "description": "Genuine leather belt with buckle", "price": 35, "category": "Clothing", "sku": "BLT606" },
  { "name": "Raincoat", "description": "Waterproof raincoat with hood", "price": 55, "category": "Clothing", "sku": "RNC707" },
  { "name": "Laptop Stand", "description": "Adjustable aluminum laptop stand", "price": 45, "category": "Electronics", "sku": "LAP111" },
  { "name": "Gaming Keyboard", "description": "Mechanical keyboard with RGB lights", "price": 95, "category": "Electronics", "sku": "KEY222" },
  { "name": "Smartwatch", "description": "Fitness tracking smartwatch", "price": 199, "category": "Electronics", "sku": "SMW333" },
  { "name": "4K Monitor", "description": "Ultra HD 27-inch computer monitor", "price": 320, "category": "Electronics", "sku": "MON444" },
  { "name": "External Hard Drive", "description": "2TB portable external HDD", "price": 110, "category": "Electronics", "sku": "HDD555" },
  { "name": "Wireless Keyboard", "description": "Slim Bluetooth keyboard", "price": 40, "category": "Electronics", "sku": "KBW666" },
  { "name": "Tablet", "description": "10-inch Android tablet", "price": 250, "category": "Electronics", "sku": "TAB777" },
  { "name": "Power Bank", "description": "20000mAh fast-charging power bank", "price": 60, "category": "Electronics", "sku": "PWB888" },
  { "name": "Digital Camera", "description": "Compact 20MP digital camera", "price": 280, "category": "Electronics", "sku": "CAM999" },
  { "name": "Smart Home Hub", "description": "Voice-controlled smart home hub", "price": 150, "category": "Electronics", "sku": "HUB000" },
  { "name": "Graphic Tee", "description": "Printed cotton T-shirt", "price": 22, "category": "Clothing", "sku": "GTE111" },
  { "name": "Chinos", "description": "Casual slim-fit chinos", "price": 55, "category": "Clothing", "sku": "CHI222" },
  { "name": "Puffer Jacket", "description": "Insulated winter jacket", "price": 120, "category": "Clothing", "sku": "PUF333" },
  { "name": "Track Pants", "description": "Lightweight training pants", "price": 45, "category": "Clothing", "sku": "TRK444" },
  { "name": "Wool Sweater", "description": "Knitted wool pullover sweater", "price": 65, "category": "Clothing", "sku": "SWT555" },
  { "name": "Maxi Dress", "description": "Elegant cotton maxi dress", "price": 85, "category": "Clothing", "sku": "DRS666" },
  { "name": "Sports Bra", "description": "High-support athletic sports bra", "price": 35, "category": "Clothing", "sku": "BRA777" },
  { "name": "Ankle Socks", "description": "Pack of 5 cotton ankle socks", "price": 18, "category": "Clothing", "sku": "SOC888" },
  { "name": "Winter Gloves", "description": "Thermal insulated gloves", "price": 28, "category": "Clothing", "sku": "GLV999" },
  { "name": "Base Layer Top", "description": "Moisture-wicking thermal base layer", "price": 40, "category": "Clothing", "sku": "BLT101" },

  { "name": "Portable Projector", "description": "Mini HD portable projector", "price": 210, "category": "Electronics", "sku": "PRJ111" },
  { "name": "VR Headset", "description": "Immersive virtual reality headset", "price": 350, "category": "Electronics", "sku": "VRH222" },
  { "name": "Drone", "description": "Compact drone with 4K camera", "price": 499, "category": "Electronics", "sku": "DRN333" },
  { "name": "Electric Toothbrush", "description": "Rechargeable smart toothbrush", "price": 90, "category": "Electronics", "sku": "TOB444" },
  { "name": "Noise Cancelling Headphones", "description": "Over-ear Bluetooth headphones", "price": 180, "category": "Electronics", "sku": "HDP555" },
  { "name": "Smart Light Bulb", "description": "Wi-Fi controlled LED bulb", "price": 25, "category": "Electronics", "sku": "BUL666" },
  { "name": "Portable Charger", "description": "Compact 10000mAh charger", "price": 35, "category": "Electronics", "sku": "CHR777" },
  { "name": "Action Camera", "description": "Waterproof 4K action camera", "price": 260, "category": "Electronics", "sku": "ACT888" },
  { "name": "Wireless Charger", "description": "Qi fast wireless charging pad", "price": 40, "category": "Electronics", "sku": "WCH999" },
  { "name": "Smart Thermostat", "description": "Energy-saving Wi-Fi thermostat", "price": 220, "category": "Electronics", "sku": "THM101" },
  { "name": "Wooden Dining Table", "description": "6-seater solid oak dining table", "price": 750, "category": "Home & Living", "sku": "TAB201" },
  { "name": "Sofa Set", "description": "3-seater fabric sofa with cushions", "price": 1200, "category": "Home & Living", "sku": "SOF202" },
  { "name": "Bookshelf", "description": "5-tier wooden bookshelf", "price": 180, "category": "Home & Living", "sku": "BKS203" },
  { "name": "Bed Frame", "description": "Queen-size wooden bed frame", "price": 680, "category": "Home & Living", "sku": "BED204" },
  { "name": "Office Chair", "description": "Ergonomic mesh office chair", "price": 220, "category": "Home & Living", "sku": "CHR205" },
  { "name": "Dining Chair Set", "description": "Set of 4 upholstered dining chairs", "price": 320, "category": "Home & Living", "sku": "DCH206" },
  { "name": "Wardrobe", "description": "3-door sliding wardrobe", "price": 950, "category": "Home & Living", "sku": "WRD207" },
  { "name": "Coffee Table", "description": "Glass-top modern coffee table", "price": 150, "category": "Home & Living", "sku": "CFT208" },
  { "name": "Nightstand", "description": "Wooden bedside nightstand with drawer", "price": 95, "category": "Home & Living", "sku": "NST209" },
  { "name": "Recliner Chair", "description": "Leather recliner chair with footrest", "price": 480, "category": "Home & Living", "sku": "RCL210" },

  { "name": "Curtain Set", "description": "Set of blackout window curtains", "price": 110, "category": "Home & Living", "sku": "CUR211" },
  { "name": "Area Rug", "description": "Large Persian-style area rug", "price": 400, "category": "Home & Living", "sku": "RUG212" },
  { "name": "Wall Clock", "description": "Minimalist wall clock", "price": 60, "category": "Home & Living", "sku": "CLK213" },
  { "name": "Table Lamp", "description": "Ceramic base bedside lamp", "price": 70, "category": "Home & Living", "sku": "LMP214" },
  { "name": "Vase Set", "description": "Set of 3 decorative ceramic vases", "price": 85, "category": "Home & Living", "sku": "VAS215" },
  { "name": "Wall Mirror", "description": "Round decorative wall mirror", "price": 130, "category": "Home & Living", "sku": "MIR216" },
  { "name": "Kitchen Knife Set", "description": "Stainless steel 6-piece knife set", "price": 90, "category": "Home & Living", "sku": "KNF217" },
  { "name": "Cookware Set", "description": "10-piece nonstick cookware set", "price": 240, "category": "Home & Living", "sku": "CKW218" },
  { "name": "Dinnerware Set", "description": "16-piece ceramic dinnerware set", "price": 160, "category": "Home & Living", "sku": "DNW219" },
  { "name": "Wine Glass Set", "description": "Set of 6 crystal wine glasses", "price": 120, "category": "Home & Living", "sku": "WGL220" }

]

];

let currentPage = 1;
const resultsPerPage = 2; // For demo purposes

function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    const sort = document.getElementById("sortOption").value;
    const category = document.getElementById("categoryFilter").value;

    // Filter products
    let filtered = products.filter(p => 
        (p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)) &&
        (category === "" || p.category === category)
    );

    // Sort products
    if (sort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
    if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));

    // Pagination
    const start = (currentPage - 1) * resultsPerPage;
    const paginated = filtered.slice(start, start + resultsPerPage);

    // Render results
    const resultsDiv = document.getElementById("results");
    if (paginated.length > 0) {
        resultsDiv.innerHTML = paginated.map(p => `
            <div class="product-card">
                <h3>${p.name}</h3>
                <p>${p.description}</p>
                <p><strong>Price:</strong> $${p.price}</p>
                <p><strong>Category:</strong> ${p.category}</p>
                <p><strong>SKU:</strong> ${p.sku}</p>
            </div>
        `).join("");
    } else {
        resultsDiv.innerHTML = `<p>No results found</p>`;
    }

    // Pagination button states
    document.querySelector("button[onclick='prevPage()']").disabled = currentPage === 1;
    document.querySelector("button[onclick='nextPage()']").disabled = start + resultsPerPage >= filtered.length;
}

function nextPage() {
    currentPage++;
    searchProducts();
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        searchProducts();
    }
}

// Attach auto-refresh events
document.getElementById("searchInput").addEventListener("input", () => {
    currentPage = 1;
    searchProducts();
});
document.getElementById("sortOption").addEventListener("change", () => {
    currentPage = 1;
    searchProducts();
});
document.getElementById("categoryFilter").addEventListener("change", () => {
    currentPage = 1;
    searchProducts();
});

// Initial load
searchProducts();
