
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;

    if (name && description && price) {
        
        const productList = document.getElementById('productList');
        const li = document.createElement('li');
        li.classList.add("product-item");
        li.innerHTML = `
            <strong>${name}</strong><br>
            ${description}<br>
            Preço: R$ ${price} 
            <button class="remove-btn" onclick="removeProduct(this)">Remover</button>
        `;
        productList.appendChild(li);

        
        document.getElementById('productForm').reset();
    }
});


function removeProduct(button) {
    const li = button.parentElement;
    li.remove();
}
