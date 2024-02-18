document.getElementById('A1').addEventListener('click',(e)=> {
    console.log(e.target.innerText);
    let classList = document.getElementById(e.target.innerText).classList;
    console.log(classList);
    classList.remove('bg-[#F7F8F8]');
    classList.add('bg-[#1DD100]', 'text-white')
    console.log(classList)
})