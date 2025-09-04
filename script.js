 // Sample product dataset
        const products = [
            { id: 1, name: "Wireless Earbuds with Noise Cancellation", category: "Electronics", price: 79.99, rating: 4.5, reviews: 4328, shipping: "prime", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-01" },
            { id: 2, name: "Smart Watch with Fitness Tracker", category: "Electronics", price: 199.99, rating: 4.0, reviews: 2451, shipping: "prime", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-15" },
            { id: 3, name: "Men's Running Shoes - Lightweight", category: "Clothing", price: 89.99, rating: 5.0, reviews: 8742, shipping: "prime", image: "https://images.unsplash.com/photo-1715692965435-d181642ed2d2?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-01" },
            { id: 4, name: "Programmable Coffee Maker, 12-Cup", category: "Home", price: 49.99, rating: 4.5, reviews: 5329, shipping: "prime", image: "https://images.unsplash.com/photo-1707241358597-bafcc8a8e73d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-04-20" },
            { id: 5, name: "Waterproof Bluetooth Speaker", category: "Electronics", price: 59.99, rating: 4.0, reviews: 3876, shipping: "prime", image: "https://images.unsplash.com/photo-1598034989845-48532781987e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-15" },
            { id: 6, name: "Extra Thick Yoga Mat", category: "Sports", price: 29.99, rating: 5.0, reviews: 7211, shipping: "prime", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-05" },
            { id: 7, name: "Wireless Keyboard and Mouse", category: "Electronics", price: 39.99, rating: 4.2, reviews: 3150, shipping: "free", image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=901&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-03-10" },
            { id: 8, name: "Men's Casual Jacket", category: "Clothing", price: 120.00, rating: 4.3, reviews: 2980, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1661315422548-06eef91eef2d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-20" },
            { id: 9, name: "Air Fryer, 5.8 Qt", category: "Home", price: 89.99, rating: 4.7, reviews: 6500, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-01" },
            { id: 10, name: "Camping Tent, 4-Person", category: "Sports", price: 149.99, rating: 1, reviews: 4200, shipping: "free", image: "https://images.unsplash.com/photo-1653526167310-714293464c9c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-10" },
            { id: 11, name: "Noise Cancelling Over-Ear Headphones", category: "Electronics", price: 129.99, rating: 4.6, reviews: 5120, shipping: "prime", image: "https://images.unsplash.com/photo-1619296794093-3df1ae6819a8?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-15" },
            { id: 12, name: "Smartphone Tripod with Remote", category: "Electronics", price: 24.99, rating: 4.3, reviews: 1875, shipping: "free", image: "https://images.unsplash.com/photo-1627065446205-f96ca18c38b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-25" },
            { id: 13, name: "Women's Slim Fit Jeans", category: "Clothing", price: 59.99, rating: 4.4, reviews: 3290, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1701069513982-379b610df80f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-08" },
            { id: 14, name: "Men's Leather Wallet", category: "Clothing", price: 39.99, rating: 4.2, reviews: 2100, shipping: "free", image: "https://images.unsplash.com/photo-1676276550322-7623a2545b24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-30" },
            { id: 15, name: "Stainless Steel Cookware Set, 10-Piece", category: "Home", price: 179.99, rating: 4.7, reviews: 4205, shipping: "prime", image: "https://images.unsplash.com/photo-1588279102558-dabc7b32d9b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-12" },
            { id: 16, name: "Cordless Vacuum Cleaner", category: "Home", price: 149.99, rating: 2.5, reviews: 3650, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1661679071407-9eb342c3a32c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-04-28" },
            { id: 17, name: "Adjustable Dumbbell Set, 40 lbs", category: "Sports", price: 89.99, rating: 4.6, reviews: 2900, shipping: "free", image: "https://images.unsplash.com/photo-1741666998073-7df07563d4d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-02" },
            { id: 18, name: "Mountain Bike Helmet", category: "Sports", price: 54.99, rating: 4.3, reviews: 1700, shipping: "prime", image: "https://images.unsplash.com/photo-1661706393465-b7b2d1f033aa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-18" },
            { id: 19, name: "Memory Foam Pillow, Queen Size", category: "Home", price: 49.99, rating: 4.5, reviews: 2750, shipping: "free", image: "https://images.unsplash.com/photo-1629949008195-c15c25c5e9e9?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-22" },
            { id: 20, name: "Men's Hiking Boots Waterproof", category: "Clothing", price: 110.00, rating: 4.6, reviews: 3100, shipping: "prime", image: "https://images.unsplash.com/photo-1563635419376-78d400e5588e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-12" },
            { id: 21, name: "4K Ultra HD Smart TV, 55-inch", category: "Electronics", price: 499.99, rating: 3.8, reviews: 8900, shipping: "prime", image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-20" },
            { id: 22, name: "Portable Power Bank 20000mAh", category: "Electronics", price: 39.99, rating: 4.4, reviews: 5400, shipping: "free", image: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-28" },
            { id: 23, name: "Bluetooth Car Adapter", category: "Electronics", price: 19.99, rating: 4.1, reviews: 2200, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1736761563170-c94f624a369f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-25" },
            { id: 24, name: "Men's Polo Shirt", category: "Clothing", price: 34.99, rating: 4.3, reviews: 1980, shipping: "prime", image: "https://images.unsplash.com/photo-1717127354833-e4d10625d3e7?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-18" },
            { id: 25, name: "Women's Summer Dress", category: "Clothing", price: 69.99, rating: 4.5, reviews: 2800, shipping: "free", image: "https://images.unsplash.com/photo-1602303832953-05d841ee21f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-22" },
            { id: 26, name: "Men's Hooded Sweatshirt", category: "Clothing", price: 55.00, rating: 4.4, reviews: 3100, shipping: "prime", image: "https://images.unsplash.com/photo-1673875914280-17207d080ff7?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-05" },
            { id: 27, name: "Robot Vacuum Cleaner", category: "Home", price: 249.99, rating: 4.6, reviews: 6100, shipping: "prime", image: "https://images.unsplash.com/photo-1647940990395-967898eb0d65?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-14" },
            { id: 28, name: "Ceramic Dinnerware Set, 16-Piece", category: "Home", price: 79.99, rating: 4.3, reviews: 1950, shipping: "free", image: "https://images.unsplash.com/photo-1727354484577-d3adaca753fd?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-02" },
            { id: 29, name: "Electric Kettle, 1.7L", category: "Home", price: 39.99, rating: 4.5, reviews: 4200, shipping: "prime", image: "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-04-18" },
            { id: 30, name: "Men's Basketball Shoes", category: "Clothing", price: 95.00, rating: 4.6, reviews: 3400, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1674128399309-923c21c2037e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-09" },
            { id: 31, name: "Resistance Bands Set, 5-Pack", category: "Sports", price: 24.99, rating: 1.5, reviews: 2700, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1661896283156-d3d443d745da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-22" },
            { id: 32, name: "Treadmill Folding Electric", category: "Sports", price: 599.99, rating: 2.7, reviews: 1850, shipping: "prime", image: "https://images.unsplash.com/photo-1576491742123-735882d4ca7e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-24" },
            { id: 33, name: "Women's Running Shorts", category: "Clothing", price: 29.99, rating: 4.3, reviews: 1500, shipping: "free", image: "https://images.unsplash.com/photo-1609601242520-2ddd881418a7?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-28" },
            { id: 34, name: "LED Desk Lamp with USB Port", category: "Home", price: 45.99, rating: 1.4, reviews: 3100, shipping: "prime", image: "https://images.unsplash.com/photo-1754606581526-053f58888053?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-30" },
            { id: 35, name: "Noise-Isolating Gaming Headset", category: "Electronics", price: 79.99, rating: 4.2, reviews: 4100, shipping: "prime", image: "https://images.unsplash.com/photo-1661854251257-dc48edabf8c5?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-07" },
            { id: 36, name: "Smart Home Security Camera", category: "Electronics", price: 129.99, rating: 4.6, reviews: 3200, shipping: "free", image: "https://images.unsplash.com/photo-1723187024776-e3d4f6627e22?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-08" },
            { id: 37, name: "Stainless Steel Air Tight Food Containers", category: "Home", price: 59.99, rating: 4.5, reviews: 2750, shipping: "prime", image: "https://images.unsplash.com/photo-1667499745120-f9bcef8f584e?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-19" },
            { id: 38, name: "Yoga Block and Strap Set", category: "Sports", price: 19.99, rating: 1.4, reviews: 2300, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1664536967978-cc37f620b642?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-11" },
            { id: 39, name: "Camping Sleeping Bag, All Season", category: "Sports", price: 79.99, rating: 4.5, reviews: 2600, shipping: "prime", image: "https://images.unsplash.com/photo-1708105559945-ad5d6612c78c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-10" },
            { id: 40, name: "Women's Winter Coat", category: "Clothing", price: 140.00, rating: 3.7, reviews: 2980, shipping: "prime", image: "https://images.unsplash.com/photo-1605814932543-71821a4e0f3c?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-25" },
            { id: 41, name: "Wireless Charging Pad, Fast Charge", category: "Electronics", price: 29.99, rating: 4.3, reviews: 2100, shipping: "prime", image: "https://images.unsplash.com/photo-1603674554159-b62f6febbce5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-26" },
            { id: 42, name: "Smart LED Light Bulbs, 4-Pack", category: "Electronics", price: 49.99, rating: 4.5, reviews: 3650, shipping: "free", image: "https://images.unsplash.com/photo-1661970050528-e9c93394c7d7?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-18" },
            { id: 43, name: "Laptop Cooling Pad with Fans", category: "Electronics", price: 34.99, rating: 4.2, reviews: 1875, shipping: "prime", image: "https://images.unsplash.com/photo-1671464884932-842296b12314?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-20" },
            { id: 44, name: "Men's Classic Leather Belt", category: "Clothing", price: 25.00, rating: 4.1, reviews: 1420, shipping: "free", image: "https://images.unsplash.com/photo-1664286022075-8e997e95bd17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-29" },
            { id: 45, name: "Women's Sports Bra, High Impact", category: "Clothing", price: 32.99, rating: 4.6, reviews: 2800, shipping: "prime", image: "https://images.unsplash.com/photo-1595909315417-2edd382a56dc?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-15" },
            { id: 46, name: "Men's Slim Fit Chinos", category: "Clothing", price: 45.00, rating: 4.3, reviews: 1920, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1726403330302-4f93db5d48c3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-01" },
            { id: 47, name: "Automatic Bread Maker, 2lb", category: "Home", price: 119.99, rating: 4.5, reviews: 2750, shipping: "prime", image: "https://images.unsplash.com/photo-1560370114-b9b119b90cce?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-12" },
            { id: 48, name: "Non-Stick Frying Pan Set, 3-Pack", category: "Home", price: 79.99, rating: 4.4, reviews: 2380, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1687697860976-5c99e3da48f0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-05-29" },
            { id: 49, name: "Essential Oil Diffuser, 500ml", category: "Home", price: 39.99, rating: 4.6, reviews: 3100, shipping: "prime", image: "https://images.unsplash.com/photo-1625479968737-33db77af835e?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-09" },
            { id: 50, name: "Queen Size Comforter Set, 7-Piece", category: "Home", price: 149.99, rating: 5.0, reviews: 4300, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1670869816898-7a4149b3de0c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-22" },
            { id: 51, name: "Adjustable Weight Bench", category: "Sports", price: 179.99, rating: 4.5, reviews: 2050, shipping: "prime", image: "https://images.unsplash.com/photo-1735647134600-fd2b75fba36d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-19" },
            { id: 52, name: "Women's Yoga Pants", category: "Clothing", price: 29.99, rating: 4.7, reviews: 4200, shipping: "prime", image: "https://images.unsplash.com/photo-1606647253305-e45abfdad5a8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-21" },
            { id: 53, name: "Foam Roller for Muscle Recovery", category: "Sports", price: 22.99, rating: 4.4, reviews: 1890, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1661923103649-0223557b8589?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-08" },
            { id: 54, name: "Water Bottle with Time Marker, 1L", category: "Sports", price: 18.99, rating: 4.6, reviews: 2550, shipping: "prime", image: "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-30" },
            { id: 55, name: "Men's Formal Dress Shirt", category: "Clothing", price: 49.99, rating: 4.3, reviews: 2650, shipping: "prime", image: "https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-25" },
            { id: 56, name: "Cordless Electric Screwdriver", category: "Home", price: 59.99, rating: 4.2, reviews: 1850, shipping: "free", image: "https://plus.unsplash.com/premium_photo-1681732426313-096775f88cbc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-11" },
            { id: 57, name: "Wireless Smart Doorbell Camera", category: "Electronics", price: 149.99, rating: 4.6, reviews: 2950, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1729571572792-d211af573965?q=80&w=888&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-13" },
            { id: 58, name: "Men's Casual Sneakers", category: "Clothing", price: 74.99, rating: 4.4, reviews: 3300, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1722168023154-289e8a536ab1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-10" },
            { id: 59, name: "Camping Stove Portable Gas Burner", category: "Sports", price: 59.99, rating: 2.5, reviews: 2100, shipping: "free", image: "https://images.unsplash.com/photo-1738220543088-aa5b0f83733b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-06-18" },
            { id: 60, name: "King Size Memory Foam Mattress", category: "Home", price: 499.99, rating: 4.8, reviews: 5400, shipping: "prime", image: "https://plus.unsplash.com/premium_photo-1723834562784-a56d7b234360?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", dateAdded: "2023-07-23" }

        ];

        // Cart functionality
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.querySelector('.cart-count');
        const cartIcon = document.getElementById('cartIcon');
        const cartModal = document.getElementById('cartModal');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const closeCart = document.querySelector('.close-cart');
        const checkoutBtn = document.querySelector('.checkout-btn');
        const fallbackImage = 'https://via.placeholder.com/150';

        // Toggle cart modal
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
            if (cartModal.style.display === 'block') {
                cartItems.querySelector('button, input')?.focus();
            }
        });

        // Close cart modal
        closeCart.addEventListener('click', function() {
            cartModal.style.display = 'none';
        });

        // Close cart modal when clicking outside
        document.addEventListener('click', function(e) {
            if (!cartIcon.contains(e.target) && !cartModal.contains(e.target)) {
                cartModal.style.display = 'none';
            }
        });

        // Close cart modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cartModal.style.display === 'block') {
                cartModal.style.display = 'none';
            }
        });

        // Focus trapping in cart modal
        cartModal.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                const focusableElements = cartModal.querySelectorAll('button, input');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });

        // Checkout button
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                window.location.href = 'checkout.html';
            }
        });

        // Add to cart function
        function addToCart(product) {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image || fallbackImage,
                    quantity: 1
                });
            }
            updateCart();
            cartCount.classList.add('cart-animation');
            setTimeout(() => {
                cartCount.classList.remove('cart-animation');
            }, 500);
        }

        // Update cart UI
        function updateCart() {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;

            if (cart.length === 0) {
                cartItems.innerHTML = '<div class="empty-cart-message">Your cart is empty</div>';
            } else {
                cartItems.innerHTML = '';
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'cart-item';
                    cartItem.innerHTML = `
                        <img src="${item.image || fallbackImage}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">$${item.price.toFixed(2)} x 
                                <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="cart-item-quantity">
                            </div>
                            <button class="remove-item" data-id="${item.id}" aria-label="Remove ${item.name} from cart">Remove</button>
                        </div>
                    `;
                    cartItems.appendChild(cartItem);
                });

                document.querySelectorAll('.cart-item-quantity').forEach(input => {
                    input.addEventListener('change', function() {
                        const id = parseInt(this.dataset.id);
                        const newQuantity = parseInt(this.value);
                        const item = cart.find(item => item.id === id);
                        if (newQuantity >= 1) {
                            item.quantity = newQuantity;
                            updateCart();
                        }
                    });
                });

                document.querySelectorAll('.remove-item').forEach(button => {
                    button.addEventListener('click', function() {
                        const id = parseInt(this.dataset.id);
                        cart = cart.filter(item => item.id !== id);
                        updateCart();
                    });
                });
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `Total: $${total.toFixed(2)}`;
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Pagination settings
        const itemsPerPage = 12; // Updated to 12 to accommodate 4 products per row
        let currentPage = 1;
        let filteredProducts = [...products];
        let searchQuery = '';

        // Debounce function for search
        function debounce(func, delay) {
            let timeoutId;
            return function(...args) {
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => func.apply(this, args), delay);
            };
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            updateCart(); // Initialize cart from localStorage

            // Add event listeners to filters and sort
            document.getElementById('categoryFilter').addEventListener('change', updateResults);
            document.getElementById('priceFilter').addEventListener('change', updateResults);
            document.getElementById('ratingFilter').addEventListener('change', updateResults);
            document.getElementById('shippingFilter').addEventListener('change', updateResults);
            document.getElementById('sortOption').addEventListener('change', updateResults);
            document.getElementById('resetFilters').addEventListener('click', function() {
                document.getElementById('categoryFilter').value = '';
                document.getElementById('priceFilter').value = '';
                document.getElementById('ratingFilter').value = '';
                document.getElementById('shippingFilter').value = '';
                document.getElementById('sortOption').value = 'featured';
                document.querySelector('.search-input').value = '';
                searchQuery = '';
                updateResults();
            });

            // Search functionality
            document.querySelector('.search-button').addEventListener('click', performSearch);
            document.querySelector('.search-input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });
            document.querySelector('.search-input').addEventListener('input', debounce(performSearch, 300));

            // Pagination buttons
            document.getElementById('pagination').addEventListener('click', function(e) {
                if (e.target.classList.contains('pagination-button') && !e.target.disabled) {
                    const page = e.target.dataset.page;
                    if (page === 'prev') {
                        currentPage--;
                    } else if (page === 'next') {
                        currentPage++;
                    } else {
                        currentPage = parseInt(page);
                    }
                    renderProducts();
                    renderPagination();
                }
            });

            // Initial render
            updateResults();
        });

        function performSearch() {
            searchQuery = document.querySelector('.search-input').value.trim().toLowerCase();
            updateResults();
        }

        function updateResults() {
            currentPage = 1;
            const resultsContainer = document.getElementById('productResults');
            resultsContainer.innerHTML = '<div class="loading">Loading...</div>';

            setTimeout(() => {
                const category = document.getElementById('categoryFilter').value;
                const price = document.getElementById('priceFilter').value;
                const rating = document.getElementById('ratingFilter').value;
                const shipping = document.getElementById('shippingFilter').value;
                const sort = document.getElementById('sortOption').value;

                filteredProducts = products.filter(product => {
                    if (searchQuery && !product.name.toLowerCase().includes(searchQuery)) {
                        return false;
                    }
                    if (category && product.category !== category) {
                        return false;
                    }
                    if (price) {
                        const [min, max] = price.split('-').map(Number);
                        if (max) {
                            if (product.price < min || product.price > max) return false;
                        } else if (product.price < min) {
                            return false;
                        }
                    }
                    if (rating && product.rating < parseInt(rating)) {
                        return false;
                    }
                    if (shipping && product.shipping !== shipping) {
                        return false;
                    }
                    return true;
                });

                filteredProducts.sort((a, b) => {
                    if (sort === 'priceAsc') {
                        return a.price - b.price;
                    } else if (sort === 'priceDesc') {
                        return b.price - a.price;
                    } else if (sort === 'nameAsc') {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });

                renderProducts();
                renderPagination();
            }, 500);
        }

        function renderProducts() {
            const resultsContainer = document.getElementById('productResults');
            const resultsCount = document.querySelector('.results-count');
            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            const paginatedProducts = filteredProducts.slice(start, end);

            if (filteredProducts.length === 0) {
                resultsCount.textContent = 'No results found';
                resultsContainer.innerHTML = '<p style="text-align: center; color: #6b7280;">No products match your filters.</p>';
                document.getElementById('pagination').innerHTML = '';
                return;
            } else {
                resultsCount.textContent = `${start + 1}-${Math.min(end, filteredProducts.length)} of ${filteredProducts.length} results`;
            }

            resultsContainer.innerHTML = '';

            paginatedProducts.forEach(product => {
                const stars = generateStarRating(product.rating);
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <a href="product.html?id=${product.id}" class="product-image">
                        <img src="${product.image || fallbackImage}" alt="${product.name}" loading="lazy">
                    </a>
                    <div class="product-info">
                        <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                        <div class="product-rating">
                            ${stars}
                            <span>${product.reviews.toLocaleString()}</span>
                        </div>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <div class="prime-badge">${product.shipping === 'prime' ? 'Prime' : ''}</div>
                        <div class="product-shipping">
                            ${product.shipping === 'prime' || product.shipping === 'free' 
                                ? 'FREE delivery' 
                                : 'Shipping: $5.99'}
                        </div>
                        <button class="add-to-cart" data-id="${product.id}" aria-label="Add ${product.name} to cart">Add to Cart</button>
                    </div>
                `;
                resultsContainer.appendChild(productCard);

                const addButton = productCard.querySelector('.add-to-cart');
                addButton.addEventListener('click', function() {
                    addToCart(product);
                });
            });
        }

        function generateStarRating(rating) {
            let stars = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(rating)) {
                    stars += '<i class="fas fa-star"></i>';
                } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
                    stars += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    stars += '<i class="far fa-star"></i>';
                }
            }
            return stars;
        }

        function renderPagination() {
            const paginationContainer = document.getElementById('pagination');
            const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

            paginationContainer.innerHTML = '';

            paginationContainer.innerHTML += `
                <button class="pagination-button" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">
                    <i class="fas fa-chevron-left"></i> Previous
                </button>
            `;

            for (let i = 1; i <= totalPages; i++) {
                paginationContainer.innerHTML += `
                    <button class="pagination-button" data-page="${i}" ${i === currentPage ? 'disabled' : ''} aria-label="Page ${i}">${i}</button>
                `;
            }

            paginationContainer.innerHTML += `
                <button class="pagination-button" data-page="next" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page">
                    Next <i class="fas fa-chevron-right"></i>
                </button>
            `;
        }