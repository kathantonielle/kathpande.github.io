let payrollData = [];

        function addEmployee() {
            const employeeName = document.getElementById('employeeName').value;
            const daysWorked = parseFloat(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);
            const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

            if (!employeeName || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
                alert('Please enter valid information for the employee.');
                return;
            }

            const grossPay = daysWorked * dailyRate;
            const netPay = grossPay - deductionAmount;

            const payrollEntry = {
                employeeName,
                daysWorked,
                dailyRate,
                grossPay,
                deductionAmount,
                netPay
            };

            payrollData.push(payrollEntry);
            displayPayroll();
            clearInputFields();
        }

        function displayPayroll() {
            const payrollBody = document.getElementById('payrollBody');
            payrollBody.innerHTML = '';

            payrollData.forEach((entry, index) => {
                const row = payrollBody.insertRow();
                const cellNo = row.insertCell(0);
                const cellEmployeeName = row.insertCell(1);
                const cellDaysWorked = row.insertCell(2);
                const cellDailyRate = row.insertCell(3);
                const cellGrossPay = row.insertCell(4);
                const cellDeductionAmount = row.insertCell(5);
                const cellNetPay = row.insertCell(6);
                const cellAction = row.insertCell(7);

                cellNo.textContent = index + 1;
                cellEmployeeName.textContent = entry.employeeName;
                cellDaysWorked.textContent = entry.daysWorked;
                cellDailyRate.textContent = entry.dailyRate;
                cellGrossPay.textContent = entry.grossPay.toFixed(2);
                cellDeductionAmount.textContent = entry.deductionAmount.toFixed(2);
                cellNetPay.textContent = entry.netPay.toFixed(2);

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = function () {
                    deleteEmployeeByIndex(index);
                };
                cellAction.appendChild(deleteButton);
            });
        }

        function deleteEmployee() {
            const deleteLine = parseInt(document.getElementById('deleteLine').value);

            if (isNaN(deleteLine) || deleteLine < 1 || deleteLine > payrollData.length) {
                alert('Please enter a valid line number to delete.');
                return;
            }

            payrollData.splice(deleteLine - 1, 1);
            displayPayroll();
            clearInputFields();
        }

        function deleteEmployeeByIndex(index) {
            payrollData.splice(index, 1);
            displayPayroll();
        }

        function clearInputFields() {
            document.getElementById('employeeName').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deductionAmount').value = '';
        }