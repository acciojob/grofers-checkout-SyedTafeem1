const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	 const table = document.getElementsByTagName("table")
        const prices = document.querySelectorAll(".price")
        let total = 0
        for(let price of prices){
            total += Number(price.textContent)
        }

        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")

        td1.textContent="total price";
        td2.textContent=total;
        
        tr.append(td1,td2)
        
        table[0].appendChild(tr)
  
};

getSumBtn.addEventListener("click", getSum);

