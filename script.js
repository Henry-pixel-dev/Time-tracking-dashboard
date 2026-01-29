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
    const key = card.title.replace(/\s/g, '');
    
    const currentEl = document.getElementById(`current${key}Time`);
    const previousEl = document.getElementById(`previous${key}Time`);
    
    if (currentEl && previousEl) {
      currentEl.textContent = card.current;
      previousEl.textContent = card.previous;
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
