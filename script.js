document.getElementById('ageForm').addEventListener('submit',function(e){
    e.preventDefault();

    const d = parseInt(document.getElementById('day').value,10) ;
    const m = parseInt(document.getElementById('month').value,10)
    const y = parseInt(document.getElementById('year').value,10);

    const result = document.getElementById('result');
    result.classList.remove('error');
    result.textContent='';

    if(!d || !m || !y){
        result.classList.add('error');
        result.textContent='Fill all fields.';
        return;

    }

    if(m<1 || m>12 || d<1 || d>31){
        result.classList.add('error')
        result.textContent='Enter a valid day and month';
        return;
    }

    
})

