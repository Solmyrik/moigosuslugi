const incomeInput = document.getElementById('income');
const familyMembersInput = document.getElementById('family-members');
const childrenInput = document.getElementById('children');
const resultValue = document.getElementById('result');
const incomeValue = document.getElementById('income__value');

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
  let indexMember = null;
  const childrenArrow = document.querySelector('.children-arrow').children;
  const childrenMember = document.querySelector('.children-member').children;
  const child2 = document.querySelectorAll('.child-2');
  for (let i = 0; i < childrenArrow.length; i++) {
    if (childrenArrow[i].className === 'change__item active') {
      index = i - 1;
    }
  }
  for (let i = 0; i < childrenMember.length; i++) {
    if (childrenMember[i].className === 'change__item active') {
      indexMember = i - 1;
    }
  }

  childrenInput.value = index + 2;
  familyMembersInput.value = indexMember + 3;

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
const check11 = document.querySelector('.checkbox-11');
const salary = document.querySelector('.salary');
const spouse = document.querySelector('.spouse');

const check2 = document.querySelector('.checkbox-2');
const check12 = document.querySelector('.checkbox-12');
const pension = document.querySelector('.pension');

const check4 = document.querySelector('.checkbox-4');
const check14 = document.querySelector('.checkbox-14');
const check6 = document.querySelector('.checkbox-6');
const check16 = document.querySelector('.checkbox-16');
const additional = document.querySelector('.additional');
const childspension = document.querySelector('.childspension');

const check3 = document.querySelector('.checkbox-3');
const check13 = document.querySelector('.checkbox-13');
const self = document.querySelector('.self');

const check5 = document.querySelector('.checkbox-5');
const check15 = document.querySelector('.checkbox-15');
const scholarship = document.querySelector('.scholarship');

const selectStatus = document.querySelector('.select-status');
const widow = document.querySelector('.widow');
const spouseChecks = document.querySelector('.spouse-checks');

selectStatus.addEventListener('change', (e) => {
  if (e.target.value === 'Вдова') {
    widow.classList.add('active');
  } else {
    widow.classList.remove('active');
  }

  if (e.target.value === 'ЗАГС') {
    spouseChecks.classList.add('active');
  } else {
    spouseChecks.classList.remove('active');
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
check11.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    spouse.classList.add('active');
    additional.classList.add('active');
  } else {
    spouse.classList.remove('active');
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
check12.addEventListener('change', (e) => {
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
check13.addEventListener('change', (e) => {
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
check15.addEventListener('change', (e) => {
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
check14.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check6.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});
check16.addEventListener('change', (e) => {
  if (e.currentTarget.checked === true) {
    additional.classList.add('active');
  }
});

const sumS = document.querySelectorAll('.sum');
setInterval(() => {
  let currentSum = 0;
  sumS.forEach((sum) => {
    currentSum = Number(currentSum) + Number(sum.value) * 12;
  });
  incomeInput.value = currentSum;
}, 1000);

//count
const MONTHS_IN_YEAR = 12;
const LIVING_WAGE = 13000;

const calc = () => {
  const income = parseFloat(incomeInput.value);
  const familyMembers = parseInt(familyMembersInput.value);
  const children = parseInt(childrenInput.value);

  const averageIncomeFamily = income / MONTHS_IN_YEAR;
  const averageIncome = averageIncomeFamily / familyMembers;

  const childrenValue50 = 0.5 * 13000 * (!children ? 1 : children);
  const childrenValue75 = 0.75 * 13000 * (!children ? 1 : children);

  const value75 = (averageIncomeFamily + childrenValue50) / familyMembers;
  const value100 = (averageIncomeFamily + childrenValue75) / familyMembers;
  handleFormInput();
  console.log(averageIncome, value75);

  if (averageIncome <= 13000) {
    console.log(13000, averageIncome, value75);
    if (value75 <= 13000) {
      if (value100 <= 13000) {
        result = 'Положено семье 100%';
        // return;
      } else {
        result = 'Положено семье 75%';
        // return;
      }
    } else {
      result = 'Положено семье 50%';
      // return;
    }
  } else {
    result = 'У вас превышение дохода. Право на выплату отсутствует';
  }

  console.log(result);
  resultValue.textContent = result;
};

function handleFormInput() {
  const income = parseFloat(incomeInput.value);
  const familyMembers = parseInt(familyMembersInput.value);
  const value = parseInt(income / familyMembers / MONTHS_IN_YEAR);
  const numberFormat = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

  if (isNaN(value)) {
    incomeValue.textContent = '0 ₽';
  } else {
    incomeValue.textContent = numberFormat.format(value);
  }
}

const minuButton = document.querySelector('.form__minbutton');

minuButton.addEventListener('click', calc);
