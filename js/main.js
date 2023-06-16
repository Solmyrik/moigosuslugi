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

  console.log(index);
};
