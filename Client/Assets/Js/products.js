function getProducts() {
    const productList = JSON.parse(localStorage.getItem("productList"));
    let totalAmount = 0;
    var tbody = document.getElementById("products");
    deleteRows(tbody.getElementsByTagName("tr"));
    if(productList != null){
        for(let i = 0 ; i < productList.length ; i++){
            var row = document.createElement("tr");
            var nameCell = document.createElement("td");
            var nameCellText = document.createTextNode(productList[i].name);
            nameCell.appendChild(nameCellText);
            var amountCell = document.createElement("td");
            var amountCellText = document.createTextNode(productList[i].amount);
            amountCell.appendChild(amountCellText);
            var deleteCell = document.createElement("td");
            var deleteButton = document.createElement("button");
            deleteButton.setAttribute("id",i);
            deleteButton.setAttribute("class","btn btn-sm btn-danger");
            deleteButton.innerHTML = "<i class='bi bi-trash3'></i>";
            deleteButton.addEventListener('click',function(){
                removeProduct(i);
            });
            deleteCell.appendChild(deleteButton);
            row.appendChild(nameCell);
            row.appendChild(amountCell);
            row.appendChild(deleteCell);
            tbody.appendChild(row);
            totalAmount += parseInt(productList[i].amount);
        }
    }
    setSummaryConfiguration(totalAmount);
    
    
}
function clearProducts(){
    localStorage.removeItem("productList");
    getProducts();
}
function deleteRows(trElements){
    for (var i = trElements.length - 1; i >= 0; --i) {
        trElements[i].remove();
    }
}
function removeProduct(index){
    var updateItems = JSON.parse(localStorage.getItem("productList"));
    updateItems.splice(index, 1); 
    localStorage.removeItem("productList");
    localStorage.setItem("productList",JSON.stringify(updateItems));
    getProducts();
}
function setSummaryConfiguration(totalAmount){
    var totalAmountElement = document.getElementById("totalAmount");
    var summary = document.getElementById("summary");
    if(totalAmount !== 0){
        summary.setAttribute("style","display:block");
        totalAmountElement.innerText = totalAmount;
    }
    else{
        summary.setAttribute("style","display:none");
    }

}

