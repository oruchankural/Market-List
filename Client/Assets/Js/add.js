function addToList() {
    var productName = document.getElementById("productName").value;
    var productAmount = document.getElementById("productAmount").value;
    if (productName != "" && productAmount != "") {
        var product = new Product(productName, productAmount);
        const productList = [];
        productList.push(product);
        var currentProduct =   JSON.parse(localStorage.getItem("productList"));
        if(currentProduct != null){
           for(let i = 0 ; i < currentProduct.length ; i++){
                var newProduct = new Product(currentProduct[i].name,currentProduct[i].amount);
                productList.push(newProduct);
           }
        }
        localStorage.setItem("productList", JSON.stringify(productList));
        document.getElementById("productAmount").value = "";
        document.getElementById("productName").value = "";
        getProducts();
    }
}