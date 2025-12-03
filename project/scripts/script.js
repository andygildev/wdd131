
const products = [
    { id: "p1", name: "Laptop Pro X" },
    { id: "p2", name: "Smartphone Ultra" },
    { id: "p3", name: "Wireless Headphones" },
    { id: "p4", name: "4K Monitor" },
    { id: "p5", name: "Gaming Mouse" }
];


const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
