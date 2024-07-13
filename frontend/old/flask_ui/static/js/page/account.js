import {getsTransaction, addTransaction, delTransaction, downloadTransactionCSV} from '/static/js/db/transaction.js'
import {formatDateTime, formatDateTimeZone, formatDate, formatTime} from "/static/js/utils/formatDate.js"
import {checkNull} from "/static/js/utils/checkNull.js"

// init
(() => {
  // value
  document.getElementById("datetime").value = formatDateTime(new Date());
  // submit
  document.addEventListener('DOMContentLoaded', async () => {
    const saveButton = document.getElementById('saveAccount');
    saveButton.addEventListener('click', saveAccount);
    const downloadCSVButton = document.getElementById('downloadCSV');
    downloadCSVButton.addEventListener('click', downloadTransactionCSV);
  });
  initData()
})();

export async function saveAccount() {
  const selectDateTime = document.getElementById("datetime");
  const selectLabel = document.getElementById("label");
  const selectPrice = document.getElementById("price");

  const hasLabel = checkNull(selectLabel)
  const hasPrice = checkNull(selectPrice)

  if ( hasLabel && hasPrice ) {
    const data = {
      "datetime": formatDateTimeZone(selectDateTime.value),
      "label": selectLabel.value,
      "price": selectPrice.value
    }
    const res = await addTransaction(data)
    if (res.id) {
      initData()
    }
  }
}

export async function delAccount(uuid){
  await delTransaction(uuid)
  await initData()
}

export async function initData() {
  // data
  const res = await getsTransaction()
  let allUUid = []
  const dataGroup = {}
  for (const e of res.data.reverse()) {
    const date = formatDate(e.datetime)
    if (typeof dataGroup[date] === 'object' ) {
      dataGroup[date] = [ ...dataGroup[date], e]
    } else {
      dataGroup[date] = [ e ]
    }
  }
  Object.keys(dataGroup).reverse()
  
  // show
  const accountBox = document.getElementById('accountBox')
  accountBox.innerHTML = ''
  for ( const e in dataGroup ) {
    let date = e
    let total = 0
    let row = ''
    dataGroup[e]
    for ( const i of dataGroup[e] ) {
      allUUid.push(i.uuid)
      total += parseFloat(i.price)
      row += `<tr>
      <td class="w-2/5 ">${i.label}</td>
      <td>${i.price}</td>
      <td>
        <button class="btn btn-square btn-xs" id="${i.uuid}">
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/></svg>
        </button>
      </td>
      </tr>`
    }
    const dataTabel = 
    `<div class="tp-card">
    <div class="tp-card-body">
      <div class="overflow-x-auto">
        <table class="table">
          <div class="flex justify-between px-2 pb-2">
            <div>${date}</div>
            <div>${total.toFixed(2)}</div>
          </div>
          <!-- head -->
          <thead>
            <tr>
              <th class="" >Label</th>
              <th class="" >Price</th>
              <th class="w-10">Action</th>
            </tr>
          </thead>
          <tbody>
            ${row}
          </tbody>
        </table>
      </div>
    </div>
    </div><br>`
    accountBox.innerHTML += dataTabel
  }
  for (const uuid of allUUid ) {
    const button = document.getElementById(uuid);
    button.addEventListener('click', () => delAccount(uuid) );
  }

}