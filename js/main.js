// //select
// const values = [
//   {
//     value: 'En',
//     label: '<img src="img/countries/ru1.svg"/>',
//     id: 2,
//   },
//   {
//     value: 'Ru',
//     label: '<img src="img/countries/ru.svg"/>',
//     id: 1,
//     selected: true,
//   },
// ];
// const defaultSelect = () => {
//   const element = document.querySelectorAll('.select-d');
//   element.forEach((e, i) => {
//     const choices = new Choices(e, {
//       choices: values,
//       // searchEnabled: true,
//       // searchPlaceholderValue: 'Поиск',
//       placeholder: true,
//       searchEnabled: false,
//       searchPlaceholderValue: '',
//       searchChoices: false,
//       // removeItemButton: true,
//     });
//   });
// };

// defaultSelect();

//
// const phone = document.querySelector('.phone');
// const phoneSelect = document.querySelector('.select-phone');

// phoneSelect.addEventListener('change', (e) => {
//   if (e.currentTarget.value === 'En') {
//     phone.value = '+1';
//   }
//   if (e.currentTarget.value === 'Ru') {
//     phone.value = '+7';
//   }
// });

// change__body
const changeBody = document.querySelectorAll('.change__body');

changeBody.forEach((ch) => {
  ch.addEventListener('click', (e) => {
    const currntChildren = ch.children;
    for (let i = 0; i < currntChildren.length; i++) {
      currntChildren[i].classList.remove('active');
    }
    e.target.classList.add('active');
    changeChild();
  });
});

const changeChild = () => {
  let index = null;
  const childrenArrow = document.querySelector('.children-arrow').children;
  const child2 = document.querySelectorAll('.child-2');
  for (let i = 0; i < childrenArrow.length; i++) {
    if (childrenArrow[i].className === 'change__item active') {
      index = i - 1;
    }
  }

  child2.forEach((e) => {
    e.classList.remove('active');
  });

  for (let i = 0; i <= index; i++) {
    child2[i].classList.add('active');
  }

  const childspensionHex = document.querySelector('.childspension-hex');
  const childspension = document.querySelector('.childspension');
  if (childspensionHex.className.includes('active') === true) {
    childspension.classList.add('active');
  } else {
    childspension.classList.remove('active');
  }

  const widowallowanceHex = document.querySelector('.widowallowance-hex');
  const widowallowance = document.querySelector('.widowallowance');
  if (widowallowanceHex.className.includes('active') === true) {
    widowallowance.classList.add('active');
  } else {
    widowallowance.classList.remove('active');
  }
};

// checkboxes
const check1 = document.querySelector('.checkbox-1');
const salary = document.querySelector('.salary');

const check2 = document.querySelector('.checkbox-2');
const pension = document.querySelector('.pension');

const check4 = document.querySelector('.checkbox-4');
const check6 = document.querySelector('.checkbox-6');
const additional = document.querySelector('.additional');
const childspension = document.querySelector('.childspension');

const check3 = document.querySelector('.checkbox-3');
const self = document.querySelector('.self');

const check5 = document.querySelector('.checkbox-5');
const scholarship = document.querySelector('.scholarship');

const selectStatus = document.querySelector('.select-status');
const widow = document.querySelector('.widow');

selectStatus.addEventListener('change', (e) => {
  if (e.target.value === 'Вдова') {
    widow.classList.add('active');
  } else {
    widow.classList.remove('active');
  }
});

check1.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    salary.classList.add('active');
    additional.classList.add('active');
  } else {
    salary.classList.remove('active');
  }
});
check2.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    pension.classList.add('active');
    additional.classList.add('active');
  } else {
    pension.classList.remove('active');
  }
});
check3.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    self.classList.add('active');
    additional.classList.add('active');
  } else {
    self.classList.remove('active');
  }
});
check5.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    scholarship.classList.add('active');
    additional.classList.add('active');
  } else {
    scholarship.classList.remove('active');
  }
});

check4.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check6.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});

//count
const MONTHS_IN_YEAR = 12;
const LIVING_WAGE = 13000;

const incomeInput = document.getElementById('income');
