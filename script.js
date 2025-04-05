document.getElementById('calculate-btn').addEventListener('click', function () {
    const age = parseFloat(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
  
    if (age && height && weight) {
      const happyBeans = Math.floor(age * height * weight);
      document.getElementById('result').textContent = `悦崽今日一共有 ${happyBeans} 粒开心豆!`;
    } else {
      document.getElementById('result').textContent = "请输入完整信息！";
    }
  });
  