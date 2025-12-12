// 取得 DOM 元素
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("gradeTableBody");

// 用來記錄目前的列數 (序號 #)
let rowCount = 0;

// 定義 updateColumnAverages 函數 (計算直行平均)
function updateColumnAverages() {
    const rows = tableBody.querySelectorAll("tr");
    let totalMath = 0;
    let totalEnglish = 0;
    let totalRowAvg = 0;
    let count = rows.length;

    if (count === 0) return; // 避免除以 0

    // 遍歷每一列去加總數值
    rows.forEach(row => {
        // [1]=Math, [2]=English, [3]=Average
        totalMath += parseFloat(row.cells[1].innerText);
        totalEnglish += parseFloat(row.cells[2].innerText);
        totalRowAvg += parseFloat(row.cells[3].innerText);
    });

    // 計算平均並更新 Footer
    document.getElementById("avgMath").innerText = (totalMath / count).toFixed(2);
    document.getElementById("avgEnglish").innerText = (totalEnglish / count).toFixed(2);
    document.getElementById("avgTotal").innerText = (totalRowAvg / count).toFixed(2);
}

// 監聽按鈕點擊事件
submitBtn.addEventListener("click", function() {
    // 取得輸入值
    const mathInput = document.getElementById("mathGrade");
    const englishInput = document.getElementById("englishGrade");

    const mathScore = parseFloat(mathInput.value);
    const englishScore = parseFloat(englishInput.value);

    // 簡單的驗證：確保輸入不為空
    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("Please enter valid numbers for both subjects.");
        return;
    }

    // 增加序號
    rowCount++;

    // 計算該列的平均 (Row Average)
    const rowAverage = (mathScore + englishScore) / 2;

    // 將新的一列加入表格
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAverage.toFixed(2)}</td>
    `;
    
    tableBody.appendChild(newRow);

    // 清空輸入框
    mathInput.value = "";
    englishInput.value = "";

    // 更新下方的總平均
    updateColumnAverages();
});