(() => {
    console.log('loaded');
    initApp('ss');
    //let x = await getPosts();
    async function initApp(title) {
        console.log('done');
        let arr = await getEmps('', '');
        console.log(arr);
        let t = drawTable(drawRows(arr));
        document.getElementById('tabled').innerHTML = t;
        console.log(document.querySelectorAll(".promote"));
        document.querySelectorAll(".promote").forEach((btn, i) => btn.addEventListener('click', { handleEvent: promoteEmp, i: i + 1 }));
        document.querySelectorAll(".demote").forEach((btn, i) => btn.addEventListener('click', { handleEvent: demoteEmp, i: i + 1 }));
        document.querySelectorAll(".remove").forEach((btn, i) => btn.addEventListener('click', { handleEvent: removeEmp, i: i + 1 }));
        document.querySelectorAll(".change").forEach((btn, i) => btn.addEventListener('click', { handleEvent: editEmp, i: i + 1 }));
        console.log('done');
    }
    function addPeople() { }
    function getPeoples() { }

    function changeDropdownCaption(item) {

    }
    function drawTable(rows) {
        return `
        <table class="table table-striped table-dark">
            <tbody>${rows}</tbody>
        </table>
        `
    }
    //.slice(2, -1).join('\n')
    function drawRows(tableData) {

        let rows;
        tableData.forEach((row, i) => {
            rows += `<tr>${row.map(cell => `<td>${cell}</td>`).join('\n') + addButtons(i)
                }</tr>`;
        });
        return rows;
    }

    function addButtons(i) {
        return `
        <td><button type="button" class="btn btn-success btn-sm promote">Повысить</button></td>
        <td><button type="button" class="btn btn-warning btn-sm demote">Понизить</button></td>
        <td><button type="button" class="btn btn-info btn-sm change">Изменить</button></td>
        <td><button type="button" class="btn btn-danger btn-sm remove">Уволить</button></td>`
    }
    function promoteEmp(e) { console.log(this.i); }
    function demoteEmp(e) { console.log(this.i); }
    function removeEmp(e) { console.log(this.i); }
    function editEmp(e) { console.log(this.i); }

    async function loadData() {

    }

    async function getPosts() {
        return new Promise(function (resolve, reject) {
            window.fetch('/posts')
                .then(function (response) {
                    return jsonTableToArray(response.json());
                }).then(function (response) {
                    console.log(response);
                    console.log('ds');
                })
        });
    }
    async function getEmps(post, dept) {
        return window.fetch('/workers?' + new URLSearchParams({ post, dept }))
            .then(function (response) {
                return response.json();
            }).then(function (response) {
                return jsonTableToArray(response);
            })
    }
    function changeDropdownCaption(item) {
        document.getElementById('dropdown03').innerText = item.innerText;
    }

    function jsonTableToArray(table) {
        let arr = []
        console.log(table)
        for (let row of table) {
            let rowArr = [];
            for (let cell in row) rowArr.push(row[cell]);
            arr.push(rowArr);
        }
        return arr;
    }
})();
