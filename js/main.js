'use strict'
// // const postalCode = '123-4567'
// const postal = {
//     postalCode: '123-4567',
//     checkPostalCode(){
//         const replaced = this.postalCode.replace('-', '').length
//         // const length = replaced.length
//         // if(length === 7){}
//         return replaced === 7
//     }
// }

// console.log(postal.postalCode)
// console.log(postal.checkPostalCode())

// const test = document.getElementById('test')
// const testList = document.querySelector('#test')
// const testLists = document.querySelectorAll('.test_list')
// console.log(test)
// console.log(testList)
// console.log(testLists)

// test.classList.add('red')
// testList.classList.remove('red')

// const target = document.getElementById('target')
// const newDiv = document.createElement('div')
// newDiv.id = 'test'
// newDiv.classList.add('red')
// newDiv.textContent = 'テスト'
// // target.appendChild(newDiv) //targetの中に追加
// target.parentNode.appendChild(newDiv) //targetと同じ階層に追加

// const targetList = document.getElementById('divList')
// const reference = document.querySelector('.div1').nextElementSibling //隣の要素を取得する
// const newElement = document.createElement('div')
// newElement.classList.add('div4')
// newElement.textContent = '追加分'
// targetList.insertBefore(newElement, reference)

// console.log(reference)
// console.log(targetList)

const target = document.getElementById('target')
target.addEventListener('click', (e) => {
    console.log(e)
    const test = document.getElementById('test')
    test.textContent = 'テスト'
    test.classList.add('red')
})
