const currentWorkTime = document.querySelector('#currentWorkTime');
const perviousWorkTime = document.querySelector('#perviousWorkTime');
const currentPlayTime = document.querySelector('#currentPlayTime');
const perivousPlayTime = document.querySelector('#perivousPlayTime');
const currentStudyTime = document.querySelector('#currentStudyTime');
const perivousStudyTime = document.querySelector('#perivousStudyTime');
const currentExerciseTime = document.querySelector('#currentExerciseTime');
const perivousExerciseTime = document.querySelector('#perivousExerciseTime');
const currentSocialTime = document.querySelector('#currentSocialTime');
const perivousSocialTime = document.querySelector('#perivousSocialTime');
const currentSelfcareTime = document.querySelector('#currentSelfcareTime');
const perivousSelfcareTime = document.querySelector('#perivousSelfcareTime');
const radios = document.querySelectorAll('input[name="Date"]')

let data = null;


async function loadData() {
    try {
        const response = await fetch('./data.json');
        data = await response.json();
        console.log('data fetched')
    } catch (error) {
        console.log('There was an Error Loading Data', error)
    }
}

loadData()


function updateTimeframe(selectedTimeframe) {
    const cards = data.map(activity => {
    const tf = activity.timeframes[selectedTimeframe];

    return {
        title: activity.title,
        current: tf.current,
        previous: tf.previous
    };
    });

    renderCards(cards)
}

function renderCards(cards) {
  cards.forEach(card => {
    switch (card.title) {
      case 'Work':
        currentWorkTime.textContent = card.current;
        perviousWorkTime.textContent = card.previous;
        break;
      case 'Play':
        currentPlayTime.textContent = card.current;
        perivousPlayTime.textContent = card.previous;
        break;
      case 'Study':
        currentStudyTime.textContent = card.current;
        perivousStudyTime.textContent = card.previous;
        break;
      case 'Exercise':
        currentExerciseTime.textContent = card.current;
        perivousExerciseTime.textContent = card.previous;
        break;
      case 'Social':
        currentSocialTime.textContent = card.current;
        perivousSocialTime.textContent = card.previous;
        break;
      case 'Self Care':
        currentSelfcareTime.textContent = card.current;
        perivousSelfcareTime.textContent = card.previous;
        break;
    }
  });
}


radios.forEach(radio => {
    radio.addEventListener('change', () => {
    if (radio.checked) {
      updateTimeframe(radio.value);
    }
  });
})


// // On page load, render the default timeframe
// const checkedRadio = document.querySelector('input[name="timeframe"]:checked');
// if (checkedRadio) {
//   updateTimeframe(checkedRadio.value);
// }


/*
function renderCards(cards) {
  cards.forEach(card => {
    const currentEl = document.getElementById(`current${card.title}Time`);
    const previousEl = document.getElementById(`previous${card.title}Time`);
    
    if (currentEl && previousEl) {
      currentEl.textContent = card.current;
      previousEl.textContent = card.previous;
    }
  });
}
  */